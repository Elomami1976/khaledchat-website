export interface FaqItem { q: string; a: string }

// Keep answers aligned with src/data/features.ts and src/data/releases.ts.
export const faq: FaqItem[] = [
  { q: "What is Khaled Chat?", a: "Khaled Chat is an upcoming, privacy-focused desktop AI assistant designed to run AI models locally on your computer. It is currently in development and has not been released yet." },
  { q: "Does Khaled Chat work without internet?", a: "An internet connection is needed to download the application and an initial AI model. Once a compatible model is installed, supported local AI features are designed to work offline." },
  { q: "Is Khaled Chat free?", a: "Khaled Chat is being developed using the open-source Hob project. No subscriptions or in-app payments are planned. Khaled Chat's own source code is not publicly available yet; we will link the official repository here once it is published." },
  { q: "Does Khaled Chat require an account?", a: "No. Khaled Chat is being designed to work without registration or an online account." },
  { q: "How does Khaled Chat choose an AI model?", a: "Khaled Chat is being designed to check your hardware, such as memory, processor, graphics card and free storage, and recommend models suited to those resources." },
  { q: "Can I install my own AI models?", a: "Importing local model files is a planned capability. This answer will be updated once it is available in a release." },
  { q: "Does Khaled Chat support older computers?", a: "Khaled Chat aims to recommend lighter models for computers with fewer resources. Performance and available features depend on your hardware, and some older computers may not be able to run any model comfortably." },
  { q: "Why are some features unavailable on my device?", a: "Some capabilities, such as image analysis, need more memory or a specific type of model. Khaled Chat is designed to explain why a feature is unavailable instead of letting it fail unexpectedly." },
  { q: "Are my conversations stored locally?", a: "That is the plan. Khaled Chat is designed to store conversations and preferences on your device rather than on a remote server." },
  { q: "Which operating systems are supported?", a: "Khaled Chat is being prepared for Windows, macOS and Linux. No version has been released yet; the Download page will list each platform once a release is published." },
  { q: "Can I use Khaled Chat for coding?", a: "A coding assistant using compatible local models is planned. Its status is shown on the Features page." },
  { q: "How do I update the application?", a: "There is nothing to update yet, because Khaled Chat has not been released. Update instructions will be documented with the first public release, and release notes will appear in the Changelog." },
];
