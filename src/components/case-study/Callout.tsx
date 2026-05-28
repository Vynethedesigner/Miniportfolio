import type { ReactNode } from "react";

type CalloutKind = "insight" | "problem" | "note" | "failure" | "principle";

type CalloutProps = {
  children: ReactNode;
  kind?: CalloutKind;
  label?: string;
};

const kindStyles: Record<Exclude<CalloutKind, "principle">, string> = {
  insight: "border-accent/40 bg-accent/5",
  problem: "border-orange-500/40 bg-orange-500/5",
  note: "border-border bg-dark-card",
  failure: "border-red-500/40 bg-red-500/5",
};

const defaultLabel: Record<Exclude<CalloutKind, "principle">, string> = {
  insight: "Insight",
  problem: "The problem",
  note: "Note",
  failure: "What happened",
};

export default function Callout({
  children,
  kind = "note",
  label,
}: CalloutProps) {
  if (kind === "principle") {
    return (
      <aside className="my-16 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent px-8 py-10 md:px-12 md:py-14 text-center">
        <div className="text-xl md:text-2xl text-white leading-relaxed font-light max-w-xl mx-auto text-pretty [&>p]:mb-0 [&>p]:text-white">
          {children}
        </div>
        {label && (
          <p className="text-xs uppercase tracking-widest text-muted mt-6">
            {label}
          </p>
        )}
      </aside>
    );
  }

  return (
    <aside className={`my-8 rounded-xl border p-6 ${kindStyles[kind]}`}>
      <p className="text-xs uppercase tracking-widest text-muted mb-2">
        {label ?? defaultLabel[kind]}
      </p>
      <div className="text-muted-light leading-relaxed text-pretty [&>p]:mb-0">
        {children}
      </div>
    </aside>
  );
}
