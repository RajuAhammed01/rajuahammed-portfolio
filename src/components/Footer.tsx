"use client";

import React from "react";
import { personalInfo, navLinks } from "@/lib/data";
import { useSmoothScroll } from "@/hooks/useAnimations";

export default function Footer() {
  const scrollTo = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href.replace("#", ""));
  };

  return (
    <footer className="relative bg-[#0F172A] dark:bg-[#070A0F] text-slate-300 border-t border-white/10">
      {/* Subtle Top Gradient Divider Line */}
      <div
        className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />

      <div className="section-container py-16 lg:py-20">
        {/* Main Footer Grid with Strict Top-Edge Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">
          {/* Column 1: Profile & Positioning (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--electric-cobalt)] flex items-center justify-center shadow-sm flex-shrink-0">
                <span className="text-white font-bold text-sm font-mono tracking-tight">
                  RA
                </span>
              </div>
              <div className="min-w-0">
                <span className="text-white font-bold text-base block truncate">
                  {personalInfo.name}
                </span>
                <span className="text-slate-400 text-xs font-mono block truncate">
                  {personalInfo.headline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building intelligent systems through data-driven engineering, clean
              code, and continuous learning in machine learning and deep
              learning.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-[var(--refined-teal)]" />
              <span>Based in {personalInfo.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--electric-cobalt)]" />
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-sm text-slate-400 hover:text-white hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block text-sm text-slate-400 hover:text-white hover:translate-x-0.5 transition-all duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Column 3: Direct Connect & Social Profiles (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--refined-teal)]" />
              Connect
            </h4>

            <div className="space-y-2.5 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm text-slate-400 hover:text-white truncate transition-colors"
                title={`Email: ${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 hover:text-white transition-colors"
              >
                GitHub Profile (RajuAhammed01)
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-slate-400 hover:text-white transition-colors"
              >
                LinkedIn Profile (rajuahammed86)
              </a>
            </div>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/25 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/25 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/25 text-slate-300 hover:text-white transition-all duration-200"
                aria-label="Send Direct Email"
                title="Send Direct Email"
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
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © 2026 {personalInfo.name} — Aspiring AI/ML Engineer. All rights
            reserved.
          </p>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
          >
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
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
