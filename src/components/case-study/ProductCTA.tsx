type ProductCTAProps = {
  title?: string;
  primaryLabel: string;
  website: string;
  appStore?: string;
  playStore?: string;
};

const arrow = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 15L15 5M15 5H8M15 5v7" />
  </svg>
);

export default function ProductCTA({
  title = "See it live",
  primaryLabel,
  website,
  appStore,
  playStore,
}: ProductCTAProps) {
  return (
    <aside className="my-16 rounded-2xl border border-border bg-dark-card px-8 py-10 md:px-12 md:py-12 text-center">
      <p className="text-xs uppercase tracking-widest text-muted mb-5">{title}</p>

      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-dark font-medium text-sm px-6 py-3 hover:bg-accent-soft transition-colors"
      >
        {primaryLabel}
        {arrow}
      </a>

      {(appStore || playStore) && (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          {appStore && (
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-dark-secondary border border-border text-sm text-muted-light px-5 py-2.5 hover:bg-dark-card-hover hover:text-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.44-4.28-1.33-1.95-3.4-2.21-4.13-2.24-1.76-.18-3.43 1.03-4.32 1.03-.89 0-2.26-1.01-3.72-.98-1.91.03-3.68 1.11-4.66 2.82-1.99 3.45-.51 8.55 1.42 11.35.94 1.37 2.06 2.91 3.53 2.85 1.42-.06 1.96-.92 3.67-.92 1.71 0 2.2.92 3.7.89 1.53-.03 2.5-1.4 3.43-2.78 1.08-1.6 1.53-3.15 1.55-3.23-.03-.02-2.98-1.15-3.01-4.56zM14.28 3.93c.78-.95 1.31-2.26 1.16-3.57-1.13.05-2.49.75-3.3 1.7-.72.84-1.36 2.18-1.19 3.46 1.26.1 2.55-.64 3.33-1.59z" />
              </svg>
              App Store
            </a>
          )}
          {playStore && (
            <a
              href={playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-dark-secondary border border-border text-sm text-muted-light px-5 py-2.5 hover:bg-dark-card-hover hover:text-white transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.6 1.84a1.5 1.5 0 00-.6 1.2v18a1.5 1.5 0 00.6 1.2l10.3-10.2L3.6 1.84zm12 8.4l3-3.06-9.4-5.34a1.5 1.5 0 00-.94-.15l7.34 8.55zm0 3.52l-7.34 8.55c.32.06.66 0 .94-.15l9.4-5.34-3-3.06zm5.2-3.05l-2.13-1.2-3.27 3.32 3.27 3.32 2.13-1.2a1.5 1.5 0 000-2.6z" />
              </svg>
              Google Play
            </a>
          )}
        </div>
      )}
    </aside>
  );
}
