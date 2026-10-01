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
  title: "Services & Capabilities | AIRACODE",
  description:
    "Explore AIRACODE's 8 core enterprise engineering capabilities: AI Website Development, AI Products, Maintenance & Optimization, AI Fine-Tuning, Multi-Cloud, Data Engineering, Workflow Automation, and Agentic AI.",
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
  { gradient: "from-[#ff8a73] to-[#eb4a2d]", text: "text-[#eb4a2d]", pill: "bg-[#eb4a2d]/10 text-[#eb4a2d]" },
  { gradient: "from-[#60a5fa] to-[#2563eb]", text: "text-[#2563eb]", pill: "bg-[#2563eb]/10 text-[#2563eb]" },
  { gradient: "from-[#34d399] to-[#059669]", text: "text-[#059669]", pill: "bg-[#059669]/10 text-[#059669]" },
  { gradient: "from-[#a78bfa] to-[#7c3aed]", text: "text-[#7c3aed]", pill: "bg-[#7c3aed]/10 text-[#7c3aed]" },
  { gradient: "from-[#fbbf24] to-[#d97706]", text: "text-[#d97706]", pill: "bg-[#d97706]/10 text-[#d97706]" },
  { gradient: "from-[#f472b6] to-[#db2777]", text: "text-[#db2777]", pill: "bg-[#db2777]/10 text-[#db2777]" },
  { gradient: "from-[#2dd4bf] to-[#0d9488]", text: "text-[#0d9488]", pill: "bg-[#0d9488]/10 text-[#0d9488]" },
  { gradient: "from-[#818cf8] to-[#4f46e5]", text: "text-[#4f46e5]", pill: "bg-[#4f46e5]/10 text-[#4f46e5]" },
];

