import { COMPANY_INFO } from "../constants/company.ts";
import { SEO_PAGES, SITE_URL } from "../SEO/config.ts";

export function buildLlmsTxt(): string {
  const pages = Object.values(SEO_PAGES)
    .filter((page) => !page.noindex)
    .map(
      (page) =>
        `- [${page.title}](${SITE_URL}${page.path === "/" ? "/" : page.path.endsWith("/") ? page.path : `${page.path}/`}): ${page.description}`,
    )
    .join("\n");

  return [
    `# ${COMPANY_INFO.name}`,
    "",
    `> ${COMPANY_INFO.fullBrandName}: ${COMPANY_INFO.tagline}. ${COMPANY_INFO.seo.description}`,
    "",
    "Export Biz is an intelligent web workspace for export documentation, compliance certificates, export product costing, customer receivables, government export incentives, and multi-company trade operations.",
    "",
    "## Pages",
    "",
    pages,
    "",
    "## Core capabilities",
    "",
    `- [Export Documentation](${SITE_URL}/#documents): Create and manage Commercial Invoices, Packing Lists, Certificates of Origin, Bills of Lading, and custom shipment documents.`,
    `- [Compliance Support](${SITE_URL}/#why-us): Track customer-specific certificates, compliance requirements, and inspection certifications.`,
    `- [Costing & Pricing](${SITE_URL}/#features): Real-time export costing templates, currency conversion, and container profitability calculations.`,
    `- [Receivables & Incentives](${SITE_URL}/#features): Track foreign currency receivables, overdue invoices, and government export incentive claims.`,
    `- [Multi-Company Operations](${SITE_URL}/#features): Manage multiple export entities under a single, unified enterprise dashboard.`,
    "",
    "## Getting started & contact",
    "",
    `- [Free live demo and trial](${COMPANY_INFO.demoUrl}): Request a demo or create a trial account.`,
    `- [Contact sales](${SITE_URL}/#contact): Send software enquiry or request immediate callback.`,
    `- [Sales email](mailto:${COMPANY_INFO.salesEmail})`,
    `- [Support email](mailto:${COMPANY_INFO.supportEmail})`,
    `- [Direct phone](tel:${COMPANY_INFO.phoneRaw}): ${COMPANY_INFO.phoneDisplay}`,
    "",
    "## Autonomous agent resources",
    "",
    `- [AI Catalog](${SITE_URL}/.well-known/ai-catalog.json): Machine-readable catalog of agent resources.`,
    `- [ARD Manifest](${SITE_URL}/.well-known/ard.json): Agentic Resource Discovery manifest.`,
    `- [MCP Server Card](${SITE_URL}/.well-known/mcp-server-card.json): Model Context Protocol server capabilities and tools.`,
    `- [Agent Card](${SITE_URL}/.well-known/agent-card.json): A2A Agent Card for agent-to-agent integration.`,
    `- [Full Documentation](${SITE_URL}/llms-full.txt): Comprehensive plain-text documentation.`,
    `- [Sitemap](${SITE_URL}/sitemap.xml): Complete indexable URL structure.`,
    "",
    "## Organization",
    "",
    `- [AG Solutions](${COMPANY_INFO.parentWebsite}): Parent company and technology partner.`,
    `- Address: ${COMPANY_INFO.address.full}`,
    `- [LinkedIn](${COMPANY_INFO.socialLinks.linkedin})`,
    `- [Instagram](${COMPANY_INFO.socialLinks.instagram})`,
    `- [Facebook](${COMPANY_INFO.socialLinks.facebook})`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt(): string {
  const shortText = buildLlmsTxt();

  return [
    shortText,
    "## Detailed software workflows",
    "",
    "### 1. Export Documentation Workflow",
    "Export Biz provides automated generation of international trade documents:",
    "- Commercial Invoice: Pre-filled buyer details, HS codes, incoterms, payment terms, currency values.",
    "- Packing List: Package numbers, gross weights, net weights, dimensions, package types.",
    "- Certificate of Origin: Non-preferential and preferential certificate templates.",
    "- Bill of Lading (B/L) Instructions: Shipping line instructions, container numbers, seal numbers.",
    "- Inspection & Custom Certificates: Required by importing country authorities.",
    "",
    "### 2. Export Compliance Verification",
    "Each export order includes a verification checklist ensuring that mandatory certificates are attached before shipment dispatch. This eliminates shipment delays, demurrage charges, and customs penalties.",
    "",
    "### 3. Financial Receivables & Export Incentives",
    "Exporters can monitor billing in USD, EUR, GBP, and INR. The system tracks payment terms (e.g. 30 days DA, LC at sight) and flags overdue receivables. It also calculates expected RoDTEP, RoSCTL, or duty drawback incentives.",
    "",
    "### 4. WebMCP Tool Calling Guide for AI Agents",
    "Autonomous agents can execute the following actions on behalf of users:",
    "1. `requestDemo`: Submit name, email, phone, and shipment requirements to schedule a walkthrough.",
    "2. `requestCallback`: Provide a 10-digit phone number for an instant sales callback.",
    "",
  ].join("\n");
}
