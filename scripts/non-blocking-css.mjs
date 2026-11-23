import { readFileSync, writeFileSync } from "node:fs";

const htmlPath = "dist/index.html";
let html = readFileSync(htmlPath, "utf-8");
const cssLinks = html.match(/<link[^>]*rel=["']stylesheet["'][^>]*\/?>/g) || [];

for (const link of cssLinks) {
  const hrefMatch = link.match(/href=["']([^"']+)["']/);
  const crossoriginMatch = link.match(/crossorigin=["']([^"']+)["']/);
  if (!hrefMatch) continue;
  const href = hrefMatch[1];
  const crossorigin = crossoriginMatch ? ` crossorigin="${crossoriginMatch[1]}"` : "";
  const nonBlockingLink = `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"${crossorigin} />`;
  html = html.replace(link, nonBlockingLink);
}

writeFileSync(htmlPath, html, "utf-8");
console.log(`Non-blocking CSS: transformed ${cssLinks.length} stylesheet link(s)`);
