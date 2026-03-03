"use client";

import { useState } from "react";
import Link from "next/link";
import { COLORS } from "@/lib/colors";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export default function HomePage() {
  const [activeAudience, setActiveAudience] = useState(0);

  const audiences = [
    {
      id: "stewards",
      label: "Land Stewards",
      title: "Your work deserves funding without the red tape.",
      description:
        "List your project in minutes, not months. GiveRise verifies your stewardship work, surfaces it to aligned funders, and handles the reporting tools — so you can stay on the land, not behind a desk.",
      cta: "List Your Project",
      features: [
        "Simple project listing — no grant writer needed",
        "Verification through community + satellite data",
        "Direct relationship with your funders",
        "Reporting tools built for field work, not boardrooms",
      ],
    },
    {
      id: "funders",
      label: "Funders",
      title: "See exactly where every dollar lands.",
      description:
        "GiveRise gives you a verified pipeline of Indigenous and community-led conservation projects with radical transparency. No intermediaries skimming overhead. No black-box impact reports.",
      cta: "Explore Projects",
      features: [
        "Verified, fund-ready projects surfaced to you",
        "Real-time fund tracking and impact dashboards",
        "Direct steward relationships, not intermediary reports",
        "Portfolio-level view across geographies and ecosystems",
      ],
    },
    {
      id: "trusts",
      label: "Land Trusts",
      title: "The coordination layer you've been building manually.",
      description:
        "You already do this work — connecting stewards to resources, managing relationships, tracking outcomes. GiveRise gives you the infrastructure to do it at ten times the scale without ten times the staff.",
      cta: "Partner With Us",
      features: [
        "Manage steward relationships at scale",
        "Streamlined reporting that satisfies every stakeholder",
        "Connect your portfolio to new funding pipelines",
        "Interoperable with existing conservation databases",
      ],
    },
  ];

  return (
    <div
      style={{
        background: COLORS.bone,
        color: COLORS.earth,
        fontFamily: "var(--font-source-serif), Georgia, serif",
        overflowX: "hidden",
      }}
    >
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: `linear-gradient(165deg, ${COLORS.deep} 0%, ${COLORS.forest} 40%, ${COLORS.canopy} 100%)`,
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 80px",
        }}
      >
        {/* Topographic texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage: `
              repeating-conic-gradient(${COLORS.sand} 0% 25%, transparent 0% 50%) 0 0 / 60px 60px,
              repeating-conic-gradient(${COLORS.sand} 0% 25%, transparent 0% 50%) 30px 30px / 60px 60px
            `,
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(196,113,59,0.15) 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: COLORS.clay,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ width: 40, height: 1, background: COLORS.clay }} />
              The coordination layer for land conservation
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 76px)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: COLORS.cream,
                maxWidth: 900,
                marginBottom: 28,
                letterSpacing: "-0.025em",
              }}
            >
              The land knows{" "}
              <span style={{ fontWeight: 700, fontStyle: "italic", color: COLORS.sand }}>
                who
              </span>{" "}
              should steward it.
              <br />
              <span style={{ color: COLORS.clay, fontWeight: 600 }}>
                The money doesn&apos;t.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: 1.65,
                color: "rgba(232,220,200,0.75)",
                maxWidth: 620,
                marginBottom: 48,
                fontWeight: 300,
              }}
            >
              GiveRise connects Indigenous and community-led land stewardship
              projects directly to the funders who want to support them — with
              radical transparency, zero bureaucratic overhead, and tools built
              for the field.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  background: COLORS.clay,
                  color: COLORS.bone,
                  border: "none",
                  borderRadius: 10,
                  padding: "16px 36px",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 24px rgba(196,113,59,0.3)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.amber;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(196,113,59,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = COLORS.clay;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(196,113,59,0.3)";
                }}
              >
                Join the Waitlist →
              </button>
              <Link
                href="/how-it-works"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 16,
                  fontWeight: 500,
                  background: "transparent",
                  color: COLORS.sand,
                  border: `1px solid rgba(232,220,200,0.25)`,
                  borderRadius: 10,
                  padding: "16px 36px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,220,200,0.5)";
                  e.currentTarget.style.background = "rgba(232,220,200,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,220,200,0.25)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                See How It Works
              </Link>
            </div>
          </Reveal>

          {/* Trust signals */}
          <Reveal delay={600}>
            <div
              style={{
                marginTop: 80,
                paddingTop: 40,
                borderTop: "1px solid rgba(232,220,200,0.1)",
                display: "flex",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  num: 80,
                  suffix: "%",
                  label:
                    "of conservation funding never reaches\ncommunity-led projects",
                },
                {
                  num: 370,
                  suffix: "M+",
                  label:
                    "acres stewarded by Indigenous peoples\nworldwide — largely unfunded",
                },
                {
                  num: 0,
                  suffix: "",
                  label:
                    "platforms built specifically for\nthis coordination gap",
                  special: true,
                },
              ].map((stat, i) => (
                <div key={i} style={{ minWidth: 180 }}>
                  <div
                    style={{
                      fontSize: stat.special ? 48 : 44,
                      fontWeight: 700,
                      color: stat.special ? COLORS.clay : COLORS.cream,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.special ? (
                      "Zero"
                    ) : (
                      <Counter end={stat.num} suffix={stat.suffix} />
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(232,220,200,0.5)",
                      lineHeight: 1.5,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      marginTop: 8,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── THE GAP ─── */}
      <section style={{ padding: "120px 24px", background: COLORS.bone }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 800 }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLORS.clay,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div style={{ width: 40, height: 1, background: COLORS.clay }} />
                The Problem
              </div>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: COLORS.earth,
                  marginBottom: 24,
                  letterSpacing: "-0.02em",
                }}
              >
                Conservation has a{" "}
                <span style={{ fontWeight: 700, color: COLORS.forest }}>
                  routing problem
                </span>
                , not a funding problem.
              </h2>
              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.7,
                  color: COLORS.stone,
                  maxWidth: 640,
                }}
              >
                Billions flow into land conservation every year. But the
                communities doing the most effective stewardship — Indigenous
                peoples, local land managers, grassroots organizations — see
                almost none of it. The money exists. The projects exist.
                What&apos;s missing is the connective tissue between them.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginTop: 64,
            }}
          >
            {[
              {
                icon: "🔍",
                title: "Invisible projects",
                desc: "Thousands of community-led stewardship initiatives can't get seen by funders because they lack the grant-writing infrastructure, nonprofit status, or institutional connections the system demands.",
              },
              {
                icon: "🏛️",
                title: "Bureaucratic gravity",
                desc: "The average conservation grant takes 6–18 months from application to funds deployed. Most community projects can't wait — or can't afford the overhead to even apply.",
              },
              {
                icon: "🔒",
                title: "Opacity by design",
                desc: "Funders can't trace where their money goes. Stewards can't prove their impact without expensive monitoring. Trust breaks down on both sides.",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 150}>
                <div
                  style={{
                    background: COLORS.cream,
                    borderRadius: 16,
                    padding: 40,
                    border: "1px solid rgba(26,26,14,0.06)",
                    transition: "all 0.4s ease",
                    cursor: "default",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(26,26,14,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{card.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: COLORS.earth,
                      marginBottom: 12,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: COLORS.stone }}>
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        style={{
          padding: "120px 24px",
          background: `linear-gradient(180deg, ${COLORS.deep} 0%, ${COLORS.forest} 100%)`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: `radial-gradient(circle at 2px 2px, ${COLORS.sand} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: COLORS.clay,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 24,
                }}
              >
                How GiveRise Works
              </div>
              <h2
                style={{
                  fontSize: "clamp(30px, 4vw, 48px)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: COLORS.cream,
                  letterSpacing: "-0.02em",
                }}
              >
                Three layers.{" "}
                <span style={{ fontWeight: 700, color: COLORS.clay }}>
                  One system.
                </span>
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                step: "01",
                title: "Surface & Verify",
                desc: "Indigenous and community-led projects list their work in a simple, guided process. GiveRise combines community-based verification with satellite monitoring and ecological data to confirm stewardship activity — no 501(c)(3) required.",
                accent: COLORS.canopy,
              },
              {
                step: "02",
                title: "Match & Fund",
                desc: "Donors, philanthropies, and impact investors browse verified projects by geography, ecosystem, community type, and funding need. Direct funding flows with full transparency — every dollar tracked from commitment to impact.",
                accent: COLORS.clay,
              },
              {
                step: "03",
                title: "Report & Grow",
                desc: "Lightweight reporting tools designed for people in the field, not behind desks. Photo check-ins, GPS-tagged updates, and automated ecological indicators replace 40-page reports. Relationships deepen over time, not over paperwork.",
                accent: COLORS.amber,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 200}>
                <div
                  style={{
                    background: "rgba(245,240,232,0.04)",
                    border: "1px solid rgba(245,240,232,0.08)",
                    borderRadius: 20,
                    padding: 48,
                    height: "100%",
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(245,240,232,0.07)";
                    e.currentTarget.style.borderColor = `${item.accent}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(245,240,232,0.04)";
                    e.currentTarget.style.borderColor =
                      "rgba(245,240,232,0.08)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      right: -10,
                      fontSize: 120,
                      fontWeight: 800,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      color: "rgba(245,240,232,0.03)",
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: item.accent,
                      marginBottom: 16,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: 26,
                      fontWeight: 700,
                      color: COLORS.cream,
                      marginBottom: 16,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "rgba(232,220,200,0.65)",
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

      {/* ─── AUDIENCE TABS ─── */}
      <section style={{ padding: "120px 24px", background: COLORS.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: COLORS.clay,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ width: 40, height: 1, background: COLORS.clay }} />
              Built for Everyone in the System
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}
            >
              {audiences.map((a, i) => (
                <button
                  key={a.id}
                  onClick={() => setActiveAudience(i)}
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    background: activeAudience === i ? COLORS.forest : "transparent",
                    color: activeAudience === i ? COLORS.cream : COLORS.forest,
                    border: `2px solid ${COLORS.forest}`,
                    borderRadius: 10,
                    padding: "12px 28px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            <Reveal>
              <div key={activeAudience}>
                <h3
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 38px)",
                    fontWeight: 300,
                    lineHeight: 1.2,
                    color: COLORS.earth,
                    marginBottom: 20,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {audiences[activeAudience].title}
                </h3>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.7,
                    color: COLORS.stone,
                    marginBottom: 36,
                  }}
                >
                  {audiences[activeAudience].description}
                </p>
                <button
                  style={{
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    background: COLORS.clay,
                    color: COLORS.bone,
                    border: "none",
                    borderRadius: 10,
                    padding: "14px 32px",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = COLORS.amber;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = COLORS.clay;
                  }}
                >
                  {audiences[activeAudience].cta} →
                </button>
              </div>
            </Reveal>

            <div>
              {audiences[activeAudience].features.map((f, i) => (
                <div
                  key={`${activeAudience}-${i}`}
                  style={{
                    padding: "20px 0",
                    borderBottom:
                      i < 3 ? `1px solid rgba(26,26,14,0.08)` : "none",
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    opacity: 0,
                    animation: "fadeSlide 0.5s ease forwards",
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: COLORS.clay,
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: COLORS.earth,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* ─── WHAT WE'RE NOT ─── */}
      <section style={{ padding: "100px 24px", background: COLORS.bone }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                background: `linear-gradient(135deg, rgba(45,74,62,0.05), rgba(196,113,59,0.05))`,
                borderRadius: 24,
                padding: "64px 56px",
                border: "1px solid rgba(26,26,14,0.06)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: COLORS.earth,
                  marginBottom: 32,
                  letterSpacing: "-0.02em",
                }}
              >
                We&apos;re not another{" "}
                <span
                  style={{ textDecoration: "line-through", color: COLORS.stone }}
                >
                  donor platform
                </span>
                .
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 40,
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: COLORS.stone,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    What already exists
                  </h4>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: COLORS.stone }}>
                    Great organizations working on pieces of this — ILCN,
                    Conservation International, The Nature Conservancy,
                    Indigenous-led funds. Each doing critical work in their lane.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: COLORS.clay,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    What GiveRise adds
                  </h4>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: COLORS.earth }}>
                    The connective tissue. A technology-enabled coordination
                    layer that makes all of these efforts interoperable,
                    accessible, and transparent — starting with the communities
                    themselves.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA / WAITLIST ─── */}
      <section
        style={{
          padding: "140px 24px",
          background: `linear-gradient(165deg, ${COLORS.deep} 0%, ${COLORS.forest} 50%, ${COLORS.canopy} 100%)`,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(196,113,59,0.12) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Reveal>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.12,
                color: COLORS.cream,
                marginBottom: 24,
                letterSpacing: "-0.025em",
              }}
            >
              The land can&apos;t wait.
              <br />
              <span style={{ fontWeight: 700, color: COLORS.clay }}>
                Neither should the funding.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.7,
                color: "rgba(232,220,200,0.7)",
                marginBottom: 48,
                maxWidth: 520,
                margin: "0 auto 48px",
              }}
            >
              GiveRise launches in 2026. Join the waitlist as a steward, funder,
              or land trust partner — and help us build conservation&apos;s
              missing infrastructure.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 16,
                  background: "rgba(245,240,232,0.08)",
                  border: "1px solid rgba(245,240,232,0.15)",
                  borderRadius: 10,
                  padding: "16px 24px",
                  width: 320,
                  color: COLORS.cream,
                  outline: "none",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.clay)
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(245,240,232,0.15)")
                }
              />
              <button
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  background: COLORS.clay,
                  color: COLORS.bone,
                  border: "none",
                  borderRadius: 10,
                  padding: "16px 36px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 24px rgba(196,113,59,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = COLORS.amber;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = COLORS.clay;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Join Waitlist →
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div
              style={{
                display: "flex",
                gap: 24,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["I'm a Land Steward", "I'm a Funder", "I'm a Land Trust"].map(
                (role) => (
                  <label
                    key={role}
                    style={{
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      fontSize: 14,
                      color: "rgba(232,220,200,0.6)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <input
                      type="radio"
                      name="role"
                      style={{ accentColor: COLORS.clay }}
                    />
                    {role}
                  </label>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
