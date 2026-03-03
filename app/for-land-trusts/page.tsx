import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Land Trusts | GiveRise.ai",
  description:
    "Partner with GiveRise to extend your conservation mission through Indigenous land stewardship — at scale, without scale-equivalent overhead.",
};

const roles = [
  {
    title: "Verification partner",
    desc: "Review and verify Indigenous stewardship projects in your region or area of expertise. Your accreditation provides the credibility funders need.",
  },
  {
    title: "Long-term stewardship oversight",
    desc: "Maintain ongoing oversight of funded projects to ensure conservation outcomes are achieved and documented. GiveRise handles the reporting infrastructure.",
  },
  {
    title: "Relationship facilitator",
    desc: "Help stewards and funders navigate the relationship — providing cultural context, legal support, and conservation expertise where needed.",
  },
];

const benefits = [
  {
    icon: "📐",
    title: "Scale without overhead",
    desc: "Manage relationships with dozens of stewardship projects using GiveRise's coordination infrastructure — not more staff.",
  },
  {
    icon: "🔄",
    title: "New funding pipelines",
    desc: "Connect your existing portfolio to funders who are actively looking for the kind of work your partners are doing.",
  },
  {
    icon: "📋",
    title: "Streamlined compliance",
    desc: "Reporting tools designed to satisfy funder requirements, IRS standards, and conservation easement obligations — automatically.",
  },
  {
    icon: "🌐",
    title: "National visibility",
    desc: "Your land trust's work gains visibility with funders, stewards, and partners across the country who wouldn't otherwise find you.",
  },
  {
    icon: "🧭",
    title: "Interoperability",
    desc: "GiveRise integrates with existing conservation databases, GIS systems, and CRM tools your team already uses.",
  },
  {
    icon: "🤲",
    title: "Mission alignment",
    desc: "Work with Indigenous-led stewardship projects that represent some of the highest-integrity conservation happening today.",
  },
];

export default function ForLandTrustsPage() {
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
            For Land Trusts
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-bone leading-tight mb-6 tracking-tight max-w-3xl">
            The coordination layer{" "}
            <span className="font-semibold italic" style={{ color: "#e8dcc8" }}>
              you&apos;ve been
            </span>{" "}
            building manually.
          </h1>
          <p
            className="font-sans text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(232,220,200,0.75)" }}
          >
            You already connect stewards, funders, and conservation outcomes.
            GiveRise gives you the infrastructure to do that work at ten times
            the scale — without ten times the staff.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-bone"
              style={{ background: "#c4713b", boxShadow: "0 4px 24px rgba(196,113,59,0.3)" }}
            >
              Partner With Us →
            </button>
            <Link
              href="/how-it-works"
              className="font-sans font-medium text-base px-8 py-4 rounded-xl"
              style={{
                color: "rgba(232,220,200,0.8)",
                border: "1px solid rgba(232,220,200,0.2)",
              }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-3 tracking-tight">
            Your role in the platform
          </h2>
          <p className="font-sans text-stone mb-12 max-w-xl">
            Land trusts are partners, not gatekeepers. GiveRise is built to
            amplify your expertise, not replace your judgment.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <div
                key={r.title}
                className="rounded-2xl p-8 border border-earth/8 bg-bone-cream"
              >
                <div
                  className="font-sans text-4xl font-bold mb-5 leading-none"
                  style={{ color: "rgba(45,74,62,0.1)" }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-sans font-bold text-base text-earth mb-3">
                  {r.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifier, not gatekeeper callout */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, rgba(45,74,62,0.04), rgba(196,113,59,0.04))" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl bg-bone p-12 border border-earth/6">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-earth mb-5 tracking-tight">
              Verifier, not gatekeeper.
            </h2>
            <p className="font-sans text-stone leading-relaxed text-base mb-6">
              GiveRise is built on a clear principle: land trusts validate and
              support stewardship work, but they do not control which projects
              can participate. Your role is to confirm legitimacy and provide
              oversight — not to approve or reject community initiatives.
            </p>
            <p className="font-sans text-stone leading-relaxed text-base">
              This model protects your accreditation while respecting Indigenous
              sovereignty. You bring your expertise; communities bring their
              knowledge of the land.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 bg-bone">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-12 tracking-tight">
            What your organization gains
          </h2>
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

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #0f1a15, #2d4a3e)" }}
      >
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-3xl font-light text-bone mb-4 tracking-tight">
            Become a founding partner
          </h2>
          <p className="font-sans mb-8" style={{ color: "rgba(232,220,200,0.65)" }}>
            We&apos;re building our initial network of land trust partners now.
            Help shape how the platform works — and get first access when we
            launch.
          </p>
          <button
            className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-bone"
            style={{ background: "#c4713b" }}
          >
            Partner With Us →
          </button>
          <p
            className="font-sans text-xs mt-4"
            style={{ color: "rgba(232,220,200,0.35)" }}
          >
            For accredited land trusts and conservation organizations.
          </p>
        </div>
      </section>
    </div>
  );
}
