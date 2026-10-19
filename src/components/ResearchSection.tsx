"use client";

import { researchInterests } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

const researchIcons = [
  // Experiment/Flask
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" /><path d="M10 9V3" /><path d="M14 9V3" />
    <path d="M7.58 14.42 6 22h12l-1.58-7.58" />
    <path d="M10 9a4.48 4.48 0 0 0-2.42 5.42" />
    <path d="M14 9a4.48 4.48 0 0 1 2.42 5.42" />
  </svg>,
  // Brain/Neural
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Chart/Analysis
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    <path d="M2 20h20" />
  </svg>,
  // Data/Database
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>,
];

export default function ResearchSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section id="research" className="py-24 lg:py-32 bg-[var(--cool-white)] scroll-mt-24">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-12 sm:mb-14 animate-fade-in ${
            headerVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-label">Research & Learning</span>
          <h2 className="section-title">
            Exploring the Frontiers of{" "}
            <span className="text-[var(--electric-cobalt)]">
              Machine Learning
            </span>
          </h2>
          <p className="section-description">
            Areas I&apos;m actively studying, experimenting with, and building
            knowledge in. These represent ongoing learning rather than published
            research.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {researchInterests.map((interest, i) => (
            <ResearchCard key={interest.title} interest={interest} index={i} />
          ))}
        </div>

        {/* Informational Note below the cards with clear separation */}
        <div className="mt-14 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3.5 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white dark:bg-slate-900 border border-[var(--border-gray)] dark:border-white/10 shadow-sm max-w-2xl text-left sm:text-center">
            <div className="w-8 h-8 rounded-lg bg-[var(--cobalt-subtle)] border border-[var(--electric-cobalt)]/20 flex items-center justify-center flex-shrink-0 text-[var(--electric-cobalt)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <p className="text-sm text-[var(--slate-gray)] leading-relaxed font-normal">
              This section will be updated with publications, experiments, and
              technical articles as my applied research progresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchCard({
  interest,
  index,
}: {
  interest: (typeof researchInterests)[0];
  index: number;
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card flex flex-col rounded-2xl border border-[var(--border-gray)] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Main Content Area: Icon + Title + Description */}
      <div className="p-6 sm:p-8 flex-1 flex items-start gap-4 sm:gap-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-black/[0.04]"
          style={{
            backgroundColor:
              index % 2 === 0 ? "var(--cobalt-subtle)" : "var(--teal-subtle)",
          }}
          aria-hidden="true"
        >
          {researchIcons[index % researchIcons.length]}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--midnight-ink)] mb-3 leading-snug">
            {interest.title}
          </h3>
          <p className="text-sm sm:text-[0.9375rem] text-[var(--slate-gray)] leading-relaxed">
            {interest.description}
          </p>
        </div>
      </div>

      {/* Status Footer: Dedicated bar inside normal layout flow with balanced padding and subtle background */}
      <div className="mt-auto px-6 sm:px-8 py-4 sm:py-5 bg-slate-50/90 dark:bg-slate-800/80 border-t border-[var(--border-gray)] dark:border-white/10 flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--refined-teal)]">
          <span className="w-2 h-2 rounded-full bg-[var(--refined-teal)] animate-pulse" aria-hidden="true" />
          Actively Exploring & Studying
        </span>
        <span className="text-xs font-mono text-[var(--slate-gray)] font-medium">
          Applied Focus
        </span>
      </div>
    </div>
  );
}

