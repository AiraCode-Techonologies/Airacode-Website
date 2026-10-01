import type { Metadata } from "next";
import Link from "next/link";
import { 
  Bot, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Layers, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Clapperboard, 
  Users 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us & Engineering Philosophy | AIRACODE",
  description:
    "Learn about AIRACODE's mission, engineering principles, and global infrastructure powering enterprise system modernization and autonomous AI.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Zero-Downtime Dogma",
      desc: "We believe modernization must never disrupt live transactional revenue. Every migration uses non-invasive CDC streaming and active-active cutovers.",
      badge: "Reliability",
      icon: ShieldCheck,
      color: "bg-[#eb4a2d]",
    },
    {
      title: "Sovereign AI Enclaves",
      desc: "Enterprise intelligence and proprietary data must remain 100% sovereign. We deploy dedicated private VPC models with zero data leakage to external foundation providers.",
      badge: "Sovereignty",
      icon: Cpu,
      color: "bg-[#7c3aed]",
    },
    {
      title: "Deterministic Agentic Safety",
      desc: "Autonomous AI agents must not hallucinate or make untested modifications. We enforce strict schema sandboxes, verification loops, and human-in-the-loop gates.",
      badge: "Governance",
      icon: Bot,
      color: "bg-[#059669]",
    },
    {
      title: "Obsession with Sub-Second Latency",
      desc: "In distributed computing, latency is the ultimate tax. From edge-rendered Next.js frontends to 4-bit AWQ quantized SLMs, we engineer for microsecond efficiency.",
      badge: "Performance",
      icon: Zap,
      color: "bg-[#2563eb]",
    },
  ];

  const globalNodes = [
    {
      city: "San Francisco",
      country: "United States",
      timezone: "PST (UTC-8)",
      role: "AI Research, Product Engineering & Architecture",
      status: "Active Node",
    },
    {
      city: "London",
      country: "United Kingdom",
      timezone: "GMT (UTC+0)",
      role: "European Cloud Sovereignty & FinTech Systems",
      status: "Active Node",
    },
    {
      city: "Singapore",
      country: "Singapore",
      timezone: "SGT (UTC+8)",
      role: "APAC Distributed Infrastructure & High-Frequency Systems",
      status: "Active Node",
    },
    {
      city: "Bengaluru",
      country: "India",
      timezone: "IST (UTC+5.5)",
      role: "High-Scale Modernization Pods & 24/7 SRE NOC",
      status: "Active Node",
    },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= ACT I: ABOUT HERO ================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-6 sm:space-y-8">
            <div className="cinema-badge text-[#eb4a2d] mx-auto">
              <Clapperboard className="w-4 h-4 text-[#eb4a2d]" />
              <span>ACT I // PURPOSE &amp; PHILOSOPHY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] tracking-tight leading-tight max-w-6xl mx-auto">
              Engineering The Systems That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Power Tomorrow.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] max-w-5xl mx-auto leading-relaxed font-medium">
              We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
            </p>

            <div className="pt-4 flex justify-center">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-9 py-4 text-base font-black tracking-wide"
              >
                <span>Connect With Technical Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= ACT II: CORE PRINCIPLES ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT II // ENGINEERING MANIFEST"
              title="Our Core Architectural"
              highlightedWord="Principles"
              subtitle="The foundational philosophies that guide our engineering decisions, codebase structures, and enterprise deliverables."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="clay-card p-8 lg:p-12 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${p.color} shadow-sm`}>
                        <Icon className="w-7 h-7 stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase px-3.5 py-1.5 rounded-full bg-[#ede9e0] text-[#1e2530]">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#1e2530]">{p.title}</h3>
                    <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-medium">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ACT III: GLOBAL HUBS ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT III // FOLLOW-THE-SUN OPERATIONS"
              title="Global Delivery"
              highlightedWord="Network"
              subtitle="Strategic engineering nodes operating seamlessly across major global timezones to deliver non-stop innovation and 24/7 SRE coverage."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {globalNodes.map((node) => (
                <div
                  key={node.city}
                  className="clay-card p-7 sm:p-8 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#eb4a2d]">{node.timezone}</span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#059669]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-ping" />
                        {node.status}
                      </span>
                    </div>
                    <h4 className="text-2xl font-black text-[#1e2530]">{node.city}</h4>
                    <span className="text-xs sm:text-sm text-[#6b7280] font-bold block">{node.country}</span>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-medium pt-2">
                      {node.role}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#ede9e0] text-xs font-mono font-bold text-[#6b7280]">
                    SRE Telemetry: 100% Operational
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ACT IV: SPECIALIST PODS ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT IV // SPECIALIST TALENT BENCH"
              title="Elite Technical"
              highlightedWord="Engineering Squads"
              subtitle="We deploy battle-tested senior engineers with specialized mastery over distributed systems and autonomous intelligence."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="clay-card p-8 lg:p-10 space-y-3.5">
                <span className="text-xs sm:text-sm font-mono uppercase text-[#eb4a2d] font-black block">
                  AI Systems &amp; Agents Pod
                </span>
                <h4 className="text-xl font-black text-[#1e2530]">Model Alignment &amp; Swarms</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed font-medium">
                  Specialists in LoRA parameter-efficient fine-tuning, vLLM inference orchestration, LangGraph state machines, and multi-agent consensus protocols.
                </p>
              </div>

              <div className="clay-card p-8 lg:p-10 space-y-3.5">
                <span className="text-xs sm:text-sm font-mono uppercase text-[#7c3aed] font-black block">
                  Cloud &amp; DevOps Pod
                </span>
                <h4 className="text-xl font-black text-[#1e2530]">Kubernetes, Terraform &amp; GitOps</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed font-medium">
                  Certified AWS, GCP, and Azure enterprise architects managing containerized microservices, zero-trust networks, and automated CI/CD pipelines.
                </p>
              </div>

              <div className="clay-card p-8 lg:p-10 space-y-3.5">
                <span className="text-xs sm:text-sm font-mono uppercase text-[#059669] font-black block">
                  Modernization &amp; Data Pod
                </span>
                <h4 className="text-xl font-black text-[#1e2530]">Kafka, Snowflake &amp; n8n</h4>
                <p className="text-sm text-[#4b5563] leading-relaxed font-medium">
                  Engineers skilled in legacy code deconstruction, CDC data replication, high-throughput lakehouse pipelines, and self-hosted workflow automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACT V: EVOLUTION ROADMAP ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="ACT V // CHRONOLOGY"
              title="The AIRACODE"
              highlightedWord="Evolution"
              subtitle="From pioneering legacy deconstructions to engineering the world's most resilient autonomous enterprise systems."
            />

            <div className="w-full max-w-6xl mx-auto relative border-l-2 border-[#d6cebe] ml-4 sm:ml-8 md:mx-auto space-y-10 pl-6 sm:pl-8">
              {[
                {
                  year: "2021",
                  title: "Legacy Deconstruction Protocol Founded",
                  desc: "Engineered our proprietary CDC replication framework to modernize financial and medical monoliths with zero seconds of transactional downtime.",
                },
                {
                  year: "2023",
                  title: "Private VPC LLM Fine-Tuning Engine",
                  desc: "Launched our dedicated model quantization & LoRA training pipeline, slashing enterprise AI inference costs by over 50%.",
                },
                {
                  year: "2024",
                  title: "Multi-Cloud Kubernetes GitOps Standard",
                  desc: "Standardized active-active deployment topologies across AWS, GCP, and Azure, achieving 99.99% enterprise uptime SLAs.",
                },
                {
                  year: "2025 - 2026",
                  title: "Production Autonomous Agentic Swarms",
                  desc: "Pioneered verified multi-agent systems with deterministic tool sandboxes and self-correcting logic for global enterprises.",
                },
              ].map((m) => (
                <div key={m.year} className="relative group">
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#f5f2eb] border-4 border-[#eb4a2d] group-hover:scale-125 transition-transform shadow-sm" />
                  <span className="text-xs sm:text-sm font-mono font-black text-[#eb4a2d] block mb-1">{m.year}</span>
                  <h4 className="text-xl font-black text-[#1e2530]">{m.title}</h4>
                  <p className="text-sm sm:text-base text-[#4b5563] mt-1 leading-relaxed font-medium">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
