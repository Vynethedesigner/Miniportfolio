import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 mt-12">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-16">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg md:text-xl font-semibold mb-3 mt-10">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-muted-light leading-relaxed text-pretty mb-5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 text-muted-light space-y-2 mb-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 text-muted-light space-y-2 mb-5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-accent underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded bg-dark-card border border-border text-[0.9em] px-1.5 py-0.5 font-mono text-muted-light">
      {children}
    </code>
  ),
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-dark-card text-left text-xs uppercase tracking-widest text-muted">
      {children}
    </thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-border last:border-b-0">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-5 py-3 font-medium">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-5 py-4 align-top text-muted-light leading-relaxed">
      {children}
    </td>
  ),
  hr: () => <hr className="my-12 border-border" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
