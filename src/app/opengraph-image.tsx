import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content";
import { palette } from "@/theme";

export const dynamic = "force-static";
export const alt = `${profile.name}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fraunces = await readFile(join(process.cwd(), "src/fonts/fraunces-500.ttf"));
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 88px",
        background: palette.bg,
        color: palette.ink,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: palette.accent,
            color: palette.surface,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ width: 48, height: 2, background: palette.ochre }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "Fraunces",
            fontSize: 92,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div style={{ marginTop: 28, fontSize: 38, lineHeight: 1.3, maxWidth: 900 }}>
          {profile.headline}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: palette.muted,
          borderTop: `2px solid ${palette.line}`,
          paddingTop: 28,
        }}
      >
        AI/ML · Data Science · Software Engineering · IIT Bombay
      </div>
    </div>,
    { ...size, fonts: [{ name: "Fraunces", data: fraunces, weight: 500, style: "normal" }] },
  );
}
