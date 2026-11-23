import { fileURLToPath } from "node:url";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { SEO_ROUTES } from "./src/SEO/config.ts";
import { seoSiteFilesPlugin } from "./src/SEO/vite.ts";

const prerenderScript = fileURLToPath(
  new URL("./src/SEO/prerender.tsx", import.meta.url),
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    seoSiteFilesPlugin(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript,
      additionalPrerenderRoutes: [...SEO_ROUTES],
    }),
  ],
  build: {
    cssCodeSplit: true,
  },
});
