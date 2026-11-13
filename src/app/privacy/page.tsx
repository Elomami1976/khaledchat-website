import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Khaled Chat handles your data: local AI inference, locally stored conversations and preferences, and the network connections it needs.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Local-first, by design."
        intro="Khaled Chat is built so that your AI conversations happen on your computer. This page explains what stays local, and when a network connection is used."
      />
      <Container className="py-16">
        <Prose>
          <p className="text-sm text-muted">
            This page describes the intended design of the desktop application, which is in pre-release development.
            It will be reviewed against each public release.
          </p>

          <h2>The desktop application</h2>

          <h3>Local AI inference</h3>
          <p>AI models run on your own computer. Your prompts and the model&apos;s responses are processed locally rather than sent to a cloud AI service.</p>

          <h3>Conversations</h3>
          <p>Conversation history is stored on your device. You control it, and removing the application data removes it.</p>

          <h3>Preferences and personalization</h3>
          <p>Settings are stored locally. If you choose to enter your first name, it is saved on your device and used only to personalize greetings and conversations.</p>

          <h3>Local files</h3>
          <p>When you work with documents or images, they are read and processed on your computer. Files are not uploaded by Khaled Chat for AI processing.</p>

          <h3>Model downloads</h3>
          <p>Downloading an AI model requires an internet connection. The model is fetched from its hosting source, which, like any web server, receives standard connection information such as your IP address.</p>

          <h3>Software updates</h3>
          <p>Downloading a new version of Khaled Chat requires an internet connection.</p>

          <h3>Optional external connections</h3>
          <p>If future versions introduce optional features that use the network, they will be documented here and in the release notes.</p>

          <h2>This website</h2>
          <p>khaledchat.com is a static website. It does not use accounts, advertising trackers or analytics. Your theme preference is stored in your browser&apos;s local storage. The hosting provider may keep standard server logs, such as IP addresses and requested pages, for operation and security.</p>

          <h2>No guarantees beyond the above</h2>
          <p>No software is free of defects. We describe how Khaled Chat is designed to handle data, but we do not make absolute security guarantees.</p>
        </Prose>
      </Container>
    </>
  );
}
