import { LogoMark } from "@/components/layout/Logo";
import { appScreenshot } from "@/data/preview";
import { MessageSquare, FolderOpen, Box, Settings, Plus, ArrowUp, Paperclip } from "lucide-react";

/**
 * Homepage application preview. Shows the real screenshot configured in
 * src/data/preview.ts when available, otherwise the HTML design mockup below.
 */
export function AppPreview() {
  const shot = appScreenshot;
  const frame = "overflow-hidden rounded-2xl border border-line shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]";
  if (shot) {
    return (
      <figure className="fade-up-delay mx-auto w-full max-w-5xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} fetchPriority="high"
          className={`${frame} h-auto w-full ${shot.srcDark ? "dark:hidden" : ""}`} />
        {shot.srcDark && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={shot.srcDark} width={shot.width} height={shot.height} alt={shot.alt}
            className={`${frame} hidden h-auto w-full dark:block`} />
        )}
      </figure>
    );
  }
  return <AppMockup frame={frame} />;
}

/** HTML/CSS design mockup. Not a screenshot of a released application. */
function AppMockup({ frame }: { frame: string }) {
  const recents = ["Trip packing list", "Explain this function", "Summarize meeting notes", "Weekly plan"];
  return (
    <figure className="fade-up-delay mx-auto w-full max-w-5xl">
      <div className={`relative bg-[#f7f7f5] dark:bg-[#1f1f1e] ${frame}`} aria-hidden>
        {/* window chrome */}
        <div className="flex h-9 items-center gap-2 border-b border-line bg-[#ededeb] px-4 dark:bg-[#262625]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#cfcfcb] dark:bg-[#444]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#cfcfcb] dark:bg-[#444]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#cfcfcb] dark:bg-[#444]" />
          <span className="ml-auto rounded-full border border-line px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted">
            Design preview
          </span>
        </div>
        <div className="flex h-[300px] sm:h-[420px] lg:h-[480px]">
          {/* sidebar */}
          <aside className="hidden w-56 shrink-0 flex-col border-r border-line bg-[#ebebe8] p-3 sm:flex dark:bg-[#232322]">
            <div className="mb-4 flex items-center justify-between px-2 pt-1">
              <LogoMark height={30} />
              <Plus className="h-4 w-4 text-muted" />
            </div>
            {[
              { i: MessageSquare, t: "Chats", active: true },
              { i: FolderOpen, t: "Files" },
              { i: Box, t: "Models" },
            ].map(({ i: Icon, t, active }) => (
              <div key={t} className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] ${active ? "bg-[#dfdfdb] text-fg dark:bg-[#30302e]" : "text-muted"}`}>
                <Icon className="h-3.5 w-3.5" /> {t}
              </div>
            ))}
            <p className="mt-5 px-2.5 text-[10px] font-medium uppercase tracking-wider text-muted">Recent</p>
            <div className="mt-1.5 space-y-0.5">
              {recents.map((r) => (
                <div key={r} className="truncate rounded-md px-2.5 py-1.5 text-[12px] text-muted">{r}</div>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2.5 px-2.5 py-2 text-[12.5px] text-muted">
              <Settings className="h-3.5 w-3.5" /> Settings
            </div>
          </aside>
          {/* workspace */}
          <div className="flex flex-1 flex-col items-center justify-center px-5">
            <p className="text-center text-xl font-semibold tracking-tight text-fg sm:text-3xl">Good morning, Alex.</p>
            <p className="mt-2 text-center text-[13px] text-muted sm:text-base">What would you like to work on today?</p>
            <div className="mt-6 w-full max-w-lg rounded-2xl border border-line bg-card p-3 shadow-sm sm:mt-8">
              <p className="px-1 pb-6 text-[13px] text-muted/80 sm:pb-8">Ask anything…</p>
              <div className="flex items-center justify-between">
                <Paperclip className="h-4 w-4 text-muted" />
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-invert text-invert-fg">
                  <ArrowUp className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted">
        Design preview, not a screenshot of a released application. The final interface may differ.
      </figcaption>
    </figure>
  );
}
