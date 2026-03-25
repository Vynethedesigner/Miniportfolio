"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-dark/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Uche<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm text-muted-light hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm text-muted-light hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-sm bg-white text-dark px-5 py-2 rounded-full font-medium hover:bg-cream transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-blur bg-dark/95 border-t border-border px-6 py-6 flex flex-col gap-4">
          <a
            href="#projects"
            className="text-muted-light hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-muted-light hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="bg-white text-dark px-5 py-2 rounded-full font-medium text-center hover:bg-cream transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
