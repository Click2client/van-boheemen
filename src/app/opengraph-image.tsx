import { ImageResponse } from "next/og";

import { site } from "@/config/site";
import { homeContent } from "@/content/home";

export const alt = `${site.name}: ${homeContent.hero.lines.join(" ")}`;
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
          backgroundColor: "#1F4E79",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.08em" }}>{site.legalName}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>
          <div>{homeContent.hero.lines[0]}</div>
          <div>{homeContent.hero.lines[1]}</div>
        </div>
        <div style={{ fontSize: 28, color: "#A9CBE6" }}>{site.url.replace("https://", "")}</div>
      </div>
    ),
    { ...size },
  );
}
