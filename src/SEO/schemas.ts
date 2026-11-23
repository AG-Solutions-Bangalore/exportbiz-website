import type {
  BreadcrumbList,
  ListItem,
  Organization,
  SoftwareApplication,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";
import { COMPANY_INFO } from "../constants/company";
import {
  absoluteAssetUrl,
  SITE_URL,
  type ResolvedSeoPage,
} from "./config";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

export type SeoSchema =
  | WithContext<Organization>
  | WithContext<WebSite>
  | WithContext<WebPage>
  | WithContext<SoftwareApplication>
  | WithContext<BreadcrumbList>;

export function serializeJsonLd(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function buildOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: COMPANY_INFO.fullBrandName,
    alternateName: COMPANY_INFO.name,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteAssetUrl(COMPANY_INFO.logo),
    },
    image: absoluteAssetUrl(COMPANY_INFO.seo.ogImage),
    description: COMPANY_INFO.seo.description,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.line1,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phoneRaw,
      contactType: "customer support",
      email: COMPANY_INFO.email,
      areaServed: "IN",
    },
    sameAs: Object.values(COMPANY_INFO.socialLinks),
    parentOrganization: {
      "@type": "Organization",
      name: COMPANY_INFO.parentCompany,
      url: COMPANY_INFO.parentWebsite,
    },
  };
}

export function buildWebsiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: COMPANY_INFO.fullBrandName,
    alternateName: COMPANY_INFO.name,
    url: SITE_URL,
    description: COMPANY_INFO.seo.description,
    inLanguage: COMPANY_INFO.seo.languageTag,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildSoftwareSchema(): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SOFTWARE_ID,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.fullBrandName,
    url: SITE_URL,
    description: COMPANY_INFO.seo.description,
    applicationCategory: COMPANY_INFO.seo.applicationCategory,
    applicationSubCategory: COMPANY_INFO.seo.applicationSubCategory,
    operatingSystem: COMPANY_INFO.seo.operatingSystem,
    softwareVersion: COMPANY_INFO.version,
    inLanguage: COMPANY_INFO.seo.languageTag,
    image: absoluteAssetUrl(COMPANY_INFO.seo.ogImage),
    screenshot: absoluteAssetUrl(COMPANY_INFO.seo.ogImage),
    featureList: [
      "Export documentation management",
      "Certificate and compliance tracking",
      "Export costing and product pricing",
      "Customer outstanding and receivables",
      "Export incentives tracking",
      "Reports and analytics",
      "Multi-company management",
      "Business files and document sharing",
    ],
    publisher: { "@id": ORGANIZATION_ID },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free Live Demo & Trial",
    },
  };
}

export function buildWebPageSchema(
  page: ResolvedSeoPage,
  canonicalUrl: string,
): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: page.fullTitle,
    description: page.description,
    inLanguage: COMPANY_INFO.seo.languageTag,
    isPartOf: { "@id": WEBSITE_ID },
    about: {
      "@id": page.includeSoftwareSchema ? SOFTWARE_ID : ORGANIZATION_ID,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteAssetUrl(page.image ?? COMPANY_INFO.seo.ogImage),
    },
  };
}

export function buildBreadcrumbSchema(
  page: ResolvedSeoPage,
): WithContext<BreadcrumbList> | null {
  if (!page.breadcrumbs?.length) return null;

  const items: ListItem[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    ...page.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem" as const,
      position: index + 2,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path.startsWith("/") ? crumb.path : `/${crumb.path}`}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${page.canonicalPath}#breadcrumb`,
    itemListElement: items,
  };
}

export function buildSchemas(
  page: ResolvedSeoPage,
  canonicalUrl: string,
): SeoSchema[] {
  const schemas: SeoSchema[] = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
    buildWebPageSchema(page, canonicalUrl),
  ];

  if (page.includeSoftwareSchema) {
    schemas.push(buildSoftwareSchema());
  }

  const breadcrumbs = buildBreadcrumbSchema(page);
  if (breadcrumbs) {
    schemas.push(breadcrumbs);
  }

  return schemas;
}
