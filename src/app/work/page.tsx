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
  Layers 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import { clientCaseStudies } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Case Studies | AIRACODE",
  description:
    "Explore how AIRACODE re-architected legacy software for leading financial institutions, healthcare networks, and global enterprises.",
};

export default function WorkPage() {
  const benchmarkRows = [
    { metric: "Deployment Cycle", legacy: "6 - 8 Weeks", airacode: "4 Days (GitOps)", gain: "10x Faster" },
    { metric: "Query Latency", legacy: "620ms - 1.2s", airacode: "38ms - 85ms", gain: "88% Drop" },
    { metric: "Incident Triage", legacy: "4.5h / incident", airacode: "<8m (Autonomous)", gain: "95% Cut" },
    { metric: "Infra Waste Rate", legacy: "35% - 42%", airacode: "<4% (Autoscaling)", gain: "$180k/yr Saved" },
    { metric: "AI Inference", legacy: "1,400ms (API)", airacode: "110ms (Private LoRA)", gain: "12.7x Speed" },
    { metric: "Production Uptime", legacy: "99.2%", airacode: "99.99%", gain: "SLA Guaranteed" },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1e2530] tracking-tight leading-[1.05]">
              Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Impact
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] max-w-2xl mx-auto font-medium">
              Measurable performance gains across mission-critical enterprise systems.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2">
              <div className="clay-card p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#eb4a2d] block">$18M+</span>
                <span className="text-[11px] text-[#6b7280] font-bold block mt-0.5">Value Created</span>
              </div>
              <div className="clay-card p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#059669] block">74%</span>
                <span className="text-[11px] text-[#6b7280] font-bold block mt-0.5">Latency Drop</span>
              </div>
              <div className="clay-card p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#7c3aed] block">0s</span>
                <span className="text-[11px] text-[#6b7280] font-bold block mt-0.5">Cutover Loss</span>
              </div>
              <div className="clay-card p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#2563eb] block">99.99%</span>
                <span className="text-[11px] text-[#6b7280] font-bold block mt-0.5">Uptime SLA</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: CASE STUDIES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Case"
              highlightedWord="Studies"
              subtitle="Deep architectural breakdowns and quantifiable client ROI."
            />

            <div className="space-y-6 sm:space-y-8">
              {clientCaseStudies.map((study, idx) => (
                <div
                  key={study.id}
                  className="clay-card p-6 sm:p-8 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#ede9e0]">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase text-[#eb4a2d]">
                        Case 0{idx + 1} // {study.industry}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] mt-0.5">{study.headline}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#f6f3ee] text-xs font-mono font-bold text-[#4b5563] self-start sm:self-auto">
                      {study.client}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-medium">
                    {study.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-[#f6f3ee] text-center">
                        <span className="text-[10px] text-[#6b7280] font-bold block truncate">{m.label}</span>
                        <span className="text-base sm:text-lg font-mono font-black text-[#1e2530]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: BENCHMARKS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="System"
              highlightedWord="Benchmarks"
              subtitle="Performance comparisons from active production deployments."
            />

            <div className="overflow-x-auto rounded-3xl clay-card p-5 sm:p-8">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#ede9e0] font-mono uppercase text-[#6b7280]">
                    <th className="py-3 px-4 font-bold">Metric</th>
                    <th className="py-3 px-4 text-[#c0392b] font-bold">Legacy</th>
                    <th className="py-3 px-4 text-[#eb4a2d] font-bold">AIRACODE</th>
                    <th className="py-3 px-4 text-[#059669] font-bold">Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ede9e0] font-mono">
                  {benchmarkRows.map((row) => (
                    <tr key={row.metric} className="hover:bg-[#f6f3ee]/50">
                      <td className="py-3 px-4 text-[#1e2530] font-sans font-bold">{row.metric}</td>
                      <td className="py-3 px-4 text-[#6b7280]">{row.legacy}</td>
                      <td className="py-3 px-4 text-[#eb4a2d] font-bold">{row.airacode}</td>
                      <td className="py-3 px-4 text-[#059669] font-black">{row.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: TESTIMONIALS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Client"
              highlightedWord="Reviews"
              subtitle="Verified feedback from engineering executives."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  quote: "AIRACODE eliminated 6 years of technical debt in 8 weeks. Throughput tripled while infra bills dropped 40%.",
                  name: "Marcus Vance",
                  role: "CTO, FinTech Scaleup",
                },
                {
                  quote: "Their autonomous agents work reliably in production. Zero hallucinations, strict sandboxing, and complete HIPAA adherence.",
                  name: "Dr. Evelyn Reed",
                  role: "VP Medical Systems, Health Network",
                },
                {
                  quote: "Their Next.js frontend and multi-cloud Kubernetes deployment withstood our heaviest Black Friday with zero blips.",
                  name: "Siddharth Nair",
                  role: "Head of Infra, Global Commerce",
                },
              ].map((t) => (
                <div key={t.name} className="clay-card p-6 space-y-3 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#4b5563] italic leading-relaxed font-medium">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="pt-3 border-t border-[#ede9e0]">
                    <span className="text-sm font-black text-[#1e2530] block">{t.name}</span>
                    <span className="text-[11px] text-[#eb4a2d] font-mono block">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: VELOCITY ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto clay-card p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530]">
              Fast{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Delivery
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] max-w-lg mx-auto font-medium">
              We deploy a dedicated engineering pod that ships functional code within your first sprint.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Schedule Review</span>
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
