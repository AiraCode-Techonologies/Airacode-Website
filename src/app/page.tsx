import Link from "next/link";
import { 
  Bot, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Layers,
  Activity 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import ServicesGrid from "@/components/ServicesGrid";
import HeroClayDiorama from "@/components/HeroClayDiorama";
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
        {/* ================= SECTION 01: HERO & ARCHITECTURE ================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-36 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <div className="text-center max-w-7xl mx-auto space-y-6 sm:space-y-8">
              {/* Tactile Status Badge */}
              <div className="status-badge text-[#eb4a2d] mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#eb4a2d] animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-[#eb4a2d]" />
                <span>01 // ENTERPRISE AI ARCHITECTURE</span>
              </div>

              {/* Bold Expressive Clay Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black tracking-tight text-[#1e2530] leading-[1.05]">
                We Transform Your Vision Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                  Autonomous Reality
                </span>
              </h1>

              {/* Core User Tagline */}
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-[#4b5563] max-w-5xl mx-auto leading-relaxed font-medium">
                We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
              </p>

              {/* Tactile Clay Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto clay-btn clay-btn-coral px-9 py-4 text-base sm:text-lg font-black tracking-wide"
                >
                  <span>Initialize Transformation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto clay-btn clay-btn-white px-9 py-4 text-base sm:text-lg font-bold text-[#1e2530]"
                >
                  <span>Explore 8 Disciplines</span>
                </Link>
              </div>

              {/* 3D Kinetic Sculptural Clay Diorama Centerpiece */}
              <HeroClayDiorama />

              {/* Tactile Clay Telemetry Bar */}
              <div className="pt-8 sm:pt-12 w-full max-w-7xl mx-auto">
                <div className="clay-card p-5 sm:p-7 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-2">
                    <span className="text-xs font-mono text-[#6b7280] uppercase font-bold block">Availability SLA</span>
                    <span className="text-2xl sm:text-4xl font-black font-mono text-[#eb4a2d]">99.99%</span>
                  </div>
                  <div className="text-center p-2 border-t md:border-t-0 md:border-l border-[#ede9e0]">
                    <span className="text-xs font-mono text-[#6b7280] uppercase font-bold block">Edge Latency</span>
                    <span className="text-2xl sm:text-4xl font-black font-mono text-[#059669]">&lt;18ms</span>
                  </div>
                  <div className="text-center p-2 border-t md:border-t-0 md:border-l border-[#ede9e0]">
                    <span className="text-xs font-mono text-[#6b7280] uppercase font-bold block">Model Precision</span>
                    <span className="text-2xl sm:text-4xl font-black font-mono text-[#7c3aed]">98.6%</span>
                  </div>
                  <div className="text-center p-2 border-t md:border-t-0 md:border-l border-[#ede9e0]">
                    <span className="text-xs font-mono text-[#6b7280] uppercase font-bold block">Autonomous Ops</span>
                    <span className="text-2xl sm:text-4xl font-black font-mono text-[#2563eb]">24/7/365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: CORE DISCIPLINES ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              badge="02 // CAPABILITIES MATRIX"
              title="State-of-the-Art Technology"
              highlightedWord="Solutions"
              subtitle="End-to-end engineering excellence across artificial intelligence, multi-cloud platforms, legacy system modernization, and autonomous workflow automation."
            />
            <ServicesGrid />
          </div>
        </section>

        {/* ================= SECTION 03: AUTONOMOUS SWARM SIMULATION ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              badge="03 // LIVE SWARM SIMULATION"
              title="Experience The"
              highlightedWord="Autonomous Swarm"
              subtitle="Inspect our real-time multi-agent execution pipeline, low-latency model quantization telemetry, and zero-downtime modernization architecture."
            />
            <InteractiveAgentTerminal />
          </div>
        </section>

        {/* ================= SECTION 04: ECONOMIC IMPACT CALCULATOR ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <SectionHeader
              badge="04 // ECONOMIC YIELD MODELER"
              title="Quantifiable Enterprise"
              highlightedWord="ROI"
              subtitle="Calculate how modernizing your legacy codebase and deploying AI workflows recovers operational overhead and accelerates revenue."
            />
            <ModernizationCalculator />
          </div>
        </section>

        {/* ================= SECTION 05: CASE STUDIES ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="05 // PROVEN SCALE DEPLOYMENTS"
              title="Enterprise Systems"
              highlightedWord="Transformed"
              subtitle="Real client deployments operating at scale across regulated financial ecosystems, healthcare networks, and global retail platforms."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {clientCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="clay-card p-7 sm:p-10 lg:p-12 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#eb4a2d] px-3.5 py-1 rounded-full bg-[#ede9e0]">
                        {study.industry}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#6b7280]">{study.client}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1e2530] leading-snug">
                      {study.headline}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-medium">
                      {study.summary}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="p-3 sm:p-4 rounded-2xl bg-[#f6f3ee] text-center shadow-[inset_1px_1px_3px_rgba(30,37,48,0.05)]">
                          <span className="text-[10px] sm:text-xs text-[#6b7280] font-bold block truncate">{m.label}</span>
                          <span className="text-base sm:text-xl font-mono font-black text-[#1e2530]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#ede9e0] space-y-2">
                    <p className="text-xs sm:text-sm italic text-[#4b5563] leading-relaxed font-medium">
                      &quot;{study.quote}&quot;
                    </p>
                    <span className="text-xs font-mono font-bold text-[#eb4a2d] block">
                      — {study.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 06: MODERNIZATION CTA ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto">
            <div 
              className="clay-card p-8 sm:p-14 lg:p-20 text-center space-y-6 sm:space-y-8"
              style={{
                background: "linear-gradient(135deg, #ffffff, #fcf9f5)",
              }}
            >
              <div className="status-badge text-[#eb4a2d] mx-auto">
                <span className="w-2 h-2 rounded-full bg-[#eb4a2d] animate-ping" />
                <Zap className="w-3.5 h-3.5 text-[#eb4a2d]" />
                <span>06 // COMMENCE TRANSFORMATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1e2530] tracking-tight leading-tight max-w-4xl mx-auto">
                Stop Managing Legacy Debt. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                  Deploy Autonomous Systems.
                </span>
              </h2>

              <p className="text-base sm:text-xl text-[#4b5563] font-medium leading-relaxed max-w-3xl mx-auto">
                Partner with AIRACODE to modernize your core technology stack, eliminate technical bottlenecks, and lead your industry with state-of-the-art AI solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto clay-btn clay-btn-coral px-9 py-4 text-base sm:text-lg font-black tracking-wide"
                >
                  <span>Request Technical Discovery Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="w-full sm:w-auto clay-btn clay-btn-white px-9 py-4 text-base sm:text-lg font-bold text-[#1e2530]"
                >
                  <span>View Architecture Blueprint</span>
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
