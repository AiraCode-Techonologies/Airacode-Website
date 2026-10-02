"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-2xl bg-[#ede9e0]/80 dark:bg-white/10 ${className}`} />
    );
  }

  if (showLabel) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer bg-[#ede9e0]/60 dark:bg-white/5 text-[#4b5563] dark:text-[#9ca3af] hover:text-[#1e2530] dark:hover:text-white ${className}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className="flex items-center gap-2.5">
          {isDark ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-[#ea580c]" />
          )}
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </span>
        <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-xl bg-white dark:bg-[#1f2937] text-[#1e2530] dark:text-[#f3f4f6] shadow-sm">
          {isDark ? "Dark" : "Light"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 group ${
        isDark
          ? "bg-[#1f2937] text-amber-400 border border-white/10 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] hover:bg-[#283548]"
          : "bg-[#ede9e0] text-[#ea580c] border border-black/5 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.85)] hover:bg-[#e4ded3]"
      } ${className}`}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-[#ea580c] transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
