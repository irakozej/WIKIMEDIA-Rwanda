import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.22em] text-ink-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-2">
              {it.href && !last ? (
                <Link href={it.href} className="hover:text-clay-500 transition-colors">
                  {it.label}
                </Link>
              ) : (
                <span className="text-ink-900">{it.label}</span>
              )}
              {!last && <ChevronRight size={12} className="opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
