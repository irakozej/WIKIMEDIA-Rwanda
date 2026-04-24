"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Journal" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-paper/80 border-b border-ink-900/10"
          : "bg-transparent",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Wikimedia Rwanda home">
          <Logo />
          <div className="leading-[1]">
            <div className="font-display text-[18px] font-semibold tracking-tight">
              Wikimedia <span className="italic text-clay-500">Rwanda</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-600 mt-0.5">
              Open Source Knowledge
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-clay-500" : "text-ink-800 hover:text-clay-500",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-3 right-3 bottom-0.5 h-[2px] bg-clay-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 bg-ink-900 text-paper px-4 py-2 text-sm font-medium hover:bg-clay-500 transition-colors shadow-brutal-sm"
          >
            Join the movement
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded border border-ink-900/20"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-900/10 bg-paper">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "py-3 px-2 font-display text-2xl border-b border-ink-900/10",
                    active ? "text-clay-500" : "text-ink-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/get-involved"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-ink-900 text-paper px-4 py-3 text-sm font-medium"
            >
              Join the movement →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex h-11 w-11 items-center justify-center">
      <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden>
        <circle cx="24" cy="24" r="22" fill="#006699" />
        <path
          d="M12 18 L17 32 L20 32 L24 22 L28 32 L31 32 L36 18"
          stroke="#faf6ee"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="22" fill="none" stroke="#c2410c" strokeWidth="2" strokeDasharray="3 5" />
      </svg>
    </span>
  );
}
