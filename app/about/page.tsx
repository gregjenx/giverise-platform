"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const C = {
  charcoal: "#1c1f1e",
  dark: "#141716",
  slate: "#2a3f36",
  forest: "#3d6b5a",
  clay: "#c4713b",
  amber: "#d4943a",
  warm: "#f8f6f2",
  sand: "#efeae2",
  cream: "#faf8f4",
  muted: "#6b6960",
  light: "#9a948a",
};

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

const values = [
  {
    title: "Technology serves the mission",
    desc: "Tools exist to extend the capacity of people doing the work. We build systems that recede into the background — present when needed, never in the way.",
  },
  {
    title: "Sovereignty over data and systems",
    desc: "Organizations should own their infrastructure and their information. We design for independence, not dependency — ensuring communities retain control over what they build.",
  },
  {
    title: "Built with, not for",
    desc: "The best technology is developed in partnership with the people who use it. Field reality shapes every design decision. We don't build from assumptions; we build from relationships.",
  },
  {
    title: "Transparency builds trust",
    desc: "At every level — between funders and stewards, between platforms and users, between us and our clients — clarity creates durable trust. We resist opacity by design.",
  },
  {
    title: "Leave capacity, not dependency",
    desc: "Every engagement should end with the organization stronger and more capable than when we arrived. We measure success by how little they need us afterward.",
  },
];

