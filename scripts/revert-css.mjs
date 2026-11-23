import { readFileSync, writeFileSync } from "node:fs";

const htmlPath = "dist/index.html";
let html = readFileSync(htmlPath, "utf-8");
// Revert non-blocking CSS back to regular stylesheet links
html = html.replace(
  /<link rel="stylesheet" href="([^"]+)" media="print" onload="this\.media='all'"(\s+crossorigin="[^"]+")?\s*\/>/g,
  (match, href, crossorigin = '') => {
    return `<link rel="stylesheet" href="${href}"${crossorigin} />`;
  }
);
writeFileSync(htmlPath, html, "utf-8");
console.log(`Reverted non-blocking CSS to regular stylesheet links`);
