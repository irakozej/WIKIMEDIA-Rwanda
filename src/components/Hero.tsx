import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/15">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-parchment via-paper to-clay-50" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-clay-500/20 blur-3xl" />
        <div className="absolute -bottom-60 -left-20 h-[620px] w-[620px] rounded-full bg-wiki-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-multiply" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-700">
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-ink-900/25 bg-paper/60">
            <span className="h-1.5 w-1.5 rounded-full bg-clay-500 animate-pulse" />
            Kigali · Rwanda
          </span>
          <span>Est. 2022</span>
          <span className="asterism" />
          <span>Reg. 1180/RGB/NGO/OC/01/2023</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16 items-end">
          <h1 className="display text-[clamp(56px,11vw,180px)] text-ink-900">
            <span className="block">Advancing</span>
            <span className="block -mt-2">
              <em className="italic font-light text-clay-500">open</em>{" "}
              knowledge
            </span>
            <span className="block -mt-2">in Rwanda.</span>
          </h1>

          <div className="lg:pb-6">
            <div className="rule mb-6" />
            <p className="text-[17px] leading-relaxed text-ink-800 max-w-[48ch]">
              We empower Rwandans to freely share, access and contribute to the world's
              knowledge — in{" "}
              <span className="underline-wobble">Kinyarwanda</span>, English, French and
              Swahili. Editathons, Wiki Clubs, photography contests and cultural heritage
              projects: open knowledge, made in Rwanda.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-involved"
                className="group inline-flex items-center gap-2 bg-ink-900 text-paper px-6 py-3.5 text-sm font-medium shadow-brutal hover:bg-clay-500 hover:shadow-brutal-clay transition-all"
              >
                Get involved
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium border border-ink-900/25 hover:border-ink-900 transition-colors"
              >
                Explore our work
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-ink-900/15 pt-6">
          <div className="flex items-baseline gap-3">
            <div className="big-num text-4xl text-clay-500">13</div>
            <div className="text-sm text-ink-700 max-w-[18ch]">
              active programmes across Rwanda
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <div className="big-num text-4xl text-forest-500">4</div>
            <div className="text-sm text-ink-700 max-w-[22ch]">
              languages: Kinyarwanda · English · French · Swahili
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <div className="big-num text-4xl text-wiki-500">50+</div>
            <div className="text-sm text-ink-700 max-w-[18ch]">
              contributors and counting
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-600">
            <span className="h-px w-10 bg-ink-900/40" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
