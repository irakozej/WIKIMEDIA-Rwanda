"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#1c1913] text-paper overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-[0.05] bg-noise" />
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28 relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-300 mb-3">
              Chapter numbers
            </div>
            <h2 className="display text-[clamp(40px,7vw,88px)] max-w-[18ch]">
              Proof of <em className="italic text-clay-300">work</em>,
              in open licence.
            </h2>
          </div>
          <p className="text-paper/70 max-w-sm text-[15px] leading-relaxed">
            Every article, photograph and edit below is released under a free licence on
            Wikimedia projects — read, remix and redistribute.
          </p>
        </div>

        <ul className="grid gap-px bg-paper/10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <StatCell key={s.label} stat={s} active={active} index={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatCell({
  stat,
  active,
  index,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  index: number;
}) {
  const v = useCountUp(stat.value, active, 1400 + index * 120);
  return (
    <li className="group relative bg-[#1c1913] p-6 lg:p-8 transition-colors hover:bg-clay-500/10">
      <div className="flex items-baseline gap-1">
        <span className="big-num text-[62px] lg:text-[86px] text-paper">{v}</span>
        {stat.suffix && (
          <span className="big-num text-3xl lg:text-4xl text-clay-300">{stat.suffix}</span>
        )}
      </div>
      <div className="mt-3 font-display text-xl text-paper">{stat.label}</div>
      <div className="mt-1 text-sm text-paper/60">{stat.context}</div>
      <div className="absolute top-6 right-6 font-mono text-[11px] tracking-[0.25em] text-paper/55">
        #{String(index + 1).padStart(2, "0")}
      </div>
    </li>
  );
}
