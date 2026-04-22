import Image from "next/image";
import Link from "next/link";
import FloatingDock from "@/components/FloatingDock";
import {
  FigmaIcon, FramerIcon, ClaudeIcon, AntiGravityIcon,
} from "@/components/ToolIcons";
import { type ReactNode } from "react";

const projects = [
  {
    title: "Stellas Digital Bank",
    category: "Fintech",
    color: "from-orange-500/20 to-orange-900/5",
    image: "/images/stellas-cover.png",
    href: "/projects/stellas-bank",
  },
  {
    title: "WasteNot",
    category: "B2B SAAS",
    color: "from-emerald-500/20 to-emerald-900/5",
    image: "/images/wastenot-1.png",
    href: "/projects/wastenot",
  },
  {
    title: "Medstation",
    category: "Health · B2C, B2B",
    color: "from-teal-500/20 to-teal-900/5",
    image: "/images/medstation.png",
    href: "/projects/medstation",
  },
  {
    title: "Interstellas",
    category: "Financial Services",
    color: "from-blue-500/20 to-blue-900/5",
    image: "/images/interstellas-1.png",
    href: "/projects/interstellas",
  },
  {
    title: "Wekurnect",
    category: "B2B SAAS",
    color: "from-purple-500/20 to-purple-900/5",
    image: "/images/wekurnect-1.png",
    href: "/projects/wekurnect",
  },
];

const experience = [
  { company: "Redcloud", role: "Product Designer", period: "Current" },
  { company: "Stellas Digital Bank", role: "Product Designer", period: "Current" },
  { company: "WasteNot", role: "Product Designer", period: "2024" },
  { company: "Equity Bank", role: "UI/UX Designer", period: "2023" },
  { company: "Wekurnect", role: "Product Designer", period: "2023" },
];

const tools: { name: string; desc: string; icon: ReactNode }[] = [
  { name: "Figma", desc: "Design tool", icon: <FigmaIcon /> },
  { name: "Framer", desc: "Website builder", icon: <FramerIcon /> },
  { name: "Claude", desc: "Workflows & dev", icon: <ClaudeIcon /> },
  { name: "Antigravity", desc: "AI engineering", icon: <AntiGravityIcon /> },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Header */}
        <div className="stagger-children mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border flex-shrink-0">
                <Image
                  src="/images/headshot-sm.png"
                  alt="Uche Divine"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Uche Divine</p>
                <p className="text-xs text-muted">Product Designer</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              United Kingdom
            </div>
          </div>

          <p className="text-sm md:text-base text-muted-light leading-relaxed max-w-md mb-4 text-pretty">
            Product designer with 6+ years across{" "}
            <span className="text-white">fintech</span>,{" "}
            <span className="text-white">SaaS</span>,{" "}
            <span className="text-white">health</span>, and{" "}
            <span className="text-white">B2B</span>. The industries change, but the craft of turning problems into shipped products doesn&apos;t.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 pulse-dot" />
              <span className="text-xs text-muted-light">
                Open to new opportunities
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/uche-divine/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-dark-card border border-border rounded-full px-4 py-2 hover:bg-dark-card-hover transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              Connect
            </a>
            <a
              href="https://drive.google.com/file/d/13nzYYrUnJaEmjFoSRdCBxdKKRAnGhEqp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-dark-card border border-border rounded-full px-4 py-2 hover:bg-dark-card-hover transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
              Resume
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Project Cards - first 2 are large */}
          {projects.slice(0, 2).map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="bento-card project-card overflow-hidden block md:col-span-1 lg:col-span-1"
            >
              <div className="p-4 pb-0">
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  Project
                </div>
              </div>
              <div className={`mx-4 h-44 rounded-xl bg-gradient-to-br ${project.color} overflow-hidden relative`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xs text-muted">Coming soon</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium">{project.title}</h3>
                <p className="text-xs text-muted mt-1">{project.category}</p>
              </div>
            </Link>
          ))}

          {/* Tools card */}
          <div className="bento-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              Design Stack
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-dark-secondary border border-border flex items-center justify-center flex-shrink-0">
                    {tool.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{tool.name}</p>
                    <p className="text-[11px] text-muted">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining project cards */}
          {projects.slice(2).map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="bento-card project-card overflow-hidden block"
            >
              <div className="p-4 pb-0">
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  Project
                </div>
              </div>
              <div className={`mx-4 h-36 rounded-xl bg-gradient-to-br ${project.color} overflow-hidden relative`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xs text-muted">Coming soon</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium">{project.title}</h3>
                <p className="text-xs text-muted mt-1">{project.category}</p>
              </div>
            </Link>
          ))}

          {/* Dribbble card */}
          <a
            href="https://dribbble.com/Vyne"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card project-card overflow-hidden block"
          >
            <div className="p-4 pb-0">
              <div className="flex items-center gap-2 text-xs text-muted mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#EA4C89"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.82 0-1.62.11-2.4.318v.114zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
                Dribbble
              </div>
            </div>
            <div className="mx-4 h-36 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-1 w-full h-full">
                {[
                  "https://cdn.dribbble.com/userupload/15497879/file/original-dfb1bd0ab3bec7d9fb8099da150c23df.png?resize=400x300",
                  "https://cdn.dribbble.com/userupload/15372996/file/original-e93f4d4b9f78a466e1937a627493eea9.png?resize=400x300",
                  "https://cdn.dribbble.com/userupload/15277296/file/original-e6a756269a1cb280f61d371add1f530c.png?resize=400x300",
                  "https://cdn.dribbble.com/userupload/15165508/file/original-72a538532ed9a4679484415b44cfa6e0.png?resize=400x300",
                  "https://cdn.dribbble.com/userupload/12482646/file/still-826b8fad16c73a928383e2ff82c30f85.png?resize=400x300",
                  "https://cdn.dribbble.com/userupload/12205631/file/original-06c332cd80f09af6287ed9cbb780c03e.png?resize=400x300",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Dribbble shot ${i + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Explorations</h3>
                <p className="text-xs text-muted mt-1">On Dribbble</p>
              </div>
              <svg className="w-4 h-4 text-muted" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 15L15 5M15 5H8M15 5v7" />
              </svg>
            </div>
          </a>

          {/* Experience card */}
          <div className="bento-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Experience
            </div>
            <div className="space-y-3">
              {experience.map((exp, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-border flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{exp.company}</p>
                    <p className="text-[11px] text-muted">
                      {exp.role} &middot; {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social card */}
          <div className="bento-card p-5">
            <div className="flex items-center gap-2 text-xs text-muted mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Social
            </div>
            <div className="space-y-3">
              {[
                { platform: "LinkedIn", handle: "@uchechidivine", href: "https://www.linkedin.com/in/uchechidivine/" },
                { platform: "Dribbble", handle: "@uchedivine", href: "https://dribbble.com/uchedivine" },
                { platform: "Twitter", handle: "@uchedivine", href: "https://twitter.com/uchedivine" },
                { platform: "Email", handle: "hello@uchechidivine.com", href: "mailto:hello@uchechidivine.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <p className="text-sm font-medium group-hover:text-accent transition-colors">{social.platform}</p>
                  <p className="text-xs text-muted">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 mb-24 text-left">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Uche Divine. All Rights Reserved.
          </p>
        </div>
      </div>

      <FloatingDock />
    </div>
  );
}
