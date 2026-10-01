"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Users, 
  ShieldCheck,
  Clapperboard,
  Layers,
  Zap,
  Server
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "ai-website-dev",
    "agentic-ai",
  ]);
  const [infraState, setInfraState] = useState<string>("monolith");
  const [teamScale, setTeamScale] = useState<number>(100);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const sprintCount = Math.max(2, Math.ceil(selectedServices.length * 1.5) + (infraState === "monolith" ? 2 : 1));
  const podEngineers = Math.min(8, 2 + Math.floor(selectedServices.length / 1.5));
  const readinessRating = selectedServices.length > 4 ? "Enterprise Swarm Ready" : "Accelerated AI Pod";
  const costSavingsEstimate = Math.min(78, 35 + selectedServices.length * 5);

  return (
    <div className="w-full clay-card p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left column: Selection Options */}
        <div className="lg:col-span-7 space-y-7">
          <div className="cinema-badge text-[#eb4a2d]">
            <Clapperboard className="w-4 h-4 text-[#eb4a2d]" />
            <span>Scope Configurator &amp; Pod Sizing</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1e2530] tracking-tight">
              Configure Your Custom Engineering Blueprint
            </h3>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#4b5563] font-medium leading-relaxed">
              Select the capabilities you require to calculate engineering pod composition, delivery velocity, and recommended tech architecture.
            </p>
          </div>

          {/* Service Multi-Select */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase text-[#6b7280] font-bold">
                Select Services Required ({selectedServices.length} selected)
              </label>
              <button
                type="button"
                onClick={() => setSelectedServices(servicesData.map((s) => s.id))}
                className="text-xs font-mono font-bold text-[#eb4a2d] hover:underline"
              >
                Select All 8
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesData.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white shadow-[6px_8px_18px_rgba(235,74,45,0.18),inset_2px_2px_4px_rgba(255,255,255,0.9)] border-2 border-[#eb4a2d]"
                        : "bg-[#f6f3ee] shadow-[inset_2px_2px_4px_rgba(30,37,48,0.05)] text-[#4b5563] hover:bg-white"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center border transition-all shrink-0 ${
                        isSelected
                          ? "bg-[#eb4a2d] border-[#eb4a2d] text-white shadow-sm"
                          : "border-[#d1d5db] bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="text-xs min-w-0">
                      <span className="font-bold text-[#1e2530] block truncate sm:whitespace-normal">{service.title}</span>
                      <span className="text-[10px] text-[#6b7280] block mt-0.5 font-medium">{service.badge}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Infrastructure Baseline Selector */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
              Current Architecture Baseline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "monolith", label: "Legacy Monolith", desc: "Older on-prem/VPS" },
                { id: "hybrid", label: "Hybrid Cloud", desc: "Partial AWS/GCP" },
                { id: "greenfield", label: "Greenfield / SaaS", desc: "Fresh AI product" },
              ].map((opt) => {
                const isCurrent = infraState === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setInfraState(opt.id)}
                    className={`p-4 rounded-2xl text-center transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-white shadow-[6px_8px_18px_rgba(124,58,237,0.18)] border-2 border-[#7c3aed]"
                        : "bg-[#f6f3ee] text-[#4b5563] hover:bg-white"
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold block text-[#1e2530]">{opt.label}</span>
                    <span className="text-[11px] text-[#6b7280] block mt-1">{opt.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scale Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#6b7280] font-bold uppercase">Estimated Concurrent Scale</span>
              <span className="font-bold text-[#eb4a2d]">{teamScale.toLocaleString()} Daily Active Users / Queries</span>
            </div>
            <input
              type="range"
              min={10}
              max={1000}
              step={10}
              value={teamScale}
              onChange={(e) => setTeamScale(Number(e.target.value))}
              className="w-full h-3 bg-[#ede9e0] rounded-lg appearance-none cursor-pointer accent-[#eb4a2d]"
            />
          </div>
        </div>

        {/* Right column: Generated Pod Blueprint */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div 
            className="p-7 sm:p-9 rounded-[2.5rem] bg-gradient-to-br from-[#ffffff] to-[#f6f3ee] border-2 border-white space-y-6"
            style={{
              boxShadow: "16px 24px 45px rgba(30, 37, 48, 0.12), -10px -10px 25px rgba(255, 255, 255, 1), inset 3px 3px 6px rgba(255, 255, 255, 0.9), inset -4px -4px 8px rgba(30, 37, 48, 0.04)",
            }}
          >
            <div className="flex items-center justify-between border-b border-[#ede9e0] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6b7280] font-bold">
                Recommended Delivery Pod
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#eb4a2d]/10 text-xs font-mono font-bold text-[#eb4a2d]">
                {readinessRating}
              </span>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#ede9e0]/70 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#4b5563]">
                  <Users className="w-4 h-4 text-[#eb4a2d]" />
                  <span>Dedicated Specialist Pod</span>
                </div>
                <span className="text-sm sm:text-base font-mono font-black text-[#1e2530]">{podEngineers} Engineers</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#ede9e0]/70 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#4b5563]">
                  <Clock className="w-4 h-4 text-[#7c3aed]" />
                  <span>Estimated Sprint Cycle</span>
                </div>
                <span className="text-sm sm:text-base font-mono font-black text-[#1e2530]">{sprintCount} Sprints (2-wk)</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#ede9e0]/70 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#4b5563]">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Production SLA Assurance</span>
                </div>
                <span className="text-sm sm:text-base font-mono font-black text-[#059669]">99.99% Uptime</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#ede9e0]/70 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#4b5563]">
                  <Zap className="w-4 h-4 text-[#d97706]" />
                  <span>Efficiency &amp; Cost Reduction</span>
                </div>
                <span className="text-sm sm:text-base font-mono font-black text-[#d97706]">~{costSavingsEstimate}% Yield</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#ede9e0]/60 text-xs font-mono text-[#1e2530] space-y-1.5">
              <span className="text-[#6b7280] block text-[10px] uppercase font-bold tracking-wider">Recommended Architecture</span>
              <p className="leading-relaxed font-semibold">
                Next.js Edge + LangGraph Autonomous Swarm + Private VPC QLoRA Inference + Multi-Cloud Orchestration (AWS/GCP) + Datadog 24/7 Telemetry
              </p>
            </div>

            <Link
              href={`/contact?scope=${encodeURIComponent(selectedServices.join(","))}&infra=${infraState}`}
              className="w-full clay-btn clay-btn-coral py-4 text-sm sm:text-base font-bold shadow-md flex items-center justify-center gap-2"
            >
              <span>Lock in This Scope &amp; Request Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
