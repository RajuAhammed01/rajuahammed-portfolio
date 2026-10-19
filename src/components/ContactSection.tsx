"use client";

import { useState, useId } from "react";
import { personalInfo } from "@/lib/data";
import { useInView } from "@/hooks/useAnimations";

// Safe clipboard copy helper with fallback
function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window !== "undefined" && navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text: string): boolean {
  if (typeof document === "undefined") return false;
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    textArea.setAttribute("readonly", "");
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

export default function ContactSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section
      id="contact"
      className="relative bg-[#0F172A] dark:bg-[#070A0F] text-white py-24 lg:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* Background Decorative Atmosphere */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
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
            background:
              "radial-gradient(circle, var(--electric-cobalt) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, var(--refined-teal) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-14 lg:mb-16 animate-fade-in ${
            headerVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-label !text-[var(--refined-teal)] justify-center">
            Get in Touch
          </span>
          <h2 className="section-title !text-white">
            Let&apos;s{" "}
            <span className="text-[var(--electric-cobalt)]">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mx-auto">
            I&apos;m always open to discussing AI/ML projects, research
            collaborations, learning opportunities, or potential roles. Feel free
            to reach out through any channel below.
          </p>
        </div>

        {/* 2-Column Desktop Layout with Balanced Heights (5 cols info, 7 cols form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Column 1: Contact Information Card (5 cols) */}
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>

          {/* Column 2: Message Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// Component: Left Unified Contact Information Card
// -------------------------------------------------------------
function ContactInfoCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    const ok = await copyToClipboard(personalInfo.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full">
      <div>
        {/* Card Header & Status */}
        <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              Contact Information
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Direct channels & professional networks
            </p>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-[var(--refined-teal)] animate-pulse" aria-hidden="true" />
            <span>Available</span>
          </span>
        </div>

        {/* Contact Detail Rows */}
        <div className="space-y-3.5 mt-5">
          {/* Email Item */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[var(--electric-cobalt)]/40 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[var(--cobalt-subtle)] border border-[var(--electric-cobalt)]/30 text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--electric-cobalt)] group-hover:text-white transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-slate-100 hover:text-[var(--electric-cobalt)] truncate block mt-0.5 transition-colors"
                  title={`Send email to ${personalInfo.email}`}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-lg border transition-all flex-shrink-0 ${
                copied
                  ? "bg-[var(--refined-teal)]/20 border-[var(--refined-teal)] text-[var(--refined-teal)] font-medium"
                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/25"
              }`}
              title="Copy email address to clipboard"
              aria-label={copied ? "Email address copied" : "Copy email address"}
            >
              {copied ? (
                <>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
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
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* GitHub Item */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[var(--electric-cobalt)]/40 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[var(--cobalt-subtle)] border border-[var(--electric-cobalt)]/30 text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--electric-cobalt)] group-hover:text-white transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  GitHub Profile
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-100 hover:text-[var(--electric-cobalt)] truncate block mt-0.5 transition-colors"
                  title="Visit Raju Ahammed's GitHub Profile"
                >
                  github.com/RajuAhammed01
                </a>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Open GitHub in new tab"
              title="Open GitHub"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* LinkedIn Item */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[var(--electric-cobalt)]/40 hover:bg-white/[0.06] transition-all flex items-center justify-between gap-3 group">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[var(--cobalt-subtle)] border border-[var(--electric-cobalt)]/30 text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--electric-cobalt)] group-hover:text-white transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  LinkedIn Profile
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-100 hover:text-[var(--electric-cobalt)] truncate block mt-0.5 transition-colors"
                  title="Visit Raju Ahammed's LinkedIn Profile"
                >
                  linkedin.com/in/rajuahammed86
                </a>
              </div>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Open LinkedIn in new tab"
              title="Open LinkedIn"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* Location Item */}
          <div className="p-3.5 sm:p-4 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-10 h-10 rounded-lg bg-[var(--cobalt-subtle)] border border-[var(--electric-cobalt)]/30 text-[var(--electric-cobalt)] flex items-center justify-center flex-shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Location & Timezone
                </span>
                <p className="text-sm font-semibold text-slate-100 mt-0.5 truncate">
                  {personalInfo.location} <span className="text-xs font-mono text-slate-400 font-normal">(GMT+6)</span>
                </p>
              </div>
            </div>

            <span className="flex h-2.5 w-2.5 relative flex-shrink-0 mr-1.5" title="Active timezone">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--refined-teal)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--refined-teal)]"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Callout */}
      <div className="mt-8 pt-5 border-t border-white/10 flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--refined-teal)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p>
          Typical response time: <span className="text-white font-semibold">within 24 hours</span>. Open to software engineering roles, ML internships, and research inquiries.
        </p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Component: Right Message Form Card
// -------------------------------------------------------------
function ContactFormCard() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please write a message before submitting.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hello Raju,\n\n${formData.message.trim()}\n\n---\nSender: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    // Safely trigger mailto in user's default email client
    const mailto = getMailtoLink();
    window.location.href = mailto;
  };

  const handleCopyDraft = async () => {
    const draft = `To: ${personalInfo.email}\nSubject: Portfolio Inquiry from ${formData.name.trim()}\n\nHello Raju,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()} (${formData.email.trim()})`;
    const ok = await copyToClipboard(draft);
    if (ok) {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2500);
    }
  };

  const inputClasses =
    "w-full h-11 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.05] text-sm text-white placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--electric-cobalt)]/40 focus:border-[var(--electric-cobalt)] focus:bg-white/[0.08]";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full">
      <div>
        <div className="mb-6 pb-4 border-b border-white/10">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            Send a Direct Message
          </h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Submitting prepares a pre-addressed email draft to{" "}
            <span className="text-slate-200 font-mono text-[11px]">
              {personalInfo.email}
            </span>
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[var(--cobalt-subtle)] border border-[var(--electric-cobalt)]/40 flex items-center justify-center mx-auto text-[var(--electric-cobalt)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div>
              <h4 className="text-base font-bold text-white">
                Draft Prepared in Your Email App
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-md mx-auto leading-relaxed">
                Your email client was prompted with the pre-filled message. If it
                did not open automatically, you can open it directly or copy the
                message details below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={getMailtoLink()}
                className="btn-primary !py-2.5 !px-5 !text-xs w-full sm:w-auto"
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
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open Email Client Again
              </a>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="px-4 py-2.5 text-xs font-medium rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-1.5"
              >
                {copiedDraft ? (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--refined-teal)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[var(--refined-teal)] font-semibold">
                      Message Copied!
                    </span>
                  </>
                ) : (
                  <>
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
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span>Copy Message Text</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                ← Edit or send another message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label
                htmlFor={nameId}
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
              >
                Your Name <span className="text-[var(--electric-cobalt)]">*</span>
              </label>
              <input
                type="text"
                id={nameId}
                name="name"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor={emailId}
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
              >
                Your Email Address <span className="text-[var(--electric-cobalt)]">*</span>
              </label>
              <input
                type="email"
                id={emailId}
                name="email"
                required
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor={messageId}
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
              >
                Message <span className="text-[var(--electric-cobalt)]">*</span>
              </label>
              <textarea
                id={messageId}
                name="message"
                required
                rows={4}
                placeholder="Hi Raju, I reviewed your machine learning projects and would like to connect regarding..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
                className="w-full min-h-[120px] p-4 rounded-xl border border-white/15 bg-white/[0.05] text-sm text-white placeholder-slate-500 transition-all resize-y focus:outline-none focus:ring-2 focus:ring-[var(--electric-cobalt)]/40 focus:border-[var(--electric-cobalt)] focus:bg-white/[0.08] leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full !py-3.5 !text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all rounded-xl"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 text-center">
        <p className="text-[11px] text-slate-400">
          🔒 No spam. Your email address is only used to respond to your direct inquiry.
        </p>
      </div>
    </div>
  );
}
