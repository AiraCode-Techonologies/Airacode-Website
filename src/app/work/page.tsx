import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Clock, 
  Clapperboard, 
  Layers 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import { clientCaseStudies } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Client Case Studies & Engineering Benchmarks | AIRACODE",
  description:
    "Explore how AIRACODE re-architected legacy software for leading financial institutions, healthcare networks, and global enterprises with quantifiable performance metrics.",
};

export default function WorkPage() {
  const benchmarkRows = [
    { metric: "Time-to-Deploy Feature", legacy: "6 - 8 Weeks", airacode: "4 Days (Continuous GitOps)", gain: "10x Faster" },
    { metric: "Database Query Latency", legacy: "620ms - 1.2s", airacode: "38ms - 85ms (Kafka/Edge)", gain: "88% Drop" },
    { metric: "Manual Incident Triage", legacy: "4.5 Hours / incident", airacode: "<8 Minutes (Autonomous)", gain: "95% Cut" },
    { metric: "Infrastructure Waste Rate", legacy: "35% - 42% Idle", airacode: "<4% (Kubernetes Autoscaling)", gain: "$180k/yr Saved" },
    { metric: "AI Inference Latency", legacy: "1,400ms (Cloud API)", airacode: "110ms (Private LoRA AWQ)", gain: "12.7x Speed" },
    { metric: "Production Uptime SLA", legacy: "99.2% (Frequent blips)", airacode: "99.99% (Active-Active)", gain: "Rock Solid" },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= ACT I: WORK HERO ================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-6 sm:space-y-8">
            <div className="cinema-badge text-[#eb4a2d] mx-auto">
              <Clapperboard className="w-4 h-4 text-[#eb4a2d]" />
              <span>ACT I // EMPIRICAL EVIDENCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] tracking-tight leading-tight max-w-5xl mx-auto">
              Empirical Proof.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Transformational Scale.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] max-w-4xl mx-auto leading-relaxed font-medium">
              We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
            </p>

            {/* Tactile Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mx-auto pt-4">
              <div className="clay-card p-6 text-center">
                <span className="text-2xl sm:text-4xl font-black font-mono text-[#eb4a2d] block">$18M+</span>
                <span className="text-xs sm:text-sm text-[#6b7280] font-bold mt-1 block">Client Value Created</span>
              </div>
              <div className="clay-card p-6 text-center">
                <span className="text-2xl sm:text-4xl font-black font-mono text-[#059669] block">74%</span>
                <span className="text-xs sm:text-sm text-[#6b7280] font-bold mt-1 block">Query Latency Drop</span>
              </div>
              <div className="clay-card p-6 text-center">
                <span className="text-2xl sm:text-4xl font-black font-mono text-[#7c3aed] block">100%</span>
                <span className="text-xs sm:text-sm text-[#6b7280] font-bold mt-1 block">Zero Downtime Cutover</span>
              </div>
              <div className="clay-card p-6 text-center">
                <span className="text-2xl sm:text-4xl font-black font-mono text-[#2563eb] block">99.99%</span>
                <span className="text-xs sm:text-sm text-[#6b7280] font-bold mt-1 block">SRE Production SLA</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACT II: IN-DEPTH CASE STUDIES ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-16">
            <SectionHeader
              badge="ACT II // ARCHITECTURAL BREAKDOWN"
              title="Architectural"
              highlightedWord="Deconstructions"
              subtitle="Deep dives into how we solved intractable engineering challenges for enterprise systems."
            />

            <div className="space-y-12 sm:space-y-16">
              {clientCaseStudies.map((study, idx) => (
                <div
                  key={study.id}
                  className="clay-card p-7 sm:p-10 lg:p-14 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ede9e0]">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#eb4a2d]">
                        Case Study 0{idx + 1} // {study.industry}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e2530] mt-1">{study.headline}</h3>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-[#f6f3ee] text-xs sm:text-sm font-mono font-bold text-[#4b5563] self-start sm:self-auto shadow-sm">
                      Client: {study.client}
                    </span>
                  </div>

                  <p className="text-sm sm:text-lg text-[#4b5563] leading-relaxed max-w-5xl font-medium">
                    {study.summary}
                  </p>

                  {/* Quantitative Metrics Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="p-5 rounded-2xl bg-[#ede9e0]/70 text-center shadow-[inset_1px_1px_3px_rgba(30,37,48,0.06)]">
                        <span className="text-xs sm:text-sm font-mono text-[#6b7280] font-bold block">{m.label}</span>
                        <span className="text-2xl sm:text-3xl font-mono font-black text-[#1e2530] mt-1 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Disciplines & Executive Quote */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-[#ede9e0] text-xs sm:text-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#6b7280] font-bold">Disciplines:</span>
                      {study.servicesUsed.map((s) => (
                        <span
                          key={s}
                          className="px-3.5 py-1.5 rounded-xl bg-white shadow-sm text-xs font-bold text-[#1e2530]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="text-[#4b5563] italic font-medium">
                      &quot;{study.quote}&quot;{" "}
                      <span className="not-italic text-[#eb4a2d] font-bold font-mono text-xs sm:text-sm block sm:inline">
                        — {study.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACT III: EMPIRICAL BENCHMARK MATRIX ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT III // COMPARATIVE BENCHMARKS"
              title="Legacy Systems vs"
              highlightedWord="AIRACODE Modernized"
              subtitle="Direct performance and cost comparison based on telemetry from active production client deployments."
            />

            <div className="overflow-x-auto rounded-[2.5rem] clay-card p-6 sm:p-10">
              <table className="w-full text-left border-collapse text-xs sm:text-base">
                <thead>
                  <tr className="border-b border-[#ede9e0] font-mono text-xs sm:text-sm uppercase tracking-wider text-[#6b7280]">
                    <th className="py-4 px-6 font-bold">System Metric</th>
                    <th className="py-4 px-6 text-[#c0392b] font-bold">Legacy Baseline</th>
                    <th className="py-4 px-6 text-[#eb4a2d] font-bold">AIRACODE Modernized</th>
                    <th className="py-4 px-6 text-[#059669] font-bold">Observed Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede9e0] font-mono">
                  {benchmarkRows.map((row) => (
                    <tr key={row.metric} className="hover:bg-[#f6f3ee]/60 transition-colors">
                      <td className="py-4 px-6 text-[#1e2530] font-sans font-bold">{row.metric}</td>
                      <td className="py-4 px-6 text-[#6b7280]">{row.legacy}</td>
                      <td className="py-4 px-6 text-[#eb4a2d] font-black">{row.airacode}</td>
                      <td className="py-4 px-6 text-[#059669] font-black">{row.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= ACT IV: CLIENT TESTIMONIALS ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT IV // VERIFIED TESTIMONIALS"
              title="What Technology"
              highlightedWord="Leaders Say"
              subtitle="Feedback from engineering executives who partnered with AIRACODE for mission-critical modernizations."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  quote: "AIRACODE eliminated 6 years of technical debt in 8 weeks. Our transactional throughput tripled while infrastructure bills dropped 40%.",
                  name: "Marcus Vance",
                  role: "Chief Technology Officer",
                  org: "FinTech Scaleup",
                },
                {
                  quote: "Their autonomous agents actually work in production. Zero hallucinations, strict tool sandboxing, and complete HIPAA adherence.",
                  name: "Dr. Evelyn Reed",
                  role: "VP of Medical Systems",
                  org: "Diagnostic Health Network",
                },
                {
                  quote: "Their Next.js frontend and multi-cloud Kubernetes deployment withstood our heaviest Black Friday with zero blips. Incredible engineering team.",
                  name: "Siddharth Nair",
                  role: "Head of Infrastructure",
                  org: "Global Omnichannel Commerce",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="clay-card p-8 lg:p-10 space-y-5 flex flex-col justify-between"
                >
                  <p className="text-sm sm:text-base text-[#4b5563] italic leading-relaxed font-medium">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="pt-4 border-t border-[#ede9e0]">
                    <span className="text-base font-black text-[#1e2530] block">{t.name}</span>
                    <span className="text-xs sm:text-sm text-[#eb4a2d] font-bold block">{t.role}</span>
                    <span className="text-xs text-[#6b7280] font-mono block">{t.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACT V: DELIVERY VELOCITY TIMELINE ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto clay-card p-8 sm:p-14 lg:p-20 text-center space-y-6 sm:space-y-8">
            <div className="cinema-badge text-[#eb4a2d] mx-auto">
              <Clapperboard className="w-4 h-4 text-[#eb4a2d]" />
              <span>ACT V // TIMELINE VELOCITY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1e2530]">
              From Architecture Audit to Production in 30 Days
            </h2>

            <p className="text-base sm:text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed font-medium">
              We don&apos;t spend 6 months writing advisory decks. We deploy a dedicated engineering pod that ships functional, production-hardened code within your first sprint.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-9 py-4 text-base font-black tracking-wide"
              >
                <span>Schedule Scope Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
