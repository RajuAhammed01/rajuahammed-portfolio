"use client";

import { researchInterests } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

const researchIcons = [
  // Experiment/Flask
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6" /><path d="M10 9V3" /><path d="M14 9V3" />
    <path d="M7.58 14.42 6 22h12l-1.58-7.58" />
    <path d="M10 9a4.48 4.48 0 0 0-2.42 5.42" />
    <path d="M14 9a4.48 4.48 0 0 1 2.42 5.42" />
  </svg>,
  // Brain/Neural
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // Chart/Analysis
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    <path d="M2 20h20" />
  </svg>,
  // Data/Database
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>,
];

export default function ResearchSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section id="research" className="py-24 lg:py-32 bg-[var(--cool-white)]">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`animate-fade-in ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">Research Interests</span>
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

        {/* Research Cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {researchInterests.map((interest, i) => (
            <ResearchCard key={interest.title} interest={interest} index={i} />
          ))}
        </div>

        {/* Future work note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-[var(--border-gray)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--slate-gray)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span className="text-sm text-[var(--slate-gray)]">
              This section will be updated with publications, experiments, and
              technical articles as my research progresses.
            </span>
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
      className={`glass-card p-6 lg:p-8 animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            backgroundColor:
              index % 2 === 0 ? "var(--cobalt-subtle)" : "var(--teal-subtle)",
          }}
        >
          {researchIcons[index % researchIcons.length]}
        </div>
        <div>
          <h3 className="text-base font-bold text-[var(--midnight-ink)] mb-2">
            {interest.title}
          </h3>
          <p className="text-sm text-[var(--slate-gray)] leading-relaxed">
            {interest.description}
          </p>
          {/* Status tag */}
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--slate-gray)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--refined-teal)]" />
              Actively exploring
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
