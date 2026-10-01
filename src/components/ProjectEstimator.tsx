"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Users, 
  ShieldCheck,
  Zap
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
  const readinessRating = selectedServices.length > 4 ? "Enterprise Swarm" : "Accelerated Pod";
  const costSavingsEstimate = Math.min(78, 35 + selectedServices.length * 5);

  return (
    <div className="w-full clay-card p-6 sm:p-10 relative overflow-hidden max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Selection Options */}
        <div className="lg:col-span-7 space-y-5">
          <div className="status-badge text-[#eb4a2d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2d] animate-ping" />
            <span>POD SIZING</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1e2530]">
              Scope Sizing
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#4b5563] font-medium">
              Select required capabilities to calculate pod composition and timeline.
            </p>
          </div>

          {/* Service Multi-Select */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono uppercase text-[#6b7280] font-bold">
                Services ({selectedServices.length})
              </span>
              <button
                type="button"
                onClick={() => setSelectedServices(servicesData.map((s) => s.id))}
                className="font-mono font-bold text-[#eb4a2d] hover:underline cursor-pointer"
              >
                Select All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {servicesData.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-2 border-[#eb4a2d] shadow-sm"
                        : "bg-[#f6f3ee] text-[#4b5563] hover:bg-white"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center border transition-all shrink-0 ${
                        isSelected
                          ? "bg-[#eb4a2d] border-[#eb4a2d] text-white"
                          : "border-[#d1d5db] bg-white"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-bold text-[#1e2530] truncate">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Infrastructure Baseline Selector */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
              Current Architecture
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "monolith", label: "Monolith" },
                { id: "hybrid", label: "Hybrid" },
                { id: "greenfield", label: "New SaaS" },
              ].map((opt) => {
                const isCurrent = infraState === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setInfraState(opt.id)}
                    className={`py-2 px-3 rounded-xl text-center text-xs font-bold transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-white border-2 border-[#7c3aed] text-[#1e2530] shadow-sm"
                        : "bg-[#f6f3ee] text-[#6b7280] hover:bg-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: Generated Pod Blueprint */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-3xl bg-white border border-white space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#ede9e0] pb-3">
              <span className="text-xs font-mono uppercase text-[#6b7280] font-bold">
                Recommended Pod
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#eb4a2d]/10 text-xs font-mono font-bold text-[#eb4a2d]">
                {readinessRating}
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede9e0]/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4b5563]">
                  <Users className="w-3.5 h-3.5 text-[#eb4a2d]" />
                  <span>Team Size</span>
                </div>
                <span className="text-sm font-mono font-black text-[#1e2530]">{podEngineers} Engineers</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede9e0]/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4b5563]">
                  <Clock className="w-3.5 h-3.5 text-[#7c3aed]" />
                  <span>Timeline</span>
                </div>
                <span className="text-sm font-mono font-black text-[#1e2530]">{sprintCount} Sprints</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede9e0]/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4b5563]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Uptime SLA</span>
                </div>
                <span className="text-sm font-mono font-black text-[#059669]">99.99%</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#ede9e0]/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4b5563]">
                  <Zap className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Yield</span>
                </div>
                <span className="text-sm font-mono font-black text-[#d97706]">~{costSavingsEstimate}%</span>
              </div>
            </div>

            <Link
              href={`/contact?scope=${encodeURIComponent(selectedServices.join(","))}&infra=${infraState}`}
              className="w-full clay-btn clay-btn-coral py-3 text-xs sm:text-sm font-bold block text-center"
            >
              <span>Confirm Scope</span>
              <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
