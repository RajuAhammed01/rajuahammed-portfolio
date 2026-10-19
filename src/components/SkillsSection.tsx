"use client";

import { skillCategories } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

// Skill icons mapped by name
const skillIcons: Record<string, JSX.Element> = {
  Python: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="var(--electric-cobalt)">
      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.67.04-.55.13-.44.22-.35.28-.27.34-.2.37-.14.39-.1.39-.06.37-.04.34-.02.29V16h5.74v1.67H4.66l-.22-.01-.22-.04-.22-.07-.22-.11-.22-.14-.21-.18-.21-.22-.2-.27-.18-.32-.17-.37-.14-.42-.11-.47-.07-.53-.04-.57V11.4l.09-.57.16-.53.22-.48.28-.43.34-.37.39-.32.43-.26.47-.21.49-.16.51-.12.52-.08.52-.04.52-.01h8.74zM9 5.74c-.48 0-.87.15-1.17.47-.3.31-.45.72-.45 1.22s.15.9.45 1.21c.3.32.69.48 1.17.48.47 0 .86-.16 1.16-.48.3-.31.45-.71.45-1.21s-.15-.91-.45-1.22c-.3-.32-.69-.47-1.16-.47z" />
      <path d="M9.69 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2v-5.12l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h6.35l.67-.04.55-.13.44-.22.35-.28.27-.34.2-.37.14-.39.1-.39.06-.37.04-.34.02-.29V8h-5.74V6.33h10.08l.22.01.22.04.22.07.22.11.22.14.21.18.21.22.2.27.18.32.17.37.14.42.11.47.07.53.04.57v3.53l-.09.57-.16.53-.22.48-.28.43-.34.37-.39.32-.43.26-.47.21-.49.16-.51.12-.52.08-.52.04-.52.01H9.69zM15 18.26c.48 0 .87-.15 1.17-.47.3-.31.45-.72.45-1.22s-.15-.9-.45-1.21c-.3-.32-.69-.48-1.17-.48-.47 0-.86.16-1.16.48-.3.31-.45.71-.45 1.21s.15.91.45 1.22c.3.32.69.47 1.16.47z" />
    </svg>
  ),
};

// Icon component for skills - returns a generic icon if specific one not found
function SkillIcon({ name }: { name: string }) {
  if (skillIcons[name]) return skillIcons[name];

  // Generate a consistent color from name
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
    <section id="skills" className="py-24 lg:py-32 bg-[var(--cool-white)]">
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
        <div className="mt-14 grid md:grid-cols-2 gap-6">
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
      className={`glass-card p-6 lg:p-8 animate-fade-in ${
        isInView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Category header */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: accent.bg }}
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: accent.dot }}
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-[var(--midnight-ink)]">
            {category.title}
          </h3>
          <p className="text-sm text-[var(--slate-gray)] mt-0.5">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-2 px-3.5 py-2 bg-[var(--cool-white)] border border-[var(--border-gray)] rounded-lg transition-all duration-200 hover:border-[var(--electric-cobalt)] hover:bg-[var(--cobalt-subtle)] cursor-default"
          >
            <SkillIcon name={skill.name} />
            <span className="text-sm font-medium text-[var(--midnight-ink)]">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
