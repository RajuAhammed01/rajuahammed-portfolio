"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo, aboutMe } from "@/lib/data";
import { useSmoothScroll } from "@/hooks/useAnimations";

// Data flow ambient particles
function DataFlowDots() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[var(--electric-cobalt)] opacity-20 float-gentle"
          style={{
            left: `${12 + i * 16}%`,
            top: `${18 + (i % 3) * 26}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}
    </div>
  );
}

// Simplified subtle neural network background motif (non-competing)
function SubtleNeuralMotif() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="absolute -right-10 -bottom-10 w-72 h-72 opacity-[0.07] pointer-events-none"
      aria-hidden="true"
    >
      <line x1="50" y1="50" x2="150" y2="100" stroke="var(--electric-cobalt)" strokeWidth="1.5" />
      <line x1="50" y1="150" x2="150" y2="100" stroke="var(--electric-cobalt)" strokeWidth="1.5" />
      <line x1="50" y1="250" x2="150" y2="200" stroke="var(--electric-cobalt)" strokeWidth="1.5" />
      <line x1="150" y1="100" x2="250" y2="150" stroke="var(--electric-cobalt)" strokeWidth="1.5" />
      <line x1="150" y1="200" x2="250" y2="150" stroke="var(--electric-cobalt)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="8" fill="var(--electric-cobalt)" />
      <circle cx="50" cy="150" r="8" fill="var(--electric-cobalt)" />
      <circle cx="50" cy="250" r="8" fill="var(--electric-cobalt)" />
      <circle cx="150" cy="100" r="10" fill="var(--electric-cobalt)" />
      <circle cx="150" cy="200" r="10" fill="var(--electric-cobalt)" />
      <circle cx="250" cy="150" r="12" fill="var(--refined-teal)" />
    </svg>
  );
}

export default function HeroSection() {
  const scrollTo = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-var(--nav-height))] flex items-center py-16 lg:py-24"
      style={{ paddingTop: "calc(var(--nav-height) + 2rem)" }}
    >
      {/* Background patterns */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--midnight-ink) 1px, transparent 1px),
              linear-gradient(90deg, var(--midnight-ink) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient ambient blobs */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--cobalt-subtle) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--teal-subtle) 0%, transparent 70%)",
          }}
        />
      </div>

      <DataFlowDots />

      <div className="section-container w-full relative z-10">
        {/* Balanced 2-Column Grid: Left Content (7 cols) & Right Profile Photo (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div
            className={`lg:col-span-7 flex flex-col gap-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--refined-teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--refined-teal)]"></span>
              </span>
              <span className="text-sm font-medium text-[var(--slate-gray)] font-[var(--font-mono)]">
                Open to AI/ML Opportunities & Research
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[var(--midnight-ink)] leading-[1.15] tracking-[-0.03em]">
                Hi, I&apos;m{" "}
                <span className="text-[var(--electric-cobalt)]">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-[var(--deep-navy)] opacity-85">
                {personalInfo.headline}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[var(--slate-gray)] leading-relaxed max-w-xl">
              {personalInfo.introduction}
            </p>

            {/* Focus areas */}
            <div className="flex flex-wrap gap-2">
              {aboutMe.focusAreas.slice(0, 4).map((area) => (
                <span key={area} className="tech-tag">
                  {area}
                </span>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                className="btn-primary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                View Projects
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="btn-secondary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Dedicated Profile Photo Area */}
          <div
            className={`lg:col-span-5 flex flex-col items-center justify-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] mx-auto">
              {/* Subtle background neural motif */}
              <SubtleNeuralMotif />

              {/* Profile Photo Card with Professional 4:5 Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--border-gray)] bg-white dark:bg-slate-900 dark:border-white/10 shadow-[var(--shadow-card-hover)] flex flex-col items-center justify-center group transition-all duration-300">
                {!imgError ? (
                  // Real Profile Image
                  <Image
                    src="/images/profile.jpg"
                    alt={`${personalInfo.name} — ${personalInfo.headline}`}
                    fill
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 370px, 420px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  // Tasteful, Elegant Placeholder matching the existing design system
                  <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[var(--ice-blue)]/40 via-[var(--cool-white)] to-white relative">
                    {/* Portrait Avatar Silhouette Icon */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[var(--cobalt-subtle)] border-2 border-dashed border-[var(--electric-cobalt)]/40 flex items-center justify-center mb-5 text-[var(--electric-cobalt)] shadow-sm">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold text-[var(--electric-cobalt)] bg-[var(--cobalt-subtle)] rounded-full border border-[var(--electric-cobalt)]/20 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-cobalt)]" />
                      Profile Photo Area
                    </span>

                    <h4 className="text-base font-bold text-[var(--midnight-ink)] mb-1">
                      {personalInfo.name}
                    </h4>
                    <p className="text-xs text-[var(--slate-gray)] mb-4 font-medium">
                      {personalInfo.headline}
                    </p>

                    <div className="p-3 rounded-lg bg-white/80 border border-[var(--border-gray)] text-[11px] text-[var(--slate-gray)] leading-relaxed max-w-[240px]">
                      Add your portrait file to:
                      <code className="block mt-1 font-mono text-[10px] text-[var(--deep-navy)] font-semibold bg-[var(--ice-blue)] px-1.5 py-0.5 rounded">
                        public/images/profile.jpg
                      </code>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Supporting Accent Badge 1 (Top-Right) */}
              <div
                className={`absolute -top-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl border border-[var(--border-gray)] shadow-[var(--shadow-md)] px-3.5 py-2.5 flex items-center gap-2.5 ${
                  isVisible ? "float-gentle" : ""
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--cobalt-subtle)] flex items-center justify-center flex-shrink-0 text-[var(--electric-cobalt)]">
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--midnight-ink)]">
                    AI / ML Engineering
                  </p>
                  <p className="text-[10px] text-[var(--slate-gray)] font-medium">
                    Models & Applied Systems
                  </p>
                </div>
              </div>

              {/* Floating Supporting Accent Badge 2 (Bottom-Left) */}
              <div
                className={`absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md rounded-xl border border-[var(--border-gray)] shadow-[var(--shadow-md)] px-3.5 py-2.5 flex items-center gap-2.5 ${
                  isVisible ? "float-gentle" : ""
                }`}
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--teal-subtle)] flex items-center justify-center flex-shrink-0 text-[var(--refined-teal)]">
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
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--midnight-ink)]">
                    ULAB CSE
                  </p>
                  <p className="text-[10px] text-[var(--slate-gray)] font-medium">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
