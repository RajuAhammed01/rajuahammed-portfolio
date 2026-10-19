"use client";

import { education } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

export default function EducationSection() {
  const [ref, isInView] = useInView();

  return (
    <section id="education" className="py-24 lg:py-32 bg-white dark:bg-[#0B0F17] scroll-mt-24 transition-colors duration-250">
      <div className="section-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl animate-fade-in ${isInView ? "is-visible" : ""}`}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic{" "}
            <span className="text-[var(--electric-cobalt)]">Foundation</span>
          </h2>
          <p className="section-description">
            Undergraduate curriculum in computer science and engineering with focused study in algorithms, machine learning, and intelligent systems.
          </p>
        </div>

        <div
          className={`mt-10 sm:mt-12 glass-card p-7 sm:p-9 lg:p-10 max-w-5xl rounded-2xl sm:rounded-3xl border border-[var(--border-gray)] dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in ${
            isInView ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Degree & Institution Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5 min-w-0 flex-1">
              {/* Academic Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--cobalt-subtle)] flex items-center justify-center flex-shrink-0 border border-[var(--cobalt-muted)]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--electric-cobalt)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              {/* Title & Institution Details */}
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--midnight-ink)] leading-snug">
                  {education.degree}
                </h3>
                <p className="text-base font-semibold text-[var(--electric-cobalt)] mt-1.5">
                  {education.institution}
                </p>
                <p className="text-sm text-[var(--slate-gray)] flex items-center gap-1.5 mt-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="flex-shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{education.location}</span>
                </p>
              </div>
            </div>

            {/* Responsive Status Badge */}
            <div className="flex-shrink-0 self-start sm:self-auto sm:pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium text-[var(--midnight-ink)] bg-[var(--cobalt-subtle)] border border-[var(--cobalt-muted)] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[var(--refined-teal)] animate-pulse" aria-hidden="true" />
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{education.period}</span>
              </span>
            </div>
          </div>

          {/* Section Divider */}
          <div className="border-t border-[var(--border-gray)] my-6 sm:my-8" />

          {/* Highlights & Core Coursework */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--slate-gray)] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-cobalt)]" aria-hidden="true" />
              <span>Core Coursework & Highlights</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              {education.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--cool-white)] dark:bg-slate-800/60 border border-[var(--border-gray)] dark:border-white/10 hover:border-[var(--electric-cobalt)]/30 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--refined-teal)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm font-medium text-[var(--midnight-ink)] leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

