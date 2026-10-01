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
  Bot,
  Clapperboard
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Enterprise Solutions & Modernization Architecture | AIRACODE",
  description:
    "Discover how AIRACODE re-engineers legacy enterprise monoliths into high-performance, autonomous, multi-cloud platforms with sovereign AI capabilities.",
};

export default function SolutionsPage() {
  const industries = [
    {
      name: "FinTech & Banking",
      challenge: "Legacy COBOL/SQL monoliths failing sub-second fraud detection requirements.",
      solution: "Event-driven Kafka mesh + private VPC LoRA models scoring transactions in <85ms.",
      roi: "74% query latency reduction, $1.8M saved annually.",
      tagColor: "bg-[#eb4a2d]/10 text-[#eb4a2d]",
    },
    {
      name: "HealthTech & Diagnostics",
      challenge: "Strict HIPAA silos with clinician burnout from manual EHR record processing.",
      solution: "HIPAA-compliant agentic synthesis swarm with private vector embeddings.",
      roi: "80% reduction in triage backlog, 99.1% clinical accuracy.",
      tagColor: "bg-[#7c3aed]/10 text-[#7c3aed]",
    },
    {
      name: "Omnichannel Commerce",
      challenge: "Flash sales causing checkout latency spikes and multi-cloud sync delays.",
      solution: "Next.js Edge frontend + self-healing Kubernetes clusters across AWS and GCP.",
      roi: "52M daily peak events handled with 100% zero downtime.",
      tagColor: "bg-[#2563eb]/10 text-[#2563eb]",
    },
    {
      name: "Supply Chain & Logistics",
      challenge: "Fragmented freight tracking across 12 disjointed manual legacy ERP systems.",
      solution: "Automated n8n webhook ecosystem + autonomous dispatch agents.",
      roi: "92% automated dispatching, $4.2M saved in overhead.",
      tagColor: "bg-[#059669]/10 text-[#059669]",
    },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= ACT I: SOLUTIONS HERO ================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-6 sm:space-y-8">
            <div className="cinema-badge text-[#eb4a2d] mx-auto">
              <Clapperboard className="w-4 h-4 text-[#eb4a2d]" />
              <span>ACT I // MODERNIZATION BLUEPRINT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] tracking-tight leading-tight max-w-6xl mx-auto">
              From Legacy Fragility To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Autonomous Dominance.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] max-w-5xl mx-auto leading-relaxed font-medium">
              We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-9 py-4 text-base font-black tracking-wide"
              >
                Request Architecture Consultation
              </Link>
              <Link
                href="#blueprint"
                className="clay-btn clay-btn-white px-9 py-4 text-base font-bold text-[#1e2530]"
              >
                Inspect 4-Phase Roadmap
              </Link>
            </div>
          </div>
        </section>

        {/* ================= ACT II: 4-PHASE MIGRATION BLUEPRINT ================= */}
        <section id="blueprint" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] scroll-mt-20 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-14">
            <SectionHeader
              badge="ACT II // ZERO-DISRUPTION PROTOCOL"
              title="The 4-Phase"
              highlightedWord="Modernization Protocol"
              subtitle="Our proven engineering methodology for decomposing high-risk legacy monoliths without a single second of production downtime."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  phase: "Phase 01",
                  title: "Non-Invasive CDC Tap",
                  icon: Database,
                  color: "bg-[#eb4a2d]",
                  points: [
                    "Zero-impact telemetry extraction from legacy database",
                    "Change Data Capture (CDC) streaming writes to Kafka",
                    "Complete API boundary and bottleneck audit",
                  ],
                },
                {
                  phase: "Phase 02",
                  title: "Multi-Cloud Kubernetes",
                  icon: Server,
                  color: "bg-[#2563eb]",
                  points: [
                    "Containerized stateless microservices on GKE/EKS",
                    "Automated GitOps deployment via ArgoCD & Terraform",
                    "Active-active multi-region failover configuration",
                  ],
                },
                {
                  phase: "Phase 03",
                  title: "AI Fine-Tuning & Swarms",
                  icon: Bot,
                  color: "bg-[#7c3aed]",
                  points: [
                    "Domain-specific SLM LoRA adaptation in private VPC",
                    "LangGraph autonomous multi-agent task execution",
                    "Deterministic tool calling with safety sandbox",
                  ],
                },
                {
                  phase: "Phase 04",
                  title: "Sub-Second Edge Experience",
                  icon: Zap,
                  color: "bg-[#059669]",
                  points: [
                    "Next.js 16 Edge-rendered cognitive frontend",
                    "Self-hosted n8n enterprise workflow automation",
                    "24/7 automated synthetic monitoring & SRE alerting",
                  ],
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.phase}
                    className="clay-card p-7 sm:p-8 space-y-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#eb4a2d] uppercase">
                          {step.phase}
                        </span>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${step.color} shadow-sm`}>
                          <Icon className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-[#1e2530] mt-3">{step.title}</h3>
                      <ul className="space-y-2.5 mt-4 text-xs sm:text-sm text-[#4b5563] font-medium">
                        {step.points.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <span className="text-[#059669] font-bold">✓</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-[#ede9e0] text-xs font-mono font-bold text-[#6b7280]">
                      Continuity SLA: 100% Guaranteed
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ACT III: INDUSTRY SOLUTIONS MATRIX ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT III // INDUSTRY MATRIX"
              title="Tailored For"
              highlightedWord="High-Stakes Sectors"
              subtitle="Solving mission-critical computational challenges where uptime, compliance, and latency are non-negotiable."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="clay-card p-8 sm:p-10 lg:p-12 space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1e2530]">{ind.name}</h3>
                    <span className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold ${ind.tagColor}`}>
                      Enterprise Tier
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#ede9e0]/80 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                      <span className="text-[#6b7280] block font-mono text-[11px] uppercase font-bold mb-1">
                        The Legacy Bottleneck
                      </span>
                      <p className="text-[#1e2530] font-medium leading-relaxed">{ind.challenge}</p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-[#ede9e0]">
                      <span className="text-[#eb4a2d] block font-mono text-[11px] uppercase font-bold mb-1">
                        The AIRACODE Autonomous Solution
                      </span>
                      <p className="text-[#1e2530] font-medium leading-relaxed">{ind.solution}</p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20">
                      <span className="text-[#059669] block font-mono text-[11px] uppercase font-bold mb-1">
                        Measurable Impact &amp; ROI
                      </span>
                      <p className="text-[#059669] font-bold text-sm sm:text-base">{ind.roi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACT IV: SOVEREIGN AI & ZERO-TRUST SECURITY ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT IV // ZERO-TRUST GOVERNANCE"
              title="Sovereign AI &amp;"
              highlightedWord="Enterprise Security"
              subtitle="Your proprietary enterprise data never leaks into third-party foundation models. Strict private VPC isolation."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="clay-card p-8 lg:p-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#eb4a2d]/10 text-[#eb4a2d] flex items-center justify-center">
                  <Lock className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-black text-[#1e2530]">Private VPC Execution</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed font-medium">
                  All fine-tuned weights, embeddings, and inference runs execute strictly inside your dedicated Amazon Web Services, GCP, or Azure enclaves.
                </p>
                <span className="text-xs font-mono font-bold text-[#059669] block pt-2">✓ Zero training on customer inputs</span>
              </div>

              <div className="clay-card p-8 lg:p-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-black text-[#1e2530]">Regulatory Compliance</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed font-medium">
                  Architected to meet SOC 2 Type II, HIPAA Security Rule, and EU GDPR guidelines with automated cryptographic logging and audit telemetry.
                </p>
                <span className="text-xs font-mono font-bold text-[#7c3aed] block pt-2">✓ Real-time audit trails</span>
              </div>

              <div className="clay-card p-8 lg:p-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#059669]/10 text-[#059669] flex items-center justify-center">
                  <Terminal className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-black text-[#1e2530]">Deterministic Sandboxes</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed font-medium">
                  Agentic tool actions pass through strict validation sandboxes with human-in-the-loop triggers before executing irrevocable changes.
                </p>
                <span className="text-xs font-mono font-bold text-[#059669] block pt-2">✓ Zero hallucination safety gates</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACT V: ENTERPRISE SLA GUARANTEE ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto clay-card p-8 sm:p-14 lg:p-20 text-center space-y-6 sm:space-y-8">
            <div className="cinema-badge text-[#eb4a2d] mx-auto">
              <Clapperboard className="w-4 h-4 text-[#eb4a2d]" />
              <span>ACT V // CONTRACTUAL GUARANTEE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1e2530]">
              The AIRACODE Migration &amp; Uptime Guarantee
            </h2>

            <p className="text-base sm:text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed font-medium">
              Every enterprise modernization project is backed by our legally-binding 99.99% system availability SLA and zero-data-loss migration commitment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto pt-4 font-mono">
              <div className="p-5 rounded-2xl bg-[#f6f3ee] shadow-sm">
                <span className="text-xs text-[#6b7280] font-bold block mb-1">Availability Target</span>
                <span className="text-2xl font-black text-[#eb4a2d]">99.99% Uptime</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#f6f3ee] shadow-sm">
                <span className="text-xs text-[#6b7280] font-bold block mb-1">Incident Escalation</span>
                <span className="text-2xl font-black text-[#059669]">&lt;15m Response</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#f6f3ee] shadow-sm">
                <span className="text-xs text-[#6b7280] font-bold block mb-1">Cutover Downtime</span>
                <span className="text-2xl font-black text-[#7c3aed]">0 Seconds Loss</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-9 py-4 text-base font-black tracking-wide"
              >
                <span>Initiate Migration Assessment</span>
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
