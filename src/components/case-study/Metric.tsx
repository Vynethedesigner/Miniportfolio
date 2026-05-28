"use client";

import { useEffect, useRef, useState } from "react";

type MetricProps = {
  value: string;
  label: string;
  tone?: "default" | "success";
};

const toneClass: Record<NonNullable<MetricProps["tone"]>, string> = {
  default: "text-accent",
  success: "text-emerald-400",
};

const glowClass: Record<NonNullable<MetricProps["tone"]>, string> = {
  default: "bg-accent/25",
  success: "bg-emerald-400/25",
};

// Split a value like "−70%", "+40%", "4.4★" into prefix / number / suffix.
function parseValue(value: string) {
  const m = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", target: null as number | null, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = m;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
}

export default function Metric({ value, label, tone = "default" }: MetricProps) {
  const { prefix, target, suffix, decimals } = parseValue(value);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const [display, setDisplay] = useState(
    target === null ? value : `${prefix}${(0).toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animated.current) return;
          animated.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, prefix, suffix, decimals, value]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl bg-dark-card border border-border p-6 text-center transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-8 h-24 w-24 -translate-x-1/2 rounded-full blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${glowClass[tone]}`}
      />
      <div
        className={`relative mb-2 text-3xl md:text-5xl font-bold tabular-nums ${toneClass[tone]}`}
      >
        {display}
      </div>
      <div className="relative text-xs text-muted uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
