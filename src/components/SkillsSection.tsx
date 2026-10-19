"use client";

import React from "react";
import { skillCategories } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

// Skill icons mapped by name
const skillIcons: Record<string, React.ReactNode> = {
  Python: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="var(--electric-cobalt)">
      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.67.04-.55.13-.44.22-.35.28-.27.34-.2.37-.14.39-.1.39-.06.37-.04.34-.02.29V16h5.74v1.67H4.66l-.22-.01-.22-.04-.22-.07-.22-.11-.22-.14-.21-.18-.21-.22-.2-.27-.18-.32-.17-.37-.14-.42-.11-.47-.07-.53-.04-.57V11.4l.09-.57.16-.53.22-.48.28-.43.34-.37.39-.32.43-.26.47-.21.49-.16.51-.12.52-.08.52-.04.52-.01h8.74zM9 5.74c-.48 0-.87.15-1.17.47-.3.31-.45.72-.45 1.22s.15.9.45 1.21c.3.32.69.48 1.17.48.47 0 .86-.16 1.16-.48.3-.31.45-.71.45-1.21s-.15-.91-.45-1.22c-.3-.32-.69-.47-1.16-.47z" />
      <path d="M9.69 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2v-5.12l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h6.35l.67-.04.55-.13.44-.22.35-.28.27-.34.2-.37.14-.39.1-.39.06-.37.04-.34.02-.29V8h-5.74V6.33h10.08l.22.01.22.04.22.07.22.11.22.14.21.18.21.22.2.27.18.32.17.37.14.42.11.47.07.53.04.57v3.53l-.09.57-.16.53-.22.48-.28.43-.34.37-.39.32-.43.26-.47.21-.49.16-.51.12-.52.08-.52.04-.52.01H9.69zM15 18.26c.48 0 .87-.15 1.17-.47.3-.31.45-.72.45-1.22s-.15-.9-.45-1.21c-.3-.32-.69-.48-1.17-.48-.47 0-.86.16-1.16.48-.3.31-.45.71-.45 1.21s.15.91.45 1.22c.3.32.69.47 1.16.47z" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  C: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--deep-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10a6 6 0 1 0 0 8" />
      <path d="M12 2l8 4.5v11L12 22 4 17.5v-11L12 2z" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  "scikit-learn": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <line x1="8.5" y1="7.5" x2="10" y2="15.5" />
      <line x1="15.5" y1="7.5" x2="14" y2="15.5" />
      <line x1="9" y1="6" x2="15" y2="6" />
    </svg>
  ),
  XGBoost: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  TensorFlow: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  Pandas: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--deep-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  ),
  NumPy: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
      <path d="M18 8h.01" />
      <path d="M8 12h8" />
      <path d="M8 16h4" />
    </svg>
  ),
  "Django REST Framework": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  "REST APIs": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <line x1="10" y1="6.5" x2="14" y2="6.5" />
      <line x1="10" y1="17.5" x2="14" y2="17.5" />
    </svg>
  ),
  Matplotlib: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <path d="M2 20h20" />
    </svg>
  ),
  Seaborn: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c3-4 6-4 9 0s6 4 9 0" />
      <path d="M2 18c3-4 6-4 9 0s6 4 9 0" />
      <path d="M2 6c3-4 6-4 9 0s6 4 9 0" />
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="17" />
      <line x1="16" y1="13" x2="8" y2="17" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="6" y1="9" x2="6" y2="15" />
      <path d="M18 15a9 9 0 0 0-9-9" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" style={{ color: "var(--midnight-ink)" }}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
};

// Icon component for skills
function SkillIcon({ name }: { name: string }) {
  if (skillIcons[name]) return skillIcons[name];

  const colors = [
    "var(--electric-cobalt)",
    "var(--refined-teal)",
    "var(--deep-navy)",
  ];
  const colorIndex = name.length % colors.length;

  return (
    <div
      className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold font-mono"
      style={{
        color: colors[colorIndex],
        backgroundColor: `${colors[colorIndex]}15`,
      }}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export default function SkillsSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[var(--cool-white)] scroll-mt-24">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`animate-fade-in ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            Tools & Technologies I{" "}
            <span className="text-[var(--electric-cobalt)]">Work With</span>
          </h2>
          <p className="section-description">
            A focused toolkit built through hands-on projects and continuous
            learning in machine learning, data science, and software engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIdx) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={catIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const [ref, isInView] = useInView();

  const accentColors = [
    { bg: "var(--cobalt-subtle)", dot: "var(--electric-cobalt)" },
    { bg: "var(--teal-subtle)", dot: "var(--refined-teal)" },
    { bg: "var(--cobalt-subtle)", dot: "var(--electric-cobalt)" },
    { bg: "var(--teal-subtle)", dot: "var(--refined-teal)" },
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-7 sm:p-8 lg:p-9 flex flex-col justify-between animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category header */}
      <div className="flex items-start gap-4 mb-6 sm:mb-7">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: accent.bg }}
        >
          <div
            className="w-3.5 h-3.5 rounded-full"
            style={{ backgroundColor: accent.dot }}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[var(--midnight-ink)]">
            {category.title}
          </h3>
          <p className="text-sm text-[var(--slate-gray)] mt-1 leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills Badges with flex-wrap and generous gaps */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-auto">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-white dark:bg-slate-800/80 border border-[var(--border-gray)] dark:border-white/10 rounded-lg shadow-sm transition-all duration-200 hover:border-[var(--electric-cobalt)] hover:shadow-md hover:-translate-y-0.5 cursor-default"
          >
            <SkillIcon name={skill.name} />
            <span className="text-sm font-semibold text-[var(--midnight-ink)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
