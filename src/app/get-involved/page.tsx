import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, mentor a Wiki Club, donate or partner with Wikimedia Rwanda. Every hour helps the commons.",
};

const ways = [
  {
    title: "Edit Wikipedia",
    body: "Write, translate or polish articles in Kinyarwanda, English, French or Swahili. We host monthly editathons with mentors on hand.",
    n: "01",
  },
  {
    title: "Upload to Commons",
    body: "Share photographs of monuments, markets, landscapes and everyday Rwandan life under free licences for the world to use.",
    n: "02",
  },
  {
    title: "Join a campaign",
    body: "Sign up for SheSaid, WikiGap, Wiki Loves Folklore or Wiki Loves Monuments when the next window opens.",
    n: "03",
  },
  {
    title: "Come to an event",
    body: "Workshops, Wiki Club meetups, photo walks — our events are open to the public and no prior experience is required.",
    n: "04",
  },
];

const platforms = [
  { name: "Wikipedia (Kinyarwanda)", href: "https://rw.wikipedia.org" },
  { name: "Wikimedia Commons", href: "https://commons.wikimedia.org" },
  { name: "Wikidata", href: "https://www.wikidata.org" },
  { name: "Wikiquote", href: "https://en.wikiquote.org" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title={
          <>
            Bring your hours.{" "}
            <em className="italic text-clay-500">We will bring the kettle.</em>
          </>
        }
        lede="The chapter runs on volunteer time — editors, photographers, teachers, designers, translators, organisers. Here are the routes in."
        crumbs={[{ href: "/", label: "Home" }, { label: "Get involved" }]}
      />

      {/* Ways to contribute */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => (
            <div
              key={w.n}
              className="border border-ink-900/15 bg-paper p-6 lg:p-8 hover:shadow-brutal-sm transition-all hover:-translate-y-1"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-clay-500">
                {w.n}
              </span>
              <h3 className="mt-5 display text-2xl text-ink-900">{w.title}</h3>
              <p className="mt-3 text-[15px] text-ink-700 leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer form */}
      <section id="volunteer" className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-4">
              Volunteer application
            </div>
            <h2 className="display text-[clamp(36px,5vw,64px)] text-ink-900 leading-[0.98]">
              Tell us how you would like to <em className="italic">contribute</em>.
            </h2>
            <p className="mt-6 text-ink-700 leading-relaxed">
              We will match you with a mentor and invite you to the next onboarding. Most
              volunteers begin with a single editathon and grow from there.
            </p>
          </div>
          <VolunteerForm />
        </div>
      </section>

      {/* Mentor section */}
      <section id="mentor" className="border-t border-ink-900/15 bg-parchment">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-4">
              Wiki Club mentors
            </div>
            <h2 className="display text-[clamp(36px,5vw,64px)] text-ink-900 leading-[1]">
              Teach the next generation
              <br />
              of <em className="italic">open knowledge</em> editors.
            </h2>
            <p className="mt-6 text-[17px] text-ink-800 leading-relaxed max-w-2xl">
              Our Wiki Clubs are active in GS Gishari, GS Ruhunda, GS Nyinawimana and Kageyo
              TSS. We need teachers, librarians and experienced editors willing to commit a
              few hours a month to mentor a secondary-school club.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-ink-900 hover:bg-clay-500 text-paper px-6 py-3 text-sm font-medium shadow-brutal-sm transition-colors"
            >
              Apply to mentor →
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] border border-ink-900/20 bg-gradient-to-br from-forest-500/20 via-amber-500/20 to-clay-500/20 flex items-end p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-multiply" />
              <blockquote className="relative display text-2xl lg:text-3xl italic text-ink-900">
                "I taught my students to edit Wikipedia. Within three months, they were
                teaching me the Kinyarwanda words I had forgotten."
                <footer className="mt-4 text-sm not-italic font-sans text-ink-700">
                  — Wiki Club mentor, Eastern Province
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-[#1c1913] text-paper">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-300 mb-4">
              Support the commons
            </div>
            <h2 className="display text-[clamp(36px,5vw,64px)] leading-[1]">
              Fund an editathon,
              <br /> a field trip, a Kiwix reader.
            </h2>
            <p className="mt-6 text-paper/70 max-w-xl leading-relaxed">
              A modest donation keeps the bus running to a rural Wiki Club, prints the
              photography contest posters, or ships a Kiwix device to a school without
              internet. Every franc is reported publicly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-clay-500 hover:bg-paper hover:text-ink-900 text-paper px-6 py-3 text-sm font-medium transition-colors"
              >
                <Heart size={14} /> Talk to us about donating
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-paper/30 px-6 py-3 text-sm font-medium hover:bg-paper hover:text-ink-900 transition-colors"
              >
                Corporate partnerships
              </a>
            </div>
          </div>
          <div className="relative border border-paper/20 p-8 lg:p-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-300">
              Where the money goes
            </div>
            <ul className="mt-6 divide-y divide-paper/10">
              {[
                ["45%", "Editathons, Wiki Clubs & workshops"],
                ["25%", "Campaign grants & prizes"],
                ["15%", "Community retreats & travel"],
                ["10%", "Tooling & Kiwix devices"],
                ["5%", "Administration"],
              ].map(([p, label]) => (
                <li key={label} className="flex items-baseline justify-between py-4 gap-4">
                  <span className="big-num text-4xl text-clay-300">{p}</span>
                  <span className="text-sm text-paper/80 text-right max-w-[20ch]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wikimedia platforms */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
        <div className="mb-10">
          <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-3">
            Start editing
          </div>
          <h2 className="display text-[clamp(32px,4.5vw,56px)] text-ink-900 max-w-[18ch] leading-[1]">
            Jump straight into the Wikimedia projects we work on.
          </h2>
        </div>
        <div className="grid gap-px bg-ink-900/15 md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-paper p-6 lg:p-8 hover:bg-clay-500 hover:text-paper transition-colors flex items-center justify-between"
            >
              <span className="font-display text-xl lg:text-2xl">{p.name}</span>
              <ExternalLink size={18} className="opacity-60 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
