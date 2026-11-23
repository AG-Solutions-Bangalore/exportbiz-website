import { COMPANY_INFO } from "../constants/company.ts";
import type { McpToolDefinition } from "./types.ts";

export const AGENTIC_METADATA = {
  specVersion: "1.0" as const,
  updatedAt: "2026-11-23T05:00:00Z",
  version: "1.0.0",
  protocolVersion: "2024-11-05",
} as const;

export const WEBMCP_TOOLS: Record<string, McpToolDefinition> = {
  requestDemo: {
    name: "requestDemo",
    description:
      "Submits an enquiry to Export Biz to request a free live demo of export documentation, compliance, and trade operations software.",
    page: `${COMPANY_INFO.website}/`,
    inputSchema: {
      type: "object",
      properties: {
        full_name: {
          type: "string",
          description: "Full name of the exporter or business representative requesting the demo.",
        },
        email_id: {
          type: "string",
          format: "email",
          description: "Business email address for sending software demo credentials and schedule.",
        },
        mobile_no: {
          type: "string",
          description: "10-digit mobile phone number for verification and coordination.",
        },
        remarks: {
          type: "string",
          description: "Optional notes regarding shipment volume, products exported, or specific software needs.",
        },
      },
      required: ["full_name", "email_id", "mobile_no"],
    },
  },
  requestCallback: {
    name: "requestCallback",
    description:
      "Requests an immediate callback from the Export Biz export advisory team using a 10-digit phone number.",
    page: `${COMPANY_INFO.website}/#solutions`,
    inputSchema: {
      type: "object",
      properties: {
        mobile_no: {
          type: "string",
          description: "10-digit mobile phone number to receive a direct call from sales.",
        },
      },
      required: ["mobile_no"],
    },
  },
} as const;
