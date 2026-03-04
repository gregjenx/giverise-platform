"use client";

import SiteNav from "@/components/SiteNav";

const C = {
  charcoal: "#1c1f1e",
  dark: "#141716",
  clay: "#c4713b",
};

export default function PatternsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />

      <main>{children}</main>

      <footer
        style={{
          padding: "48px 32px",
          background: C.dark,
          borderTop: "1px solid rgba(248,246,242,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#faf8f4",
              }}
            >
              GiveRise<span style={{ color: C.clay }}>.ai</span>
            </span>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                color: "rgba(248,246,242,0.3)",
                marginTop: 6,
              }}
            >
              Technology infrastructure for land conservation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Patterns at Scale", "Services", "Groundtrust", "About"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: "rgba(248,246,242,0.35)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.color = C.clay)
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "rgba(248,246,242,0.35)")
                  }
                >
                  {link}
                </a>
              )
            )}
          </div>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: "rgba(248,246,242,0.2)",
              width: "100%",
              textAlign: "center",
              marginTop: 20,
              paddingTop: 20,
              borderTop: "1px solid rgba(248,246,242,0.04)",
            }}
          >
            © 2026 GiveRise.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
