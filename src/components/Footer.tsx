"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Zap,
  Cpu,
  GitBranch,
  Terminal
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="relative mt-24 border-t border-[#ede9e0] dark:border-white/10 bg-[#f0ece2] dark:bg-[#0f131a] text-[#4b5563] dark:text-[#9ca3af] overflow-hidden w-full transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#d6cebe] dark:border-white/10">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo-icon.png" 
                  alt="AIRACODE Logo" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-contain filter drop-shadow-sm" 
                />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#1e2530] dark:text-[#f3f4f6]">
                AIRA<span className="text-[#eb4a2d]">CODE</span>
              </span>
            </Link>

            <p className="text-sm sm:text-base leading-relaxed text-[#4b5563] dark:text-[#9ca3af] max-w-lg font-medium">
              We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
            </p>

            {/* Newsletter Dispatch */}
            <div className="pt-2">
              <span className="block text-xs uppercase font-mono tracking-wider text-[#eb4a2d] mb-2 font-bold">
                Subscribe to AI Architecture Dispatches
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enterprise@domain.com"
                  required
                  className="flex-1 px-4 py-2.5 text-xs bg-white dark:bg-[#151a24] rounded-2xl text-[#1e2530] dark:text-[#f3f4f6] placeholder-[#9ca3af] border border-transparent dark:border-white/10 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] dark:shadow-none focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                />
                <button
                  type="submit"
                  className="clay-btn clay-btn-coral px-4 py-2 text-xs font-bold"
                >
                  {subscribed ? <CheckCircle2 className="w-4 h-4 text-white" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <span className="block text-xs text-[#059669] mt-1 font-mono font-bold">
                  ✓ Enterprise dispatch subscription confirmed.
                </span>
              )}
            </div>

            {/* Compliance Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white dark:bg-[#151a24] text-[#1e2530] dark:text-[#f3f4f6] border border-black/5 dark:border-white/10 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#eb4a2d]" /> SOC 2 Type II
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white dark:bg-[#151a24] text-[#1e2530] dark:text-[#f3f4f6] border border-black/5 dark:border-white/10 shadow-sm">
                <Lock className="w-3.5 h-3.5 text-[#7c3aed]" /> HIPAA Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white dark:bg-[#151a24] text-[#1e2530] dark:text-[#f3f4f6] border border-black/5 dark:border-white/10 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-[#059669]" /> ISO/IEC 27001
              </span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#eb4a2d] font-black mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {servicesData.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-[#eb4a2d] dark:hover:text-[#eb4a2d] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Advanced Engineering */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#eb4a2d] font-black mb-4">
              Advanced Engineering
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {servicesData.slice(4, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-[#eb4a2d] dark:hover:text-[#eb4a2d] transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engineering Cadence */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#eb4a2d] font-black mb-4">
              Engineering Pods
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono font-medium">
              <li className="flex items-center justify-between text-[#1e2530] dark:text-[#f3f4f6]">
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#eb4a2d]" /> MVP Speed</span>
                <span className="text-[10px] text-[#eb4a2d] font-bold">2–4 Wks</span>
              </li>
              <li className="flex items-center justify-between text-[#1e2530] dark:text-[#f3f4f6]">
                <span className="flex items-center gap-1.5"><GitBranch className="w-3.5 h-3.5 text-[#8b5cf6]" /> IP Transfer</span>
                <span className="text-[10px] text-[#8b5cf6] font-bold">100% Client</span>
              </li>
              <li className="flex items-center justify-between text-[#1e2530] dark:text-[#f3f4f6]">
                <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-[#3b82f6]" /> Performance</span>
                <span className="text-[10px] text-[#3b82f6] font-bold">98+ Score</span>
              </li>
              <li className="flex items-center justify-between text-[#1e2530] dark:text-[#f3f4f6]">
                <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-[#059669]" /> Direct Access</span>
                <span className="text-[10px] text-[#059669] font-bold">Slack / Git</span>
              </li>
            </ul>

            <div className="mt-5 p-4 rounded-2xl bg-white dark:bg-[#151a24] border border-black/5 dark:border-white/10 shadow-sm space-y-1">
              <span className="text-xs font-mono font-bold text-[#059669] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                Direct Pods Active
              </span>
              <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] block font-medium">
                Continuous SRE &amp; Autonomous Agent telemetry monitoring.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono font-medium text-[#6b7280] dark:text-[#9ca3af]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} AIRACODE Technologies. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#1e2530] dark:text-[#f3f4f6] font-bold">Crafted with 3D Clay Art &amp; Cinematic Flow</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            <Link href="/services" className="hover:text-[#eb4a2d] transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="hover:text-[#eb4a2d] transition-colors">
              Solutions
            </Link>
            <Link href="/work" className="hover:text-[#eb4a2d] transition-colors">
              Case Studies
            </Link>
            <Link href="/privacy" className="hover:text-[#eb4a2d] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#eb4a2d] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#eb4a2d] transition-colors">
              Contact
            </Link>
            <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#059669] font-bold text-[10px]">
              Studio 100% OK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
