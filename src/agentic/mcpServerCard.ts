import { AGENTIC_METADATA, WEBMCP_TOOLS } from "./constants.ts";
import type { McpServerCard } from "./types.ts";

export function buildMcpServerCard(): McpServerCard {
  return {
    name: "Export Biz WebMCP Server",
    description:
      "Model Context Protocol tools exposed by Export Biz enabling AI agents to schedule software demonstrations and request trade consultancy callbacks.",
    version: AGENTIC_METADATA.version,
    protocolVersion: AGENTIC_METADATA.protocolVersion,
    serverInfo: {
      name: "exportbiz-mcp-server",
      version: AGENTIC_METADATA.version,
    },
    capabilities: {
      tools: {},
    },
    tools: Object.values(WEBMCP_TOOLS).map((tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
      page: tool.page,
    })),
  };
}

export function buildMcpServerCardJson(): string {
  return `${JSON.stringify(buildMcpServerCard(), null, 2)}\n`;
}
