"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { useActiveSection, useSmoothScroll } from "@/hooks/useAnimations";

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
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[var(--border-gray)]"
          : "bg-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="section-container h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group"
          aria-label="Go to homepage"
        >
          <div className="w-9 h-9 rounded-lg bg-[var(--electric-cobalt)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <span className="text-white font-bold text-sm font-[var(--font-mono)]">
              RA
            </span>
          </div>
          <span className="font-semibold text-[var(--midnight-ink)] hidden sm:inline">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--electric-cobalt)]"
                    : "text-[var(--slate-gray)] hover:text-[var(--midnight-ink)] hover:bg-[var(--navy-overlay)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--electric-cobalt)] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-sm"
        >
          Get in Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--navy-overlay)] transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "var(--nav-height)" }}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[var(--nav-height)] right-0 w-72 h-[calc(100dvh-var(--nav-height))] bg-white border-l border-[var(--border-gray)] lg:hidden transition-transform duration-300 ease-[var(--ease-out)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 text-[0.9375rem] font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--electric-cobalt)] bg-[var(--cobalt-subtle)]"
                    : "text-[var(--slate-gray)] hover:text-[var(--midnight-ink)] hover:bg-[var(--navy-overlay)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="mt-4 pt-4 border-t border-[var(--border-gray)]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary w-full !text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
