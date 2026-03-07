"use client";

import { useState, useEffect, useRef } from "react";
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

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div style={{ background: C.cream, minHeight: "100vh" }}>
      <SiteNav />

      {/* ─── HERO ─── */}
      <section style={{
        paddingTop: 160, paddingBottom: 100, paddingLeft: 32, paddingRight: 32,
        background: C.cream,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: C.clay, marginBottom: 24,
            }}>
              What We&apos;re Building
            </p>
            <h1 style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400,
              lineHeight: 1.1, color: C.charcoal, letterSpacing: "-0.025em",
              marginBottom: 24,
            }}>
              Two platforms. One missing infrastructure layer.
            </h1>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 300,
              lineHeight: 1.7, color: C.muted, maxWidth: 640,
            }}>
              GiveRise builds the technology the conservation sector doesn&apos;t yet have. These are the flagship platforms — one connecting stewards to funders, one connecting public sentiment to decision-makers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section style={{
        padding: "0 32px 120px",
        background: `linear-gradient(160deg, ${C.dark} 0%, ${C.slate} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Mycelial background */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg viewBox="0 0 1200 600" width="100%" height="100%" fill="none" stroke={C.cream} strokeLinecap="round" preserveAspectRatio="xMidYMid slice">
            <path d="M 100 300 Q 200 280 320 310 Q 440 340 560 300 Q 680 260 800 290 Q 920 320 1050 280 Q 1120 260 1180 270" strokeWidth="2"/>
            <path d="M 150 420 Q 280 390 380 410 Q 500 435 620 400 Q 720 370 820 395 Q 940 425 1080 390" strokeWidth="1.8"/>
            <path d="M 80 180 Q 200 200 340 175 Q 460 152 580 185 Q 700 215 840 190 Q 960 168 1100 195" strokeWidth="1.6"/>
            <path d="M 320 310 Q 335 350 380 410" strokeWidth="1.2"/>
            <path d="M 560 300 Q 570 260 580 185" strokeWidth="1.2"/>
            <path d="M 800 290 Q 815 340 820 395" strokeWidth="1.2"/>
            <circle cx="320" cy="310" r="4" fill={C.cream} opacity="0.4"/>
            <circle cx="560" cy="300" r="4" fill={C.cream} opacity="0.4"/>
            <circle cx="800" cy="290" r="4" fill={C.cream} opacity="0.4"/>
          </svg>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2, paddingTop: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

            {/* ── Block 1 — Groundtrust ── */}
            <Reveal>
              <div style={{
                background: "rgba(248,246,242,0.04)",
                border: "1px solid rgba(248,246,242,0.08)",
                borderRadius: 24, padding: "56px 60px",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,113,59,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(248,246,242,0.08)"; }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
                  <div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                      color: C.clay, letterSpacing: "0.16em", textTransform: "uppercase",
                      marginBottom: 8,
                    }}>
                      Coordination &amp; Capital Routing
                    </div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500,
                      color: "rgba(196,113,59,0.7)", letterSpacing: "0.06em", textTransform: "uppercase",
                      marginBottom: 24,
                    }}>
                      Launching 2026
                    </div>
                    <h2 style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 400, lineHeight: 1.1,
                      color: C.cream, letterSpacing: "-0.025em", marginBottom: 16,
                    }}>
                      Groundtrust
                    </h2>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 17, fontStyle: "italic",
                      fontWeight: 300, color: "rgba(248,246,242,0.55)", lineHeight: 1.6,
                      marginBottom: 28,
                    }}>
                      The land knows who should steward it. The money doesn&apos;t.
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 300,
                      lineHeight: 1.75, color: "rgba(248,246,242,0.65)", marginBottom: 16,
                    }}>
                      Groundtrust connects Indigenous and community-led land stewardship projects directly to the funders who want to support them — with radical transparency, zero bureaucratic overhead, and tools built for the field. No grant writer, no 501(c)(3), no legal team required.
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 300,
                      lineHeight: 1.75, color: "rgba(248,246,242,0.45)", marginBottom: 40,
                    }}>
                      Conservation has a routing problem, not a funding problem. Billions flow into land conservation every year. But the communities doing the most effective stewardship see almost none of it. Groundtrust is the connective tissue between them.
                    </p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <Link href="/groundtrust" style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
                        background: C.clay, color: C.cream, borderRadius: 10,
                        padding: "13px 28px", textDecoration: "none", display: "inline-block",
                        transition: "all 0.3s", boxShadow: "0 4px 20px rgba(196,113,59,0.2)",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.amber; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = C.clay; e.currentTarget.style.transform = "translateY(0)"; }}
                      >
                        Learn More →
                      </Link>
                      <Link href="/groundtrust#waitlist" style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 500,
                        color: "rgba(248,246,242,0.6)", textDecoration: "none",
                        border: "1px solid rgba(248,246,242,0.15)", borderRadius: 10,
                        padding: "13px 28px", display: "inline-block", transition: "all 0.3s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = C.cream; e.currentTarget.style.borderColor = "rgba(248,246,242,0.35)"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "rgba(248,246,242,0.6)"; e.currentTarget.style.borderColor = "rgba(248,246,242,0.15)"; }}
                      >
                        Join the Waitlist
                      </Link>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { icon: "↑", title: "Surface & Verify", desc: "Community-led projects list their work. Verification through community endorsement and satellite monitoring." },
                      { icon: "⇄", title: "Match & Fund", desc: "Funders browse verified projects by geography, ecosystem, and need. Every dollar tracked." },
                      { icon: "○", title: "Report & Grow", desc: "Field-first reporting tools. No 40-page reports." },
                    ].map((step, i) => (
                      <div key={i} style={{
                        background: "rgba(248,246,242,0.04)", border: "1px solid rgba(248,246,242,0.08)",
                        borderRadius: 14, padding: "28px 32px", transition: "all 0.3s",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(248,246,242,0.07)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,113,59,0.2)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(248,246,242,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(248,246,242,0.08)"; }}
                      >
                        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, color: C.clay, fontWeight: 600, lineHeight: 1.4, flexShrink: 0 }}>{step.icon}</span>
                          <div>
                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.cream, marginBottom: 6 }}>{step.title}</h4>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(248,246,242,0.5)", lineHeight: 1.65 }}>{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Block 2 — Landocracy ── */}
            <Reveal delay={100}>
              <div style={{
                background: "rgba(248,246,242,0.04)",
                border: "1px solid rgba(248,246,242,0.08)",
                borderRadius: 24, padding: "56px 60px",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,113,59,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(248,246,242,0.08)"; }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
                  <div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                      color: C.clay, letterSpacing: "0.16em", textTransform: "uppercase",
                      marginBottom: 8,
                    }}>
                      Public Voice &amp; Census
                    </div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 500,
                      color: "rgba(196,113,59,0.7)", letterSpacing: "0.06em", textTransform: "uppercase",
                      marginBottom: 24,
                    }}>
                      Live — landocracy.org
                    </div>
                    <h2 style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 400, lineHeight: 1.1,
                      color: C.cream, letterSpacing: "-0.025em", marginBottom: 16,
                    }}>
                      Landocracy
                    </h2>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 17, fontStyle: "italic",
                      fontWeight: 300, color: "rgba(248,246,242,0.55)", lineHeight: 1.6,
                      marginBottom: 28,
                    }}>
                      The land brought you here. Now put that on record.
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 300,
                      lineHeight: 1.75, color: "rgba(248,246,242,0.65)", marginBottom: 16,
                    }}>
                      Landocracy is conservation&apos;s first public census — a permanent, geographic record of who cares about the land and why. Every registered voice is tied to a legislative district. Every concern is on the record.
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 300,
                      lineHeight: 1.75, color: "rgba(248,246,242,0.45)", marginBottom: 40,
                    }}>
                      Conservation has had fundraising. It&apos;s had petitions. What it has never had is a structured, nonpartisan, geographically precise record of public sentiment — available to legislators, land trusts, and conservation funders as documented mandate. That&apos;s what Landocracy is.
                    </p>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <a href="https://landocracy.org" target="_blank" rel="noopener noreferrer" style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
                        background: C.clay, color: C.cream, borderRadius: 10,
                        padding: "13px 28px", textDecoration: "none", display: "inline-block",
                        transition: "all 0.3s", boxShadow: "0 4px 20px rgba(196,113,59,0.2)",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.amber; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = C.clay; e.currentTarget.style.transform = "translateY(0)"; }}
                      >
                        Visit Landocracy →
                      </a>
                      <a href="https://landocracy.org/how-it-works" target="_blank" rel="noopener noreferrer" style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 500,
                        color: "rgba(248,246,242,0.6)", textDecoration: "none",
                        border: "1px solid rgba(248,246,242,0.15)", borderRadius: 10,
                        padding: "13px 28px", display: "inline-block", transition: "all 0.3s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.color = C.cream; e.currentTarget.style.borderColor = "rgba(248,246,242,0.35)"; }}
                        onMouseLeave={e => { e.currentTarget.style.color = "rgba(248,246,242,0.6)"; e.currentTarget.style.borderColor = "rgba(248,246,242,0.15)"; }}
                      >
                        Learn How It Works
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { icon: "●", title: "Register & Verify", desc: "Voices answer five questions and confirm via email. Tied to zip code and legislative district." },
                      { icon: "↗", title: "Map & Report", desc: "District-level data available to legislators and organizations on request. Geographic precision, not anecdote." },
                      { icon: "◎", title: "Notify & Act", desc: "When land in a registered voice's district is threatened, they're notified directly." },
                    ].map((step, i) => (
                      <div key={i} style={{
                        background: "rgba(248,246,242,0.04)", border: "1px solid rgba(248,246,242,0.08)",
                        borderRadius: 14, padding: "28px 32px", transition: "all 0.3s",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(248,246,242,0.07)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,113,59,0.2)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(248,246,242,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(248,246,242,0.08)"; }}
                      >
                        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, color: C.clay, fontWeight: 600, lineHeight: 1.4, flexShrink: 0 }}>{step.icon}</span>
                          <div>
                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600, color: C.cream, marginBottom: 6 }}>{step.title}</h4>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(248,246,242,0.5)", lineHeight: 1.65 }}>{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ─── CONNECTION SECTION ─── */}
      <section style={{
        padding: "140px 32px",
        background: C.charcoal,
        position: "relative", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(${C.cream} 1px, transparent 1px), linear-gradient(90deg, ${C.cream} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 400, lineHeight: 1.12,
              color: C.cream, marginBottom: 24, letterSpacing: "-0.025em",
            }}>
              Two sides of the same problem.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 18, lineHeight: 1.7,
              color: "rgba(248,246,242,0.55)", marginBottom: 48, fontWeight: 300,
            }}>
              Groundtrust routes conservation capital to the communities doing the work. Landocracy documents the public mandate that makes that work matter. Together they&apos;re the infrastructure layer the conservation sector has been missing.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link href="/contact" style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600,
              background: C.clay, color: C.cream,
              borderRadius: 10, padding: "16px 40px",
              textDecoration: "none", display: "inline-block",
              transition: "all 0.3s",
              boxShadow: "0 4px 24px rgba(196,113,59,0.25)",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.amber; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.clay; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Work With Us →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        padding: "48px 32px", background: C.dark,
        borderTop: `1px solid rgba(248,246,242,0.04)`,
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, color: C.cream }}>
              GiveRise<span style={{ color: C.clay }}>.ai</span>
            </span>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(248,246,242,0.3)", marginTop: 6 }}>
              Technology infrastructure for land conservation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13,
                color: "rgba(248,246,242,0.35)", textDecoration: "none", transition: "color 0.3s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.clay)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,246,242,0.35)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 12,
            color: "rgba(248,246,242,0.2)", width: "100%", textAlign: "center",
            marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(248,246,242,0.04)",
          }}>
            © 2026 GiveRise.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
