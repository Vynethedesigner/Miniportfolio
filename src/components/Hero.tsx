import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-dark flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left content */}
          <div className="stagger-children">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              <span className="text-sm text-muted-light">
                Available for new projects
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Product Designer
              <br />
              <span className="gradient-text">crafting digital</span>
              <br />
              experiences<span className="text-accent">.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-light max-w-xl mb-10 leading-relaxed">
              UK-based designer with 7+ years shaping products across fintech,
              SAAS, and B2B. I turn complex problems into intuitive, impactful
              solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-white text-dark px-7 py-3 rounded-full font-medium hover:bg-cream transition-colors inline-flex items-center gap-2"
              >
                View Projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/uchechidivine/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-white px-7 py-3 rounded-full font-medium hover:border-muted-light transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="hidden md:block relative">
            <div className="w-72 h-80 lg:w-80 lg:h-96 rounded-2xl bg-dark-card border border-border overflow-hidden relative">
              <Image
                src="/images/headshot-sm.png"
                alt="Uche Divine"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-dark-card border border-border rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs text-muted mb-1">Experience</p>
              <p className="text-xl font-bold">
                7<span className="text-accent">+</span> years
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2 text-muted animate-bounce">
            <span className="text-xs">Scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
