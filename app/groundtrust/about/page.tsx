import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "GiveRise is building conservation's missing coordination layer — connecting Indigenous land stewardship with the funders and land trusts who can amplify their work.",
};

const values = [
  {
    title: "Indigenous sovereignty",
    desc: "Land belongs to the people who have stewarded it for generations. GiveRise will never compromise a community's sovereignty over their data, their decisions, or their narrative.",
  },
  {
    title: "Radical transparency",
    desc: "Every dollar tracked. Every outcome documented. Every relationship disclosed. We build trust by making opacity structurally impossible.",
  },
  {
    title: "Ecological integrity",
    desc: "Conservation outcomes — not optics — are what matter. We measure what the land needs, not what funders find easy to report.",
  },
  {
    title: "Relationships over transactions",
    desc: "Long-term stewardship requires long-term trust. GiveRise optimizes for relationships that outlast any individual grant.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-bone text-earth">
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6"
        style={{
          background: "linear-gradient(165deg, #0f1a15 0%, #2d4a3e 50%, #3d6b5a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold text-clay uppercase tracking-widest mb-5">
            About GiveRise
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-bone leading-tight mb-6 tracking-tight">
            Conservation&apos;s missing infrastructure
          </h1>
          <p
            className="font-sans text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(232,220,200,0.75)" }}
          >
            GiveRise exists to close the gap between the communities doing the
            world&apos;s most important land stewardship and the resources they
            deserve.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs font-semibold text-clay uppercase tracking-widest mb-4 flex items-center gap-3">
              <span className="block w-6 h-px bg-clay" />
              Our Mission
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-6 leading-tight tracking-tight">
              Connect stewardship with capital.{" "}
              <span className="font-semibold">Without compromise.</span>
            </h2>
            <p className="font-sans text-stone leading-relaxed text-base mb-5">
              Indigenous peoples protect 80% of the world&apos;s remaining
              biodiversity while holding rights to roughly 22% of its land. The
              conservation funding system — despite billions in annual
              philanthropic flow — barely reaches them.
            </p>
            <p className="font-sans text-stone leading-relaxed text-base">
              The problem isn&apos;t a shortage of funders or a shortage of
              projects. It&apos;s a routing problem. A coordination failure. An
              infrastructure gap. GiveRise is that infrastructure.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { stat: "80%", label: "of Earth's biodiversity protected by Indigenous peoples" },
              { stat: "$7B+", label: "in annual conservation philanthropy largely missing community-led work" },
              { stat: "0", label: "platforms built specifically for this coordination gap — until now" },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-bone-cream rounded-2xl p-6 border border-earth/5"
              >
                <div className="font-sans text-4xl font-bold text-forest mb-1 tracking-tight">
                  {item.stat}
                </div>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we built this */}
      <section className="py-20 px-6 bg-bone-cream">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs font-semibold text-clay uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="block w-6 h-px bg-clay" />
            Why We Built This
          </p>
          <div className="space-y-5 font-sans text-base text-stone leading-relaxed">
            <p>
              The people we spoke with — Indigenous land managers, conservation
              foundation officers, land trust directors — all described the same
              problem differently. Too much money flowing past the communities
              doing the most effective stewardship. Too much overhead in the
              middle. Too little trust on both sides.
            </p>
            <p>
              GiveRise was built in conversation with those communities. Not for
              them. The platform&apos;s core principles — data sovereignty,
              steward-controlled pacing, community-defined metrics — came
              directly from the people it was designed to serve.
            </p>
            <p>
              We are not another conservation nonprofit. We are not another
              impact investing platform. We are coordination infrastructure —
              built to make every existing effort in this space more effective.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-12 tracking-tight text-center">
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-bone-cream rounded-2xl p-8 border border-earth/5"
              >
                <h3 className="font-sans font-bold text-base text-earth mb-3">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(180deg, #0f1a15, #2d4a3e)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-light text-bone mb-4 tracking-tight">
            The team
          </h2>
          <p
            className="font-sans mb-10"
            style={{ color: "rgba(232,220,200,0.6)" }}
          >
            We&apos;re a small team of technologists, conservationists, and
            advocates. Full bios coming soon.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {["Founder & CEO", "Head of Steward Relations", "Head of Technology"].map(
              (role) => (
                <div
                  key={role}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "rgba(245,240,232,0.04)", border: "1px solid rgba(245,240,232,0.08)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-4"
                    style={{ background: "rgba(196,113,59,0.15)" }}
                  />
                  <p
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: "rgba(232,220,200,0.4)" }}
                  >
                    {role}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-bone text-center">
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-3xl font-light text-earth mb-4 tracking-tight">
            Get in touch
          </h2>
          <p className="font-sans text-stone mb-6">
            For partnerships, press inquiries, or general questions.
          </p>
          <a
            href="mailto:hello@giverise.ai"
            className="font-sans font-semibold text-clay hover:text-clay-amber transition-colors"
          >
            hello@giverise.ai
          </a>
        </div>
      </section>
    </div>
  );
}
