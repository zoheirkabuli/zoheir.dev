import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zoheir Kabuli | DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a192f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 60,
            color: "#64ffda",
            marginBottom: 20,
          }}
        >
          $ whoami
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#ccd6f6",
            marginBottom: 20,
          }}
        >
          Zoheir Kabuli
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#9ca3af",
          }}
        >
          DevOps Engineer & Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
