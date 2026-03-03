import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Land Stewards | GiveRise.ai",
  description:
    "List your Indigenous or community-led land stewardship project and connect with aligned conservation funders — on your terms.",
};

const benefits = [
  {
    icon: "🌿",
    title: "No grant writer needed",
    desc: "A guided listing process replaces the 40-page application. You describe your work in your own words, at your own pace.",
  },
  {
    icon: "🛡️",
    title: "Full data sovereignty",
    desc: "You control exactly what information is shared, with whom, and when. Nothing leaves the platform without your consent.",
  },
  {
    icon: "📡",
    title: "Verified without bureaucracy",
    desc: "A partner land trust and satellite monitoring data verify your stewardship activity — no 501(c)(3) or institutional affiliation required.",
  },
  {
    icon: "🤝",
    title: "Direct funder relationships",
    desc: "Connect with funders who actually understand land stewardship — not grant officers evaluating spreadsheets.",
  },
  {
    icon: "📊",
    title: "Field-first reporting",
    desc: "Photo check-ins, GPS-tagged updates, and automated ecological indicators replace the paperwork cycle.",
  },
  {
    icon: "💸",
    title: "Free to list, always",
    desc: "GiveRise never charges stewards for access. Our model is funded by the funders and land trusts we serve.",
  },
];

const steps = [
  {
    num: "1",
    title: "Create a project profile",
    desc: "Describe your land, your community, and your stewardship work. Share as much or as little as you choose. No template required.",
  },
  {
    num: "2",
    title: "Get verified",
    desc: "A land trust partner reviews your project. GiveRise provides supporting data from satellite monitoring. This usually takes 2–4 weeks.",
  },
  {
    num: "3",
    title: "Get discovered",
    desc: "Your verified project is surfaced to funders whose priorities match yours. You decide whether to respond.",
  },
  {
    num: "4",
    title: "Build a relationship",
    desc: "GiveRise facilitates introductions on your timeline. Funding follows relationships — not the other way around.",
  },
];

export default function ForStewardsPage() {
  return (
    <div className="bg-bone text-earth">
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6"
        style={{
          background: "linear-gradient(160deg, #0f1a15 0%, #2d4a3e 60%, #3d6b5a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-semibold text-clay uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-clay" />
            For Land Stewards
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-bone leading-tight mb-6 tracking-tight max-w-2xl">
            Your land.{" "}
            <span className="font-semibold italic" style={{ color: "#e8dcc8" }}>
              Your terms.
            </span>{" "}
            Your future.
          </h1>
          <p
            className="font-sans text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(232,220,200,0.75)" }}
          >
            GiveRise makes it possible for Indigenous and community-led land
            stewardship projects to reach aligned funders — without sacrificing
            sovereignty, data, or your team&apos;s time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-bone transition-all"
              style={{ background: "#c4713b", boxShadow: "0 4px 24px rgba(196,113,59,0.3)" }}
            >
              Join the Waitlist →
            </button>
            <Link
              href="/how-it-works"
              className="font-sans font-medium text-base px-8 py-4 rounded-xl transition-all"
              style={{
                color: "rgba(232,220,200,0.8)",
                border: "1px solid rgba(232,220,200,0.2)",
              }}
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-24 px-6 bg-bone">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-3 tracking-tight">
            What stewards get
          </h2>
          <p className="font-sans text-stone mb-12 max-w-lg">
            GiveRise is built around your needs — not the other way around.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-bone-cream rounded-2xl p-7 border border-earth/5 hover:border-forest/20 transition-colors"
              >
                <div className="text-3xl mb-5">{b.icon}</div>
                <h3 className="font-sans font-bold text-base text-earth mb-2">
                  {b.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for stewards */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(180deg, #0f1a15, #2d4a3e)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-bone mb-3 tracking-tight">
            What to expect
          </h2>
          <p className="font-sans mb-14" style={{ color: "rgba(232,220,200,0.6)" }}>
            From first listing to first funder relationship.
          </p>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-8 items-start">
                <div
                  className="font-sans font-bold text-4xl leading-none shrink-0 w-12 text-right"
                  style={{ color: "rgba(232,220,200,0.12)" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-bone mb-2">
                    {step.title}
                  </h3>
                  <p
                    className="font-sans text-base leading-relaxed"
                    style={{ color: "rgba(232,220,200,0.6)" }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereignty note */}
      <section className="py-20 px-6 bg-bone-cream">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-clay pl-8">
            <p className="font-serif text-xl md:text-2xl font-light text-earth leading-relaxed italic mb-4">
              &ldquo;GiveRise will never require you to share more than you want
              to. Indigenous data sovereignty is not a feature — it is the
              foundation.&rdquo;
            </p>
            <p className="font-sans text-sm text-stone">The GiveRise Charter</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-bone text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-3xl font-light text-earth mb-4 tracking-tight">
            Ready to list your project?
          </h2>
          <p className="font-sans text-stone mb-8">
            GiveRise launches in 2026. Join the waitlist and be among the first
            stewards on the platform.
          </p>
          <button
            className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-bone transition-all"
            style={{ background: "#c4713b" }}
          >
            Join the Waitlist →
          </button>
          <p className="font-sans text-xs text-stone/60 mt-4">
            Free for land stewards. Always.
          </p>
        </div>
      </section>
    </div>
  );
}
