"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

const categories = [
  { label: "All", value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "AI Applications", value: "ai" },
  { label: "Data Science", value: "data" },
  { label: "Web Development", value: "web" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [headerRef, headerVisible] = useInView();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white dark:bg-[#0B0F17] scroll-mt-24 transition-colors duration-250">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`animate-fade-in ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">
            Real Problems,{" "}
            <span className="text-[var(--electric-cobalt)]">
              Real Solutions
            </span>
          </h2>
          <p className="section-description">
            Each project represents hands-on experience solving actual problems
            with machine learning, data science, and software engineering.
          </p>
        </div>

        {/* Filters with generous spacing from cards */}
        <div className="mt-10 mb-12 sm:mb-14 flex flex-wrap gap-2.5 sm:gap-3">
          {categories
            .filter((cat) => {
              if (cat.value === "all") return true;
              return projects.some((p) => p.category === cat.value);
            })
            .map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 shadow-xs cursor-pointer ${
                  activeFilter === cat.value
                    ? "bg-[var(--electric-cobalt)] text-white shadow-sm"
                    : "bg-[var(--cool-white)] text-[var(--slate-gray)] border border-[var(--border-gray)] hover:text-[var(--midnight-ink)] hover:border-[var(--electric-cobalt)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
        </div>

        {/* Projects Grid with generous gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-[var(--slate-gray)]">
              No projects in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, isInView] = useInView();

  const categoryLabels: Record<string, { label: string; color: string }> = {
    ml: { label: "Machine Learning", color: "var(--electric-cobalt)" },
    ai: { label: "AI Application", color: "var(--refined-teal)" },
    data: { label: "Data Science", color: "var(--electric-cobalt)" },
    web: { label: "Web Development", color: "var(--deep-navy)" },
  };
  const cat = categoryLabels[project.category] || categoryLabels.ml;

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`glass-card overflow-hidden flex flex-col h-full animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project Visual Header */}
      <div className="relative h-44 bg-gradient-to-br from-[var(--ice-blue)] to-[var(--cool-white)] border-b border-[var(--border-gray)] flex items-center justify-center overflow-hidden group">
        {/* Abstract data visualization */}
        <ProjectVisual project={project} />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-[var(--border-gray)] dark:border-white/10"
            style={{ color: cat.color }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            {cat.label}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-[var(--electric-cobalt)] text-white uppercase tracking-wider">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="text-lg font-bold text-[var(--midnight-ink)] mb-2.5 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--slate-gray)] leading-relaxed mb-2">
          <span className="font-semibold text-[var(--midnight-ink)]">Problem: </span>
          {project.problem}
        </p>
        <p className="text-sm text-[var(--slate-gray)] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag !text-[11px] !px-2.5 !py-1">
              {tech}
            </span>
          ))}
        </div>

        {/* Contribution */}
        <p className="text-xs text-[var(--slate-gray)] italic mb-5 leading-relaxed">
          <span className="font-semibold not-italic text-[var(--midnight-ink)]">
            My role:{" "}
          </span>
          {project.contribution}
        </p>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-[var(--border-gray)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-2 !px-4 !text-sm flex-1 !justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Code
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2 !px-4 !text-sm flex-1 !justify-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// Abstract project visualization
function ProjectVisual({ project }: { project: Project }) {
  // Generate a unique but deterministic visual based on the project title
  const seed = project.title.length;
  const isML = project.category === "ml";
  const isAI = project.category === "ai";

  return (
    <svg
      viewBox="0 0 400 200"
      className="absolute inset-0 w-full h-full opacity-40 transition-opacity duration-300 group-hover:opacity-60"
      aria-hidden="true"
    >
      {isML && (
        <>
          {/* Scatter plot-like dots */}
          {[...Array(20)].map((_, i) => {
            const x = 40 + ((i * 73 + seed * 17) % 320);
            const y = 20 + ((i * 47 + seed * 13) % 160);
            const r = 2 + (i % 3);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={r}
                fill={
                  i % 3 === 0
                    ? "var(--electric-cobalt)"
                    : "var(--refined-teal)"
                }
                opacity={0.3 + (i % 4) * 0.15}
              />
            );
          })}
          {/* Regression line */}
          <line
            x1="50"
            y1="160"
            x2="350"
            y2="40"
            stroke="var(--electric-cobalt)"
            strokeWidth="2"
            strokeDasharray="6,4"
            opacity="0.3"
          />
        </>
      )}
      {isAI && (
        <>
          {/* Connected nodes */}
          {[...Array(8)].map((_, i) => {
            const x = 60 + ((i * 50) % 300);
            const y = 40 + ((i * 37 + seed * 7) % 120);
            return (
              <g key={i}>
                {i > 0 && (
                  <line
                    x1={60 + (((i - 1) * 50) % 300)}
                    y1={40 + (((i - 1) * 37 + seed * 7) % 120)}
                    x2={x}
                    y2={y}
                    stroke="var(--refined-teal)"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                )}
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  fill="var(--refined-teal)"
                  opacity="0.3"
                />
              </g>
            );
          })}
        </>
      )}
      {!isML && !isAI && (
        <>
          {/* Grid pattern */}
          {[...Array(6)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="40"
              y1={30 + i * 30}
              x2="360"
              y2={30 + i * 30}
              stroke="var(--electric-cobalt)"
              strokeWidth="0.5"
              opacity="0.1"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={40 + i * 45}
              y1="30"
              x2={40 + i * 45}
              y2="180"
              stroke="var(--electric-cobalt)"
              strokeWidth="0.5"
              opacity="0.1"
            />
          ))}
          {/* Bar chart */}
          {[...Array(6)].map((_, i) => {
            const height = 30 + ((i * 29 + seed * 11) % 100);
            return (
              <rect
                key={`bar-${i}`}
                x={60 + i * 50}
                y={180 - height}
                width="30"
                height={height}
                rx="3"
                fill={
                  i % 2 === 0
                    ? "var(--electric-cobalt)"
                    : "var(--refined-teal)"
                }
                opacity="0.15"
              />
            );
          })}
        </>
      )}
    </svg>
  );
}
