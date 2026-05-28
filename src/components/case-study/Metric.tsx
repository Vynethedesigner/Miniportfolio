type MetricProps = {
  value: string;
  label: string;
  tone?: "default" | "success";
};

const toneClass: Record<NonNullable<MetricProps["tone"]>, string> = {
  default: "text-accent",
  success: "text-emerald-400",
};

export default function Metric({ value, label, tone = "default" }: MetricProps) {
  return (
    <div className="rounded-xl bg-dark-card border border-border p-6 text-center">
      <div className={`text-3xl md:text-5xl font-bold mb-2 ${toneClass[tone]}`}>
        {value}
      </div>
      <div className="text-xs text-muted uppercase tracking-widest">{label}</div>
    </div>
  );
}
