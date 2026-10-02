"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function CinematicScrollTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);
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
      <div className="h-1 w-full bg-[#ede8dc]/80 dark:bg-white/10 backdrop-blur-sm relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6] transition-all duration-150 ease-out rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to top button */}
      {showScrollTop && (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-3 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto w-8 h-8 rounded-full bg-white dark:bg-[#1f2937] shadow-sm border border-black/5 dark:border-white/10 flex items-center justify-center text-[#1e2530] dark:text-[#f3f4f6] hover:text-[#eb4a2d] hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Return to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
