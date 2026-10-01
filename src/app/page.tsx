import Link from "next/link";
import { 
  Bot, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Layers 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import HeroClayDiorama from "@/components/HeroClayDiorama";
import ServicesGrid from "@/components/ServicesGrid";
import InteractiveAgentTerminal from "@/components/InteractiveAgentTerminal";
import ModernizationCalculator from "@/components/ModernizationCalculator";
import { clientCaseStudies } from "@/data/servicesData";

export default function HomePage() {
  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-6">
            
            {/* 2-Word Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#1e2530] leading-[1.05]">
              Autonomous{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Scale
              </span>
            </h1>

            {/* Concise Tagline */}
            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed font-medium">
              We digitalize your business, modernize legacy systems, and engineer autonomous AI products for scale.
            </p>

            {/* Clay Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto clay-btn clay-btn-white px-8 py-3.5 text-base font-bold text-[#1e2530]"
              >
                <span>View Services</span>
              </Link>
            </div>

            {/* 3D Kinetic Diorama */}
            <HeroClayDiorama />

            {/* Concise Telemetry Bar */}
            <div className="w-full max-w-5xl mx-auto pt-2">
              <div className="clay-card p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div>
                  <span className="text-[11px] font-mono text-[#6b7280] uppercase font-bold block">Uptime SLA</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#eb4a2d]">99.99%</span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-[#ede9e0] pt-2 sm:pt-0">
                  <span className="text-[11px] font-mono text-[#6b7280] uppercase font-bold block">Latency</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#059669]">&lt;18ms</span>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-[#ede9e0] pt-2 md:pt-0">
                  <span className="text-[11px] font-mono text-[#6b7280] uppercase font-bold block">Accuracy</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#7c3aed]">98.6%</span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-[#ede9e0] pt-2 sm:pt-0">
                  <span className="text-[11px] font-mono text-[#6b7280] uppercase font-bold block">Operations</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#2563eb]">24/7/365</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 02: CAPABILITIES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              title="Core"
              highlightedWord="Capabilities"
              subtitle="8 specialized disciplines engineered for scale and speed."
            />
            <ServicesGrid />
          </div>
        </section>

        {/* ================= SECTION 03: AGENT SWARMS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              title="Agent"
              highlightedWord="Swarms"
              subtitle="Multi-agent orchestration with deterministic tool execution."
            />
            <InteractiveAgentTerminal />
          </div>
        </section>

        {/* ================= SECTION 04: VALUE IMPACT ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              title="Value"
              highlightedWord="Impact"
              subtitle="Estimate operational cost savings and velocity gains."
            />
            <ModernizationCalculator />
          </div>
        </section>

        {/* ================= SECTION 05: CASE STUDIES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Case"
              highlightedWord="Studies"
              subtitle="Production deployments delivered with zero downtime."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {clientCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="clay-card p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-[#eb4a2d] px-3 py-1 rounded-full bg-[#ede9e0]">
                        {study.industry}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#6b7280]">{study.client}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] leading-snug">
                      {study.headline}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-medium">
                      {study.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2.5 pt-2">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="p-2.5 rounded-xl bg-[#f6f3ee] text-center">
                          <span className="text-[10px] text-[#6b7280] font-bold block truncate">{m.label}</span>
                          <span className="text-base font-mono font-black text-[#1e2530]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede9e0] flex items-center justify-between text-xs">
                    <span className="italic text-[#6b7280] line-clamp-1">&quot;{study.quote}&quot;</span>
                    <span className="font-mono font-bold text-[#eb4a2d] shrink-0 ml-2">— {study.author}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#eb4a2d] hover:text-[#c0392b] transition-colors"
              >
                <span>View All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 06: CTA ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="clay-card p-8 sm:p-14 text-center space-y-4 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530]">
                Scale{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                  Fast
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#4b5563] font-medium max-w-xl mx-auto">
                Transform your core systems with autonomous intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="w-full sm:w-auto clay-btn clay-btn-white px-8 py-3.5 text-base font-bold text-[#1e2530]"
                >
                  <span>View Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
