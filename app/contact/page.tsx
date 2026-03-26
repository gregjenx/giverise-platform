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
      { threshold: 0.1 }
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

const fieldLabel: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: "#1c1f1e",
  letterSpacing: "0.02em",
  display: "block",
  marginBottom: 8,
};

const inputBase: React.CSSProperties = {
  width: "100%",
  fontFamily: "'Outfit', sans-serif",
  fontSize: 16,
  color: "#1c1f1e",
  background: "#fff",
  border: "1px solid rgba(28,31,30,0.14)",
  borderRadius: 8,
  padding: "14px 16px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ background: C.cream, minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 767px) {
          .ct-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ct-name-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <SiteNav />

      {/* Hero */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          paddingLeft: 32,
          paddingRight: 32,
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
              Contact
            </p>
            <h1
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: C.charcoal,
                letterSpacing: "-0.02em",
                marginBottom: 28,
              }}
            >
              Let&apos;s figure out what you need
            </h1>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 18,
                lineHeight: 1.75,
                color: C.muted,
                maxWidth: 600,
              }}
            >
              Most engagements start with a conversation, not a proposal. Tell
              us what you&apos;re working on and we&apos;ll respond with an
              honest perspective on how we can help.
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
          borderTop: "1px solid rgba(28,31,30,0.08)",
        }}
      />

      {/* Two-column: form + contact info */}
      <section style={{ padding: "80px 32px 100px" }}>
        <div
          className="ct-layout"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left: Form */}
          <Reveal>
            {submitted ? (
              <div
                style={{
                  padding: "48px 40px",
                  background: C.warm,
                  borderRadius: 12,
                  borderLeft: `3px solid ${C.clay}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 30,
                    fontWeight: 400,
                    color: C.charcoal,
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Thanks — we&apos;ll be in touch.
                </h2>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: C.muted,
                  }}
                >
                  We&apos;ve received your message and will respond within two
                  business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                <div
                  className="ct-name-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                  }}
                >
                  <div>
                    <label style={fieldLabel}>Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputBase}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = C.clay)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(28,31,30,0.14)")
                      }
                    />
                  </div>
                  <div>
                    <label style={fieldLabel}>Organization</label>
                    <input
                      name="org"
                      type="text"
                      value={form.org}
                      onChange={handleChange}
                      style={inputBase}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = C.clay)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(28,31,30,0.14)")
                      }
                    />
                  </div>
                </div>

                <div>
                  <label style={fieldLabel}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = C.clay)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(28,31,30,0.14)")
                    }
                  />
                </div>

                <div>
                  <label style={fieldLabel}>Tell us what you&apos;re working on</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputBase, resize: "vertical" }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = C.clay)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(28,31,30,0.14)")
                    }
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 16,
                      fontWeight: 600,
                      background: sending ? C.light : C.charcoal,
                      color: C.cream,
                      border: "none",
                      borderRadius: 10,
                      padding: "16px 40px",
                      cursor: sending ? "not-allowed" : "pointer",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      if (sending) return;
                      e.currentTarget.style.background = C.slate;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      if (sending) return;
                      e.currentTarget.style.background = C.charcoal;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                  {error && (
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 14,
                        color: "#b94040",
                        marginTop: 16,
                      }}
                    >
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>

          {/* Right: Contact info */}
          <Reveal delay={150}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 0, paddingTop: 8 }}
            >
              <div style={{ paddingBottom: 40 }}>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.clay,
                    marginBottom: 14,
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@giverise.ai"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 22,
                    color: C.charcoal,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    transition: "color 0.3s",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = C.clay)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = C.charcoal)
                  }
                >
                  hello@giverise.ai
                </a>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(28,31,30,0.08)",
                  paddingTop: 40,
                  paddingBottom: 40,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.clay,
                    marginBottom: 14,
                  }}
                >
                  Phone
                </p>
                <a
                  href="tel:+12025078000"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 22,
                    color: C.charcoal,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    transition: "color 0.3s",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = C.clay)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = C.charcoal)
                  }
                >
                  (202) 507-8000
                </a>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(28,31,30,0.08)",
                  paddingTop: 40,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: C.clay,
                    marginBottom: 14,
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 22,
                    color: C.charcoal,
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Whitefish, Montana
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: C.muted,
                  }}
                >
                  Based in northwest Montana, working with conservation
                  organizations everywhere.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing line */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto 100px",
          padding: "0 32px",
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 15,
              color: C.light,
              borderTop: "1px solid rgba(28,31,30,0.08)",
              paddingTop: 32,
            }}
          >
            We respond to every inquiry within two business days.
          </p>
        </Reveal>
      </div>

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
                color: C.cream,
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
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
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
                  (e.currentTarget.style.color = C.clay)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(248,246,242,0.35)")
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
