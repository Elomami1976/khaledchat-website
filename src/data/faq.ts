export interface FaqItem { q: string; a: string }

// Keep answers aligned with src/data/features.ts, src/data/models.ts and src/data/releases.ts.
export const faq: FaqItem[] = [
  { q: "What is Khaled Chat?", a: "Khaled Chat is a free, privacy-focused desktop AI assistant that runs AI models on your own computer. Version 0.1.0 is available for Windows." },
  { q: "Does Khaled Chat work without internet?", a: "Yes, once a model is downloaded. You need a connection to download the app and your first model; after that, chatting works offline. Web access is off by default." },
  { q: "Is Khaled Chat free?", a: "Yes. There are no subscriptions or in-app payments. It is open source under the MIT License, based on the open-source Hob project, and its source code is public at github.com/Elomami1976/khaledchat-desktop." },
  { q: "Does Khaled Chat require an account?", a: "No. There is no registration, sign-in or online account." },
  { q: "How does Khaled Chat choose an AI model?", a: "It checks your memory, processor, graphics card and free disk space, then recommends one of its 8 built-in models. You can pick another; models too big for your computer are shown but can't be selected." },
  { q: "Does Khaled Chat download anything on its own?", a: "No. Every model and optional component asks first, showing its size, source, destination folder and license, and there are no automatic updates." },
  { q: "Can I install my own AI models?", a: "Not yet. Importing your own model files is planned." },
  { q: "Does Khaled Chat support older computers?", a: "Yes, with limits. On computers without a usable graphics card it uses Simple chat mode and a small model. On a 2011 laptop with 8 GB of memory, a first answer took about 1 to 2.5 minutes. Newer computers and graphics cards are much faster." },
  { q: "Why are some features unavailable on my device?", a: "Some need more memory or a graphics card. In version 0.1.0, Code tools are also held back on Windows and Web search is held back everywhere; Settings explains why next to each one." },
  { q: "Are my conversations stored locally?", a: "Yes. Chats, files, models and settings are stored on your computer only, and you can delete them in Settings → Files & storage." },
  { q: "Which operating systems are supported?", a: "Windows 10 and 11 (64-bit). Version 0.1.0 was tested on Windows 10. macOS and Linux versions are not available yet." },
  { q: "Can I use Khaled Chat for coding?", a: "You can ask any model to write, explain or improve code in chat. Running code (Code tools) is held back on Windows in version 0.1.0." },
  { q: "How do I update the application?", a: "Khaled Chat does not update itself. Download the new installer from the Download page and run it; your chats and models are kept. New versions are listed in the Changelog." },
];
