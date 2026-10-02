import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Bot, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Code2,
  Clock,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "About Us | AIRACODE",
  description:
    "Learn about AIRACODE's mission, engineering principles, and agile software development studio.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "100% IP Ownership",
      desc: "You retain total intellectual property ownership. Repositories, neural weights, and infrastructure scripts are yours from day one.",
      badge: "Ownership",
      icon: Code2,
      color: "bg-[#eb4a2d]",
    },
    {
      title: "Private VPC AI",
      desc: "Enterprise intelligence must remain sovereign. We deploy private VPC models with zero third-party data leakage.",
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
      title: "2-4 Week Velocity",
      desc: "Velocity is the ultimate competitive advantage. From edge Next.js frontends to production MVPs, we ship in rapid 2-week sprints.",
      badge: "Speed",
      icon: Zap,
      color: "bg-[#2563eb]",
    },
  ];

  const startupCadence = [
    {
      label: "Remote Studio",
      detail: "Global / Async",
      sub: "Senior full-stack developers and AI systems architects.",
    },
    {
      label: "Discovery Turnaround",
      detail: "< 4 Hours",
      sub: "Technical feasibility audit and statement of work under mutual NDA.",
    },
    {
      label: "Sprint Cycles",
      detail: "2-Week Sprints",
      sub: "Bi-weekly staging demos, continuous testing, and direct Slack/GitHub access.",
    },
    {
      label: "Launch Warranty",
      detail: "30 Days Included",
      sub: "Complimentary bug resolution and environment stabilization post-launch.",
    },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO WITH LARGE 3D LOGO ================= */}
        <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1400px] mx-auto text-center space-y-6 sm:space-y-8">
            
            {/* LARGE TACTILE 3D BRAND LOGO DISPLAY */}
            <div className="relative mx-auto flex items-center justify-center pt-2">
              <div className="relative group cursor-pointer">
                {/* Ambient Radial Clay Glow */}
                <div className="absolute -inset-10 bg-gradient-to-r from-[#eb4a2d]/20 via-[#8b5cf6]/20 to-[#3b82f6]/20 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                
                {/* Tactile Clay Emblem Pedestal */}
                <div 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-[2.5rem] sm:rounded-[3.25rem] p-7 sm:p-9 flex items-center justify-center bg-white/95 dark:bg-black backdrop-blur-xl border border-black/5 dark:border-white/15 shadow-[18px_24px_54px_rgba(30,37,48,0.1),-12px_-12px_36px_rgba(255,255,255,0.95),inset_4px_4px_8px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(30,37,48,0.04)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.95),inset_1px_1px_3px_rgba(255,255,255,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1"
                >
                  <Image
                    src="/logo.png"
                    alt="AIRACODE Master 3D Logo"
                    width={340}
                    height={340}
                    className="w-full h-full object-contain filter drop-shadow-[0_14px_28px_rgba(30,37,48,0.14)] dark:drop-shadow-[0_14px_28px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>

                {/* Floating Brand Badge */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white dark:bg-black border border-black/5 dark:border-white/15 shadow-md text-xs font-mono font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                  <span>AIRACODE // 3D BRAND IDENTITY</span>
                </div>
              </div>
            </div>

            {/* 2-Word Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05] pt-2">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Us
              </span>
            </h1>

            {/* Concise Tagline */}
            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium leading-relaxed">
              We digitalize your business, modernize legacy systems, and engineer autonomous AI products for scale.
            </p>

            {/* Action CTA */}
            <div className="pt-2 flex justify-center">
              <Link
                href="/contact"
                className="clay-btn clay-btn-coral px-8 py-3.5 text-base font-black tracking-wide"
              >
                <span>Schedule Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: PRINCIPLES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
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
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-[#ede9e0] dark:bg-[#1f2633] text-[#1e2530] dark:text-[#f3f4f6]">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#1e2530] dark:text-[#f3f4f6]">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: STARTUP CADENCE ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Startup"
              highlightedWord="Cadence"
              subtitle="How we collaborate and ship production systems with venture velocity."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {startupCadence.map((node) => (
                <div key={node.label} className="clay-card p-6 space-y-2.5">
                  <span className="text-xs font-mono font-bold text-[#eb4a2d] block uppercase">{node.label}</span>
                  <h4 className="text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6]">{node.detail}</h4>
                  <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] font-medium pt-1 leading-relaxed">
                    {node.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: PODS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Specialist"
              highlightedWord="Pods"
              subtitle="Senior engineering squads with distributed systems mastery."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="clay-card p-6 space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#eb4a2d] font-black block">
                  AI Systems Pod
                </span>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Model Alignment &amp; Swarms</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  LoRA fine-tuning, vLLM inference orchestration, LangGraph state machines, and consensus protocols.
                </p>
              </div>

              <div className="clay-card p-6 space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#7c3aed] font-black block">
                  Cloud &amp; DevOps Pod
                </span>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Kubernetes &amp; GitOps</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  Multi-cloud AWS, GCP, and Azure containerized microservices and automated CI/CD pipelines.
                </p>
              </div>

              <div className="clay-card p-6 space-y-2.5">
                <span className="text-xs font-mono uppercase text-[#059669] font-black block">
                  Modernization Pod
                </span>
                <h4 className="text-lg font-black text-[#1e2530] dark:text-[#f3f4f6]">Kafka &amp; Snowflake</h4>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                  CDC replication, high-throughput lakehouse pipelines, and automated enterprise workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
