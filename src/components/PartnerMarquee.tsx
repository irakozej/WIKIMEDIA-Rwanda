import { partners } from "@/data/partners";

export default function PartnerMarquee() {
  const list = [...partners, ...partners];
  return (
    <section className="border-y border-ink-900/15 py-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 mb-8 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-2">
            In collaboration with
          </div>
          <h3 className="display text-3xl lg:text-4xl text-ink-900">
            Allies, partners, chapters
          </h3>
        </div>
        <p className="max-w-md text-sm text-ink-700">
          We build alongside libraries, archives, universities and peer chapters across the
          continent and beyond.
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-14 animate-marquee whitespace-nowrap w-max px-5 lg:px-10">
          {list.map((p, i) => (
            <div
              key={`${p.short}-${i}`}
              className="flex items-center gap-4 text-ink-800 shrink-0"
            >
              <span className="font-display text-4xl lg:text-5xl italic text-clay-500">
                {p.short}
              </span>
              <span className="text-lg">{p.name}</span>
              <span className="asterism text-ink-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
