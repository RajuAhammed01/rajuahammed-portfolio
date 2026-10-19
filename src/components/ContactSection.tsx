"use client";

import { useState, useRef } from "react";
import { personalInfo } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

export default function ContactSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--midnight-ink)] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(var(--white) 1px, transparent 1px),
              linear-gradient(90deg, var(--white) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--electric-cobalt) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto animate-fade-in ${
            headerVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-label !text-[var(--refined-teal)]">
            Get in Touch
          </span>
          <h2 className="section-title !text-white">
            Let&apos;s{" "}
            <span className="text-[var(--electric-cobalt)]">Connect</span>
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            I&apos;m always open to discussing AI/ML projects, research
            collaborations, learning opportunities, or potential roles. Feel free
            to reach out.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <ContactInfoCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              }
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              index={0}
            />
            <ContactInfoCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--electric-cobalt)" }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              }
              label="GitHub"
              value="RajuAhammed01"
              href={personalInfo.github}
              index={1}
            />
            <ContactInfoCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--electric-cobalt)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
              label="LinkedIn"
              value="rajuahammed86"
              href={personalInfo.linkedin}
              index={2}
            />
            <ContactInfoCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              }
              label="Location"
              value={personalInfo.location}
              index={3}
            />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  icon,
  label,
  value,
  href,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  index: number;
}) {
  const [ref, isInView] = useInView();
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-medium text-gray-200 mt-0.5">{value}</p>
      </div>
    </div>
  );

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-fade-in-left ${isInView ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="block p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-200"
        >
          {content}
        </a>
      ) : (
        <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
          {content}
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [ref, isInView] = useInView();
  const [formState, setFormState] = useState<"idle" | "info">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("info");
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 transition-all duration-200 focus:border-[var(--electric-cobalt)] focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[var(--electric-cobalt)]";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-fade-in-right ${isInView ? "is-visible" : ""}`}
    >
      <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h3 className="text-base font-semibold text-white mb-1">
          Send a Message
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          This form requires a backend service (e.g., Formspree, EmailJS) to
          function. See the README for setup instructions.
        </p>

        {formState === "info" ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-[var(--cobalt-subtle)] flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              Form backend not configured yet.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              In the meantime, please reach out via email at{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[var(--electric-cobalt)] hover:underline"
              >
                {personalInfo.email}
              </a>
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="text-sm text-[var(--electric-cobalt)] hover:underline"
            >
              ← Back to form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-medium text-gray-400 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-medium text-gray-400 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-gray-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
              />
            </div>
            <button type="submit" className="btn-primary w-full !py-3">
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
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
