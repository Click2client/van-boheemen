import { ImageResponse } from "next/og";

import { homeContent } from "@/content/home";
import { site } from "@/config/site";

export const alt = `${site.name}: ${homeContent.hero.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1b3a4b",
          color: "#fffcf7",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.08em" }}>{site.legalName}</div>
        <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, maxWidth: 920 }}>
          {homeContent.hero.title}
        </div>
        <div style={{ fontSize: 28, color: "#e7e2da" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
