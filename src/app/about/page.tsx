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
  Users 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us | AIRACODE",
  description:
    "Learn about AIRACODE's mission, engineering principles, and global infrastructure powering enterprise modernization.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Zero-Downtime",
      desc: "Modernization must never disrupt live revenue. Every migration uses non-invasive CDC streaming and active cutovers.",
      badge: "Reliability",
      icon: ShieldCheck,
      color: "bg-[#eb4a2d]",
    },
    {
      title: "Sovereign AI",
      desc: "Enterprise intelligence must remain sovereign. We deploy private VPC models with zero third-party leakage.",
      badge: "Sovereignty",
      icon: Cpu,
      color: "bg-[#7c3aed]",
    },
    {
      title: "Deterministic Agents",
      desc: "Autonomous AI agents must not hallucinate. We enforce schema validation sandboxes and human verification gates.",
      badge: "Governance",
      icon: Bot,
      color: "bg-[#059669]",
    },
    {
      title: "Sub-Second Latency",
      desc: "Latency is the ultimate tax. From edge Next.js frontends to quantized SLMs, we optimize for microsecond speed.",
      badge: "Speed",
      icon: Zap,
      color: "bg-[#2563eb]",
    },
  ];

  const globalNodes = [
    {
      city: "San Francisco",
      country: "USA",
      timezone: "PST",
      role: "AI Research & Architecture",
      status: "Active",
    },
    {
      city: "London",
      country: "UK",
      timezone: "GMT",
      role: "Cloud Sovereignty & FinTech",
      status: "Active",
    },
    {
      city: "Singapore",
      country: "Singapore",
      timezone: "SGT",
      role: "Distributed Infrastructure",
      status: "Active",
    },
    {
      city: "Bengaluru",
      country: "India",
      timezone: "IST",
      role: "Modernization Pods & 24/7 SRE",
      status: "Active",
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
            <div className="status-badge text-[#eb4a2d] mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2d] animate-ping" />
              <span>01 // ABOUT</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1e2530] tracking-tight leading-[1.05]">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Us
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] max-w-2xl mx-auto font-medium">
              We digitalize your business, modernize legacy systems, and engineer autonomous AI products for scale.
            </p>

            <div className="pt-2 flex justify-center">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Connect Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: PRINCIPLES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              badge="02 // PRINCIPLES"
              title="Core"
              highlightedWord="Principles"
              subtitle="The foundational philosophies guiding our engineering architecture."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="clay-card p-6 sm:p-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white ${p.color} shadow-sm`}>
                        <Icon className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-[#ede9e0] text-[#1e2530]">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#1e2530]">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-medium">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: HUBS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              badge="03 // NETWORK"
              title="Global"
              highlightedWord="Network"
              subtitle="Follow-the-sun operations centers across four continents."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {globalNodes.map((node) => (
                <div key={node.city} className="clay-card p-6 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#eb4a2d]">{node.timezone}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#059669]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-ping" />
                      {node.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-black text-[#1e2530]">{node.city}</h4>
                  <span className="text-xs text-[#6b7280] font-bold block">{node.country}</span>
                  <p className="text-xs text-[#4b5563] font-medium pt-1">
                    {node.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: PODS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              badge="04 // PODS"
              title="Specialist"
              highlightedWord="Pods"
              subtitle="Senior engineering squads with distributed systems mastery."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="clay-card p-6 space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#eb4a2d] font-black block">
                  AI Systems Pod
                </span>
                <h4 className="text-lg font-black text-[#1e2530]">Model Alignment &amp; Swarms</h4>
                <p className="text-xs text-[#4b5563] leading-relaxed font-medium">
                  LoRA fine-tuning, vLLM inference orchestration, LangGraph state machines, and consensus protocols.
                </p>
              </div>

              <div className="clay-card p-6 space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#7c3aed] font-black block">
                  Cloud &amp; DevOps Pod
                </span>
                <h4 className="text-lg font-black text-[#1e2530]">Kubernetes &amp; GitOps</h4>
                <p className="text-xs text-[#4b5563] leading-relaxed font-medium">
                  Multi-cloud AWS, GCP, and Azure containerized microservices and automated CI/CD pipelines.
                </p>
              </div>

              <div className="clay-card p-6 space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#059669] font-black block">
                  Modernization Pod
                </span>
                <h4 className="text-lg font-black text-[#1e2530]">Kafka &amp; Snowflake</h4>
                <p className="text-xs text-[#4b5563] leading-relaxed font-medium">
                  CDC replication, high-throughput lakehouse pipelines, and automated enterprise workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: ROADMAP ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              badge="05 // ROADMAP"
              title="Our"
              highlightedWord="Roadmap"
              subtitle="Milestones of continuous technical innovation."
            />

            <div className="w-full max-w-4xl mx-auto border-l-2 border-[#d6cebe] ml-4 sm:ml-8 md:mx-auto space-y-8 pl-6 sm:pl-8">
              {[
                {
                  year: "2021",
                  title: "CDC Modernization Founded",
                  desc: "Zero-downtime replication framework for legacy monoliths.",
                },
                {
                  year: "2023",
                  title: "Private VPC AI Engine",
                  desc: "Dedicated model quantization cutting inference costs by 50%.",
                },
                {
                  year: "2024",
                  title: "Multi-Cloud Kubernetes Standard",
                  desc: "Active-active deployment achieving 99.99% enterprise uptime.",
                },
                {
                  year: "2025 - 2026",
                  title: "Autonomous Agentic Swarms",
                  desc: "Production multi-agent systems with deterministic tool sandboxes.",
                },
              ].map((m) => (
                <div key={m.year} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#f5f2eb] border-3 border-[#eb4a2d] group-hover:scale-125 transition-transform shadow-sm" />
                  <span className="text-xs font-mono font-black text-[#eb4a2d] block mb-0.5">{m.year}</span>
                  <h4 className="text-lg font-black text-[#1e2530]">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-[#4b5563] font-medium">{m.desc}</p>
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
