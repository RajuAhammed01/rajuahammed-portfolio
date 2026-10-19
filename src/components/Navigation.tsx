"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { useActiveSection, useSmoothScroll } from "@/hooks/useAnimations";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useSmoothScroll();
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace("#", ""))
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      scrollTo(id);
      setIsOpen(false);
    },
    [scrollTo]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0B0F17]/90 backdrop-blur-xl shadow-xs border-b border-[var(--border-gray)] dark:border-white/10"
          : "bg-white/70 dark:bg-[#0B0F17]/70 backdrop-blur-md border-b border-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="section-container h-full flex items-center justify-between gap-4">
        {/* Left — Brand Identity (Circular RA Badge + Name + Subtitle) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group flex-shrink-0"
          aria-label={`${personalInfo.name} — Return to Home`}
        >
          {/* Circular Electric-Cobalt Badge */}
          <div className="w-10 h-10 rounded-full bg-[var(--electric-cobalt)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm flex-shrink-0">
            <span className="text-white font-bold text-sm font-mono tracking-tight">
              RA
            </span>
          </div>

          {/* Name & Subtle Subtitle */}
          <div className="flex flex-col text-left">
            <span className="font-bold text-[var(--midnight-ink)] text-base tracking-tight leading-none group-hover:text-[var(--electric-cobalt)] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono font-medium text-[var(--slate-gray)] mt-1 leading-none">
              AI/ML Engineer
            </span>
          </div>
        </a>

        {/* Center — Navigation Links (Exact 7 ordered sections) */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-2 px-1 text-sm font-medium transition-colors duration-200 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--electric-cobalt)] ${
                  isActive
                    ? "text-[var(--electric-cobalt)] font-semibold"
                    : "text-[var(--slate-gray)] hover:text-[var(--midnight-ink)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-1 right-1 h-0.5 bg-[var(--electric-cobalt)] rounded-full transition-all duration-200"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right — Theme Toggle and CTA */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          {/* Primary CTA (Links to Contact section) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary !py-2.5 !px-5 !text-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile / Tablet Controls (Theme Toggle + Hamburger) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Compact Theme Toggle on mobile header */}
          <ThemeToggle />

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border-gray)] dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-[var(--navy-overlay)] dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-[var(--midnight-ink)] rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-[var(--midnight-ink)] rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-[var(--midnight-ink)] rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "var(--nav-height)" }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-[var(--nav-height)] right-0 w-80 max-w-[85vw] h-[calc(100dvh-var(--nav-height))] bg-white dark:bg-[#0B0F17] border-l border-[var(--border-gray)] dark:border-white/10 lg:hidden shadow-xl transition-transform duration-300 ease-[var(--ease-out)] overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-1.5">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[var(--slate-gray)] mb-2 px-3">
            Navigation
          </span>

          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200 flex items-center justify-between ${
                  isActive
                    ? "text-[var(--electric-cobalt)] bg-[var(--cobalt-subtle)] font-semibold"
                    : "text-[var(--slate-gray)] hover:text-[var(--midnight-ink)] hover:bg-[var(--navy-overlay)] dark:hover:bg-white/5"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--electric-cobalt)]"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}

          {/* Mobile CTA */}
          <div className="mt-6 pt-5 border-t border-[var(--border-gray)] dark:border-white/10 space-y-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary w-full !py-3 !text-sm text-center"
            >
              Get in Touch
            </a>
            <p className="text-[11px] font-mono text-center text-[var(--slate-gray)]">
              Based in {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
