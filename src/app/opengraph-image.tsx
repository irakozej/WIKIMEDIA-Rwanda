import { ImageResponse } from "next/og";

export const alt = "Wikimedia Rwanda — Advancing Open Knowledge in Rwanda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 80% 0%, rgba(194,65,12,0.35), transparent 55%)," +
            "radial-gradient(circle at 0% 100%, rgba(0,102,153,0.25), transparent 55%)," +
            "linear-gradient(135deg, #f3ecd8, #faf6ee)",
          color: "#1c1913",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 9999,
              background: "#006699",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#faf6ee",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>
              Wikimedia Rwanda
            </span>
            <span
              style={{
                fontSize: 12,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#4d4330",
                marginTop: 2,
              }}
            >
              Open Source Knowledge
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 700,
            }}
          >
            Advancing
          </div>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1,
              letterSpacing: -3,
              fontStyle: "italic",
              color: "#c2410c",
              fontWeight: 400,
            }}
          >
            open knowledge
          </div>
          <div
            style={{
              fontSize: 110,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 700,
            }}
          >
            in Rwanda.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            color: "#4d4330",
          }}
        >
          <span>Kinyarwanda · English · French · Swahili</span>
          <span style={{ fontFamily: "monospace", letterSpacing: 3, textTransform: "uppercase", fontSize: 14 }}>
            wikimedia.rw
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
