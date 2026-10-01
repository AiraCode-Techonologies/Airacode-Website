"use client";

import { useEffect, useState } from "react";
import { Film, Clapperboard, Sparkles, Video } from "lucide-react";

export default function CinematicScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentAct, setCurrentAct] = useState("SCENE 01 : VISION");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);

      if (progress < 18) {
        setCurrentAct("SCENE 01 // THE DIGITAL VISION");
      } else if (progress < 38) {
        setCurrentAct("SCENE 02 // 8 CORE DISCIPLINES");
      } else if (progress < 58) {
        setCurrentAct("SCENE 03 // AUTONOMOUS SWARMS");
      } else if (progress < 78) {
        setCurrentAct("SCENE 04 // MODERNIZATION YIELD");
      } else if (progress < 92) {
        setCurrentAct("SCENE 05 // PROVEN SCALE REELS");
      } else {
        setCurrentAct("SCENE 06 // PREMIERE SPRINT");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* 35mm Motion Picture Filmstrip Top Progress Tracker */}
      <div className="h-2 w-full bg-[#e4ddd0] border-b border-[#d8d0c0] relative overflow-hidden flex items-center">
        {/* Sprocket Holes */}
        <div className="absolute inset-0 flex justify-between px-2 items-center opacity-30 pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1 bg-[#1e2530] rounded-xs inline-block" />
          ))}
        </div>
        <div
          className="h-full bg-gradient-to-r from-[#ff7259] via-[#8b5cf6] to-[#3b82f6] transition-all duration-150 ease-out rounded-r-full shadow-[0_0_12px_rgba(235,74,45,0.6)] z-10"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Director's Clapperboard HUD */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-3 flex justify-between items-center">
        <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-[4px_6px_14px_rgba(45,35,25,0.06)] text-[10px] font-mono font-bold text-[#6b7280]">
          <Video className="w-3.5 h-3.5 text-[#eb4a2d]" />
          <span>35MM CINEMATIC STUDIO // AIRACODE</span>
        </div>

        <div className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-[6px_8px_18px_rgba(45,35,25,0.09),inset_2px_2px_4px_rgba(255,255,255,0.95)] text-xs font-mono font-black text-[#1e2530] transition-all">
          <Clapperboard className="w-3.5 h-3.5 text-[#eb4a2d]" />
          <span>{currentAct}</span>
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
          <span className="text-[#eb4a2d] font-bold">{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </div>
  );
}
