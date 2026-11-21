import { COMPANY_INFO } from "../constants/company.ts";

export const SITE_URL = COMPANY_INFO.website.replace(/\/+$/, "");
export const SITE_NAME = COMPANY_INFO.name;

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SeoBreadcrumb {
  readonly name: string;
  readonly path: string;
}

export interface SeoPageConfig {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly noindex?: boolean;
  readonly ogType?: "website" | "article" | "product";
  readonly image?: string;
  readonly imageAlt?: string;
  readonly changeFrequency: ChangeFrequency;
  readonly priority: number;
  readonly breadcrumbs?: readonly SeoBreadcrumb[];
  readonly includeSoftwareSchema?: boolean;
}

export interface ResolvedSeoPage extends SeoPageConfig {
  readonly canonicalPath: string;
  readonly fullTitle: string;
}

export function normalizePath(pathname: string): string {
  const path = (pathname || "/").split("#")[0].split("?")[0] || "/";
  if (path === "/") return "/";
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
}

export function absoluteAssetUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absolutePageUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function formatTitle(title: string): string {
  if (title.includes(SITE_NAME)) return title;
  return COMPANY_INFO.seo.titleTemplate.replace("%s", title);
}

const HOME_PAGE: SeoPageConfig = {
  path: "/",
  title: "Export Documentation & Export Business Management Software",
  description: COMPANY_INFO.seo.description,
  keywords: COMPANY_INFO.seo.keywords,
  changeFrequency: "weekly",
  priority: 1,
  includeSoftwareSchema: true,
};

export const SEO_PAGES: Readonly<Record<string, SeoPageConfig>> = {
  "/": HOME_PAGE,
};

export const SEO_ROUTES = Object.values(SEO_PAGES)
  .filter((page) => !page.noindex)
  .map((page) => page.path);

export function getSeoForPath(pathname: string): ResolvedSeoPage {
  const normalized = normalizePath(pathname);
  const page = SEO_PAGES[normalized];

  if (!page) {
    return {
      ...HOME_PAGE,
      path: normalized,
      canonicalPath: normalized,
      noindex: true,
      fullTitle: formatTitle(HOME_PAGE.title),
    };
  }

  return {
    ...page,
    canonicalPath: page.path,
    fullTitle: formatTitle(page.title),
  };
}
