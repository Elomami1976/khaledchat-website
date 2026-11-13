import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
// Social sharing image, exported as a real file: out/og.png
const size = { width: 1200, height: 630 };

export function GET() {
  const svg = fs.readFileSync(path.join(process.cwd(), "public", "branding", "logo-light-web.svg"));
  const logo = `data:image/svg+xml;base64,${svg.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", background: "#F5F5F3", color: "#242424",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={378} height={260} alt="" />
        <div style={{ fontSize: 40, marginTop: 56 }}>Your AI. Your Device. Your Privacy.</div>
      </div>
    ),
    size,
  );
}
