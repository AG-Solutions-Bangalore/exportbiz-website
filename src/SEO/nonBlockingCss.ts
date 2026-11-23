import type { Plugin } from "vite";

export function nonBlockingCssPlugin(): Plugin {
  return {
    name: "exportbiz-non-blocking-css",
    writeBundle(_, bundle) {
      const htmlFile: any = bundle["index.html"];
      if (!htmlFile) return;

      let source = htmlFile.source;
      if (Buffer.isBuffer(source)) {
        source = source.toString("utf-8");
      }
      if (typeof source !== "string") return;

      const cssLinks = source.match(/<link[^>]*rel=["']stylesheet["'][^>]*\/?>/g) || [];
      if (cssLinks.length === 0) return;

      let html = source;
      for (const link of cssLinks) {
        const hrefMatch = link.match(/href=["']([^"']+)["']/);
        const crossoriginMatch = link.match(/crossorigin=["']([^"']+)["']/);
        if (!hrefMatch) continue;
        const href = hrefMatch[1];
        const crossorigin = crossoriginMatch ? ` crossorigin="${crossoriginMatch[1]}"` : "";
        const nonBlockingLink = `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"${crossorigin} />`;
        html = html.replace(link, nonBlockingLink);
      }

      htmlFile.source = html;
    },
  };
}
