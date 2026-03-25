const projects = [
  {
    title: "Stellas Digital Bank",
    description:
      "Transforming fintech excellence through a comprehensive mobile banking application design.",
    tags: ["Banking", "Fintech", "Product Design", "Product Strategy"],
    color: "from-orange-500/20 to-orange-900/10",
    accent: "bg-orange-500/10 text-orange-400",
  },
  {
    title: "WasteNot",
    description:
      "Streamlining B2B advertising through innovative design, reducing waste and maximizing impact.",
    tags: ["B2B Advertising", "SAAS", "Product Design"],
    color: "from-emerald-500/20 to-emerald-900/10",
    accent: "bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "Interstellas",
    description:
      "Integrating seamless payment processing capabilities for businesses and developers.",
    tags: ["Financial Services", "BAAS", "Product Strategy"],
    color: "from-blue-500/20 to-blue-900/10",
    accent: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Wekurnect",
    description:
      "Revolutionizing business growth through a comprehensive FMCG SAAS platform.",
    tags: ["B2B", "FMCG SAAS", "Product Design"],
    color: "from-purple-500/20 to-purple-900/10",
    accent: "bg-purple-500/10 text-purple-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="text-sm font-medium text-accent mb-3 uppercase tracking-widest">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-dark tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted max-w-md text-lg">
            A selection of projects spanning fintech, B2B, and SAAS — focused on
            solving real problems through design.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href="#"
              className="project-card group block bg-white rounded-2xl overflow-hidden border border-border-light"
            >
              {/* Project image area */}
              <div
                className={`h-56 md:h-64 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}
              >
                <div className="text-center px-8">
                  <p className="text-dark/40 text-sm">
                    [ Project Preview ]
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/5 transition-colors duration-300" />
              </div>

              {/* Project info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-dark group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-accent transition-all group-hover:translate-x-1 group-hover:-translate-y-1 mt-1 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 15L15 5M15 5H8M15 5v7" />
                  </svg>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`text-xs px-3 py-1 rounded-full ${project.accent}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
