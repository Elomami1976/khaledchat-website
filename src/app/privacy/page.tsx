import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { Container, PageHeader, Prose } from "@/components/ui/primitives";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description: "How Khaled Chat handles your data: local AI inference, locally stored conversations and preferences, and the few network connections it uses, only when you choose them.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Local-first, by design."
        intro="Your AI conversations happen on your computer. This page explains what stays local, and when a network connection is used."
      />
      <Container className="py-16">
        <Prose>
          <p className="text-sm text-muted">
            This page describes Khaled Chat 0.1.1 for Windows. It is reviewed with each release.
          </p>

          <h2>The desktop application</h2>

          <h3>Local AI inference</h3>
          <p>AI models run on your own computer. Your prompts and the model&apos;s responses are processed locally, never sent to a cloud AI service.</p>

          <h3>Conversations</h3>
          <p>Conversation history is stored on your device. You control it: delete chats in Settings → Files &amp; storage, or remove all of Khaled Chat&apos;s data there.</p>

          <h3>Preferences and personalization</h3>
          <p>Settings are stored locally. If you enter your first name (optional), it is saved on your device and used only for the greeting.</p>

          <h3>Local files</h3>
          <p>Files you add to a chat are read and processed on your computer. Khaled Chat does not upload your files for AI processing.</p>

          <h3>Model downloads</h3>
          <p>Downloading an AI model requires an internet connection, and starts only after you confirm it. The model is fetched from its hosting source, which, like any web server, receives standard connection information such as your IP address.</p>

          <h3>Software updates</h3>
          <p>Khaled Chat does not check for or install updates by itself. Downloading a new version from this website requires an internet connection.</p>

          <h3>Optional external connections</h3>
          <p>Optional features that use the network are off by default: Web access (reading web pages you ask about) and connectors you add yourself. Each one is documented here and in the release notes.</p>

          <h2>This website</h2>
          <p>khaledchat.io is a static website. It does not use accounts, advertising trackers or analytics. Your theme preference is stored in your browser&apos;s local storage. The hosting provider may keep standard server logs, such as IP addresses and requested pages, for operation and security.</p>

          <h2>No guarantees beyond the above</h2>
          <p>No software is free of defects. We describe how Khaled Chat handles data, but we do not make absolute security guarantees.</p>
        </Prose>
      </Container>
    </>
  );
}
