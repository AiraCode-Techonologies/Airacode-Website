"use client";

import { useEffect, useState, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((dark: boolean) => {
    setIsDark(dark);
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      root.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    const syncFromDOM = () => {
      const hasDarkClass = document.documentElement.classList.contains("dark");
      setIsDark(hasDarkClass);
    };

    // Initial check from localStorage or prefers-color-scheme
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored === "dark" || (!stored && prefersDark);
    applyTheme(initialDark);

    // Watch for class attribute mutations on <html>
    const observer = new MutationObserver(() => syncFromDOM());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleCustomChange = () => syncFromDOM();
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        applyTheme(e.newValue === "dark");
      }
    };

    window.addEventListener("theme-change", handleCustomChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("theme-change", handleCustomChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [applyTheme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentlyDark = root.classList.contains("dark");
    const nextDark = !currentlyDark;
    applyTheme(nextDark);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: { isDark: nextDark } }));
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
