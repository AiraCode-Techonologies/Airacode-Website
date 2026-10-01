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
  ArrowRight 
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

const clayColorStyles = [
  { gradient: "from-[#ff8a73] to-[#eb4a2d]", text: "text-[#eb4a2d]", shadow: "rgba(235, 74, 45, 0.3)" },
  { gradient: "from-[#60a5fa] to-[#2563eb]", text: "text-[#2563eb]", shadow: "rgba(37, 99, 235, 0.3)" },
  { gradient: "from-[#34d399] to-[#059669]", text: "text-[#059669]", shadow: "rgba(5, 150, 105, 0.3)" },
  { gradient: "from-[#a78bfa] to-[#7c3aed]", text: "text-[#7c3aed]", shadow: "rgba(124, 58, 237, 0.3)" },
  { gradient: "from-[#fbbf24] to-[#d97706]", text: "text-[#d97706]", shadow: "rgba(217, 119, 6, 0.3)" },
  { gradient: "from-[#f472b6] to-[#db2777]", text: "text-[#db2777]", shadow: "rgba(219, 39, 119, 0.3)" },
  { gradient: "from-[#2dd4bf] to-[#0d9488]", text: "text-[#0d9488]", shadow: "rgba(13, 148, 136, 0.3)" },
  { gradient: "from-[#818cf8] to-[#4f46e5]", text: "text-[#4f46e5]", shadow: "rgba(79, 70, 229, 0.3)" },
];

export default function ServicesGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("all");

  const filteredServices = servicesData.filter((s: ServiceItem) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="space-y-10 sm:space-y-12 w-full">
      {/* Tactile Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {[
          { id: "all", label: "All 8 Core Disciplines" },
          { id: "ai-systems", label: "AI & Autonomous Systems" },
          { id: "cloud-data", label: "Cloud & Data Engineering" },
          { id: "modernization", label: "Modernization & Ops" },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#ede9e0] text-[#eb4a2d] shadow-[inset_3px_3px_6px_rgba(30,37,48,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] scale-105"
                  : "bg-white text-[#4b5563] shadow-[5px_6px_14px_rgba(30,37,48,0.06),-3px_-3px_8px_rgba(255,255,255,0.9)] hover:text-[#1e2530]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Tactile Clay Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {displayedServices.map((service: ServiceItem, index: number) => {
          const Icon = iconMap[service.iconName] || Bot;
          const color = clayColorStyles[index % clayColorStyles.length];

          return (
            <div
              key={service.id}
              className="clay-card p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* 3D Clay Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${color.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    style={{
                      boxShadow: `6px 8px 18px ${color.shadow}, inset 3px 3px 6px rgba(255, 255, 255, 0.5), inset -3px -3px 6px rgba(0, 0, 0, 0.2)`,
                    }}
                  >
                    <Icon className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#ede9e0] text-[#1e2530] shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] group-hover:text-[#eb4a2d] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#eb4a2d] mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Exact description from user content */}
                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed line-clamp-4 font-medium">
                  {service.description}
                </p>

                {/* Tactile Inset Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 mt-5 p-2.5 rounded-2xl bg-[#f6f3ee] shadow-[inset_2px_2px_5px_rgba(30,37,48,0.06),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]">
                  {service.metrics.map((metric: { label: string; value: string }) => (
                    <div key={metric.label} className="text-center p-1">
                      <span className="text-[10px] text-[#6b7280] font-semibold block truncate">{metric.label}</span>
                      <span className="text-xs sm:text-sm font-bold font-mono text-[#1e2530]">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-[#ede9e0] flex items-center justify-between">
                <Link
                  href={`/services#${service.id}`}
                  className="text-xs sm:text-sm font-bold text-[#eb4a2d] hover:text-[#c0392b] flex items-center gap-1.5 group/link"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs font-mono font-bold text-[#9ca3af]">0{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
