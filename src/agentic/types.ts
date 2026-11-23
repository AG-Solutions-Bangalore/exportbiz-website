/**
 * Agentic Browsing & AI Discovery Types
 * Compliant with:
 * - ARD (Agentic Resource Discovery) Specification (v1.0)
 * - AI Catalog Specification
 * - Model Context Protocol (MCP) Server Card Specification (2024-11-05)
 * - Agent-to-Agent (A2A) Agent Card Specification
 * - WebMCP Specification (W3C Draft / Chromium)
 */

export type StandardDiscoveryType =
  | "application/ai-catalog+json"
  | "application/agent-card+json"
  | "application/a2a-agent-card+json"
  | "application/mcp-server-card+json"
  | "application/agent-skills+zip"
  | "application/agent-skills+gzip"
  | 'text/markdown; profile="urn:air:agent-skills"'
  | "application/ai-registry"
  | "application/ai-registry+json";

export interface CatalogHost {
  displayName: string;
  identifier: string;
  documentationUrl: string;
  logoUrl: string;
}

export interface CatalogEntry {
  identifier: string;
  displayName: string;
  type: StandardDiscoveryType;
  url: string;
  description: string;
  tags: string[];
  capabilities?: string[];
  representativeQueries: string[];
  version?: string;
  updatedAt?: string;
}

export interface AiCatalogManifest {
  specVersion: "1.0";
  host: CatalogHost;
  entries: CatalogEntry[];
}

export interface ArdManifest extends AiCatalogManifest {
  "@context"?: string;
}

export interface McpToolParameter {
  type: "string" | "number" | "boolean" | "object" | "array";
  description: string;
  format?: string;
  enum?: string[];
}

export interface McpToolSchema {
  type: "object";
  properties: Record<string, McpToolParameter>;
  required?: string[];
  [key: string]: unknown;
}

export interface McpToolDefinition {
  name: string;
  description: string;
  inputSchema: McpToolSchema;
  page?: string;
}

export type WebMcpTool = McpToolDefinition;

export interface McpServerCard {
  name: string;
  description: string;
  version: string;
  protocolVersion: string;
  serverInfo: {
    name: string;
    version: string;
  };
  capabilities: {
    tools: Record<string, unknown>;
  };
  tools: McpToolDefinition[];
}

export interface AgentCardSkill {
  id: string;
  name: string;
  description: string;
}

export interface AgentCard {
  name: string;
  description: string;
  version: string;
  url: string;
  documentationUrl: string;
  provider: {
    name: string;
    url: string;
  };
  capabilities: {
    streaming: boolean;
    tools: boolean;
    pushNotifications?: boolean;
  };
  defaultInputModes?: string[];
  defaultOutputModes?: string[];
  skills: AgentCardSkill[];
}
