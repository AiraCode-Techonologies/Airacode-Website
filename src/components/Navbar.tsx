"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  Layers 
} from "lucide-react";
import { AiraGlyph } from "@/components/AiraLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-2 z-40 w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 transition-all">
      <div className="w-full rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-[12px_16px_36px_rgba(30,37,48,0.08),-8px_-8px_24px_rgba(255,255,255,0.9),inset_3px_3px_6px_rgba(255,255,255,0.9),inset_-3px_-3px_8px_rgba(30,37,48,0.03)] px-4 sm:px-8 lg:px-10 py-3">
        <div className="flex items-center justify-between h-14">
          {/* Tactile Clay Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:rotate-6 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f4efe6)",
                boxShadow: "6px 8px 18px rgba(30, 37, 48, 0.08), inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 4px rgba(200, 190, 175, 0.3)",
                border: "1px solid rgba(237, 231, 220, 0.9)",
              }}
            >
              <AiraGlyph size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1e2530] flex items-center gap-0.5">
                AIRA<span className="text-[#eb4a2d]">CODE</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#6b7280] -mt-1 font-mono">
                Autonomous Systems
              </span>
            </div>
          </Link>

          {/* Desktop Tactile Pills */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#ede9e0] text-[#eb4a2d] shadow-[inset_3px_3px_6px_rgba(30,37,48,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]"
                      : "text-[#4b5563] hover:text-[#1e2530] hover:bg-[#f6f3ee]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="clay-btn clay-btn-coral px-6 py-2.5 text-xs sm:text-sm font-bold tracking-wide"
            >
              <span>Initialize Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="clay-btn clay-btn-coral px-3 py-1.5 text-xs font-bold"
            >
              Start
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl bg-[#ede9e0] text-[#1e2530] shadow-[inset_2px_2px_4px_rgba(30,37,48,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Tactile Menu Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-[#ede9e0] pt-4 pb-4 mt-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#ede9e0] text-[#eb4a2d] shadow-[inset_3px_3px_6px_rgba(30,37,48,0.08)]"
                        : "text-[#4b5563] hover:bg-[#f6f3ee]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 mt-2 border-t border-[#ede9e0]">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full clay-btn clay-btn-coral py-3 text-sm font-bold"
                >
                  <span>Initialize Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
