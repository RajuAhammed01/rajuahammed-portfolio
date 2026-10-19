"use client";

import { aboutMe } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

export default function AboutSection() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-[#0B0F17] scroll-mt-24 transition-colors duration-250">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-12 sm:mb-14 animate-fade-in ${
            headerInView ? "is-visible" : ""
          }`}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Building the Future with{" "}
            <span className="text-[var(--electric-cobalt)]">
              Data & Intelligence
            </span>
          </h2>
          <p className="section-description">
            Passionate about bridging computational theory and practical machine learning applications.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {aboutMe.paragraphs.map((paragraph, i) => (
              <AboutParagraph key={i} text={paragraph} index={i} />
            ))}

            {/* Engineering Philosophy Quote Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--cool-white)] dark:bg-slate-900 border border-[var(--border-gray)] dark:border-white/10 flex items-start gap-4 mt-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--cobalt-subtle)] text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--midnight-ink)] leading-snug">
                  &ldquo;Theoretical foundation provides the roadmap, but building end-to-end applications is where true engineering mastery happens.&rdquo;
                </p>
                <p className="text-xs font-mono text-[var(--electric-cobalt)] font-medium mt-2">
                  — Learning by Building Philosophy
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Quick Facts (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <FocusAreasCard />
              <QuickFactsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutParagraph({ text, index }: { text: string; index: number }) {
  const [ref, isVisible] = useInView();

  return (
    <p
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={`text-base sm:text-[1.0625rem] leading-relaxed text-[var(--slate-gray)] animate-fade-in ${
        isVisible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {text}
    </p>
  );
}

function FocusAreasCard() {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-6 sm:p-7 rounded-2xl border border-[var(--border-gray)] dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-right ${
        isInView ? "is-visible" : ""
      }`}
    >
      {/* Card Header */}
      <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[var(--border-gray)] dark:border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--electric-cobalt)]" aria-hidden="true" />
        <h3 className="text-xs font-mono font-bold text-[var(--midnight-ink)] uppercase tracking-wider">
          Focus Areas
        </h3>
      </div>

      {/* Focus Area Items */}
      <div className="space-y-2.5">
        {aboutMe.focusAreas.map((area) => (
          <div
            key={area}
            className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[var(--cool-white)] dark:bg-slate-800/60 border border-[var(--border-gray)]/80 dark:border-white/10 hover:border-[var(--electric-cobalt)]/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xs transition-all duration-200 group"
          >
            <div className="w-7 h-7 rounded-lg bg-[var(--cobalt-subtle)] text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--electric-cobalt)] group-hover:text-white transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-[var(--midnight-ink)] group-hover:text-[var(--electric-cobalt)] transition-colors min-w-0 break-words">
              {area}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickFactsCard() {
  const [ref, isInView] = useInView();

  const facts = [
    { label: "Location", value: "Dhaka, Bangladesh" },
    { label: "Degree", value: "BSc in CSE" },
    { label: "Focus", value: "AI/ML Engineering" },
    { label: "Approach", value: "Learn by Building" },
  ];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-6 sm:p-7 rounded-2xl border border-[var(--border-gray)] dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-right ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: "150ms" }}
    >
      {/* Card Header */}
      <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[var(--border-gray)] dark:border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--refined-teal)]" aria-hidden="true" />
        <h3 className="text-xs font-mono font-bold text-[var(--midnight-ink)] uppercase tracking-wider">
          Quick Facts
        </h3>
      </div>

      {/* Facts Rows */}
      <div className="divide-y divide-[var(--border-gray)]/80 dark:divide-white/10">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--slate-gray)] flex-shrink-0">
              {fact.label}
            </span>
            <span className="text-sm font-bold text-[var(--midnight-ink)] text-right min-w-0 break-words">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

