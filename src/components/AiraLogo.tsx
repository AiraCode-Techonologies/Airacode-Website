"use client";

import React from "react";

interface AiraLogoProps {
  size?: number;
  className?: string;
  variant?: "mark" | "icon" | "full";
  animated?: boolean;
}

export default function AiraLogo({
  size = 40,
  className = "",
  variant = "mark",
  animated = false,
}: AiraLogoProps) {
  if (variant === "full") {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        <div
          className={`relative rounded-2xl flex items-center justify-center transition-transform duration-300 ${
            animated ? "hover:scale-105 hover:rotate-3" : ""
          }`}
          style={{
            width: size,
            height: size,
            background: "linear-gradient(135deg, #ffffff 0%, #f4efe6 100%)",
            boxShadow:
              "6px 8px 18px rgba(30, 37, 48, 0.08), -4px -4px 12px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(200, 190, 175, 0.3)",
            border: "1px solid rgba(237, 231, 220, 0.8)",
          }}
        >
          <AiraGlyph size={size * 0.65} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-0.5 leading-none">
            AIRA<span className="text-[#eb4a2d]">CODE</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#6b7280] mt-1 font-mono">
            Autonomous Scale
          </span>
        </div>
      </div>
    );
  }

  if (variant === "icon") {
    return (
      <div
        className={`relative rounded-2xl flex items-center justify-center transition-transform duration-300 ${
          animated ? "hover:scale-105 hover:rotate-3" : ""
        } ${className}`}
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #ffffff 0%, #f4efe6 100%)",
          boxShadow:
            "6px 8px 18px rgba(30, 37, 48, 0.08), -4px -4px 12px rgba(255, 255, 255, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(200, 190, 175, 0.3)",
          border: "1px solid rgba(237, 231, 220, 0.8)",
        }}
      >
        <AiraGlyph size={size * 0.65} />
      </div>
    );
  }

  // Default: Pure standalone SVG mark
  return <AiraGlyph size={size} className={className} />;
}

export function AiraGlyph({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-label="AIRACODE Logo"
    >
      <defs>
        <linearGradient id="aira-glyph-coral" x1="112" y1="92" x2="400" y2="396" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7354" />
          <stop offset="60%" stopColor="#eb4a2d" />
          <stop offset="100%" stopColor="#c93418" />
        </linearGradient>

        <filter id="aira-glyph-shadow" x="-10%" y="-10%" width="125%" height="125%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#eb4a2d" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#aira-glyph-shadow)">
        {/* Left Bracket < meets Apex (Input / Ingestion / A-stem) */}
        <path
          d="M 172 396 L 112 260 L 256 92"
          stroke="url(#aira-glyph-coral)"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right Bracket > meets Apex (Output / Autonomous Scale / A-stem) */}
        <path
          d="M 256 92 L 400 260 L 340 396"
          stroke="url(#aira-glyph-coral)"
          strokeWidth="48"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Code Forward Slash / (Execution Engine & A-Crossbar) */}
        <path
          d="M 224 316 L 288 204"
          stroke="url(#aira-glyph-coral)"
          strokeWidth="44"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
