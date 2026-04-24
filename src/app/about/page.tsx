import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { team, milestones } from "@/data/team";
import { accentMap } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Open Source Knowledge Rwanda is a Rwandan non-profit advancing open knowledge in Kinyarwanda, English, French and Swahili.",
};

const objectives = [
  {
    n: "01",
    title: "Represent Wikimedia",
    body: "Serve as the official Rwandan representative of the Wikimedia Foundation and the wider movement.",
  },
  {
    n: "02",
    title: "Promote free content",
    body: "Advance Wikimedia projects and open content — in all four of Rwanda's working languages.",
  },
  {
    n: "03",
    title: "Recruit & train",
    body: "Onboard new editors through editathons, mentoring and classroom curricula.",
  },
  {
    n: "04",
    title: "Convene the community",
    body: "Organise events, workshops and retreats that turn participants into long-term contributors.",
  },
  {
    n: "05",
    title: "Close the gender gap",
    body: "Build targeted campaigns — WikiGap, SheSaid, Women & Climate — to close the internet's gender gap.",
  },
  {
    n: "06",
    title: "Reading & writing culture",
    body: "Foster a culture of reading and writing among Rwandan youth, online and offline.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the chapter"
        title={
          <>
            <em className="italic text-clay-500">Open</em> knowledge,{" "}
            made in Rwanda.
          </>
        }
        lede="We are an independent non-profit registered with the Rwanda Governance Board (Reg. 1180/RGB/NGO/OC/01/2023), working alongside Wikimedia Foundation projects to advance open knowledge across East Africa."
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      {/* Mission & Vision */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="border border-ink-900/15 p-8 lg:p-12 bg-paper shadow-brutal-sm">
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-4">
              Our mission
            </div>
            <p className="display text-[clamp(28px,3.4vw,44px)] text-ink-900 leading-[1.1]">
              "To empower and engage individuals in Rwanda to freely share, access, and
              contribute to the world's knowledge through the collaborative creation and
              dissemination of open educational content."
            </p>
          </div>
          <div className="border border-ink-900/15 p-8 lg:p-12 bg-[#1c1913] text-paper shadow-brutal-sm">
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-300 mb-4">
              Our vision
            </div>
            <p className="display text-[clamp(28px,3.4vw,44px)] leading-[1.1]">
              A culture of curiosity, learning and diversity — strengthening the local
              knowledge ecosystem, bridging information gaps and promoting Rwanda's rich
              cultural heritage on the global stage.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="border-y border-ink-900/15 bg-parchment">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="display text-[clamp(36px,5.5vw,72px)] text-ink-900 max-w-[18ch] leading-[0.98]">
              Six objectives that guide everything.
            </h2>
            <p className="max-w-md text-[15px] text-ink-700 leading-relaxed">
              From the way we programme events to the partnerships we accept, these
              principles shape how the chapter spends its time.
            </p>
          </div>
          <div className="grid gap-px bg-ink-900/15 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((o) => (
              <div key={o.n} className="bg-parchment p-8 lg:p-10 hover:bg-paper transition-colors">
                <span className="font-mono text-xs tracking-[0.2em] text-clay-500">
                  {o.n}
                </span>
                <h3 className="mt-5 display text-2xl lg:text-3xl text-ink-900">{o.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="mb-14">
          <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-3">
            Leadership
          </div>
          <h2 className="display text-[clamp(40px,6vw,80px)] text-ink-900 max-w-[16ch] leading-[0.98]">
            The people behind <em className="italic">the chapter</em>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => {
            const accent = accentMap[m.accent];
            return (
              <div
                key={m.name}
                className="group border border-ink-900/15 bg-paper p-6 hover:shadow-brutal-sm transition-all hover:-translate-y-1"
              >
                <div
                  className={`aspect-square flex items-center justify-center ${accent.bgSoft} border ${accent.border} relative overflow-hidden`}
                >
                  <span
                    className={`font-display text-[96px] ${accent.text} leading-none`}
                  >
                    {m.initials}
                  </span>
                  <div className="absolute inset-0 bg-noise opacity-20 mix-blend-multiply" />
                </div>
                <div className="mt-5 font-display text-xl text-ink-900">{m.name}</div>
                <div className={`mt-1 text-[11px] uppercase tracking-[0.22em] ${accent.text}`}>
                  {m.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{m.bio}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-[#1c1913] text-paper">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="mb-14">
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-300 mb-3">
              Timeline
            </div>
            <h2 className="display text-[clamp(40px,6vw,80px)] max-w-[16ch] leading-[0.98]">
              A brief history, <em className="italic text-clay-300">in progress</em>.
            </h2>
          </div>

          <ol className="relative">
            <div className="absolute left-[68px] top-2 bottom-2 w-px bg-paper/20" />
            {milestones.map((m, i) => (
              <li key={i} className="relative flex gap-10 py-7">
                <div className="w-[140px] shrink-0 font-mono text-sm text-clay-300">
                  {m.year}
                  <div className="relative mt-3 h-3 w-3 rounded-full bg-clay-500 shadow-[0_0_0_6px_rgba(194,65,12,0.15)]" />
                </div>
                <div>
                  <h3 className="display text-2xl lg:text-3xl">{m.title}</h3>
                  <p className="mt-2 text-paper/70 max-w-2xl leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
