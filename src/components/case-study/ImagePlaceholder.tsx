type Aspect = "16/9" | "21/9" | "4/3" | "3/4" | "1/1" | "9/16";

type ImagePlaceholderProps = {
  slideRef: string;
  alt: string;
  aspect?: Aspect;
};

export default function ImagePlaceholder({
  slideRef,
  alt,
  aspect = "4/3",
}: ImagePlaceholderProps) {
  return (
    <figure className="my-10" aria-label={alt}>
      <div
        className="rounded-xl border border-dashed border-border bg-dark-card/40 flex items-center justify-center w-full"
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        <div className="text-center px-6 max-w-md">
          <p className="text-[10px] uppercase tracking-widest text-accent mb-3">
            {slideRef}
          </p>
          <p className="text-sm text-muted leading-relaxed">{alt}</p>
        </div>
      </div>
    </figure>
  );
}
