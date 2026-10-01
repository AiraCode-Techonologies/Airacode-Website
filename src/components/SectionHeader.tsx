import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlightedWord,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`w-full max-w-3xl mb-10 sm:mb-14 ${centered ? "mx-auto text-center" : "text-left"}`}>
      {/* Clean Status Badge */}
      {badge && (
        <div className={`status-badge text-[#eb4a2d] mb-3 sm:mb-4 ${centered ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2d] animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      {/* 1 or 2 Word Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1e2530]">
        {title}{" "}
        {highlightedWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
            {highlightedWord}
          </span>
        )}
      </h2>

      {/* Minimal Subtitle */}
      {subtitle && (
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-[#6b7280] leading-normal font-medium max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
