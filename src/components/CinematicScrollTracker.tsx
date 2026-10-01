"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Activity, Compass } from "lucide-react";

export default function CinematicScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("OVERVIEW");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);

      if (progress < 18) {
        setCurrentSection("01 // EXECUTIVE VISION");
      } else if (progress < 38) {
        setCurrentSection("02 // CORE DISCIPLINES");
      } else if (progress < 58) {
        setCurrentSection("03 // AUTONOMOUS SWARMS");
      } else if (progress < 78) {
        setCurrentSection("04 // ENTERPRISE YIELD");
      } else if (progress < 92) {
        setCurrentSection("05 // CLIENT PRODUCTIONS");
      } else {
        setCurrentSection("06 // ENGAGEMENT");
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
      {/* Precision Top Scroll Indicator */}
      <div className="h-1.5 w-full bg-[#ede8dc]/80 backdrop-blur-sm relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#ff7259] via-[#8b5cf6] to-[#3b82f6] transition-all duration-150 ease-out rounded-r-full shadow-[0_0_12px_rgba(235,74,45,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Precision Telemetry HUD */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-3 flex justify-between items-center">
        <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-[4px_6px_14px_rgba(45,35,25,0.06)] text-[11px] font-mono font-bold text-[#6b7280]">
          <Activity className="w-3.5 h-3.5 text-[#10b981] animate-pulse" />
          <span>AIRACODE RUNTIME // 60 FPS ENGINE</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto ml-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-[6px_8px_18px_rgba(45,35,25,0.08),inset_2px_2px_4px_rgba(255,255,255,0.95)] text-xs font-mono font-black text-[#1e2530] transition-all">
            <Compass className="w-3.5 h-3.5 text-[#eb4a2d] animate-spin-slow" />
            <span>{currentSection}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
            <span className="text-[#eb4a2d] font-bold">{Math.round(scrollProgress)}%</span>
          </div>

          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white shadow-md border border-white flex items-center justify-center text-[#1e2530] hover:text-[#eb4a2d] hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
