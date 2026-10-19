"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo, aboutMe } from "@/lib/data";
import { useSmoothScroll, usePrefersReducedMotion } from "@/hooks/useAnimations";

// Neural Network Visualization Component
function NeuralNetworkViz() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Define node positions for a 3-layer network
  const layers = [
    // Input layer
    [
      { x: 60, y: 80 },
      { x: 60, y: 160 },
      { x: 60, y: 240 },
      { x: 60, y: 320 },
    ],
    // Hidden layer 1
    [
      { x: 200, y: 60 },
      { x: 200, y: 140 },
      { x: 200, y: 220 },
      { x: 200, y: 300 },
      { x: 200, y: 380 },
    ],
    // Hidden layer 2
    [
      { x: 340, y: 100 },
      { x: 340, y: 190 },
      { x: 340, y: 280 },
      { x: 340, y: 370 },
    ],
    // Output layer
    [
      { x: 480, y: 150 },
      { x: 480, y: 250 },
    ],
  ];

  // Generate connections between adjacent layers
  const connections: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  let connIdx = 0;
  for (let l = 0; l < layers.length - 1; l++) {
    for (const from of layers[l]) {
      for (const to of layers[l + 1]) {
        connections.push({
          x1: from.x,
          y1: from.y,
          x2: to.x,
          y2: to.y,
          delay: connIdx * 0.1,
        });
        connIdx++;
      }
    }
  }

  return (
    <svg
      viewBox="0 0 540 440"
      className="w-full h-full"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--electric-cobalt)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--electric-cobalt)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--refined-teal)" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="nodeGradCobalt" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--electric-cobalt)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--electric-cobalt)" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient id="nodeGradTeal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--refined-teal)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--refined-teal)" stopOpacity="0.5" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {connections.map((conn, i) => (
        <line
          key={`conn-${i}`}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="url(#connectionGrad)"
          strokeWidth="1"
          className={!prefersReducedMotion ? "connection-flow" : ""}
          style={
            !prefersReducedMotion
              ? { animationDelay: `${(i * 0.05) % 3}s` }
              : {}
          }
        />
      ))}

      {/* Nodes */}
      {layers.map((layer, layerIdx) =>
        layer.map((node, nodeIdx) => (
          <g key={`node-${layerIdx}-${nodeIdx}`}>
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={layerIdx === 0 || layerIdx === layers.length - 1 ? 10 : 8}
              fill={layerIdx < 2 ? "var(--electric-cobalt)" : "var(--refined-teal)"}
              opacity={0.1}
              className={!prefersReducedMotion ? "node-pulse" : ""}
              style={
                !prefersReducedMotion
                  ? { animationDelay: `${(layerIdx * 0.7 + nodeIdx * 0.3)}s` }
                  : {}
              }
            />
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={layerIdx === 0 || layerIdx === layers.length - 1 ? 6 : 5}
              fill={layerIdx < 2 ? "url(#nodeGradCobalt)" : "url(#nodeGradTeal)"}
              filter="url(#glow)"
              className={!prefersReducedMotion ? "node-pulse" : ""}
              style={
                !prefersReducedMotion
                  ? { animationDelay: `${(layerIdx * 0.7 + nodeIdx * 0.3)}s` }
                  : {}
              }
            />
          </g>
        ))
      )}

      {/* Layer labels */}
      <text x="60" y="420" textAnchor="middle" fill="var(--slate-gray)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">
        Input
      </text>
      <text x="200" y="420" textAnchor="middle" fill="var(--slate-gray)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">
        Hidden
      </text>
      <text x="340" y="420" textAnchor="middle" fill="var(--slate-gray)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">
        Hidden
      </text>
      <text x="480" y="420" textAnchor="middle" fill="var(--slate-gray)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">
        Output
      </text>
    </svg>
  );
}

// Data flow particles
function DataFlowDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--electric-cobalt)] opacity-20 float-gentle"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const scrollTo = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
        {/* Top-right gradient blob */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, var(--cobalt-subtle) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-left gradient blob */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ${
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
                Open to opportunities
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--midnight-ink)] leading-[1.1] tracking-[-0.03em]">
                Hi, I&apos;m{" "}
                <span className="text-[var(--electric-cobalt)]">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-semibold text-[var(--deep-navy)] opacity-70">
                {personalInfo.headline}
              </p>
            </div>

            {/* Introduction */}
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

            {/* CTAs */}
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
            </div>
          </div>

          {/* Neural Network Visualization */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background card for the viz */}
              <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[var(--border-gray)] shadow-[var(--shadow-md)]">
                {/* Title bar */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-gray)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-[var(--slate-gray)]">
                    neural_network.py
                  </span>
                </div>
                <NeuralNetworkViz />
              </div>

              {/* Floating accent cards */}
              <div
                className={`absolute -top-4 -right-4 bg-white rounded-xl border border-[var(--border-gray)] shadow-[var(--shadow-md)] px-4 py-3 ${
                  isVisible ? "float-gentle" : ""
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--cobalt-subtle)] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--electric-cobalt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--midnight-ink)]">ML Models</p>
                    <p className="text-[10px] text-[var(--slate-gray)]">Classification & Regression</p>
                  </div>
                </div>
              </div>

              <div
                className={`absolute -bottom-3 -left-6 bg-white rounded-xl border border-[var(--border-gray)] shadow-[var(--shadow-md)] px-4 py-3 ${
                  isVisible ? "float-gentle" : ""
                }`}
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--teal-subtle)] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--refined-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--midnight-ink)]">Data Science</p>
                    <p className="text-[10px] text-[var(--slate-gray)]">Analysis & Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-60" : "opacity-0"
          }`}
        >
          <span className="text-xs text-[var(--slate-gray)] font-[var(--font-mono)]">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-[var(--slate-gray)] flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[var(--slate-gray)] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
