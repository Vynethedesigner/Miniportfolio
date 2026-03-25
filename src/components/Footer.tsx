const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/uchechidivine/",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/uchedivine",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/uchedivine",
  },
  {
    name: "Email",
    href: "mailto:hello@uchechidivine.com",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-secondary border-t border-border">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-sm text-accent mb-4 uppercase tracking-widest font-medium">
          Let&apos;s work together
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Ready to elevate
          <br />
          your project<span className="text-accent">?</span>
        </h2>
        <p className="text-muted-light text-lg max-w-md mx-auto mb-10">
          Let&apos;s bring your design vision to life. I&apos;m currently
          accepting new clients and projects.
        </p>
        <a
          href="mailto:hello@uchechidivine.com"
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent-soft transition-colors"
        >
          Get in touch
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 15L15 5M15 5H8M15 5v7" />
          </svg>
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Uche Divine
            </span>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
