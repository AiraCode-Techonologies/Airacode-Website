"use client";

import { useState } from "react";
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
  Sliders,
  Layers,
  Activity,
  Play,
  RotateCcw,
  Zap
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";

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

const serviceVisualConfigs = [
  {
    gradient: "from-[#ff7e67] to-[#eb4a2d]",
    text: "text-[#eb4a2d]",
    bgSubtle: "bg-[#fff2ee]",
    accentShadow: "rgba(235, 74, 45, 0.35)",
  },
  {
    gradient: "from-[#60a5fa] to-[#2563eb]",
    text: "text-[#2563eb]",
    bgSubtle: "bg-[#eff6ff]",
    accentShadow: "rgba(37, 99, 235, 0.35)",
  },
  {
    gradient: "from-[#34d399] to-[#059669]",
    text: "text-[#059669]",
    bgSubtle: "bg-[#ecfdf5]",
    accentShadow: "rgba(5, 150, 105, 0.35)",
  },
  {
    gradient: "from-[#a78bfa] to-[#7c3aed]",
    text: "text-[#7c3aed]",
    bgSubtle: "bg-[#f5f3ff]",
    accentShadow: "rgba(124, 58, 237, 0.35)",
  },
  {
    gradient: "from-[#38bdf8] to-[#0284c7]",
    text: "text-[#0284c7]",
    bgSubtle: "bg-[#f0f9ff]",
    accentShadow: "rgba(2, 132, 199, 0.35)",
  },
  {
    gradient: "from-[#fbbf24] to-[#d97706]",
    text: "text-[#d97706]",
    bgSubtle: "bg-[#fffbeb]",
    accentShadow: "rgba(217, 119, 6, 0.35)",
  },
  {
    gradient: "from-[#2dd4bf] to-[#0d9488]",
    text: "text-[#0d9488]",
    bgSubtle: "bg-[#f0fdfa]",
    accentShadow: "rgba(13, 148, 136, 0.35)",
  },
  {
    gradient: "from-[#f472b6] to-[#db2777]",
    text: "text-[#db2777]",
    bgSubtle: "bg-[#fdf2f8]",
    accentShadow: "rgba(219, 39, 119, 0.35)",
  },
];

