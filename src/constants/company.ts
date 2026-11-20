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
  phone: "+91 98765 43210",
  phoneDisplay: "+91 (Support Helpline)",
  phoneRaw: "+919876543210",

  // Addresses & Locations
  address: {
    line1: "AG Solutions HQ",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    full: "Export Biz by AG Solutions, India",
  },

  // Web & Domain URLs
  website: "https://exportbiz.in",
  websiteDisplay: "exportbiz.in",
  parentWebsite: "https://ag-solutions.in/",
  apiBaseUrl: "http://exportbiz.in/public/api",

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
