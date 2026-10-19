"use client";

import { education } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

export default function EducationSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`animate-fade-in ${isInView ? "is-visible" : ""}`}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic{" "}
            <span className="text-[var(--electric-cobalt)]">Foundation</span>
          </h2>
        </div>

        <div
          className={`mt-10 glass-card p-8 lg:p-10 max-w-3xl animate-fade-in ${
            isInView ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[var(--cobalt-subtle)] flex items-center justify-center flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--electric-cobalt)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[var(--midnight-ink)]">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-medium text-[var(--electric-cobalt)] mt-1">
                    {education.institution}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium text-[var(--slate-gray)] bg-[var(--cool-white)] border border-[var(--border-gray)] rounded-full">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {education.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--slate-gray)] flex items-center gap-1.5 mb-4">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {education.location}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {education.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--refined-teal)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-[var(--slate-gray)]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