export default function ServicesGrid({ limit }: { limit?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
  const [interactiveState, setInteractiveState] = useState<number>(0);

  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;
  const currentService = displayedServices[activeIndex] || displayedServices[0];
  const currentConfig = serviceVisualConfigs[activeIndex % serviceVisualConfigs.length];
  const CurrentIcon = iconMap[currentService.iconName] || Bot;

  return (
    <div id="showcase-theater" className="space-y-8 sm:space-y-10 w-full">
      {/* Top Controls: Interactive Category Scrubber & View Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#ede8dc]">
        <div className="flex items-center gap-2">
          <div className="status-badge text-[#eb4a2d]">
            <Sparkles className="w-3.5 h-3.5 text-[#eb4a2d]" />
            <span>DISCIPLINE 0{activeIndex + 1} OF 0{displayedServices.length}</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#6b7280] hidden sm:inline">
            // {currentService.badge}
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center p-1.5 rounded-2xl bg-[#ede8dc] shadow-[inset_2px_2px_4px_rgba(45,35,25,0.08)] text-xs font-bold">
          <button
            type="button"
            onClick={() => setViewMode("showcase")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              viewMode === "showcase"
                ? "bg-white text-[#eb4a2d] shadow-sm scale-102"
                : "text-[#6b7280] hover:text-[#1e2530]"
            }`}
          >
            Interactive Showcase
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-white text-[#eb4a2d] shadow-sm scale-102"
                : "text-[#6b7280] hover:text-[#1e2530]"
            }`}
          >
            All 8 Grid
          </button>
        </div>
      </div>

      {/* Horizontal Tactile Clay Scrubber */}
      <div className="w-full overflow-x-auto pb-4 pt-1 -mx-2 px-2 scrollbar-none">
        <div className="flex gap-3 min-w-max">
          {displayedServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Bot;
            const config = serviceVisualConfigs[idx % serviceVisualConfigs.length];
            const isSelected = activeIndex === idx;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setInteractiveState(0);
                }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all cursor-pointer text-left ${
                  isSelected
                    ? "bg-white shadow-[8px_12px_24px_rgba(45,35,25,0.12),inset_2px_2px_4px_rgba(255,255,255,1)] border-2 border-[#eb4a2d] scale-103"
                    : "bg-[#faf7f0] shadow-[inset_2px_2px_4px_rgba(45,35,25,0.05)] hover:bg-white text-[#6b7280]"
                }`}
              >
                <div 
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${config.gradient} shadow-sm shrink-0`}
                >
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold block text-[#eb4a2d]">
                    0{idx + 1}
                  </span>
                  <span className={`text-xs font-black block truncate ${isSelected ? "text-[#1e2530]" : "text-[#4b5563]"}`}>
                    {service.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {viewMode === "showcase" ? (
        /* ================= SHOWCASE MODE: GRAND WIDESCREEN EXHIBITION ================= */
        <div className="w-full clay-stage p-7 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Deep Architectural Showcase */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex items-center gap-4">
                <div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-white bg-gradient-to-br ${currentConfig.gradient} shadow-lg shrink-0 animate-pulse-scale`}
                  style={{
                    boxShadow: `10px 16px 32px ${currentConfig.accentShadow}, inset 4px 4px 8px rgba(255, 255, 255, 0.6), inset -4px -4px 8px rgba(0, 0, 0, 0.2)`,
                  }}
                >
                  <CurrentIcon className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xs font-mono font-black uppercase tracking-widest text-[#eb4a2d] block">
                    SERVICE 0{activeIndex + 1} // {currentService.badge}
                  </span>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e2530] tracking-tight mt-0.5">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              <p className={`text-base sm:text-lg font-bold ${currentConfig.text}`}>
                {currentService.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed font-medium">
                {currentService.description}
              </p>

              {/* Verified Metrics Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                {currentService.metrics.map((m) => (
                  <div 
                    key={m.label} 
                    className="p-4 sm:p-5 rounded-2xl bg-white shadow-[6px_8px_18px_rgba(45,35,25,0.06),inset_2px_2px_4px_rgba(255,255,255,0.9)] text-center border border-white hover:scale-105 transition-transform"
                  >
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-[#6b7280] font-bold block truncate">
                      {m.label}
                    </span>
                    <span className="text-lg sm:text-2xl font-mono font-black text-[#1e2530] block mt-1">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Production Deliverables */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-[#6b7280] font-bold block">
                  Production Engineering Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.slice(0, 4).map((d) => (
                    <div 
                      key={d} 
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faf7f0] text-xs font-semibold text-[#1e2530] hover:bg-white transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA and Tech Stack */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#ede8dc]">
                <Link
                  href={`/contact?service=${currentService.id}`}
                  className="clay-btn clay-btn-coral px-8 py-3.5 text-sm sm:text-base font-bold shadow-md"
                >
                  <span>Scope This Discipline</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/services#${currentService.id}`}
                  className="clay-btn clay-btn-white px-7 py-3.5 text-sm font-bold text-[#1e2530]"
                >
                  <span>Technical Spec Sheet</span>
                </Link>
              </div>
            </div>

            {/* Right: Bespoke Interactive Clay Studio Simulator with Live SVG Animation */}
            <div className="lg:col-span-5">
              <div 
                className="p-6 sm:p-8 rounded-[2.5rem] bg-gradient-to-br from-[#ffffff] to-[#faf7f0] border-2 border-white space-y-6"
                style={{
                  boxShadow: "16px 24px 48px rgba(45, 35, 25, 0.12), -10px -10px 24px rgba(255, 255, 255, 1), inset 3px 3px 6px rgba(255, 255, 255, 0.9), inset -4px -4px 8px rgba(45, 35, 25, 0.04)",
                }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#ede8dc]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff7259] shadow-sm animate-pulse" />
                    <span className="w-3 h-3 rounded-full bg-[#fbbf24] shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-[#10b981] shadow-sm" />
                    <span className="text-[11px] font-mono font-bold text-[#6b7280] ml-2">
                      airacode_sim_v4
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#059669]">
                    ACTIVE SIMULATION
                  </span>
                </div>

                {/* Simulated Visual Artifact Based on Discipline */}
                <div className="p-5 rounded-2xl bg-[#ede8dc] shadow-[inset_3px_4px_10px_rgba(45,35,25,0.08)] space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono font-bold">
                    <span className="text-[#6b7280]">ARCHITECTURE MONITOR</span>
                    <span className="text-[#eb4a2d]">{currentService.title}</span>
                  </div>

                  {/* Dynamic Simulation Box with Animated SVG Neural Flow */}
                  <div className="bg-white rounded-xl p-4 shadow-sm space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-[#ede8dc] pb-2">
                      <span className="text-[#6b7280]">Runtime State:</span>
                      <span className="text-[#10b981] font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                        SYNCHRONIZED (60 FPS)
                      </span>
                    </div>

                    {/* Animated SVG Stream Wave */}
                    <div className="h-10 w-full overflow-hidden flex items-center">
                      <svg className="w-full h-8" viewBox="0 0 300 30">
                        <path
                          d="M 0 15 Q 25 5, 50 15 T 100 15 T 150 15 T 200 15 T 250 15 T 300 15"
                          fill="none"
                          stroke="#eb4a2d"
                          strokeWidth="2.5"
                          className="animate-stream"
                        />
                      </svg>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between text-[#4b5563]">
                        <span>Inference Latency:</span>
                        <span className="font-bold text-[#1e2530]">{12 + interactiveState * 2}ms</span>
                      </div>
                      <div className="flex justify-between text-[#4b5563]">
                        <span>Model Precision:</span>
                        <span className="font-bold text-[#7c3aed]">99.4% Verified</span>
                      </div>
                      <div className="flex justify-between text-[#4b5563]">
                        <span>Availability SLA:</span>
                        <span className="font-bold text-[#059669]">99.99% Uptime</span>
                      </div>
                    </div>

                    {/* Interactive Stress Slider */}
                    <div className="pt-2 border-t border-[#ede8dc] space-y-2">
                      <div className="flex justify-between text-[10px] text-[#6b7280]">
                        <span>Stress Load: {interactiveState * 25}%</span>
                        <span>Multi-Region Mesh</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="4"
                        value={interactiveState}
                        onChange={(e) => setInteractiveState(Number(e.target.value))}
                        className="w-full h-2 bg-[#ede8dc] rounded-lg appearance-none cursor-pointer accent-[#eb4a2d]"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-[#4b5563] leading-relaxed">
                    AIRACODE engineering pods adapt foundation models and distributed infrastructure directly to enterprise requirements.
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {currentService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white text-xs font-mono font-bold text-[#1e2530] shadow-sm border border-white hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ================= GRID MODE: ALL 8 SCULPTED CARDS ================= */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Bot;
            const config = serviceVisualConfigs[idx % serviceVisualConfigs.length];

            return (
              <div
                key={service.id}
                className="clay-card p-7 sm:p-8 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${config.gradient} shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-7 h-7 stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#ede8dc] text-[#1e2530]">
                      0{idx + 1} // {service.badge}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-[#1e2530] group-hover:text-[#eb4a2d] transition-colors leading-snug">
                    {service.title}
                  </h4>
                  <p className={`text-xs font-bold ${config.text} mt-1 mb-3`}>
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4b5563] line-clamp-3 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#ede8dc]">
                    {service.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-center p-2 rounded-xl bg-[#faf7f0]">
                        <span className="text-[10px] text-[#6b7280] font-bold block truncate">{m.label}</span>
                        <span className="text-sm font-mono font-black text-[#1e2530]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#ede8dc] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(idx);
                      setViewMode("showcase");
                    }}
                    className="text-xs font-bold text-[#eb4a2d] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect In Showcase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-xs font-mono text-[#6b7280] hover:text-[#1e2530]"
                  >
                    Specs &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