const ecosystem = [
  {
    label: "Land Trusts",
    desc: "Accredited organizations holding easements and managing conservation portfolios at scale.",
  },
  {
    label: "Indigenous Organizations",
    desc: "Tribal nations and Indigenous-led groups stewarding ancestral territories with deep ecological knowledge.",
  },
  {
    label: "Funders",
    desc: "Foundations, agencies, and impact investors seeking verified outcomes and portfolio transparency.",
  },
  {
    label: "Policy Groups",
    desc: "Coalitions and advocacy organizations translating field data into systemic change.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: C.cream, minHeight: "100vh" }}>
      <SiteNav />

      {/* Hero */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 100,
          paddingLeft: 32,
          paddingRight: 32,
          background: C.cream,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.clay,
                marginBottom: 24,
              }}
            >
              About GiveRise.ai
            </p>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: C.charcoal,
                letterSpacing: "-0.02em",
                marginBottom: 40,
              }}
            >
              Technology infrastructure for the people who protect the land
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 18,
                lineHeight: 1.75,
                color: C.muted,
                marginBottom: 24,
              }}
            >
              Conservation doesn't have a funding problem. It has a routing
              problem. There is money moving toward land protection — but it
              pools in places that are easy to reach and drains away from the
              communities doing the most essential work. The organizations
              closest to the land, with the deepest ecological relationships and
              the most urgent needs, are often the least equipped with the
              technology infrastructure to receive, report on, or coordinate
              that support.
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 18,
                lineHeight: 1.75,
                color: C.muted,
                marginBottom: 24,
              }}
            >
              GiveRise.ai was built to solve that. We design and build the
              technology systems — data pipelines, verification tools, platform
              architecture, AI-enabled workflows — that let conservation
              organizations operate at the scale the crisis demands. Not off-
              the-shelf software, but infrastructure that fits the mission.
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 18,
                lineHeight: 1.75,
                color: C.muted,
              }}
            >
              We came to this work after years of watching the same failure
              mode repeat: organizations with extraordinary field knowledge and
              community trust, limited by systems that couldn't keep pace.
              Reporting that consumed weeks. Coordination that happened through
              email threads and spreadsheets. The gap between what these
              organizations knew and what they could demonstrate was a
              technology gap — and that felt like something we could help close.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 32px",
          borderTop: `1px solid rgba(28,31,30,0.08)`,
        }}
      />

      {/* What We Believe */}
      <section
        style={{
          padding: "100px 32px",
          background: C.cream,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.clay,
                marginBottom: 16,
              }}
            >
              What We Believe
            </p>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: C.charcoal,
                letterSpacing: "-0.02em",
                marginBottom: 60,
              }}
            >
              Principles that shape every engagement
            </h2>
          </Reveal>

          <div
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div
                  style={{
                    padding: "40px 0",
                    borderTop: `1px solid rgba(28,31,30,0.08)`,
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: 48,
                    alignItems: "start",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        color: C.clay,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: 22,
                        fontWeight: 400,
                        color: C.charcoal,
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {v.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 16,
                      lineHeight: 1.75,
                      color: C.muted,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: `1px solid rgba(28,31,30,0.08)` }} />
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section
        style={{
          padding: "100px 32px",
          background: C.warm,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.clay,
                marginBottom: 16,
              }}
            >
              The Ecosystem
            </p>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: C.charcoal,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                maxWidth: 640,
              }}
            >
              A neutral partner across the conservation landscape
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 17,
                lineHeight: 1.75,
                color: C.muted,
                maxWidth: 640,
                marginBottom: 64,
              }}
            >
              Conservation is not one sector — it's an interconnected web of
              organizations with different roles, resources, and relationships.
              GiveRise works across that entire ecosystem without allegiance to
              any one node within it. We don't advocate for any particular
              outcome except a better-functioning system.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 2,
            }}
          >
            {ecosystem.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div
                  style={{
                    background: C.cream,
                    padding: "36px 32px",
                    borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 2,
                      background: C.clay,
                      marginBottom: 20,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 400,
                      color: C.charcoal,
                      marginBottom: 12,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: C.muted,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        style={{
          padding: "100px 32px",
          background: C.cream,
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.clay,
                marginBottom: 16,
              }}
            >
              The Team
            </p>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: C.charcoal,
                letterSpacing: "-0.02em",
                marginBottom: 64,
              }}
            >
              People who have been building for a long time
            </h2>
          </Reveal>

          {/* Founder */}
          <Reveal>
            <div
              style={{
                borderTop: `1px solid rgba(28,31,30,0.08)`,
                paddingTop: 48,
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 48,
                alignItems: "start",
              }}
            >
              <div>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.slate}, ${C.forest})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 28,
                      color: C.cream,
                      fontWeight: 400,
                    }}
                  >
                    G
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: C.charcoal,
                    marginBottom: 4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Greg
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: C.clay,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Founder
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: C.muted,
                    marginBottom: 20,
                  }}
                >
                  Greg has spent decades building digital experiences for
                  organizations navigating complex problems — from early web
                  design in the late nineties through modern AI-enabled
                  platforms. That arc covers nonprofits, advocacy coalitions,
                  community land organizations, and mission-driven startups, each
                  at a different stage of their relationship with technology.
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: C.muted,
                  }}
                >
                  The thread through all of it has been the same: organizations
                  with important work to do, underserved by the tools available
                  to them. GiveRise is the distillation of that pattern — an
                  attempt to apply everything learned across those years to the
                  sector where the stakes are highest and the infrastructure gap
                  is widest.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Future bios placeholder */}
          <Reveal delay={100}>
            <div
              style={{
                marginTop: 48,
                padding: "32px 36px",
                background: C.warm,
                borderRadius: 8,
                borderLeft: `3px solid ${C.clay}`,
              }}
            >
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: C.muted,
                  fontStyle: "italic",
                }}
              >
                Additional team members and advisors coming soon. GiveRise is a
                small, focused team — we grow carefully, adding people whose
                depth in the sector matches the complexity of the problems we're
                solving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 32px",
          background: C.charcoal,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Reveal>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: C.cream,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Start a conversation
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(250,248,244,0.55)",
                marginBottom: 48,
              }}
            >
              Whether you have a specific project in mind or are still mapping
              the problem, we're happy to talk through what's possible.
            </p>
            <Link
              href="/#contact"
              style={{
                display: "inline-block",
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                background: C.clay,
                color: C.cream,
                textDecoration: "none",
                borderRadius: 8,
                padding: "16px 40px",
                letterSpacing: "0.02em",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  C.amber;
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  C.clay;
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
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
            {[
              { label: "Services", href: "/services" },
              { label: "Groundtrust", href: "/groundtrust" },
              { label: "Patterns", href: "/patterns" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  color: "rgba(248,246,242,0.35)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = C.clay)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(248,246,242,0.35)")
                }
              >
                {link.label}
              </Link>
            ))}
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
    </div>
  );
}
