import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Workflow, 
  Layers, 
  ArrowRight, 
  Server, 
  CheckCircle2, 
  Zap, 
  Database,
  Terminal,
  Bot
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Solutions | AIRACODE",
  description:
    "Discover how AIRACODE modernizes legacy enterprise monoliths into high-performance, autonomous, multi-cloud platforms.",
};

export default function SolutionsPage() {
  const industries = [
    {
      name: "FinTech",
      challenge: "Legacy monoliths failing sub-second fraud detection.",
      solution: "Kafka mesh + private LoRA models scoring transactions in <85ms.",
      roi: "74% latency drop, 4x transaction capacity.",
      tagColor: "bg-[#eb4a2d]/10 text-[#eb4a2d]",
    },
    {
      name: "HealthTech",
      challenge: "Strict HIPAA silos with clinician record burnout.",
      solution: "HIPAA-compliant agentic synthesis with private vectors.",
      roi: "80% triage cut, 99.1% accuracy.",
      tagColor: "bg-[#7c3aed]/10 text-[#7c3aed]",
    },
    {
      name: "Commerce",
      challenge: "Flash sales causing checkout spikes and multi-cloud desync.",
      solution: "Next.js Edge frontend + self-healing Kubernetes clusters.",
      roi: "52M daily events, zero downtime.",
      tagColor: "bg-[#2563eb]/10 text-[#2563eb]",
    },
    {
      name: "Logistics",
      challenge: "Fragmented freight tracking across 12 legacy ERP systems.",
      solution: "Automated webhook ecosystem + autonomous dispatch agents.",
      roi: "92% automated dispatch, 65% manual toil reduction.",
      tagColor: "bg-[#059669]/10 text-[#059669]",
    },
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
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Modernize{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Scale
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              Decompose legacy monoliths and deploy sovereign AI systems with zero downtime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#blueprint"
                className="clay-btn clay-btn-white px-8 py-3.5 text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]"
              >
                <span>View Roadmap</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: BLUEPRINT ================= */}
        <section id="blueprint" className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 scroll-mt-20 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Migration"
              highlightedWord="Protocol"
              subtitle="4-phase methodology for zero-downtime cutover."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  phase: "Phase 01",
                  title: "CDC Streaming",
                  icon: Database,
                  desc: "Non-invasive replication captures live transactional writes into Kafka without locking production tables.",
                },
                {
                  phase: "Phase 02",
                  title: "Strangler Pattern",
                  icon: Workflow,
                  desc: "Edge proxies reroute bounded contexts to modern microservices while legacy handles read fallbacks.",
                },
                {
                  phase: "Phase 03",
                  title: "Sovereign AI",
                  icon: Cpu,
                  desc: "Deploy quantized models into private VPC enclaves with zero external API dependencies.",
                },
                {
                  phase: "Phase 04",
                  title: "Canary Cutover",
                  icon: Server,
                  desc: "Automated traffic shifting across multi-cloud clusters with sub-second health checks.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.phase} className="clay-card p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#eb4a2d]">{step.phase}</span>
                      <Icon className="w-5 h-5 text-[#6b7280] dark:text-[#9ca3af]" />
                    </div>
                    <h3 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">{step.title}</h3>
                    <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: INDUSTRY MATRIX ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Industry"
              highlightedWord="Matrix"
              subtitle="Tailored for mission-critical sectors where uptime is non-negotiable."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {industries.map((ind) => (
                <div key={ind.name} className="clay-card p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6]">{ind.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${ind.tagColor}`}>
                      Enterprise
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-[#ede9e0]/80 dark:bg-white/5">
                      <span className="text-[#6b7280] dark:text-[#9ca3af] font-mono text-[10px] uppercase font-bold block">
                        Legacy Bottleneck
                      </span>
                      <p className="text-[#1e2530] dark:text-[#f3f4f6] font-medium mt-0.5">{ind.challenge}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10">
                      <span className="text-[#eb4a2d] font-mono text-[10px] uppercase font-bold block">
                        AIRACODE Solution
                      </span>
                      <p className="text-[#1e2530] dark:text-[#f3f4f6] font-medium mt-0.5">{ind.solution}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#10b981]/10 dark:bg-[#059669]/20 border border-[#10b981]/20 dark:border-[#059669]/30">
                      <span className="text-[#059669] font-mono text-[10px] uppercase font-bold block">
                        Measured Impact
                      </span>
                      <p className="text-[#059669] font-bold text-sm mt-0.5">{ind.roi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: ZERO TRUST ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Data"
              highlightedWord="Security"
              subtitle="Private VPC enclaves with zero external leakage."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="clay-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#eb4a2d]/10 text-[#eb4a2d] flex items-center justify-center">
                  <Lock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Private VPC Enclaves</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  Model weights and vectors execute strictly inside dedicated AWS, GCP, or Azure enclaves.
                </p>
                <span className="text-[11px] font-mono font-bold text-[#059669] block pt-1">✓ Zero public API calls</span>
              </div>

              <div className="clay-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Compliance Ready</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  Meets SOC 2 Type II, HIPAA, and GDPR standards with cryptographic audit logs.
                </p>
                <span className="text-[11px] font-mono font-bold text-[#7c3aed] block pt-1">✓ Automated audit logs</span>
              </div>

              <div className="clay-card p-6 space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#059669]/10 text-[#059669] flex items-center justify-center">
                  <Terminal className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Tool Sandboxes</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  Agentic tool invocations require strict schema validation gates and human checks.
                </p>
                <span className="text-[11px] font-mono font-bold text-[#059669] block pt-1">✓ Zero hallucinations</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: SLA ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto clay-card p-8 sm:p-12 text-center space-y-5 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
              Uptime{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Guaranteed
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] max-w-xl mx-auto font-medium">
              Backed by our contractual 99.99% availability and zero-data-loss commitment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-2 font-mono">
              <div className="p-4 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130]">
                <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-bold block mb-0.5">Availability</span>
                <span className="text-xl font-black text-[#eb4a2d]">99.99%</span>
              </div>
              <div className="p-4 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130]">
                <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-bold block mb-0.5">Response Time</span>
                <span className="text-xl font-black text-[#059669]">&lt;15m</span>
              </div>
              <div className="p-4 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130]">
                <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-bold block mb-0.5">Cutover Loss</span>
                <span className="text-xl font-black text-[#7c3aed]">0 Sec</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Initiate Assessment</span>
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
