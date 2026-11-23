import { mkdirSync, writeFileSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { gzipSync, brotliCompressSync } from "node:zlib";
import type { Plugin, ResolvedConfig } from "vite";
import {
  buildAiCatalogJson,
  buildArdManifestJson,
  buildMcpServerCardJson,
  buildAgentCardJson,
  buildLlmsTxt,
  buildLlmsFullTxt,
  buildWebMcpToolsJson,
} from "../agentic/index.ts";
import {
  absolutePageUrl,
  SEO_PAGES,
  SITE_URL,
} from "./config.ts";

function compressDirectory(dir: string): void {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      compressDirectory(fullPath);
    } else if (
      /\.(html|js|css|svg|json|xml|txt)$/i.test(entry.name) &&
      !entry.name.endsWith(".gz") &&
      !entry.name.endsWith(".br")
    ) {
      const content = readFileSync(fullPath);
      if (content.length >= 256) {
        const gz = gzipSync(content, { level: 9 });
        writeFileSync(`${fullPath}.gz`, gz);
        const br = brotliCompressSync(content);
        writeFileSync(`${fullPath}.br`, br);
      }
    }
  }
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildRobotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /public/api/",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

function buildSitemapXml(): string {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = Object.values(SEO_PAGES)
    .filter((page) => !page.noindex)
    .map((page) =>
      [
        "  <url>",
        `    <loc>${escapeXml(absolutePageUrl(page.path))}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${page.changeFrequency}</changefreq>`,
        `    <priority>${page.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n"),
    )
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

export function seoSiteFilesPlugin(): Plugin {
  let outDir: string | null = null;
  let isSsrBuild = false;
  let isWatchMode = false;
  let buildFailed = false;

  return {
    name: "exportbiz-seo-site-files",
    configResolved(config: ResolvedConfig) {
      outDir = resolve(config.root, config.build.outDir);
      isSsrBuild = Boolean(config.build.ssr);
      isWatchMode = Boolean(config.build.watch);
    },
    buildEnd(error) {
      if (error) buildFailed = true;
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = req.url?.split("?")[0];

        if (pathname === "/robots.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(buildRobotsTxt());
          return;
        }

        if (pathname === "/sitemap.xml") {
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          res.end(buildSitemapXml());
          return;
        }

        if (pathname === "/llms.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(buildLlmsTxt());
          return;
        }

        if (pathname === "/llms-full.txt") {
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end(buildLlmsFullTxt());
          return;
        }

        if (pathname === "/ard.json" || pathname === "/.well-known/ard.json") {
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(buildArdManifestJson());
          return;
        }

        if (
          pathname === "/ai-catalog.json" ||
          pathname === "/.well-known/ai-catalog.json"
        ) {
          res.setHeader(
            "Content-Type",
            "application/ai-catalog+json; charset=utf-8",
          );
          res.end(buildAiCatalogJson());
          return;
        }

        if (pathname === "/.well-known/mcp-server-card.json") {
          res.setHeader(
            "Content-Type",
            "application/mcp-server-card+json; charset=utf-8",
          );
          res.end(buildMcpServerCardJson());
          return;
        }

        if (pathname === "/.well-known/agent-card.json") {
          res.setHeader(
            "Content-Type",
            "application/agent-card+json; charset=utf-8",
          );
          res.end(buildAgentCardJson());
          return;
        }

        if (pathname === "/.well-known/webmcp-tools.json") {
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(buildWebMcpToolsJson());
          return;
        }

        next();
      });
    },
    closeBundle() {
      if (isSsrBuild || !outDir) return;

      mkdirSync(outDir, { recursive: true });
      const wellKnownDir = resolve(outDir, ".well-known");
      mkdirSync(wellKnownDir, { recursive: true });

      // Core indexing
      writeFileSync(resolve(outDir, "robots.txt"), buildRobotsTxt(), "utf8");
      writeFileSync(resolve(outDir, "sitemap.xml"), buildSitemapXml(), "utf8");
      writeFileSync(resolve(outDir, "llms.txt"), buildLlmsTxt(), "utf8");
      writeFileSync(resolve(outDir, "llms-full.txt"), buildLlmsFullTxt(), "utf8");

      // Root discovery manifests
      writeFileSync(resolve(outDir, "ard.json"), buildArdManifestJson(), "utf8");
      writeFileSync(
        resolve(outDir, "ai-catalog.json"),
        buildAiCatalogJson(),
        "utf8",
      );

      // .well-known agentic discovery manifests
      writeFileSync(
        resolve(wellKnownDir, "ard.json"),
        buildArdManifestJson(),
        "utf8",
      );
      writeFileSync(
        resolve(wellKnownDir, "ai-catalog.json"),
        buildAiCatalogJson(),
        "utf8",
      );
      writeFileSync(
        resolve(wellKnownDir, "mcp-server-card.json"),
        buildMcpServerCardJson(),
        "utf8",
      );
      writeFileSync(
        resolve(wellKnownDir, "agent-card.json"),
        buildAgentCardJson(),
        "utf8",
      );
      writeFileSync(
        resolve(wellKnownDir, "webmcp-tools.json"),
        buildWebMcpToolsJson(),
        "utf8",
      );

      compressDirectory(outDir);

      const global = globalThis as { Bun?: unknown; __EXPORTBIZ_PRERENDER_OK__?: boolean };
      const isBun = typeof global.Bun !== "undefined";

      if (isBun && !isWatchMode && !buildFailed && global.__EXPORTBIZ_PRERENDER_OK__) {
        setTimeout(() => process.exit(process.exitCode ?? 0), 0);
      }
    },
  };
}
