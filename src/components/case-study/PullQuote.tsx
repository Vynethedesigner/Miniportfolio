import type { ReactNode } from "react";

type PullQuoteProps = {
  children: ReactNode;
  author?: string;
};

export default function PullQuote({ children, author }: PullQuoteProps) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 my-12">
      <div className="text-xl md:text-2xl text-white italic leading-relaxed font-light [&>p]:mb-0">
        {children}
      </div>
      {author && (
        <footer className="text-sm text-muted mt-3 not-italic">— {author}</footer>
      )}
    </blockquote>
  );
}
