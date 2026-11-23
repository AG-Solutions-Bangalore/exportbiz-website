import { COMPANY_INFO } from "../constants/company.ts";
import { AGENTIC_METADATA, WEBMCP_TOOLS } from "./constants.ts";
import type { AiCatalogManifest, ArdManifest } from "./types.ts";

const SITE_HOST = new URL(COMPANY_INFO.website).host;

/**
 * Builds the strictly compliant ai-catalog.json manifest.
 * Conforms to AI Catalog / ARD specification:
 * - NO extraneous root properties (e.g. no @context at root)
 * - Uses only standard discovery media types:
 *   - application/mcp-server-card+json
 *   - application/agent-card+json
 * - All entries contain required identifiers, descriptions, tags, and 2-5 representative queries.
 */
export function buildAiCatalog(): AiCatalogManifest {
  return {
    specVersion: AGENTIC_METADATA.specVersion,
    host: {
      displayName: COMPANY_INFO.name,
      identifier: `did:web:${SITE_HOST}`,
      documentationUrl: `${COMPANY_INFO.website}/llms.txt`,
      logoUrl: `${COMPANY_INFO.website}/public/assets/images/web_images/logo_transparent.webp`,
    },
    entries: [
      {
        identifier: `urn:air:${SITE_HOST}:mcp:export-documentation`,
        displayName: "Export Biz WebMCP Server",
        type: "application/mcp-server-card+json",
        url: `${COMPANY_INFO.website}/.well-known/mcp-server-card.json`,
        description:
          "Model Context Protocol server exposing tools for browser and autonomous AI agents to request demos and manage export documentation enquiries.",
        tags: [
          "export",
          "export documentation",
          "compliance",
          "exim",
          "trade operations",
          "tools",
          "mcp",
        ],
        capabilities: Object.values(WEBMCP_TOOLS).map((tool) => tool.name),
        representativeQueries: [
          "request a demo of Export Biz export documentation software",
          "ask Export Biz sales to call me about export software",
          "find software to manage export documentation and compliance",
        ],
        version: AGENTIC_METADATA.version,
        updatedAt: AGENTIC_METADATA.updatedAt,
      },
      {
        identifier: `urn:air:${SITE_HOST}:agent:assistant`,
        displayName: "Export Biz AI Assistant",
        type: "application/agent-card+json",
        url: `${COMPANY_INFO.website}/.well-known/agent-card.json`,
        description:
          "Autonomous agent card for Export Biz assistant providing export documentation guidance, EXIM compliance checklists, and software consultations.",
        tags: [
          "export",
          "documentation",
          "compliance",
          "assistant",
          "exim platform",
        ],
        capabilities: [
          "export-documentation-guidance",
          "export-demo-booking",
          "compliance-support",
        ],
        representativeQueries: [
          "how to automate commercial invoice and packing list generation",
          "export documentation software features and pricing",
          "export incentives tracking and customer receivables management",
        ],
        version: AGENTIC_METADATA.version,
        updatedAt: AGENTIC_METADATA.updatedAt,
      },
    ],
  };
}

export function buildAiCatalogJson(): string {
  return `${JSON.stringify(buildAiCatalog(), null, 2)}\n`;
}

/**
 * Builds the ARD (Agentic Resource Discovery) manifest.
 */
export function buildArdManifest(): ArdManifest {
  return {
    ...buildAiCatalog(),
  };
}

export function buildArdManifestJson(): string {
  return `${JSON.stringify(buildArdManifest(), null, 2)}\n`;
}
