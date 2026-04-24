import Breadcrumbs from "./Breadcrumbs";

export default function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="relative border-b border-ink-900/15 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-parchment to-paper" />
      <div className="absolute -top-32 -right-16 h-[360px] w-[360px] rounded-full bg-clay-500/15 blur-3xl -z-10" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pt-10 pb-16 lg:pb-20">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500">
              {eyebrow}
            </div>
            <h1 className="mt-4 display text-[clamp(48px,8vw,120px)] text-ink-900 max-w-[16ch]">
              {title}
            </h1>
          </div>
          {lede && (
            <p className="max-w-md text-[17px] leading-relaxed text-ink-700 lg:pb-4">
              {lede}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
