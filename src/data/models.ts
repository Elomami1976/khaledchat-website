/**
 * The AI models in Khaled Chat's built-in catalog (catalog/catalog.json in the desktop repository). Nothing is
 * downloaded until the person confirms it in the app. "Fits" is a rough guide only: the app's own hardware check
 * decides, and models that won't fit are shown but can't be picked.
 * `tested` = verified end to end in Khaled Chat on real hardware.
 */
export interface CatalogModel { name: string; sizeGB: number; fits: string; license: string; tested?: boolean }

export const chatModels: CatalogModel[] = [
  { name: "Qwen3 1.7B", sizeGB: 1.83, fits: "8 GB RAM, older computers", license: "Apache-2.0", tested: true },
  { name: "Gemma 4 E2B", sizeGB: 3.35, fits: "8 GB RAM", license: "Apache-2.0" },
  { name: "Gemma 4 E4B Compact", sizeGB: 3.86, fits: "8–16 GB RAM", license: "Apache-2.0" },
  { name: "Gemma 4 E4B", sizeGB: 5.15, fits: "16 GB RAM", license: "Apache-2.0" },
  { name: "Gemma 4 26B Compact", sizeGB: 9.66, fits: "16 GB+ RAM or a graphics card", license: "Apache-2.0" },
  { name: "gpt-oss 20B", sizeGB: 12.11, fits: "16–24 GB+ RAM or a graphics card", license: "Apache-2.0" },
  { name: "Gemma 4 26B", sizeGB: 14.44, fits: "24 GB+ RAM or a strong graphics card", license: "Apache-2.0" },
  { name: "gpt-oss 120B", sizeGB: 63.39, fits: "High-end workstations", license: "Apache-2.0" },
];

/** optional extras, each downloaded only when the person installs that feature */
export const extraModels: { feature: string; models: string; license: string }[] = [
  { feature: "Image understanding", models: "Qwen3-VL 2B or Qwen3-VL 4B (chosen to fit)", license: "Apache-2.0" },
  { feature: "Dictation", models: "Whisper speech-to-text (ONNX)", license: "MIT (original model)" },
];
