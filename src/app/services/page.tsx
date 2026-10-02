import type { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Database, 
  Workflow, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import ProjectEstimator from "@/components/ProjectEstimator";
import { servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services | AIRACODE",
  description:
    "Explore AIRACODE's 8 core engineering disciplines: AI Web, AI Products, Maintenance, Model Fine-Tuning, Multi-Cloud, Data Engineering, Automation, and Autonomous Agents.",
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Sparkles,
  ShieldCheck,
  Cpu,
  Cloud,
  Database,
  Workflow,
  Bot,
};

const clayAccents = [
  { gradient: "from-[#ff8a73] to-[#eb4a2d]", text: "text-[#eb4a2d]" },
  { gradient: "from-[#60a5fa] to-[#2563eb]", text: "text-[#2563eb]" },
  { gradient: "from-[#34d399] to-[#059669]", text: "text-[#059669]" },
  { gradient: "from-[#a78bfa] to-[#7c3aed]", text: "text-[#7c3aed]" },
  { gradient: "from-[#fbbf24] to-[#d97706]", text: "text-[#d97706]" },
  { gradient: "from-[#f472b6] to-[#db2777]", text: "text-[#db2777]" },
  { gradient: "from-[#2dd4bf] to-[#0d9488]", text: "text-[#0d9488]" },
  { gradient: "from-[#818cf8] to-[#4f46e5]", text: "text-[#4f46e5]" },
];

export default function ServicesPage() {
  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Capabilities
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              8 specialized engineering disciplines built for speed, reliability, and enterprise scale.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#151a24] border border-transparent dark:border-white/10 shadow-sm hover:shadow-md text-xs font-bold text-[#4b5563] dark:text-[#9ca3af] hover:text-[#eb4a2d] dark:hover:text-[#eb4a2d] transition-all"
                >
                  #{s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: ALL 8 SERVICES ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10 sm:space-y-12">
            <SectionHeader
              title="Service"
              highlightedWord="Specs"
              subtitle="Technical deliverables and production guarantees."
            />

            <div className="space-y-8 sm:space-y-10">
              {servicesData.map((service, idx) => {
                const Icon = iconMap[service.iconName] || Bot;
                const accent = clayAccents[idx % clayAccents.length];

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 clay-card p-6 sm:p-10 relative overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                      {/* Left: Summary & Metrics */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${accent.gradient} text-white shadow-md`}
                            style={{
                              boxShadow: "4px 6px 14px rgba(0,0,0,0.1), inset 2px 2px 4px rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            <Icon className="w-6 h-6 stroke-[2.5]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7280] dark:text-[#9ca3af] block font-bold">
                              {service.badge}
                            </span>
                            <h2 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] leading-snug">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">
                          {service.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {service.metrics.map((m) => (
                            <div key={m.label} className="p-2 rounded-xl bg-[#f6f3ee] dark:bg-[#1a2130] text-center">
                              <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-bold block truncate">{m.label}</span>
                              <span className="text-sm font-mono font-black text-[#1e2530] dark:text-[#f3f4f6]">{m.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.techStack.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#151a24] border border-transparent dark:border-white/10 shadow-sm text-[11px] font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Deliverables & CTA */}
                      <div className="lg:col-span-7 space-y-4 lg:pl-8 lg:border-l lg:border-[#ede9e0] dark:lg:border-white/10">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#1e2530] dark:text-[#f3f4f6] font-black flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                          Core Deliverables
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4b5563] dark:text-[#cbd5e1] font-medium">
                          {service.deliverables.slice(0, 4).map((item) => (
                            <div key={item} className="p-2.5 rounded-xl bg-white/70 dark:bg-[#151a24]/70 border border-[#ede9e0] dark:border-white/10 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2d] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex justify-end">
                          <Link
                            href={`/contact?service=${service.id}`}
                            className="clay-btn clay-btn-coral px-6 py-2.5 text-xs font-bold"
                          >
                            <span>Scope Requirement</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 03: TECH STACK ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Tech"
              highlightedWord="Stack"
              subtitle="Modern AI models, resilient distributed databases, and event streams."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="clay-card p-6 space-y-3">
                <span className="text-xs font-mono uppercase text-[#eb4a2d] font-black flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> AI Models &amp; Swarms
                </span>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] font-medium">
                  Fine-tuning, RAG pipelines, and multi-agent systems.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono font-bold">
                  {["Claude 3.7", "Gemini 2.5", "GPT-4.5", "Llama 3", "LangGraph", "vLLM", "Pinecone"].map((i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-[#ede9e0]/80 dark:bg-white/10 text-[#1e2530] dark:text-[#f3f4f6]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="clay-card p-6 space-y-3">
                <span className="text-xs font-mono uppercase text-[#7c3aed] font-black flex items-center gap-1.5">
                  <Cloud className="w-4 h-4" /> Cloud &amp; Infra
                </span>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] font-medium">
                  Kubernetes clusters, GitOps pipelines, and multi-cloud resilience.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono font-bold">
                  {["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker", "ArgoCD", "Cloudflare"].map((i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-[#ede9e0]/80 dark:bg-white/10 text-[#1e2530] dark:text-[#f3f4f6]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="clay-card p-6 space-y-3">
                <span className="text-xs font-mono uppercase text-[#059669] font-black flex items-center gap-1.5">
                  <Database className="w-4 h-4" /> Data &amp; Automation
                </span>
                <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] font-medium">
                  Streaming pipelines, data lakes, and automated workflows.
                </p>
                <div className="flex flex-wrap gap-1.5 text-xs font-mono font-bold">
                  {["Snowflake", "BigQuery", "Kafka", "dbt", "ClickHouse", "n8n", "PostgreSQL"].map((i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-[#ede9e0]/80 dark:bg-white/10 text-[#1e2530] dark:text-[#f3f4f6]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: DELIVERY PODS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Delivery"
              highlightedWord="Pods"
              subtitle="Elite AI systems engineers integrated into your organization."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  step: "01",
                  title: "Audit",
                  desc: "Identify latency bottlenecks, security gaps, and high-ROI AI vectors.",
                },
                {
                  step: "02",
                  title: "Sprint 0",
                  desc: "Working prototype deployed in sandbox with verifiable benchmarks.",
                },
                {
                  step: "03",
                  title: "Cutover",
                  desc: "Zero-downtime rolling deployment with active-active failover.",
                },
                {
                  step: "04",
                  title: "Operations",
                  desc: "Continuous model regression testing and proactive 24/7 SRE support.",
                },
              ].map((phase) => (
                <div key={phase.step} className="clay-card p-6 space-y-2">
                  <span className="text-2xl font-black font-mono text-[#eb4a2d]">
                    {phase.step}
                  </span>
                  <h4 className="text-base font-black text-[#1e2530] dark:text-[#f3f4f6]">{phase.title}</h4>
                  <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-medium">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: ESTIMATOR ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-8">
            <SectionHeader
              title="Scope"
              highlightedWord="Estimator"
              subtitle="Calculate pod composition and delivery requirements."
            />
            <ProjectEstimator />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
