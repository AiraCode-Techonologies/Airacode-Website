"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Clock, Zap, TrendingUp, Sparkles } from "lucide-react";

export default function ModernizationCalculator() {
  const [cloudSpend, setCloudSpend] = useState(35000);
  const [manualHours, setManualHours] = useState(80);
  const [systemAge, setSystemAge] = useState(6);

  // Yield calculations
  const annualCloudSavings = Math.round(cloudSpend * 12 * 0.38);
  const annualLaborSavings = Math.round(manualHours * 52 * 65 * 0.75);
  const totalAnnualSavings = annualCloudSavings + annualLaborSavings;
  const latencyReduction = Math.min(85, 45 + systemAge * 4);
  const paybackMonths = Math.max(2.1, (95000 / (totalAnnualSavings / 12))).toFixed(1);

  return (
    <div className="clay-card p-6 sm:p-10 lg:p-14 relative overflow-hidden w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Sliders Input Area */}
        <div className="lg:col-span-7 space-y-6">
          <div className="cinema-badge text-[#eb4a2d]">
            <Calculator className="w-4 h-4 text-[#eb4a2d]" />
            <span>Interactive ROI &amp; Modernization Yield</span>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1e2530] tracking-tight">
            Calculate Your Enterprise AI Modernization Yield
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#4b5563] font-medium leading-relaxed">
            Tune the operational parameters below to model real-world cost recovery, latency reductions, and labor automation engineered by AIRACODE.
          </p>

          <div className="space-y-5 pt-2">
            {/* Slider 1: Cloud Spend */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#f6f3ee] shadow-[inset_2px_2px_5px_rgba(30,37,48,0.06),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] space-y-3">
              <div className="flex justify-between items-center text-sm sm:text-base font-bold">
                <span className="text-[#4b5563]">Monthly Cloud &amp; Infra Spend</span>
                <span className="text-[#eb4a2d] font-mono text-base sm:text-lg font-black">
                  ${cloudSpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="5000"
                value={cloudSpend}
                onChange={(e) => setCloudSpend(Number(e.target.value))}
                className="w-full accent-[#eb4a2d] cursor-pointer h-2 bg-[#ede9e0] rounded-lg"
              />
              <div className="flex justify-between text-xs font-mono font-bold text-[#9ca3af]">
                <span>$5,000</span>
                <span>$75,000</span>
                <span>$150,000+</span>
              </div>
            </div>

            {/* Slider 2: Manual Workflows */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#f6f3ee] shadow-[inset_2px_2px_5px_rgba(30,37,48,0.06),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] space-y-3">
              <div className="flex justify-between items-center text-sm sm:text-base font-bold">
                <span className="text-[#4b5563]">Manual Operations &amp; Dev Tasks</span>
                <span className="text-[#7c3aed] font-mono text-base sm:text-lg font-black">{manualHours} hrs / week</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full accent-[#7c3aed] cursor-pointer h-2 bg-[#ede9e0] rounded-lg"
              />
              <div className="flex justify-between text-xs font-mono font-bold text-[#9ca3af]">
                <span>10 hrs</span>
                <span>100 hrs</span>
                <span>200 hrs/wk</span>
              </div>
            </div>

            {/* Slider 3: Legacy Age */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#f6f3ee] shadow-[inset_2px_2px_5px_rgba(30,37,48,0.06),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] space-y-3">
              <div className="flex justify-between items-center text-sm sm:text-base font-bold">
                <span className="text-[#4b5563]">Age of Core Legacy Architecture</span>
                <span className="text-[#059669] font-mono text-base sm:text-lg font-black">{systemAge} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={systemAge}
                onChange={(e) => setSystemAge(Number(e.target.value))}
                className="w-full accent-[#059669] cursor-pointer h-2 bg-[#ede9e0] rounded-lg"
              />
              <div className="flex justify-between text-xs font-mono font-bold text-[#9ca3af]">
                <span>1 Year</span>
                <span>7 Years</span>
                <span>15+ Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projected Outcome Clay Sculpture Card */}
        <div className="lg:col-span-5">
          <div 
            className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#ffffff] to-[#f6f3ee] border-2 border-white space-y-6"
            style={{
              boxShadow: "16px 24px 45px rgba(30, 37, 48, 0.12), -10px -10px 25px rgba(255, 255, 255, 1), inset 3px 3px 6px rgba(255, 255, 255, 0.9), inset -4px -4px 8px rgba(30, 37, 48, 0.04)",
            }}
          >
            <div className="flex items-center justify-between border-b border-[#ede9e0] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#6b7280] font-bold">
                Projected Annual Impact
              </span>
              <span className="px-3 py-1 rounded-full bg-[#10b981]/15 text-xs font-mono text-[#059669] font-bold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> AIRACODE Validated
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#6b7280]">Total Projected Annual Value</span>
              <div className="text-4xl sm:text-5xl font-black text-[#1e2530] font-mono tracking-tight">
                ${totalAnnualSavings.toLocaleString()}
              </div>
              <span className="text-xs sm:text-sm font-mono text-[#059669] font-bold block pt-1">
                Est. Payback Period: ~{paybackMonths} months
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#ede9e0]/70 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[#6b7280] font-bold mb-1">
                  <Zap className="w-4 h-4 text-[#eb4a2d]" />
                  Speed Gain
                </div>
                <div className="text-2xl font-black text-[#1e2530] font-mono">-{latencyReduction}%</div>
                <span className="text-xs text-[#6b7280] font-medium">Query latency</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#ede9e0]/70 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)]">
                <div className="flex items-center gap-1.5 text-xs text-[#6b7280] font-bold mb-1">
                  <Clock className="w-4 h-4 text-[#7c3aed]" />
                  Labor Saved
                </div>
                <div className="text-2xl font-black text-[#1e2530] font-mono">
                  {Math.round(manualHours * 52 * 0.75).toLocaleString()}h
                </div>
                <span className="text-xs text-[#6b7280] font-medium">Automated / yr</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full clay-btn clay-btn-coral py-4 text-base font-bold shadow-md"
            >
              <span>Get Comprehensive Audit Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
