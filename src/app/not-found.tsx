import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-32 text-center">
      <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500">404</div>
      <h1 className="mt-6 display text-[clamp(64px,12vw,180px)] text-ink-900">
        Page not <em className="italic text-clay-500">found</em>.
      </h1>
      <p className="mt-6 text-ink-700 max-w-md mx-auto">
        The page you were looking for isn't on Wikimedia Rwanda. It might have moved, or
        the link might be mis-typed.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ink-900 text-paper px-5 py-3 text-sm shadow-brutal-sm hover:bg-clay-500 transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border border-ink-900/25 px-5 py-3 text-sm hover:border-ink-900 transition-colors"
        >
          Browse projects
        </Link>
      </div>
    </section>
  );
}
