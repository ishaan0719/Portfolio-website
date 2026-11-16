import { ImageResponse } from "next/og";
import { profile } from "@/content";
import { palette } from "@/theme";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: palette.accent,
        color: palette.surface,
        borderRadius: 14,
        fontSize: 30,
        fontWeight: 600,
        letterSpacing: -1,
      }}
    >
      {profile.initials}
    </div>,
    size,
  );
}
