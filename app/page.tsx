"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const C = {
  charcoal: "#1c1f1e",
  dark: "#141716",
  slate: "#2a3f36",
  forest: "#3d6b5a",
  sage: "#5a8a74",
  clay: "#c4713b",
  amber: "#d4943a",
  warm: "#f8f6f2",
  sand: "#efeae2",
  cream: "#faf8f4",
  text: "#1c1f1e",
  muted: "#6b6960",
  light: "#9a948a",
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
    }}>{children}</div>
  );
}

function ServiceCard({ number, title, desc, items }: {
  number: string;
  title: string;
  desc: string;
  items: string[];
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "44px 40px",
        borderBottom: `1px solid rgba(28,31,30,0.08)`,
        display: "grid",
        gridTemplateColumns: "60px 1fr 1.2fr",
        gap: 32,
        alignItems: "start",
        background: hovered ? "rgba(239,234,226,0.5)" : "transparent",
        transition: "background 0.4s ease",
        cursor: "default",
      }}
    >
      <span style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: 32, color: hovered ? C.clay : C.light,
        transition: "color 0.4s ease", lineHeight: 1,
      }}>{number}</span>
      <div>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 600,
          color: C.charcoal, marginBottom: 10, letterSpacing: "-0.01em",
        }}>{title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: C.muted }}>{desc}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 4 }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500,
            color: C.slate, background: "rgba(42,63,54,0.06)",
            borderRadius: 6, padding: "6px 14px",
            letterSpacing: "0.01em",
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{
      background: C.cream, color: C.text,
      fontFamily: "'Instrument Serif', Georgia, serif",
      overflowX: "hidden",
    }}>
      <SiteNav />

      {/* ─── HERO ─── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "140px 32px 100px",
        position: "relative",
      }}>
        {/* Subtle grid texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: `linear-gradient(${C.charcoal} 1px, transparent 1px), linear-gradient(90deg, ${C.charcoal} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ maxWidth: 820 }}>
            <Reveal>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600,
                color: C.clay, letterSpacing: "0.14em", textTransform: "uppercase",
                marginBottom: 32, display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ width: 36, height: 1.5, background: C.clay }} />
                Technology for land conservation
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 style={{
                fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 400, lineHeight: 1.06,
                color: C.charcoal, marginBottom: 32, letterSpacing: "-0.03em",
              }}>
                The conservation sector has
                <br />
                a <span style={{ fontStyle: "italic", color: C.forest }}>technology gap</span>.
                <br />
                We close it.
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p style={{
                fontFamily: "'Outfit', sans-serif", fontSize: "clamp(17px, 1.8vw, 20px)",
                lineHeight: 1.7, color: C.muted, maxWidth: 580, marginBottom: 48,
                fontWeight: 300,
              }}>
                GiveRise.ai builds technology infrastructure for land conservation organizations — from AI strategy to data systems to entirely new platforms. We help the people protecting the land work at the scale the crisis demands.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600,
                  background: C.charcoal, color: C.cream,
                  borderRadius: 10, padding: "16px 36px",
                  cursor: "pointer", transition: "all 0.3s",
                  boxShadow: "0 2px 16px rgba(28,31,30,0.12)",
                  textDecoration: "none", display: "inline-block",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.slate; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(28,31,30,0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = C.charcoal; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(28,31,30,0.12)"; }}
                >
                  Start a Conversation
                </Link>
                <button style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 500,
                  background: "transparent", color: C.charcoal,
                  border: `1.5px solid rgba(28,31,30,0.15)`, borderRadius: 10, padding: "16px 36px",
                  cursor: "pointer", transition: "all 0.3s",
                }}
                  onMouseEnter={e => { (e.target as HTMLButtonElement).style.borderColor = "rgba(28,31,30,0.35)"; }}
                  onMouseLeave={e => { (e.target as HTMLButtonElement).style.borderColor = "rgba(28,31,30,0.15)"; }}
                >
                  See Our Work
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right side — watershed/river delta line illustration */}
          <Reveal delay={500}>
            <div style={{
              position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)",
              width: 480, height: 480, opacity: 0.09,
            }}>
              <svg viewBox="0 0 480 480" fill="none" stroke={C.forest} strokeLinecap="round" strokeLinejoin="round">
                {/* Main channel flowing from top to bottom */}
                <path d="M 240 20 Q 235 80 230 140 Q 225 190 228 240 Q 230 290 235 340 Q 238 390 240 460" strokeWidth="3"/>

                {/* Left tributary system */}
                <path d="M 230 140 Q 190 155 145 148 Q 110 143 65 150" strokeWidth="2.2"/>
                <path d="M 170 152 Q 148 175 120 185" strokeWidth="1.4"/>
                <path d="M 145 148 Q 125 130 95 122" strokeWidth="1.4"/>
                <path d="M 110 143 Q 88 158 60 168" strokeWidth="1"/>
                <path d="M 120 185 Q 100 198 72 205" strokeWidth="0.8"/>
                <path d="M 95 122 Q 72 112 45 115" strokeWidth="0.8"/>

                {/* Right tributary system - larger, main delta */}
                <path d="M 228 240 Q 275 228 325 235 Q 370 240 420 230" strokeWidth="2.4"/>
                <path d="M 290 232 Q 310 210 340 195 Q 365 182 400 178" strokeWidth="1.6"/>
                <path d="M 325 235 Q 350 255 385 262" strokeWidth="1.4"/>
                <path d="M 340 195 Q 365 175 395 165" strokeWidth="1"/>
                <path d="M 370 240 Q 395 252 425 248" strokeWidth="1"/>
                <path d="M 385 262 Q 410 275 440 272" strokeWidth="0.8"/>
                <path d="M 310 210 Q 328 200 340 185" strokeWidth="0.8"/>

                {/* Upper left branch */}
                <path d="M 235 80 Q 200 72 162 80 Q 130 88 95 78" strokeWidth="1.8"/>
                <path d="M 162 80 Q 140 95 115 100" strokeWidth="1.1"/>
                <path d="M 130 88 Q 108 75 82 70" strokeWidth="0.9"/>

                {/* Lower right branch */}
                <path d="M 235 340 Q 270 330 310 340 Q 345 348 380 338" strokeWidth="1.8"/>
                <path d="M 310 340 Q 335 360 365 368" strokeWidth="1.1"/>
                <path d="M 345 348 Q 370 335 400 330" strokeWidth="0.9"/>

                {/* Small upper right tributaries */}
                <path d="M 238 100 Q 268 88 300 92 Q 325 95 355 85" strokeWidth="1.4"/>
                <path d="M 300 92 Q 318 78 340 72" strokeWidth="0.8"/>

                {/* Small lower left tributaries */}
                <path d="M 230 300 Q 195 308 160 298 Q 130 290 95 298" strokeWidth="1.4"/>
                <path d="M 160 298 Q 138 312 112 318" strokeWidth="0.8"/>

                {/* Finest capillary details */}
                <path d="M 225 190 Q 198 200 172 195" strokeWidth="1"/>
                <path d="M 232 380 Q 260 375 288 382" strokeWidth="1"/>
                <path d="M 172 195 Q 152 205 130 200" strokeWidth="0.6"/>
                <path d="M 288 382 Q 308 390 332 385" strokeWidth="0.6"/>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── THESIS ─── */}
      <section style={{ padding: "100px 32px", background: C.sand }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48,
            }}>
              {[
                {
                  stat: "$7B+",
                  label: "flows into land conservation annually",
                  detail: "But the organizations closest to the land see almost none of it.",
                },
                {
                  stat: "18 mo",
                  label: "average grant cycle, application to deployment",
                  detail: "Community-led projects can't wait. Most can't afford to apply.",
                },
                {
                  stat: "Zero",
                  label: "technology platforms built for this ecosystem",
                  detail: "Until now.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div>
                    <div style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 48, color: i === 2 ? C.clay : C.charcoal,
                      lineHeight: 1, marginBottom: 12, letterSpacing: "-0.03em",
                    }}>{item.stat}</div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600,
                      color: C.charcoal, marginBottom: 8, lineHeight: 1.4,
                      letterSpacing: "0.01em",
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 15,
                      color: C.muted, lineHeight: 1.6,
                    }}>{item.detail}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section style={{ padding: "120px 32px", background: C.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 600 }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600,
                color: C.clay, letterSpacing: "0.14em", textTransform: "uppercase",
                marginBottom: 20, display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ width: 36, height: 1.5, background: C.clay }} />
                What We Do
              </div>
              <h2 style={{
                fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.12,
                color: C.charcoal, letterSpacing: "-0.025em",
              }}>
                We build the technology
                <br />
                conservation <span style={{ fontStyle: "italic" }}>should</span> have.
              </h2>
            </div>
          </Reveal>

          <div style={{ borderTop: `1px solid rgba(28,31,30,0.08)` }}>
            {[
              {
                number: "01",
                title: "Technology Strategy",
                desc: "We help conservation organizations figure out what to build, what to buy, and what to skip — before they spend a dollar on software.",
                items: ["Systems audit", "Build vs. buy analysis", "Roadmap design", "Vendor evaluation"],
              },
              {
                number: "02",
                title: "AI Readiness",
                desc: "AI can transform how conservation organizations work — but only if it's applied to the right problems. We assess where AI helps and where it's hype.",
                items: ["Use case identification", "Data readiness audit", "Pilot design", "Team training"],
              },
              {
                number: "03",
                title: "Data Infrastructure",
                desc: "Most conservation data lives in spreadsheets, PDFs, and people's heads. We build the systems that make it usable, shareable, and actionable.",
                items: ["Data architecture", "Pipeline design", "Reporting systems", "Interoperability"],
              },
              {
                number: "04",
                title: "Platform Design & Development",
                desc: "When the tool an organization needs doesn't exist, we build it — from scoping through launch. Community-centered, lightweight, designed for the field.",
                items: ["Product scoping", "UX research", "MVP development", "Field testing"],
              },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 80}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GROUNDTRUST SPOTLIGHT ─── */}
      <section style={{
        padding: "120px 32px",
        background: `linear-gradient(160deg, ${C.dark} 0%, ${C.slate} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        {/* Mycelial network background illustration */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg viewBox="0 0 1200 600" width="100%" height="100%" fill="none" stroke={C.cream} strokeLinecap="round" preserveAspectRatio="xMidYMid slice">
            {/* Central mycelial network - organic, interconnected */}
            {/* Primary hyphae */}
            <path d="M 100 300 Q 200 280 320 310 Q 440 340 560 300 Q 680 260 800 290 Q 920 320 1050 280 Q 1120 260 1180 270" strokeWidth="2"/>
            <path d="M 150 420 Q 280 390 380 410 Q 500 435 620 400 Q 720 370 820 395 Q 940 425 1080 390" strokeWidth="1.8"/>
            <path d="M 80 180 Q 200 200 340 175 Q 460 152 580 185 Q 700 215 840 190 Q 960 168 1100 195" strokeWidth="1.6"/>

            {/* Cross connections - the coordination tissue */}
            <path d="M 320 310 Q 335 350 380 410" strokeWidth="1.2"/>
            <path d="M 560 300 Q 570 260 580 185" strokeWidth="1.2"/>
            <path d="M 800 290 Q 815 340 820 395" strokeWidth="1.2"/>
            <path d="M 340 175 Q 360 230 380 310" strokeWidth="1"/>
            <path d="M 700 215 Q 720 250 740 290" strokeWidth="1"/>
            <path d="M 940 425 Q 955 380 960 320" strokeWidth="1"/>

            {/* Finer branching */}
            <path d="M 200 280 Q 180 240 170 200" strokeWidth="0.8"/>
            <path d="M 440 340 Q 460 380 475 420" strokeWidth="0.8"/>
            <path d="M 680 260 Q 660 220 650 185" strokeWidth="0.8"/>
            <path d="M 920 320 Q 940 280 950 240" strokeWidth="0.8"/>
            <path d="M 500 435 Q 520 460 545 480" strokeWidth="0.6"/>
            <path d="M 840 190 Q 860 160 875 130" strokeWidth="0.6"/>
            <path d="M 280 390 Q 260 360 250 310" strokeWidth="0.7"/>
            <path d="M 720 370 Q 700 340 695 300" strokeWidth="0.7"/>

            {/* Nutrient nodes - small circles at intersections */}
            <circle cx="320" cy="310" r="4" fill={C.cream} opacity="0.4"/>
            <circle cx="560" cy="300" r="4" fill={C.cream} opacity="0.4"/>
            <circle cx="800" cy="290" r="4" fill={C.cream} opacity="0.4"/>
            <circle cx="380" cy="410" r="3" fill={C.cream} opacity="0.3"/>
            <circle cx="580" cy="185" r="3" fill={C.cream} opacity="0.3"/>
            <circle cx="820" cy="395" r="3" fill={C.cream} opacity="0.3"/>
          </svg>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 12, fontWeight: 700,
                  color: C.clay, letterSpacing: "0.16em", textTransform: "uppercase",
                  marginBottom: 20, display: "flex", alignItems: "center", gap: 12,
                }}>
                  <div style={{ width: 28, height: 1.5, background: C.clay }} />
                  Flagship Project
                </div>
                <h2 style={{
                  fontSize: "clamp(34px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1,
                  color: C.cream, marginBottom: 24, letterSpacing: "-0.025em",
                }}>
                  Groundtrust
                </h2>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 18, lineHeight: 1.7,
                  color: "rgba(248,246,242,0.65)", marginBottom: 20, fontWeight: 300,
                }}>
                  The conservation sector&apos;s first coordination layer — connecting Indigenous and community-led land stewardship projects directly to the funders, land trusts, and institutions that want to support them.
                </p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 16, lineHeight: 1.7,
                  color: "rgba(248,246,242,0.5)", marginBottom: 40,
                }}>
                  Groundtrust verifies stewardship projects, matches them to aligned funding, and provides simple tools for reporting and relationship-building — without requiring a grant writer, a 501(c)(3), or a legal team.
                </p>
                <button style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600,
                  background: C.clay, color: C.cream,
                  border: "none", borderRadius: 10, padding: "14px 32px",
                  cursor: "pointer", transition: "all 0.3s",
                  boxShadow: "0 4px 20px rgba(196,113,59,0.25)",
                }}
                  onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = C.amber; (e.target as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = C.clay; (e.target as HTMLButtonElement).style.transform = "translateY(0)"; }}
                >
                  Learn About Groundtrust →
                </button>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  {
                    icon: "↑",
                    title: "Surface & Verify",
                    desc: "Community-led projects list their work. Verification through community endorsement + satellite data.",
                  },
                  {
                    icon: "⇄",
                    title: "Match & Fund",
                    desc: "Funders browse verified projects by geography, ecosystem, and need. Every dollar tracked.",
                  },
                  {
                    icon: "○",
                    title: "Report & Grow",
                    desc: "Field-first reporting tools. Photo check-ins, GPS updates, ecological indicators. No 40-page reports.",
                  },
                ].map((step, i) => (
                  <div key={i} style={{
                    background: "rgba(248,246,242,0.04)",
                    border: "1px solid rgba(248,246,242,0.08)",
                    borderRadius: 14, padding: "28px 32px",
                    transition: "all 0.3s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(248,246,242,0.07)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(196,113,59,0.2)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(248,246,242,0.04)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(248,246,242,0.08)"; }}
                  >
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <span style={{
                        fontSize: 20, color: C.clay, lineHeight: 1.4,
                        fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                      }}>{step.icon}</span>
                      <div>
                        <h4 style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 600,
                          color: C.cream, marginBottom: 6,
                        }}>{step.title}</h4>
                        <p style={{
                          fontFamily: "'Outfit', sans-serif", fontSize: 14,
                          color: "rgba(248,246,242,0.55)", lineHeight: 1.6,
                        }}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section style={{ padding: "120px 32px", background: C.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72, maxWidth: 650, margin: "0 auto 72px" }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 600,
                color: C.clay, letterSpacing: "0.14em", textTransform: "uppercase",
                marginBottom: 20,
              }}>
                How We Work
              </div>
              <h2 style={{
                fontSize: "clamp(30px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.15,
                color: C.charcoal, letterSpacing: "-0.02em",
              }}>
                We work <span style={{ fontStyle: "italic" }}>with</span> organizations,
                not on top of them.
              </h2>
            </div>
          </Reveal>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32,
          }}>
            {[
              {
                title: "Start with the problem, not the technology",
                desc: "Every engagement begins with deep listening. We understand the workflows, relationships, and constraints before we recommend anything. The best technology solution is sometimes no technology at all.",
              },
              {
                title: "Build for the field, not the boardroom",
                desc: "Conservation happens on the land, not in offices. Every tool we build has to work for someone with a phone and limited connectivity — not just someone with a laptop and fast wifi.",
              },
              {
                title: "Leave capacity, not dependency",
                desc: "We don't build systems that require us to maintain them. We build systems your team can own, and we train them to use, adapt, and extend what we've created together.",
              },
            ].map((principle, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{
                  padding: "40px 36px",
                  borderTop: `3px solid ${i === 0 ? C.clay : i === 1 ? C.forest : C.charcoal}`,
                  background: C.warm,
                  borderRadius: "0 0 12px 12px",
                  height: "100%",
                }}>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 19, fontWeight: 600,
                    color: C.charcoal, marginBottom: 14, lineHeight: 1.3,
                  }}>{principle.title}</h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 15,
                    color: C.muted, lineHeight: 1.7,
                  }}>{principle.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─── */}
      <section style={{ padding: "100px 32px", background: C.sand }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{
                fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, lineHeight: 1.15,
                color: C.charcoal, letterSpacing: "-0.02em",
              }}>
                Built for every part of the{" "}
                <span style={{ fontStyle: "italic" }}>ecosystem</span>.
              </h2>
            </div>
          </Reveal>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
          }}>
            {[
              { title: "Land Trusts", desc: "Regional and national trusts managing conservation easements and stewardship portfolios." },
              { title: "Indigenous Organizations", desc: "Tribal nations and Indigenous-led groups stewarding ancestral lands and territories." },
              { title: "Conservation Funders", desc: "Philanthropies, DAFs, and impact investors directing capital to land protection." },
              { title: "Policy & Advocacy", desc: "Organizations shaping conservation legislation, land use policy, and public funding." },
            ].map((aud, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{
                  padding: "36px 28px",
                  background: C.cream,
                  borderRadius: 12,
                  border: "1px solid rgba(28,31,30,0.05)",
                  height: "100%",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(28,31,30,0.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                >
                  <h4 style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 600,
                    color: C.charcoal, marginBottom: 10,
                  }}>{aud.title}</h4>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 14,
                    color: C.muted, lineHeight: 1.65,
                  }}>{aud.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
              fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 400, lineHeight: 1.12,
              color: C.cream, marginBottom: 24, letterSpacing: "-0.025em",
            }}>
              The land can&apos;t wait
              <br />
              for better <span style={{ fontStyle: "italic", color: C.clay }}>infrastructure</span>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 18, lineHeight: 1.7,
              color: "rgba(248,246,242,0.55)", marginBottom: 48,
              fontWeight: 300,
            }}>
              Whether you&apos;re a land trust looking to modernize your systems, a funder seeking better pipeline visibility, or an organization that knows technology could help but doesn&apos;t know where to start — let&apos;s talk.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 600,
                background: C.clay, color: C.cream,
                borderRadius: 10, padding: "16px 40px",
                cursor: "pointer", transition: "all 0.3s",
                boxShadow: "0 4px 24px rgba(196,113,59,0.25)",
                textDecoration: "none", display: "inline-block",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = C.amber; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.clay; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Start a Conversation →
              </Link>
              <button style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 500,
                background: "transparent", color: "rgba(248,246,242,0.7)",
                border: "1px solid rgba(248,246,242,0.15)", borderRadius: 10, padding: "16px 36px",
                cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.borderColor = "rgba(248,246,242,0.35)"; (e.target as HTMLButtonElement).style.color = C.cream; }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.borderColor = "rgba(248,246,242,0.15)"; (e.target as HTMLButtonElement).style.color = "rgba(248,246,242,0.7)"; }}
              >
                hello@giverise.ai
              </button>
            </div>
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
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17,
              color: C.cream,
            }}>
              GiveRise<span style={{ color: C.clay }}>.ai</span>
            </span>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 13,
              color: "rgba(248,246,242,0.3)", marginTop: 6,
            }}>
              Technology infrastructure for land conservation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Services", "Groundtrust", "About", "Contact", "Privacy"].map((link) => (
              <a key={link} href="#" style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 13,
                color: "rgba(248,246,242,0.35)", textDecoration: "none",
                transition: "color 0.3s",
              }}
                onMouseEnter={e => (e.target as HTMLAnchorElement).style.color = C.clay}
                onMouseLeave={e => (e.target as HTMLAnchorElement).style.color = "rgba(248,246,242,0.35)"}
              >{link}</a>
            ))}
          </div>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 12,
            color: "rgba(248,246,242,0.2)", width: "100%", textAlign: "center",
            marginTop: 20, paddingTop: 20,
            borderTop: "1px solid rgba(248,246,242,0.04)",
          }}>
            © 2026 GiveRise.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
