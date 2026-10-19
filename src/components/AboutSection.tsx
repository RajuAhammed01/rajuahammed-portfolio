"use client";

import { aboutMe } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

export default function AboutSection() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-fade-in ${isInView ? "is-visible" : ""}`}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Building the Future with{" "}
            <span className="text-[var(--electric-cobalt)]">
              Data & Intelligence
            </span>
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* About Text */}
          <div className="lg:col-span-3 space-y-5">
            {aboutMe.paragraphs.map((p, i) => {
              const [pRef, pVisible] = useInView();
              return (
                <p
                  key={i}
                  ref={pRef as React.RefObject<HTMLParagraphElement>}
                  className={`text-base leading-relaxed text-[var(--slate-gray)] animate-fade-in ${
                    pVisible ? "is-visible" : ""
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {p}
                </p>
              );
            })}
          </div>

          {/* Focus Areas / Quick Facts */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <FocusAreasCard />
              <QuickFactsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusAreasCard() {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-6 animate-fade-in-right ${
        isInView ? "is-visible" : ""
      }`}
    >
      <h3 className="text-sm font-semibold text-[var(--midnight-ink)] uppercase tracking-wide mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-cobalt)]" />
        Focus Areas
      </h3>
      <div className="space-y-3">
        {aboutMe.focusAreas.map((area, i) => (
          <div key={area} className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--cobalt-subtle)] flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[var(--electric-cobalt)] group-hover:bg-opacity-15">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--electric-cobalt)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <span className="text-sm font-medium text-[var(--midnight-ink)]">
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
      className={`glass-card p-6 mt-4 animate-fade-in-right ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: "150ms" }}
    >
      <h3 className="text-sm font-semibold text-[var(--midnight-ink)] uppercase tracking-wide mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--refined-teal)]" />
        Quick Facts
      </h3>
      <div className="space-y-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-center justify-between py-2 border-b border-[var(--border-gray)] last:border-0"
          >
            <span className="text-xs font-mono text-[var(--slate-gray)] uppercase tracking-wider">
              {fact.label}
            </span>
            <span className="text-sm font-medium text-[var(--midnight-ink)]">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
