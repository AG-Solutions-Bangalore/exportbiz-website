import { renderToString } from "react-dom/server";
import { parse } from "node-html-parser";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { COMPANY_INFO } from "../constants/company";
import { routes } from "../routes/routes";
import { normalizePath, SEO_ROUTES } from "./config";
import { SEOProvider, type SeoHelmetContext } from "./Seo";

interface HeadElement {
  type: string;
  props: Record<string, string>;
  children?: string;
}

interface PrerenderArgs {
  url: string;
}

type PrerenderGlobal = typeof globalThis & {
  __EXPORTBIZ_PRERENDER_OK__?: boolean;
};

function toHeadElements(markup: string): HeadElement[] {
  if (!markup.trim()) return [];

  return parse(markup)
    .querySelectorAll("meta, link, script")
    .map((node) => {
      const type = node.rawTagName.toLowerCase();
      const children = type === "script" ? node.textContent || undefined : undefined;

      return {
        type,
        props: { ...node.attributes },
        ...(children ? { children } : {}),
      };
    });
}

function extractTitle(markup: string): string {
  if (!markup.trim()) return "";
  return parse(markup).querySelector("title")?.textContent ?? "";
}

export async function prerender({ url }: PrerenderArgs) {
  const global = globalThis as PrerenderGlobal;
  global.__EXPORTBIZ_PRERENDER_OK__ = false;

  const path = normalizePath(url);
  const helmetContext: SeoHelmetContext = {};
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
  });

  const html = renderToString(
    <SEOProvider context={helmetContext}>
      <RouterProvider router={router} />
    </SEOProvider>,
  );

  const helmet = helmetContext.helmet;
  const elements = [
    ...toHeadElements(helmet?.priority.toString() ?? ""),
    ...toHeadElements(helmet?.meta.toString() ?? ""),
    ...toHeadElements(helmet?.link.toString() ?? ""),
    ...toHeadElements(helmet?.script.toString() ?? ""),
  ];

  global.__EXPORTBIZ_PRERENDER_OK__ = true;

  return {
    html,
    links: new Set(SEO_ROUTES),
    head: {
      lang: COMPANY_INFO.seo.language,
      title: extractTitle(helmet?.title.toString() ?? ""),
      elements: new Set(elements),
    },
  };
}
