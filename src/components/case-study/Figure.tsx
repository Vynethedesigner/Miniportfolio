type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export default function Figure({ src, alt, caption, className }: FigureProps) {
  return (
    <figure className={className}>
      <div className="rounded-xl overflow-hidden bg-dark-card border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted mt-3 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
