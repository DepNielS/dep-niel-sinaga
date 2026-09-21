import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Dep` Niel Sinaga — Junior Web Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#071426",
          color: "#FFFFFF",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#60A5FA",
              letterSpacing: "2px",
            }}
          >
            PORTFOLIO
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Dep` Niel Sinaga
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#93C5FD",
            }}
          >
            Junior Web Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#BFDBFE",
            }}
          >
            React · Next.js · TypeScript · NestJS · PostgreSQL
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#94A3B8",
            }}
          >
            Palembang, Indonesia
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}