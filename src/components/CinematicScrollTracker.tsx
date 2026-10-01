"use client";

import { useEffect, useState } from "react";
import { Film, Clapperboard, Sparkles } from "lucide-react";

export default function CinematicScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentAct, setCurrentAct] = useState("ACT I : VISION");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);

      if (progress < 20) {
        setCurrentAct("ACT I : THE VISION");
      } else if (progress < 40) {
        setCurrentAct("ACT II : CAPABILITIES");
      } else if (progress < 60) {
        setCurrentAct("ACT III : AUTONOMOUS SWARMS");
      } else if (progress < 80) {
        setCurrentAct("ACT IV : MODERNIZATION YIELD");
      } else {
        setCurrentAct("ACT V : PRODUCTION SCALE");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Cinematic Filmstrip Top Tracker Bar */}
      <div className="h-1.5 w-full bg-[#e8e3d8]/60 backdrop-blur-sm relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#ff7259] via-[#8b5cf6] to-[#3b82f6] transition-all duration-150 ease-out rounded-r-full shadow-[0_0_12px_rgba(235,74,45,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Cinematic Scene Meter */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-2.5 flex justify-end">
        <div className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/80 shadow-[4px_6px_16px_rgba(30,37,48,0.08),inset_2px_2px_4px_rgba(255,255,255,0.9)] text-[10px] sm:text-xs font-mono font-bold text-[#1e2530] transition-all">
          <Clapperboard className="w-3.5 h-3.5 text-[#eb4a2d]" />
          <span>{currentAct}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
          <span className="text-[#6b7280] hidden sm:inline">{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </div>
  );
}
