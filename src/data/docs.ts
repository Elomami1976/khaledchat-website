/**
 * Documentation sections. Each `slug` maps to src/content/docs/<slug>.md.
 * Order here defines the sidebar order.
 */
export const docSections = [
  { slug: "getting-started", title: "Getting Started", description: "Download, install and start your first conversation." },
  { slug: "model-management", title: "Model Management", description: "Understand, download, switch and remove local models." },
  { slug: "working-offline", title: "Working Offline", description: "What needs a connection and what runs locally." },
  { slug: "hardware-compatibility", title: "Hardware Compatibility", description: "How memory, CPU, GPU and storage affect features." },
  { slug: "troubleshooting", title: "Troubleshooting", description: "Solutions for common problems." },
  { slug: "privacy", title: "Privacy", description: "How the application stores and handles your data." },
] as const;

export type DocSlug = (typeof docSections)[number]["slug"];
