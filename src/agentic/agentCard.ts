import { COMPANY_INFO } from "../constants/company.ts";
import { AGENTIC_METADATA } from "./constants.ts";
import type { AgentCard } from "./types.ts";

export function buildAgentCard(): AgentCard {
  return {
    name: "Export Biz AI Assistant",
    description:
      "Autonomous agent providing export documentation workflows, compliance guidance, and product demonstrations for Export Biz.",
    version: AGENTIC_METADATA.version,
    url: COMPANY_INFO.website,
    documentationUrl: `${COMPANY_INFO.website}/llms.txt`,
    provider: {
      name: COMPANY_INFO.fullBrandName,
      url: COMPANY_INFO.website,
    },
    capabilities: {
      streaming: false,
      tools: true,
      pushNotifications: false,
    },
    defaultInputModes: ["text"],
    defaultOutputModes: ["text"],
    skills: [
      {
        id: "export-documentation-guidance",
        name: "Export Documentation Guidance",
        description:
          "Assistance with creating and managing Commercial Invoices, Packing Lists, Certificates of Origin, and Bills of Lading.",
      },
      {
        id: "export-demo-booking",
        name: "Demo & Advisory Booking",
        description:
          "Schedule a personalized software demonstration or request a direct sales callback.",
      },
      {
        id: "compliance-support",
        name: "Trade Compliance Support",
        description:
          "Verify mandatory export certification requirements and customs clearance checklists.",
      },
    ],
  };
}

export function buildAgentCardJson(): string {
  return `${JSON.stringify(buildAgentCard(), null, 2)}\n`;
}
