"use client";

import { certifications, technicalAchievements } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

export default function CertificationsSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section
      id="certifications"
      className="py-24 lg:py-32 bg-[var(--cool-white)] scroll-mt-24 transition-colors duration-250"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`max-w-2xl mb-14 lg:mb-16 animate-fade-in ${
            headerVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-label">Certifications & Achievements</span>
          <h2 className="section-title">
            Continuous Learning &{" "}
            <span className="text-[var(--electric-cobalt)]">Milestones</span>
          </h2>
          <p className="section-description">
            Verified course completions and technical milestones reflecting
            active, disciplined study in deep learning, database systems, and
            software engineering.
          </p>
        </div>

        {/* 1. Verified Courses Grid */}
        <div className="mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span
              className="w-2.5 h-2.5 rounded-full bg-[var(--electric-cobalt)]"
              aria-hidden="true"
            />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--midnight-ink)]">
              Verified Course Completions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* 2. Technical Achievements & Engineering Milestones */}
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span
              className="w-2.5 h-2.5 rounded-full bg-[var(--refined-teal)]"
              aria-hidden="true"
            />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--midnight-ink)]">
              Engineering Milestones & Focus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {technicalAchievements.map((item, index) => (
              <AchievementCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Section Informational Note */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-[var(--border-gray)] dark:border-white/10 shadow-xs max-w-2xl text-left sm:text-center">
            <div className="w-8 h-8 rounded-lg bg-[var(--teal-subtle)] text-[var(--refined-teal)] flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-[var(--slate-gray)] leading-relaxed">
              Course completions reflect verified curriculum study. Additional
              certifications in applied machine learning and cloud architectures
              are actively in progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  const [ref, isInView] = useInView();

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`glass-card p-6 sm:p-7 flex flex-col justify-between rounded-2xl border border-[var(--border-gray)] bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        {/* Card Header: Issuer + Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3.5 border-b border-[var(--border-gray)]/80 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[var(--cobalt-subtle)] text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0">
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
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="text-xs font-mono font-semibold text-[var(--midnight-ink)]">
              {cert.issuer}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-[var(--refined-teal)] bg-[var(--teal-subtle)] border border-[var(--refined-teal)]/20">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[var(--refined-teal)] animate-pulse"
              aria-hidden="true"
            />
            <span>{cert.status}</span>
          </span>
        </div>

        {/* Title & Badge Subtitle */}
        <h4 className="text-base sm:text-lg font-bold text-[var(--midnight-ink)] leading-snug mb-1">
          {cert.title}
        </h4>
        <span className="inline-block text-xs font-semibold text-[var(--electric-cobalt)] mb-3">
          {cert.badgeText}
        </span>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--slate-gray)] leading-relaxed mb-5">
          {cert.description}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="mt-auto pt-4 border-t border-[var(--border-gray)]/80 dark:border-white/10">
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="tech-tag !text-[10px] !px-2.5 !py-0.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function AchievementCard({
  item,
  index,
}: {
  item: (typeof technicalAchievements)[0];
  index: number;
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-6 rounded-2xl border border-[var(--border-gray)] bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--slate-gray)]">
            {item.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold text-[var(--electric-cobalt)] bg-[var(--cobalt-subtle)]">
            {item.metric}
          </span>
        </div>
        <h4 className="text-base font-bold text-[var(--midnight-ink)] mb-2 leading-snug">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-[var(--slate-gray)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
