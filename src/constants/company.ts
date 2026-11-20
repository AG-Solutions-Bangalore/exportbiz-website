/**
 * Global Company & Application Constants
 */
export const COMPANY_INFO = {
  name: "Export Biz",
  tagline: "Simplified Export Documentation & Operations",
  parentCompany: "AG Solutions",
  fullBrandName: "Export Biz by AG Solutions",
  version: "2.4.0",
  
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
  parentWebsite: "https://agsolutions.com",
  apiBaseUrl: "http://exportbiz.in/public/api",

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
} as const;

export type CompanyInfo = typeof COMPANY_INFO;
export default COMPANY_INFO;
