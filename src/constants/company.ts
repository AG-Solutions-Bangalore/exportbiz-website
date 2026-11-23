/**
 * Global Company & Application Constants
 */
export const COMPANY_INFO = {
  name: "Export Biz",
  tagline: "Simplified Export Documentation & Operations",
  parentCompany: "AG Solutions",
  fullBrandName: "Export Biz by AG Solutions",
  author: "Export Biz",
  publisher: "Export Biz",
  version: "1.0.0",

  // Contact & Communication
  email: "info@exportbiz.in",
  salesEmail: "sales@exportbiz.in",
  supportEmail: "support@exportbiz.in",
  phone: "+91 88671 71060",
  phoneDisplay: "+91 88671 71060",
  phoneRaw: "+918867171060",

  // Addresses & Locations
  address: {
    line1: "Jayanagara 9th Block",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560069",
    country: "India",
    countryCode: "IN",
    full: "Jayanagara 9th Block, Bengaluru, 560069",
    mapUrl: "https://www.google.com/maps/place/AG+Solutions/@12.9207136,77.5923704,17z/",
  },

  // Web & Domain URLs
  website: "https://exportbiz.in",
  websiteDisplay: "exportbiz.in",
  parentWebsite: "https://ag-solutions.in/",
  apiBaseUrl: "https://exportbiz.in/public/api",
  imageBaseUrl: "https://exportbiz.in/public/assets/images/web_images",
  demoUrl: "https://demo.exportbiz.in/signup",

  // Brand Assets
  logo: "https://exportbiz.in/public/assets/images/web_images/logo_transparent.webp",
  logoAlt: "Export Biz – Export Business Management Platform",

  // SEO Defaults
  seo: {
    language: "en",
    languageTag: "en-IN",
    locale: "en_IN",
    titleTemplate: "%s | Export Biz",
    defaultTitle: "Export Biz | Export Documentation & Business Management Workspace",
    description:
      "Simplify your export business with Export Biz. Manage export documentation, streamline trade processes, organize compliance and manage your international trade operations in one platform.",
    keywords: [
      "export documentation software",
      "export management software",
      "export business platform",
      "export-import management",
      "international trade software",
      "export documentation management",
      "EXIM software",
      "export compliance",
      "global trade management",
      "export business solutions",
    ],
    ogImage: "https://exportbiz.in/public/assets/images/web_images/hero_image.webp",
    ogImageAlt: "Export Biz Workspace Dashboard – Export Management Platform",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogType: "website",
    twitterCard: "summary_large_image",
    themeColor: "#0952F7",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Export Documentation Software",
    operatingSystem: "Web",
    areaServed: "Worldwide",
  },

  // Social Links
  socialLinks: {
    facebook: "https://www.facebook.com/profile.php?id=61596657025110",
    instagram: "https://www.instagram.com/exportbiz_documentations/",
    linkedin: "https://www.linkedin.com/in/export-biz-28637144b/",
  },
  socialProfiles: [
    { key: "facebook", label: "Facebook", title: "Follow Export Biz on Facebook" },
    { key: "instagram", label: "Instagram", title: "Follow Export Biz on Instagram" },
    { key: "linkedin", label: "LinkedIn", title: "Connect with Export Biz on LinkedIn" },
  ],
} as const;

export type CompanyInfo = typeof COMPANY_INFO;
export default COMPANY_INFO;
