import { mkdirSync, writeFileSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { gzipSync, brotliCompressSync } from "node:zlib";
import type { Plugin, ResolvedConfig } from "vite";
import { absolutePageUrl, SEO_PAGES, SITE_URL } from "./config.ts";

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

        next();
      });
    },
    closeBundle() {
      if (isSsrBuild || !outDir) return;

      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, "robots.txt"), buildRobotsTxt(), "utf8");
      writeFileSync(resolve(outDir, "sitemap.xml"), buildSitemapXml(), "utf8");

      compressDirectory(outDir);

      const global = globalThis as { Bun?: unknown; __EXPORTBIZ_PRERENDER_OK__?: boolean };
      const isBun = typeof global.Bun !== "undefined";

      if (isBun && !isWatchMode && !buildFailed && global.__EXPORTBIZ_PRERENDER_OK__) {
        setTimeout(() => process.exit(process.exitCode ?? 0), 0);
      }
    },
  };
}
