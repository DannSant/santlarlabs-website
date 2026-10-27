import { ImageResponse } from "next/og";
import { getDictionary } from "@/dictionaries";
import { hasLocale, locales } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Santlar Labs";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(hasLocale(lang) ? lang : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(800px 500px at 10% 0%, rgba(94,234,212,0.22), transparent), radial-gradient(800px 500px at 100% 20%, rgba(167,139,250,0.25), transparent), #07080c",
          color: "#eceef4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 36, fontWeight: 700 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #5eead4, #a78bfa)",
            }}
          />
          Santlar Labs
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.08, maxWidth: 1000 }}>
            {`${dict.hero.titleStart} ${dict.hero.titleAccent}`}
          </div>
          <div style={{ fontSize: 30, color: "#9198aa" }}>{`${dict.footer.tagline} · English & Español`}</div>
        </div>
      </div>
    ),
    size,
  );
}
