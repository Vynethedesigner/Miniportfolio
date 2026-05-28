import type { ReactNode } from "react";

type MetricGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
};

const columnClass: Record<NonNullable<MetricGridProps["columns"]>, string> = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
};

export default function MetricGrid({ children, columns = 3 }: MetricGridProps) {
  return (
    <div className={`grid ${columnClass[columns]} gap-4 my-12`}>
      {children}
    </div>
  );
}
