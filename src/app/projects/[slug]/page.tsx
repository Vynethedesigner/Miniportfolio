import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Uche Divine`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.industry.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-dark-card border border-border text-muted-light"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-light max-w-2xl text-pretty">
          {project.subtitle}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-border">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">
              Year
            </p>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">
              Role
            </p>
            <p className="text-sm font-medium">{project.role.join(", ")}</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">
              Industry
            </p>
            <p className="text-sm font-medium">
              {project.industry.join(", ")}
            </p>
          </div>
        </div>
      </header>

      {/* Project image */}
      {project.image && (
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div
            className={`w-full h-64 md:h-96 rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden relative`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 overflow-hidden">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-xs text-accent uppercase tracking-widest font-medium mb-4">
            Overview
          </h2>
          <p className="text-lg text-muted-light leading-relaxed text-pretty">
            {project.overview}
          </p>
          {project.mediumLink && (
            <a
              href={project.mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm bg-dark-card border border-border rounded-full px-5 py-2.5 hover:bg-dark-card-hover transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              Read full case study on Medium
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 15L15 5M15 5H8M15 5v7" />
              </svg>
            </a>
          )}
        </div>

        {/* Overview Media */}
        {project.overviewMedia && project.overviewMedia.length > 0 && (
          <div className="mb-16">
            {project.overviewMedia.map((m, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden bg-dark-card border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.src}
                  alt={m.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}

        {/* Sections with inline media */}
        <div className="space-y-16">
          {project.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {section.heading}
              </h2>
              <p className="text-muted-light leading-relaxed text-pretty">
                {section.content}
              </p>
              {section.media && section.media.length > 0 && (
                <div className="mt-8 space-y-4">
                  {/* First image full width */}
                  <div className="rounded-xl overflow-hidden bg-dark-card border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.media[0].src}
                      alt={section.media[0].alt}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Remaining images in a 2-col grid */}
                  {section.media.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.media.slice(1).map((m, j) => (
                        <div
                          key={j}
                          className="rounded-xl overflow-hidden bg-dark-card border border-border"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={m.src}
                            alt={m.alt}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Project */}
        {(() => {
          const currentIndex = projects.findIndex((p) => p.slug === slug);
          const nextProject = projects[(currentIndex + 1) % projects.length];
          return (
            <div className="mt-24 pt-12 border-t border-border">
              <p className="text-xs text-muted uppercase tracking-widest mb-6">
                Next Project
              </p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group block rounded-2xl overflow-hidden bg-dark-card border border-border hover:border-muted transition-all"
              >
                {nextProject.image && (
                  <div className={`h-48 md:h-64 bg-gradient-to-br ${nextProject.color} overflow-hidden relative`}>
                    <Image
                      src={nextProject.image}
                      alt={nextProject.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                )}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {nextProject.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      {nextProject.subtitle}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 10h10M11 6l4 4-4 4" />
                  </svg>
                </div>
              </Link>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
