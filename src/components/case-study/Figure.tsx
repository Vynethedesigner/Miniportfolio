type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  /**
   * Optional CSS aspect-ratio (e.g. "16/9" or "4/3").
   * Use this for assets without intrinsic dimensions (notably SVGs in <img>),
   * which otherwise collapse to 0 height under `h-auto`.
   */
  aspect?: string;
};

export default function Figure({ src, alt, caption, className, aspect }: FigureProps) {
  return (
    <figure className={`my-10 ${className ?? ""}`}>
      <div className="rounded-xl overflow-hidden bg-dark-card border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="block w-full h-auto"
          style={aspect ? { aspectRatio: aspect.replace("/", " / ") } : undefined}
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
