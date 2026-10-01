import React from "react";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightedWord?: string;
  subtitle: string;
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
    <div className={`w-full max-w-6xl mb-12 sm:mb-16 ${centered ? "mx-auto text-center" : "text-left"}`}>
      {/* Sleek Category Status Badge with Animated Pulse */}
      <div className={`status-badge text-[#eb4a2d] mb-4 sm:mb-5 ${centered ? "mx-auto" : ""}`}>
        <span className="w-2 h-2 rounded-full bg-[#eb4a2d] animate-ping" />
        <Sparkles className="w-3.5 h-3.5 text-[#eb4a2d]" />
        <span>{badge}</span>
      </div>

      {/* Main Tactile Clay Headline */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1e2530] leading-[1.12]">
        {title}{" "}
        {highlightedWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
            {highlightedWord}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-[#4b5563] leading-relaxed max-w-4xl mx-auto font-medium">
        {subtitle}
      </p>
    </div>
  );
}
