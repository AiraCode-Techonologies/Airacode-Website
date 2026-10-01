"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Activity } from "lucide-react";

export default function CinematicScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("Overview");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);

      if (progress < 20) {
        setCurrentSection("Overview");
      } else if (progress < 40) {
        setCurrentSection("Capabilities");
      } else if (progress < 60) {
        setCurrentSection("Agents");
      } else if (progress < 80) {
        setCurrentSection("Impact");
      } else {
        setCurrentSection("Scale");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top Progress Bar */}
      <div className="h-1 w-full bg-[#ede8dc]/80 backdrop-blur-sm relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6] transition-all duration-150 ease-out rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating HUD */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-2 flex justify-end items-center gap-2">
        <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-white text-xs font-mono font-bold text-[#1e2530]">
          <Activity className="w-3 h-3 text-[#10b981] animate-pulse" />
          <span>{currentSection}</span>
          <span className="text-[#eb4a2d] font-bold">{Math.round(scrollProgress)}%</span>
        </div>

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-7 h-7 rounded-full bg-white shadow-sm border border-white flex items-center justify-center text-[#1e2530] hover:text-[#eb4a2d] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Return to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
