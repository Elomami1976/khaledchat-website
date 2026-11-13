export interface FaqItem { q: string; a: string }

// Keep answers aligned with src/data/features.ts and src/data/releases.ts.
export const faq: FaqItem[] = [
  { q: "What is Khaled Chat?", a: "Khaled Chat is a privacy-focused desktop AI assistant that runs AI models locally on your computer. It is built upon the open-source Hob project." },
  { q: "Does Khaled Chat work without internet?", a: "An internet connection is needed to download the application and an initial AI model. Once a compatible model is installed, supported local AI features are designed to work offline." },
  { q: "Is Khaled Chat free?", a: "Khaled Chat is an open-source project. There are no subscriptions or in-app payments." },
  { q: "Does Khaled Chat require an account?", a: "No. Khaled Chat does not require registration or an online account." },
  { q: "How does Khaled Chat choose an AI model?", a: "The application checks your hardware, such as memory, processor, graphics card and free storage, and recommends models suited to those resources." },
  { q: "Can I install my own AI models?", a: "Importing local model files is a planned capability. This answer will be updated once it is available in a release." },
  { q: "Does Khaled Chat support older computers?", a: "Khaled Chat aims to recommend lighter models for computers with fewer resources. Performance and available features depend on your hardware, and some older computers may not be able to run any model comfortably." },
  { q: "Why are some features unavailable on my device?", a: "Some capabilities, such as image analysis, need more memory or a specific type of model. Khaled Chat is designed to explain why a feature is unavailable instead of letting it fail unexpectedly." },
  { q: "Are my conversations stored locally?", a: "Yes. Khaled Chat is designed to store conversations and preferences on your device rather than on a remote server." },
  { q: "Which operating systems are supported?", a: "Khaled Chat is being prepared for Windows, macOS and Linux. Check the Download page for the platforms with a published release." },
  { q: "Can I use Khaled Chat for coding?", a: "A coding assistant using compatible local models is planned. Its status is shown on the Features page." },
  { q: "How do I update the application?", a: "Download the latest version from the Download page. Release notes are listed in the Changelog. Update instructions will be documented with the first public release." },
];
