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

const services = [
  {
    number: "01",
    title: "Technology Strategy",
    accent: C.clay,
    tagline: "Know what to build before you spend anything.",
    description:
      "Most conservation organizations make technology decisions reactively — adopting tools under pressure, replacing systems that were never right for the job, and paying ongoing costs for software nobody uses. We help you step back, assess what you actually have, and design a technology plan that matches your operational reality — not someone else's best practices.",
    included: [
      {
        label: "Systems audit",
        detail:
          "A full inventory of every tool, database, and manual process your team relies on — mapped to the work it actually supports.",
      },
      {
        label: "Stakeholder interviews",
        detail:
          "Conversations with staff, partners, and sometimes communities to understand where friction lives and where systems fail at the edges.",
      },
      {
        label: "Build vs. buy analysis",
        detail:
          "An honest assessment of what exists in the market, what can be configured, and what genuinely needs to be built from scratch.",
      },
      {
        label: "Technology roadmap",
        detail:
          "A prioritized, phased plan with clear rationale — written for leadership, not for engineers.",
      },
      {
        label: "Vendor evaluation",
        detail:
          "If procurement is on the horizon, we help you write requirements, evaluate proposals, and avoid the vendor pitches that sound better than they are.",
      },
    ],
    whoFor:
      "Land trusts and conservation organizations approaching a major technology decision — a new database, a donor management system, a field reporting tool — or those who sense their current stack isn't working but can't articulate why. Also valuable for funders evaluating grantee technology capacity.",
    engagement:
      "6–8 week engagement. Begins with a structured discovery phase (stakeholder interviews, system inventory), followed by analysis and a written strategy document. Delivered as a working session with your leadership team, not just a report in a folder.",
  },
  {
    number: "02",
    title: "AI Readiness",
    accent: C.forest,
    tagline: "Find where AI actually helps — before you invest.",
    description:
      "AI is genuinely useful for some conservation work and genuinely irrelevant for most of it. The challenge is telling the difference before you've spent six months and a significant budget on a pilot that doesn't deliver. We assess your organization's specific workflows, data quality, and team capacity to identify the narrow set of applications where AI will create real operational value — and the broader set where it won't.",
    included: [
      {
        label: "Use case identification",
        detail:
          "A structured process to surface the specific tasks in your organization where AI could meaningfully reduce burden or improve quality — document review, report drafting, ecological data classification, and more.",
      },
      {
        label: "Data readiness audit",
        detail:
          "AI is only as good as the data it runs on. We assess whether your existing data — in whatever form it lives — is sufficient to support the use cases you're considering.",
      },
      {
        label: "Risk and ethics assessment",
        detail:
          "For organizations working with Indigenous communities or sensitive land data, we identify where AI introduces risks to sovereignty, privacy, or trust — and what guardrails are required.",
      },
      {
        label: "Pilot design",
        detail:
          "For high-confidence use cases, we design a time-bounded pilot with clear success criteria so you can evaluate AI performance before committing to a full implementation.",
      },
      {
        label: "Team training",
        detail:
          "A practical workshop that builds staff fluency with AI tools — focused on your actual workflows, not generic demonstrations.",
      },
    ],
    whoFor:
      "Organizations that have heard the AI pitch from every direction and want a grounded, skeptical assessment of where it's actually relevant to their work. Also useful for funders considering AI grants or capacity-building investments across a portfolio.",
    engagement:
      "4-week assessment, culminating in an AI Readiness Report: a prioritized list of use cases with honest assessments of feasibility, risk, and expected value. Optionally followed by a pilot design and implementation phase for the highest-confidence applications.",
  },
  {
    number: "03",
    title: "Data Infrastructure",
    accent: C.slate,
    tagline: "Make the data you already have usable.",
    description:
      "Conservation organizations generate enormous amounts of data — field observations, monitoring records, stewardship reports, ecological assessments, donor interactions — and most of it is effectively inaccessible. It lives in spreadsheets that don't talk to each other, PDFs that can't be searched, and institutional knowledge that leaves when people do. We build the systems that make your data coherent, queryable, and actionable without requiring a data engineering team to maintain.",
    included: [
      {
        label: "Data architecture design",
        detail:
          "A structured model for how your data should be organized, stored, and related — designed around your reporting obligations and operational workflows.",
      },
      {
        label: "Pipeline development",
        detail:
          "Automated connections between data sources — field tools, monitoring systems, donor databases — so data flows to where it's needed without manual re-entry.",
      },
      {
        label: "Reporting systems",
        detail:
          "Dashboards and reporting tools that answer the questions you actually ask — grant reporting, ecological outcomes, stewardship activity — without requiring a data analyst to pull every report.",
      },
      {
        label: "Interoperability",
        detail:
          "Integration with the conservation data standards and systems your funders, partners, and regulators already use — so your data counts in the broader ecosystem.",
      },
      {
        label: "Documentation and handoff",
        detail:
          "Every system we build is documented so your team can maintain, extend, and adapt it without depending on us.",
      },
    ],
    whoFor:
      "Organizations with growing reporting obligations they can't meet efficiently with current tools. Land trusts managing multiple easements with inconsistent records. Conservation programs trying to demonstrate ecological outcomes to funders. Coalitions that need to aggregate data across member organizations.",
    engagement:
      "Scoped based on complexity. A typical initial engagement is 3–6 months, beginning with a data audit and architecture phase before any building begins. We strongly recommend a paid scoping phase before committing to a full build — the design decisions made in the first four weeks determine everything that follows.",
  },
  {
    number: "04",
    title: "Platform Design & Development",
    accent: C.clay,
    tagline: "Build it when nothing off-the-shelf exists.",
    description:
      "Sometimes the tool an organization needs doesn't exist — because the problem is specific enough, or the community it serves has been ignored by mainstream software, or the operational model is sufficiently different from what existing platforms assume. When that's the case, we design and build it. We work from scoping through field-tested launch, with community involvement at every stage that matters.",
    included: [
      {
        label: "Product scoping",
        detail:
          "A rigorous process to define what the platform needs to do, what it explicitly doesn't need to do, and what success looks like before a line of code is written.",
      },
      {
        label: "UX research",
        detail:
          "Interviews and observation with the actual people who will use the tool — in the contexts where they'll use it. Field workers, not personas.",
      },
      {
        label: "Design and prototyping",
        detail:
          "Interactive prototypes tested with real users before development begins. We find the problems in the design before they're expensive to fix.",
      },
      {
        label: "MVP development",
        detail:
          "A working, deployable product that solves the core problem — built to be extended, not rebuilt. We use modern, maintainable technology that your team or future contractors can work with.",
      },
      {
        label: "Field testing",
        detail:
          "Structured testing in the actual conditions the platform will operate in — including limited connectivity, non-native language users, and the other realities of field-based conservation work.",
      },
      {
        label: "Launch and transition support",
        detail:
          "We don't disappear at deployment. We support the launch period, document everything, and train your team to own what we've built together.",
      },
    ],
    whoFor:
      "Organizations with a clearly articulated operational problem that no existing tool solves. Coalitions or networks that need shared infrastructure their members will actually adopt. Funders considering catalytic technology investments in a specific conservation domain.",
    engagement:
      "4–12 months depending on scope, always beginning with a paid scoping phase (4–6 weeks). The scoping phase produces a product brief, wireframes, and a development estimate — which you can use to proceed with us or take to another team. We will tell you honestly if the scoping reveals that an existing tool would solve your problem.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{
      background: C.cream,
      color: C.charcoal,
      fontFamily: "'Instrument Serif', Georgia, serif",
      overflowX: "hidden",
    }}>
      <SiteNav />

      {/* ─── HERO ─── */}
      <section style={{
        padding: "160px 32px 100px",
        position: "relative",
        borderBottom: `1px solid rgba(28,31,30,0.07)`,
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.022,
          backgroundImage: `linear-gradient(${C.charcoal} 1px, transparent 1px), linear-gradient(90deg, ${C.charcoal} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <Reveal>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, fontWeight: 600, color: C.clay,
              letterSpacing: "0.14em", textTransform: "uppercase",
              marginBottom: 28, display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{ width: 36, height: 1.5, background: C.clay }} />
              What We Do
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 style={{
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 400, lineHeight: 1.04,
              color: C.charcoal, letterSpacing: "-0.03em",
              marginBottom: 24, maxWidth: 780,
            }}>
              Services
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(17px, 1.8vw, 21px)",
              lineHeight: 1.65, color: C.muted,
              maxWidth: 560, fontWeight: 300,
            }}>
              Technology engagements for land conservation organizations — from strategy through production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SERVICE INDEX ─── */}
      <section style={{ padding: "0 32px", background: C.sand, borderBottom: `1px solid rgba(28,31,30,0.07)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderLeft: `1px solid rgba(28,31,30,0.07)`,
          }}>
            {services.map((s) => (
              <a
                key={s.number}
                href={`#service-${s.number}`}
                style={{
                  display: "block",
                  padding: "28px 24px",
                  borderRight: `1px solid rgba(28,31,30,0.07)`,
                  textDecoration: "none",
                  transition: "background 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = C.warm}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "transparent"}
              >
                <div style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 22, color: C.light,
                  marginBottom: 10, lineHeight: 1,
                }}>
                  {s.number}
                </div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 15, fontWeight: 600,
                  color: C.charcoal, lineHeight: 1.3,
                }}>
                  {s.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE SECTIONS ─── */}
      {services.map((service, idx) => (
        <section
          key={service.number}
          id={`service-${service.number}`}
          style={{
            padding: "100px 32px",
            background: idx % 2 === 0 ? C.cream : C.warm,
            borderBottom: `1px solid rgba(28,31,30,0.07)`,
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {/* Section header */}
            <Reveal>
              <div style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 40,
                marginBottom: 72,
                alignItems: "start",
              }}>
                <span style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 44, color: C.light,
                  lineHeight: 1,
                }}>
                  {service.number}
                </span>
                <div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12, fontWeight: 600, color: service.accent,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    marginBottom: 14,
                  }}>
                    {service.tagline}
                  </div>
                  <h2 style={{
                    fontSize: "clamp(30px, 3.5vw, 46px)",
                    fontWeight: 400, lineHeight: 1.1,
                    color: C.charcoal, letterSpacing: "-0.025em",
                    marginBottom: 20,
                  }}>
                    {service.title}
                  </h2>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 18, lineHeight: 1.75,
                    color: C.muted, fontWeight: 300,
                    maxWidth: 680,
                  }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Three-column detail grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1fr",
              gap: 40,
              paddingTop: 48,
              borderTop: `1px solid rgba(28,31,30,0.07)`,
            }}>

              {/* What's included */}
              <Reveal delay={80}>
                <div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11, fontWeight: 700, color: C.light,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    marginBottom: 28,
                  }}>
                    What&apos;s Included
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {service.included.map((item) => (
                      <div key={item.label}>
                        <div style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 15, fontWeight: 600,
                          color: C.charcoal, marginBottom: 4,
                          display: "flex", alignItems: "baseline", gap: 8,
                        }}>
                          <span style={{ color: service.accent, fontSize: 12 }}>●</span>
                          {item.label}
                        </div>
                        <p style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: 14, lineHeight: 1.65,
                          color: C.muted, paddingLeft: 20,
                        }}>
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Who it's for */}
              <Reveal delay={160}>
                <div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11, fontWeight: 700, color: C.light,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    marginBottom: 28,
                  }}>
                    Who It&apos;s For
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 15, lineHeight: 1.75,
                    color: C.charcoal, fontWeight: 300,
                  }}>
                    {service.whoFor}
                  </p>
                </div>
              </Reveal>

              {/* Engagement format */}
              <Reveal delay={240}>
                <div>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11, fontWeight: 700, color: C.light,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    marginBottom: 28,
                  }}>
                    Typical Engagement
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 15, lineHeight: 1.75,
                    color: C.charcoal, fontWeight: 300,
                  }}>
                    {service.engagement}
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section style={{
        padding: "140px 32px",
        background: C.charcoal,
        position: "relative",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(${C.cream} 1px, transparent 1px), linear-gradient(90deg, ${C.cream} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              fontWeight: 400, lineHeight: 1.12,
              color: C.cream, letterSpacing: "-0.025em",
              marginBottom: 24,
            }}>
              Not sure which service
              <br />
              fits your <span style={{ fontStyle: "italic", color: C.clay }}>situation</span>?
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 18, lineHeight: 1.7,
              color: "rgba(250,248,244,0.55)",
              marginBottom: 48, fontWeight: 300,
            }}>
              Most engagements start with a conversation, not a scope of work. Tell us what you&apos;re dealing with and we&apos;ll tell you honestly whether and how we can help.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16, fontWeight: 600,
                  background: C.clay, color: C.cream,
                  borderRadius: 10, padding: "16px 40px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  display: "inline-block",
                  boxShadow: "0 4px 24px rgba(196,113,59,0.25)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = C.amber;
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = C.clay;
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Start a Conversation →
              </Link>
              <a
                href="mailto:hello@giverise.ai"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 16, fontWeight: 500,
                  background: "transparent",
                  color: "rgba(250,248,244,0.7)",
                  border: "1px solid rgba(250,248,244,0.15)",
                  borderRadius: 10, padding: "16px 36px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  display: "inline-block",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,248,244,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.color = C.cream;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,248,244,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,244,0.7)";
                }}
              >
                hello@giverise.ai
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        padding: "48px 32px",
        background: C.dark,
        borderTop: "1px solid rgba(248,246,242,0.04)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700, fontSize: 17, color: C.cream,
            }}>
              GiveRise<span style={{ color: C.clay }}>.ai</span>
            </span>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13, color: "rgba(250,248,244,0.3)", marginTop: 6,
            }}>
              Technology infrastructure for land conservation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { label: "Services", href: "/services" },
              { label: "Groundtrust", href: "/groundtrust" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13,
                  color: "rgba(250,248,244,0.35)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = C.clay}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,248,244,0.35)"}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 12, color: "rgba(250,248,244,0.2)",
            width: "100%", textAlign: "center",
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
