"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Clock, Zap, TrendingUp } from "lucide-react";

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
    <div className="clay-card p-6 sm:p-10 relative overflow-hidden w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Area */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-[#1e2530]">
            Value Yield
          </h3>
          <p className="text-xs sm:text-sm text-[#4b5563] font-medium">
            Adjust operational sliders to project annual cost recovery and speed gains.
          </p>

          <div className="space-y-4 pt-1">
            {/* Slider 1: Cloud Spend */}
            <div className="p-4 rounded-2xl bg-[#f6f3ee] space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#4b5563]">Monthly Cloud Spend</span>
                <span className="text-[#eb4a2d] font-mono text-sm font-black">
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
                className="w-full accent-[#eb4a2d] cursor-pointer h-1.5 bg-[#ede9e0] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-[#9ca3af]">
                <span>$5k</span>
                <span>$75k</span>
                <span>$150k+</span>
              </div>
            </div>

            {/* Slider 2: Manual Workflows */}
            <div className="p-4 rounded-2xl bg-[#f6f3ee] space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#4b5563]">Manual Tasks</span>
                <span className="text-[#7c3aed] font-mono text-sm font-black">{manualHours} hrs / wk</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full accent-[#7c3aed] cursor-pointer h-1.5 bg-[#ede9e0] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-[#9ca3af]">
                <span>10 hrs</span>
                <span>100 hrs</span>
                <span>200 hrs</span>
              </div>
            </div>

            {/* Slider 3: Legacy Age */}
            <div className="p-4 rounded-2xl bg-[#f6f3ee] space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-[#4b5563]">Legacy Age</span>
                <span className="text-[#059669] font-mono text-sm font-black">{systemAge} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={systemAge}
                onChange={(e) => setSystemAge(Number(e.target.value))}
                className="w-full accent-[#059669] cursor-pointer h-1.5 bg-[#ede9e0] rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-[#9ca3af]">
                <span>1 Year</span>
                <span>7 Years</span>
                <span>15+ Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projected Outcome Card */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-3xl bg-white border border-white space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#ede9e0] pb-3">
              <span className="text-xs font-mono uppercase text-[#6b7280] font-bold">
                Annual Yield
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[11px] font-mono text-[#059669] font-bold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Validated
              </span>
            </div>

            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#6b7280]">Total Annual Savings</span>
              <div className="text-3xl sm:text-4xl font-black text-[#1e2530] font-mono">
                ${totalAnnualSavings.toLocaleString()}
              </div>
              <span className="text-xs font-mono text-[#059669] font-bold block pt-0.5">
                Payback: ~{paybackMonths} months
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-[#ede9e0]/70">
                <div className="flex items-center gap-1 text-[11px] text-[#6b7280] font-bold mb-0.5">
                  <Zap className="w-3.5 h-3.5 text-[#eb4a2d]" />
                  Latency
                </div>
                <div className="text-xl font-black text-[#1e2530] font-mono">-{latencyReduction}%</div>
              </div>

              <div className="p-3 rounded-xl bg-[#ede9e0]/70">
                <div className="flex items-center gap-1 text-[11px] text-[#6b7280] font-bold mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#7c3aed]" />
                  Saved
                </div>
                <div className="text-xl font-black text-[#1e2530] font-mono">
                  {Math.round(manualHours * 52 * 0.75).toLocaleString()}h
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full clay-btn clay-btn-coral py-3 text-xs sm:text-sm font-bold block text-center"
            >
              <span>Get Audit</span>
              <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
