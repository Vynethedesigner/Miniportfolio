"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import {
  FigmaIcon, FramerIcon, ClaudeIcon, AntiGravityIcon,
  NotionIcon, JiraIcon, ConfluenceIcon, GmailIcon, ChromeIcon, PokeIcon,
} from "./ToolIcons";

type PanelId = "projects" | "stack" | "blog" | "misc" | null;

const projects = [
  { title: "Stellas Digital Bank", category: "Fintech", year: "2022" },
  { title: "WasteNot", category: "B2B SAAS", year: "2024" },
  { title: "Interstellas", category: "Financial Services", year: "2023" },
  { title: "Wekurnect", category: "B2B SAAS", year: "2022" },
  { title: "Equity Bank", category: "Banking", year: "2022" },
  { title: "Redcloud", category: "B2B Commerce", year: "2024" },
];

type StackItem = { name: string; desc: string; icon: ReactNode };

const stack: { design: StackItem[]; productivity: StackItem[]; other: StackItem[] } = {
  design: [
    { name: "Figma", desc: "Design tool", icon: <FigmaIcon /> },
    { name: "Framer", desc: "Website builder", icon: <FramerIcon /> },
    { name: "Claude", desc: "Workflows & dev", icon: <ClaudeIcon /> },
    { name: "Antigravity", desc: "AI engineering", icon: <AntiGravityIcon /> },
  ],
  productivity: [
    { name: "Notion", desc: "Projects & docs", icon: <NotionIcon /> },
    { name: "Poke", desc: "AI assistant", icon: <PokeIcon /> },
    { name: "Jira", desc: "Issue tracking", icon: <JiraIcon /> },
    { name: "Confluence", desc: "Documentation", icon: <ConfluenceIcon /> },
  ],
  other: [
    { name: "Gmail", desc: "Email client", icon: <GmailIcon /> },
    { name: "Chrome", desc: "Browser", icon: <ChromeIcon /> },
  ],
};

const blogPosts = [
  {
    title: "Optimizing Form Design: A Guide to Best Practices",
    date: "Sep 2023",
    href: "#",
  },
  {
    title: "Design Systems at Scale",
    date: "Coming soon",
    href: "#",
  },
];

const miscItems = [
  { label: "Instagram", handle: "@uchedivine", href: "https://instagram.com/uchedivine" },
  { label: "Spotify Playlist", handle: "Design Vibes", href: "#" },
  { label: "Dribbble", handle: "@uchedivine", href: "https://dribbble.com/uchedivine" },
  { label: "Twitter / X", handle: "@uchedivine", href: "https://twitter.com/uchedivine" },
];

export default function FloatingDock() {
  const [activePanel, setActivePanel] = useState<PanelId>(null);

  const togglePanel = (panel: PanelId) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const closePanel = () => setActivePanel(null);

  return (
    <>
      {/* Overlay */}
      {activePanel && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closePanel}
        />
      )}

      {/* Panel content */}
      {activePanel && (
        <div className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-dark-card border border-border rounded-2xl shadow-2xl animate-fade-in max-h-[70vh] overflow-y-auto ${
          activePanel === "stack" ? "w-[90vw] max-w-[680px]" : "w-[90vw] max-w-[340px]"
        }`}>
          {/* Projects panel */}
          {activePanel === "projects" && (
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                All Projects
              </div>
              <div className="space-y-1">
                {projects.map((p, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-dark-secondary transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium group-hover:text-accent transition-colors">{p.title}</p>
                      <p className="text-[11px] text-muted">{p.category}</p>
                    </div>
                    <span className="text-[11px] text-muted">{p.year}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Stack panel */}
          {activePanel === "stack" && (
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                Stack
              </div>

              <div className="grid grid-cols-3 gap-5">
                {/* Design column */}
                <div>
                  <p className="text-[11px] text-muted uppercase tracking-wider mb-2 px-1">Design</p>
                  <div className="space-y-1">
                    {stack.design.map((t, i) => (
                      <div key={i} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-dark-secondary transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-dark-secondary border border-border flex items-center justify-center flex-shrink-0">
                          {t.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{t.name}</p>
                          <p className="text-[11px] text-muted truncate">{t.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Productivity column */}
                <div>
                  <p className="text-[11px] text-muted uppercase tracking-wider mb-2 px-1">Productivity</p>
                  <div className="space-y-1">
                    {stack.productivity.map((t, i) => (
                      <div key={i} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-dark-secondary transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-dark-secondary border border-border flex items-center justify-center flex-shrink-0">
                          {t.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{t.name}</p>
                          <p className="text-[11px] text-muted truncate">{t.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continuation - no heading */}
                <div>
                  <p className="text-[11px] text-muted uppercase tracking-wider mb-2 px-1">&nbsp;</p>
                  <div className="space-y-1">
                    {stack.other.map((t, i) => (
                      <div key={i} className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-dark-secondary transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-dark-secondary border border-border flex items-center justify-center flex-shrink-0">
                          {t.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{t.name}</p>
                          <p className="text-[11px] text-muted truncate">{t.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog panel */}
          {activePanel === "blog" && (
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                Writing
              </div>
              <div className="space-y-1">
                {blogPosts.map((post, i) => (
                  <a
                    key={i}
                    href={post.href}
                    className="block px-3 py-3 rounded-xl hover:bg-dark-secondary transition-colors group"
                  >
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">{post.title}</p>
                    <p className="text-[11px] text-muted mt-1">{post.date}</p>
                  </a>
                ))}
              </div>
              <a
                href="https://medium.com/@uchedivine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 px-3 py-2.5 rounded-xl text-xs text-muted hover:text-white hover:bg-dark-secondary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                View all on Medium
              </a>
            </div>
          )}

          {/* Misc panel */}
          {activePanel === "misc" && (
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-muted mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"/><circle cx="12" cy="12" r="4"/></svg>
                Miscellaneous
              </div>
              <div className="space-y-1">
                {miscItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-dark-secondary transition-colors group"
                  >
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">{item.label}</p>
                    <p className="text-[11px] text-muted">{item.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dock bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="floating-dock bg-dark-card/90 border border-border rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl">
          {/* Avatar / Home */}
          <button
            onClick={() => { closePanel(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden"
            aria-label="Home"
          >
            <Image
              src="/images/headshot-sm.png"
              alt="Home"
              width={28}
              height={28}
              className="rounded-full object-cover"
            />
          </button>

          {/* Projects */}
          <button
            onClick={() => togglePanel("projects")}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              activePanel === "projects"
                ? "bg-accent text-white"
                : "bg-dark-secondary hover:bg-dark-card-hover text-muted-light hover:text-white"
            }`}
            aria-label="Projects"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
          </button>

          {/* Stack */}
          <button
            onClick={() => togglePanel("stack")}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              activePanel === "stack"
                ? "bg-accent text-white"
                : "bg-dark-secondary hover:bg-dark-card-hover text-muted-light hover:text-white"
            }`}
            aria-label="Stack"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </button>

          {/* Blog / Writing */}
          <button
            onClick={() => togglePanel("blog")}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              activePanel === "blog"
                ? "bg-accent text-white"
                : "bg-dark-secondary hover:bg-dark-card-hover text-muted-light hover:text-white"
            }`}
            aria-label="Blog"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </button>

          {/* Miscellaneous */}
          <button
            onClick={() => togglePanel("misc")}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              activePanel === "misc"
                ? "bg-accent text-white"
                : "bg-dark-secondary hover:bg-dark-card-hover text-muted-light hover:text-white"
            }`}
            aria-label="Miscellaneous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
