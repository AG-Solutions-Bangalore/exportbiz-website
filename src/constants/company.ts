/**
 * Global Company & Application Constants
 */
export const COMPANY_INFO = {
  name: "Export Biz",
  tagline: "Simplified Export Documentation & Operations",
  parentCompany: "AG Solutions",
  fullBrandName: "Export Biz by AG Solutions",
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
  apiBaseUrl: "http://exportbiz.in/public/api",
  demoUrl: "https://demo.exportbiz.in/signup",

  // Brand Assets
  logo: "/logo_transparent.webp",
  logoAlt: "Export Biz by AG Solutions logo",

  // SEO Defaults
  seo: {
    language: "en",
    languageTag: "en-IN",
    locale: "en_IN",
    titleTemplate: "%s | Export Biz",
    defaultTitle:
      "Export Documentation & Export Business Management Software | Export Biz",
    description:
      "Export documentation & business management software for exporters. Manage shipping documents, compliance, costing, incentives & receivables in one workspace.",
    keywords: [
      "export documentation software",
      "export management software",
      "export business software",
      "export documentation",
      "shipping documents software",
      "export invoice software",
      "packing list software",
      "bill of lading software",
      "certificate of origin",
      "export compliance software",
      "export costing software",
      "export incentives",
      "export ERP",
      "multi-company export software",
      "India export software",
    ],
    ogImage: "/hero_image.png",
    ogImageAlt:
      "Export Biz export documentation and business management workspace dashboard",
    ogImageWidth: 1920,
    ogImageHeight: 819,
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
    { key: "facebook", label: "Facebook" },
    { key: "instagram", label: "Instagram" },
    { key: "linkedin", label: "LinkedIn" },
  ],
} as const;

export type CompanyInfo = typeof COMPANY_INFO;
export default COMPANY_INFO;
