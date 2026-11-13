import type { LucideIcon } from "lucide-react";
import {
  MessageSquare, Cpu, FileText, Code2, Image, Search, UserRound, ShieldCheck,
} from "lucide-react";

/**
 * Feature availability. Update `status` only when a capability has been
 * verified in a released build.
 *  - available:   shipped in a public release
 *  - development: actively being built
 *  - planned:     on the roadmap, not yet started
 */
export type FeatureStatus = "available" | "development" | "planned";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: FeatureStatus;
}

export const statusLabel: Record<FeatureStatus, string> = {
  available: "Available",
  development: "In development",
  planned: "Planned",
};

export const features: Feature[] = [
  { id: "chat", title: "Local AI Chat", description: "Converse with AI models installed on your own computer.", icon: MessageSquare, status: "development" },
  { id: "models", title: "Smart Model Selection", description: "Detects RAM, CPU, GPU, VRAM, operating system and free storage to recommend suitable models.", icon: Cpu, status: "development" },
  { id: "documents", title: "Document Assistance", description: "Work with supported local documents, including PDF and text-based files.", icon: FileText, status: "planned" },
  { id: "coding", title: "Coding Assistant", description: "Write, understand and improve code with compatible local models.", icon: Code2, status: "planned" },
  { id: "vision", title: "Image Understanding", description: "Analyze images when your device supports a suitable vision model.", icon: Image, status: "planned" },
  { id: "search", title: "Local Search", description: "Find information within your indexed local files.", icon: Search, status: "planned" },
  { id: "personal", title: "Personalization", description: "Your first name is saved locally and used naturally in greetings.", icon: UserRound, status: "development" },
  { id: "hardware", title: "Hardware-Aware Features", description: "Identifies which capabilities your computer can safely support, and explains the rest.", icon: ShieldCheck, status: "development" },
];
