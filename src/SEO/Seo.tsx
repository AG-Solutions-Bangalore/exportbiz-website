import type { ReactNode } from "react";
import {
  Helmet,
  HelmetProvider,
  type HelmetServerState,
} from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../constants/company";
import {
  absoluteAssetUrl,
  absolutePageUrl,
  getSeoForPath,
} from "./config";
import { buildSchemas, serializeJsonLd } from "./schemas";

export interface SeoHelmetContext {
  helmet?: HelmetServerState;
}

interface SEOProviderProps {
  children: ReactNode;
  context?: SeoHelmetContext;
}

export function SEOProvider({ children, context }: SEOProviderProps) {
  return <HelmetProvider context={context}>{children}</HelmetProvider>;
}

export function SiteSeo() {
  const { pathname } = useLocation();
  const seo = getSeoForPath(pathname);
  const canonicalUrl = absolutePageUrl(seo.canonicalPath);
  const ogImage = absoluteAssetUrl(seo.image ?? COMPANY_INFO.seo.ogImage);
  const ogImageAlt = seo.imageAlt ?? COMPANY_INFO.seo.ogImageAlt;
  const robots = seo.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const schemas = buildSchemas(seo, canonicalUrl);

  return (
    <Helmet
      titleTemplate={COMPANY_INFO.seo.titleTemplate}
      prioritizeSeoTags
      htmlAttributes={{ lang: COMPANY_INFO.seo.language }}
    >
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={COMPANY_INFO.fullBrandName} />
      <meta name="publisher" content={COMPANY_INFO.fullBrandName} />
      <meta name="application-name" content={COMPANY_INFO.name} />
      <meta name="theme-color" content={COMPANY_INFO.seo.themeColor} />
      <meta name="color-scheme" content="light" />

      <link rel="canonical" href={canonicalUrl} />
      {!seo.noindex && (
        <>
          <link
            rel="alternate"
            hrefLang={COMPANY_INFO.seo.languageTag}
            href={canonicalUrl}
          />
          <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        </>
      )}

      <meta property="og:type" content={seo.ogType ?? COMPANY_INFO.seo.ogType} />
      <meta property="og:site_name" content={COMPANY_INFO.fullBrandName} />
      <meta property="og:title" content={seo.fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={COMPANY_INFO.seo.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta
        property="og:image:width"
        content={String(COMPANY_INFO.seo.ogImageWidth)}
      />
      <meta
        property="og:image:height"
        content={String(COMPANY_INFO.seo.ogImageHeight)}
      />

      <meta name="twitter:card" content={COMPANY_INFO.seo.twitterCard} />
      <meta name="twitter:title" content={seo.fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {schemas.map((schema, index) => (
        <script key={`${seo.canonicalPath}-${index}`} type="application/ld+json">
          {serializeJsonLd(schema)}
        </script>
      ))}
    </Helmet>
  );
}
