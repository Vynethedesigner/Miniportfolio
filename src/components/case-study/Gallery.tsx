import type { ReactNode } from "react";

type GalleryProps = {
  children: ReactNode;
  layout?: "2-col" | "3-col" | "stacked";
  className?: string;
};

const layoutClass: Record<NonNullable<GalleryProps["layout"]>, string> = {
  "2-col": "grid grid-cols-1 md:grid-cols-2 gap-4",
  "3-col": "grid grid-cols-1 md:grid-cols-3 gap-4",
  stacked: "flex flex-col gap-4",
};

export default function Gallery({
  children,
  layout = "2-col",
  className,
}: GalleryProps) {
  return (
    <div className={`my-8 ${layoutClass[layout]} ${className ?? ""}`}>
      {children}
    </div>
  );
}
