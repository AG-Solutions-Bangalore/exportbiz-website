import { WEBMCP_TOOLS } from "./constants.ts";
import type { McpToolSchema } from "./types.ts";

export interface WebMcpToolRegistration {
  name: string;
  description: string;
  inputSchema: McpToolSchema | Record<string, unknown>;
  page?: string;
  execute?: (args: Record<string, unknown>) => Promise<unknown>;
}

interface WebMcpWindow {
  __WEBMCP__?: {
    version: string;
    tools: WebMcpToolRegistration[];
  };
  webmcp?: {
    tools: WebMcpToolRegistration[];
    registerTool: (tool: WebMcpToolRegistration) => void;
    getTools: () => WebMcpToolRegistration[];
  };
  dispatchEvent?: (event: unknown) => boolean;
  CustomEvent?: new (type: string, eventInitDict?: { detail?: unknown }) => unknown;
}

/**
 * Generates the static JSON payload for /.well-known/webmcp-tools.json
 */
export function buildWebMcpToolsJson(): string {
  return `${JSON.stringify(
    {
      version: "1.0.0",
      protocolVersion: "2024-11-05",
      tools: Object.values(WEBMCP_TOOLS).map((tool) => ({
        name: tool.name,
        description: tool.description,
        inputSchema: tool.inputSchema,
        page: tool.page,
      })),
    },
    null,
    2,
  )}\n`;
}

/**
 * Initializes client-side WebMCP discovery in browser environments.
 * Registers tools in window.__WEBMCP__ and window.webmcp for Lighthouse and AI agents.
 */
export function initWebMcp(): void {
  if (typeof globalThis === "undefined") return;

  const win = globalThis as unknown as WebMcpWindow;
  if (!("window" in globalThis)) return;

  const toolsList: WebMcpToolRegistration[] = Object.values(WEBMCP_TOOLS).map(
    (tool) => ({
      name: tool.name,
      description: tool.description,
      inputSchema: tool.inputSchema,
      page: tool.page,
    }),
  );

  win.__WEBMCP__ = {
    version: "1.0.0",
    tools: toolsList,
  };

  win.webmcp = {
    tools: toolsList,
    registerTool(tool: WebMcpToolRegistration) {
      this.tools.push(tool);
    },
    getTools() {
      return this.tools;
    },
  };

  // Dispatch a custom event so in-browser agents/extensions can detect tools immediately
  try {
    const CustomEventCtor =
      win.CustomEvent ??
      (typeof CustomEvent !== "undefined"
        ? (CustomEvent as unknown as WebMcpWindow["CustomEvent"])
        : undefined);

    if (typeof win.dispatchEvent === "function" && CustomEventCtor) {
      win.dispatchEvent(
        new CustomEventCtor("webmcp:ready", {
          detail: { tools: toolsList },
        }),
      );
    }
  } catch {
    // Ignore environments where CustomEvent might be restricted
  }
}