export default function ServicesPage() {
  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: SERVICES HERO ================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-6 sm:space-y-8">
            <div className="status-badge text-[#eb4a2d] mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#eb4a2d] animate-ping" />
              <span>01 // FULL-SPECTRUM DISCIPLINES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] tracking-tight leading-tight max-w-6xl mx-auto">
              Engineered For Scale. Powered By{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Autonomous Intelligence.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] max-w-5xl mx-auto leading-relaxed font-medium">
              We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
            </p>

            {/* Tactile Anchor Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {servicesData.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 sm:px-5 py-2.5 rounded-full bg-white shadow-sm hover:shadow-md text-xs sm:text-sm font-bold text-[#4b5563] hover:text-[#eb4a2d] transition-all"
                >
                  #{s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: ALL 8 SERVICES DEEP-DIVE ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-16 sm:space-y-20">
            <SectionHeader
              badge="02 // ARCHITECTURAL BREAKDOWN"
              title="Comprehensive"
              highlightedWord="Services Offered"
              subtitle="Deep technical specifications, deliverables, and production guarantees across every engineering vector."
            />

            <div className="space-y-12 sm:space-y-16">
              {servicesData.map((service, idx) => {
                const Icon = iconMap[service.iconName] || Bot;
                const accent = clayAccents[idx % clayAccents.length];

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-28 clay-card p-7 sm:p-10 lg:p-14 relative overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
                      {/* Left: Summary & Metrics */}
                      <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${accent.gradient} text-white shadow-md`}
                            style={{
                              boxShadow: "6px 8px 18px rgba(0,0,0,0.12), inset 3px 3px 6px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-widest text-[#6b7280] block font-bold">
                              0{idx + 1} // {service.badge}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e2530] leading-snug">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className={`text-xs sm:text-sm font-bold ${accent.text}`}>{service.tagline}</p>

                        <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed font-medium">
                          {service.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          {service.metrics.map((m) => (
                            <div key={m.label} className="p-3 sm:p-4 rounded-2xl bg-[#f6f3ee] text-center shadow-[inset_1px_1px_3px_rgba(30,37,48,0.05)]">
                              <span className="text-[10px] sm:text-xs text-[#6b7280] font-bold block truncate">{m.label}</span>
                              <span className="text-base sm:text-xl font-mono font-black text-[#1e2530]">{m.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-2">
                          <span className="text-xs font-mono uppercase text-[#6b7280] block mb-2 font-bold">
                            Core Technology Stack
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3.5 py-1.5 rounded-xl bg-white shadow-sm text-xs font-mono font-bold text-[#1e2530]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Deliverables & Architecture */}
                      <div className="lg:col-span-7 space-y-6 lg:pl-10 lg:border-l lg:border-[#ede9e0]">
                        <div>
                          <h3 className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#1e2530] font-black mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#059669]" />
                            Production Deliverables &amp; Artifacts
                          </h3>
                          <ul className="space-y-3 text-xs sm:text-base text-[#4b5563] font-medium">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#eb4a2d] mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Architecture Inset Box */}
                        <div className="p-6 rounded-3xl bg-[#ede9e0]/80 shadow-[inset_2px_2px_5px_rgba(30,37,48,0.06)] space-y-2.5">
                          <span className="text-xs sm:text-sm font-mono uppercase text-[#7c3aed] font-bold block">
                            System Architecture Highlights
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-[#1e2530] font-medium">
                            {service.architectureHighlights.map((arch) => (
                              <li key={arch} className="flex items-start gap-2.5">
                                <span className="text-[#7c3aed] font-bold">▸</span>
                                <span>{arch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Enterprise Use Cases */}
                        <div>
                          <span className="text-xs font-mono uppercase text-[#6b7280] block mb-2 font-bold">
                            Target Enterprise Scenarios
                          </span>
                          <div className="flex flex-wrap gap-2.5">
                            {service.enterpriseUseCases.map((uc) => (
                              <span
                                key={uc}
                                className="px-4 py-2 rounded-full bg-white shadow-sm text-xs sm:text-sm font-semibold text-[#1e2530]"
                              >
                                {uc}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex justify-end">
                          <Link
                            href={`/contact?service=${service.id}`}
                            className="clay-btn clay-btn-coral px-6 py-3 text-xs sm:text-sm font-bold"
                          >
                            <span>Scope {service.title}</span>
                            <ArrowRight className="w-4 h-4" />
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

        {/* ================= SECTION 03: TECH ECOSYSTEM RADAR ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="03 // INTEGRATION RADAR"
              title="Modern Engineering"
              highlightedWord="Ecosystem"
              subtitle="Interoperable with cutting-edge frontier AI models, resilient distributed databases, and automated event buses."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="clay-card p-8 lg:p-10 space-y-4">
                <span className="text-xs sm:text-sm font-mono uppercase text-[#eb4a2d] font-black block flex items-center gap-2">
                  <Cpu className="w-5 h-5" /> AI Foundation &amp; Agents
                </span>
                <p className="text-xs sm:text-sm text-[#4b5563] font-medium leading-relaxed">
                  Custom fine-tuning, retrieval-augmented generation (RAG), and autonomous agent swarms.
                </p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-mono font-bold">
                  {["Anthropic Claude 3.7", "Gemini 2.5", "OpenAI GPT-4.5", "Llama 3 70B", "LangGraph", "CrewAI", "LlamaIndex", "vLLM", "Pinecone"].map((i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-[#ede9e0]/80 text-[#1e2530]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="clay-card p-8 lg:p-10 space-y-4">
                <span className="text-xs sm:text-sm font-mono uppercase text-[#7c3aed] font-black block flex items-center gap-2">
                  <Cloud className="w-5 h-5" /> Cloud &amp; Infrastructure
                </span>
                <p className="text-xs sm:text-sm text-[#4b5563] font-medium leading-relaxed">
                  High-availability Kubernetes clusters, GitOps pipelines, and multi-cloud resilience.
                </p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-mono font-bold">
                  {["AWS", "Google Cloud (GCP)", "Microsoft Azure", "Kubernetes", "Terraform", "Docker", "ArgoCD", "Cloudflare Enterprise", "Datadog"].map((i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-[#ede9e0]/80 text-[#1e2530]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="clay-card p-8 lg:p-10 space-y-4">
                <span className="text-xs sm:text-sm font-mono uppercase text-[#059669] font-black block flex items-center gap-2">
                  <Database className="w-5 h-5" /> Data &amp; Automation
                </span>
                <p className="text-xs sm:text-sm text-[#4b5563] font-medium leading-relaxed">
                  Real-time streaming pipelines, lakehouses, and self-hosted n8n enterprise workflows.
                </p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-mono font-bold">
                  {["Snowflake", "BigQuery", "Apache Kafka", "dbt", "ClickHouse", "n8n Enterprise", "Make", "Zapier", "PostgreSQL"].map((i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-[#ede9e0]/80 text-[#1e2530]">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: DELIVERY POD FRAMEWORK ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="04 // POD EXECUTION"
              title="Dedicated Engineering"
              highlightedWord="Pods"
              subtitle="How AIRACODE embeds elite AI systems engineers and cloud architects into your organization."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Threat Audit",
                  desc: "Comprehensive architecture review, identifying latency bottlenecks, security vulnerabilities, and high-ROI AI vectors.",
                },
                {
                  step: "02",
                  title: "Sprint 0: PoC & Benchmark",
                  desc: "Functional prototype deployed in isolated sandbox with verifiable latency, accuracy, and cost-reduction metrics.",
                },
                {
                  step: "03",
                  title: "Production Cutover",
                  desc: "Automated zero-downtime rolling deployment with active-active cloud failover and automated rollbacks.",
                },
                {
                  step: "04",
                  title: "24/7 Autonomous Ops",
                  desc: "Continuous model regression testing, synthetic uptime monitoring, and proactive SRE escalation support.",
                },
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="clay-card p-7 sm:p-8 space-y-3"
                >
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#eb4a2d]">
                    {phase.step}
                  </span>
                  <h4 className="text-lg font-black text-[#1e2530]">{phase.title}</h4>
                  <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed font-medium">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: SOLUTION CONFIGURATOR ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-8">
            <SectionHeader
              badge="05 // CUSTOM BLUEPRINT"
              title="Tailor Your"
              highlightedWord="Solution"
              subtitle="Select the capabilities you need and receive an immediate pod composition and architecture recommendation."
            />
            <ProjectEstimator />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
