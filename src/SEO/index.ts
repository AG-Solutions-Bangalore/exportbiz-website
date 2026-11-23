export { SEOProvider, SiteSeo } from "./Seo";
export type { SeoHelmetContext } from "./Seo";

export {
  absoluteAssetUrl,
  absolutePageUrl,
  formatTitle,
  getSeoForPath,
  normalizePath,
  SEO_PAGES,
  SEO_ROUTES,
  SITE_NAME,
  SITE_URL,
} from "./config";
export type {
  ChangeFrequency,
  ResolvedSeoPage,
  SeoBreadcrumb,
  SeoPageConfig,
} from "./config";

export { buildSchemas, serializeJsonLd } from "./schemas";
export type { SeoSchema } from "./schemas";
