"use client";

import { useState } from "react";
import { 
  Bot, 
  Globe, 
  Cloud, 
  Database, 
  Zap, 
  Sparkles, 
  Activity, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight,
  Cpu,
  RefreshCw
} from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  color: string;
  glowColor: string;
  icon: React.ElementType;
  techs: string[];
  angleDeg: number;
}

const clayNodes: NodeItem[] = [
  {
    id: "ai-web",
    name: "AI Cognitive Web & SaaS",
    category: "COGNITIVE FRONTEND",
    tagline: "Dynamic, hyper-personalized Next.js 16 web applications with sub-second AI responses.",
    metric: "<18ms",
    metricLabel: "Edge Latency",
    color: "from-[#ff7e67] to-[#eb4a2d]",
    glowColor: "rgba(235, 74, 45, 0.4)",
    icon: Globe,
    techs: ["Next.js 16", "React 19", "Pinecone", "WebSockets"],
    angleDeg: 45,
  },
  {
    id: "agentic-swarm",
    name: "Autonomous Agent Swarms",
    category: "AGENTIC LOGIC",
    tagline: "Multi-agent systems executing multi-step business goals with deterministic sandboxes.",
    metric: "96.7%",
    metricLabel: "Task Autonomy",
    color: "from-[#a78bfa] to-[#7c3aed]",
    glowColor: "rgba(124, 58, 237, 0.4)",
    icon: Bot,
    techs: ["LangGraph", "LlamaIndex", "Tool Calling", "Temporal"],
    angleDeg: 135,
  },
  {
    id: "multi-cloud",
    name: "Multi-Cloud Kubernetes",
    category: "CLOUD FABRIC",
    tagline: "Resilient containerized infrastructure with active-active failover across AWS, GCP & Azure.",
    metric: "99.99%",
    metricLabel: "Uptime SLA",
    color: "from-[#60a5fa] to-[#1d4ed8]",
    glowColor: "rgba(29, 78, 216, 0.4)",
    icon: Cloud,
    techs: ["AWS EKS", "Google GKE", "Azure AKS", "ArgoCD"],
    angleDeg: 225,
  },
  {
    id: "data-modernization",
    name: "Modernization & Data Core",
    category: "DATA & LEGACY",
    tagline: "Zero-downtime CDC deconstruction of legacy databases into real-time Lakehouses.",
    metric: "14x Faster",
    metricLabel: "Query Velocity",
    color: "from-[#34d399] to-[#047857]",
    glowColor: "rgba(4, 120, 87, 0.4)",
    icon: Database,
    techs: ["Kafka CDC", "Snowflake", "BigQuery", "n8n Automation"],
    angleDeg: 315,
  },
];

export default function HeroClayDiorama() {
  const [activeId, setActiveId] = useState<string>("ai-web");
  const [pulseCount, setPulseCount] = useState(0);

  const activeNode = clayNodes.find((n) => n.id === activeId) || clayNodes[0];

  const triggerPulse = () => {
    setPulseCount((prev) => prev + 1);
  };

  return (
    <div className="w-full clay-stage p-6 sm:p-10 lg:p-12 relative overflow-hidden mt-8 sm:mt-12">
      {/* Background Studio Lighting Glows with Smooth Hue Transitions */}
      <div 
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 transition-all duration-700"
        style={{ background: activeNode.glowColor }}
      />
      <div 
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 transition-all duration-700"
        style={{ background: activeNode.glowColor }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        {/* Left: 3D Kinetic Animated Clay Diorama */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4">
            {/* SVG Connecting Flow Lines & Animated Stream Pulses */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 500 500"
            >
              {/* Animated Connecting Wires to Satellites */}
              <line x1="250" y1="250" x2="390" y2="100" stroke="#d6cebe" strokeWidth="2.5" />
              <line x1="250" y1="250" x2="390" y2="400" stroke="#d6cebe" strokeWidth="2.5" />
              <line x1="250" y1="250" x2="110" y2="400" stroke="#d6cebe" strokeWidth="2.5" />
              <line x1="250" y1="250" x2="110" y2="100" stroke="#d6cebe" strokeWidth="2.5" />

              {/* Animated Glowing Data Pulses Flowing Along Lines */}
              <line 
                x1="250" y1="250" x2="390" y2="100" 
                stroke="#eb4a2d" strokeWidth="3" 
                className="animate-stream opacity-80"
              />
              <line 
                x1="250" y1="250" x2="390" y2="400" 
                stroke="#7c3aed" strokeWidth="3" 
                className="animate-stream opacity-80"
              />
              <line 
                x1="250" y1="250" x2="110" y2="400" 
                stroke="#2563eb" strokeWidth="3" 
                className="animate-stream opacity-80"
              />
              <line 
                x1="250" y1="250" x2="110" y2="100" 
                stroke="#059669" strokeWidth="3" 
                className="animate-stream opacity-80"
              />
            </svg>

            {/* Outer Concentric Clay Orbit Ring (Rotating Clockwise) */}
            <div 
              className="absolute inset-2 sm:inset-4 rounded-full border-4 border-[#e4ddd0] shadow-[inset_3px_3px_6px_rgba(45,35,25,0.06),3px_3px_6px_rgba(255,255,255,0.8)] animate-spin-slow pointer-events-none"
              style={{ borderStyle: "dashed" }}
            />

            {/* Middle Concentric Orbit Ring (Rotating Counter-Clockwise) */}
            <div 
              className="absolute inset-10 sm:inset-14 rounded-full border-2 border-[#dfd7c7] animate-spin-reverse pointer-events-none opacity-60"
              style={{ borderStyle: "dotted" }}
            />

            {/* Inner Concentric Clay Guide Ring */}
            <div className="absolute inset-20 sm:inset-24 rounded-full border border-[#ded6c5] opacity-70 pointer-events-none" />

            {/* Centerpiece: Sculpted Central Core with Tactile Pulse */}
            <div 
              onClick={triggerPulse}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center text-center p-4 cursor-pointer transition-all duration-300 hover:scale-108 active:scale-95 z-10"
              style={{
                background: "radial-gradient(circle at 35% 30%, #ffffff, #faf6ee 60%, #e8e0d0 100%)",
                boxShadow: "18px 24px 44px rgba(45, 35, 25, 0.12), -12px -12px 28px rgba(255, 255, 255, 1), inset 5px 5px 10px rgba(255, 255, 255, 1), inset -5px -5px 12px rgba(45, 35, 25, 0.08)",
              }}
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1 transition-all duration-500 shadow-md animate-pulse-scale"
                style={{
                  background: `linear-gradient(135deg, ${activeNode.color.split(" ")[0].replace("from-[", "").replace("]", "")}, ${activeNode.color.split(" ")[1].replace("to-[", "").replace("]", "")})`,
                  boxShadow: `0 8px 20px ${activeNode.glowColor}, inset 2px 2px 4px rgba(255,255,255,0.6)`,
                }}
              >
                <activeNode.icon className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-black font-mono text-[#1e2530] tracking-wider uppercase">
                AIRA ENGINE
              </span>
              <span className="text-[9px] font-mono font-bold text-[#10b981] flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                RUNTIME READY
              </span>
            </div>

            {/* Satellite 1: Top Right (AI Cognitive Web) */}
            <button
              type="button"
              onClick={() => setActiveId("ai-web")}
              className={`absolute top-2 right-4 sm:top-4 sm:right-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "ai-web" ? "scale-115 z-20" : "scale-100 hover:scale-108 opacity-90"
              }`}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#ff7e67] to-[#eb4a2d] text-white transition-all shadow-md animate-clay-1"
                style={{
                  boxShadow: "8px 12px 24px rgba(235, 74, 45, 0.35), inset 3px 3px 6px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(168, 38, 16, 0.5)",
                }}
              >
                <Globe className="w-7 h-7 stroke-[2.5]" />
              </div>
              <span className="mt-1.5 text-[10px] sm:text-xs font-black font-mono text-[#1e2530] px-2.5 py-0.5 rounded-full bg-white shadow-sm border border-white">
                Web &amp; SaaS
              </span>
            </button>

            {/* Satellite 2: Bottom Right (Autonomous Swarms) */}
            <button
              type="button"
              onClick={() => setActiveId("agentic-swarm")}
              className={`absolute bottom-2 right-4 sm:bottom-4 sm:right-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "agentic-swarm" ? "scale-115 z-20" : "scale-100 hover:scale-108 opacity-90"
              }`}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] text-white transition-all shadow-md animate-clay-2"
                style={{
                  boxShadow: "8px 12px 24px rgba(124, 58, 237, 0.35), inset 3px 3px 6px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(76, 29, 149, 0.5)",
                }}
              >
                <Bot className="w-7 h-7 stroke-[2.5]" />
              </div>
              <span className="mt-1.5 text-[10px] sm:text-xs font-black font-mono text-[#1e2530] px-2.5 py-0.5 rounded-full bg-white shadow-sm border border-white">
                Agent Swarm
              </span>
            </button>

            {/* Satellite 3: Bottom Left (Multi-Cloud) */}
            <button
              type="button"
              onClick={() => setActiveId("multi-cloud")}
              className={`absolute bottom-2 left-4 sm:bottom-4 sm:left-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "multi-cloud" ? "scale-115 z-20" : "scale-100 hover:scale-108 opacity-90"
              }`}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#60a5fa] to-[#1d4ed8] text-white transition-all shadow-md animate-clay-3"
                style={{
                  boxShadow: "8px 12px 24px rgba(29, 78, 216, 0.35), inset 3px 3px 6px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(15, 42, 122, 0.5)",
                }}
              >
                <Cloud className="w-7 h-7 stroke-[2.5]" />
              </div>
              <span className="mt-1.5 text-[10px] sm:text-xs font-black font-mono text-[#1e2530] px-2.5 py-0.5 rounded-full bg-white shadow-sm border border-white">
                Multi-Cloud
              </span>
            </button>

            {/* Satellite 4: Top Left (Data & Modernization) */}
            <button
              type="button"
              onClick={() => setActiveId("data-modernization")}
              className={`absolute top-2 left-4 sm:top-4 sm:left-8 flex flex-col items-center transition-all duration-300 cursor-pointer ${
                activeId === "data-modernization" ? "scale-115 z-20" : "scale-100 hover:scale-108 opacity-90"
              }`}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#34d399] to-[#047857] text-white transition-all shadow-md animate-clay-4"
                style={{
                  boxShadow: "8px 12px 24px rgba(4, 120, 87, 0.35), inset 3px 3px 6px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(3, 84, 60, 0.5)",
                }}
              >
                <Database className="w-7 h-7 stroke-[2.5]" />
              </div>
              <span className="mt-1.5 text-[10px] sm:text-xs font-black font-mono text-[#1e2530] px-2.5 py-0.5 rounded-full bg-white shadow-sm border border-white">
                Data Core
              </span>
            </button>
          </div>
          <span className="text-xs font-mono text-[#6b7280] font-bold mt-2">
            Click any node to inspect real-time system topology and metrics
          </span>
        </div>

        {/* Right: Active Node Interactive Telemetry & Architecture Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#ede8dc]">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-[#eb4a2d]">
              {activeNode.category}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm text-xs font-mono font-bold text-[#059669] border border-white">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>LIVE TELEMETRY</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1e2530] tracking-tight">
              {activeNode.name}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#4b5563] leading-relaxed font-medium">
              {activeNode.tagline}
            </p>
          </div>

          {/* Metric Showcase Plaque with Animated Pulse */}
          <div 
            className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white to-[#faf7f2] border border-white flex items-center justify-between"
            style={{
              boxShadow: "10px 14px 28px rgba(45, 35, 25, 0.07), inset 2px 2px 4px rgba(255, 255, 255, 0.9)",
            }}
          >
            <div>
              <span className="text-xs font-mono text-[#6b7280] uppercase font-bold block">
                {activeNode.metricLabel}
              </span>
              <span className="text-3xl sm:text-4xl font-mono font-black text-[#1e2530]">
                {activeNode.metric}
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 text-[#059669] flex items-center justify-center shadow-inner animate-pulse">
              <Activity className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Core Architectural Stack Clay Pills */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#6b7280] font-bold block">
              Core Architectural Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {activeNode.techs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3.5 py-1.5 rounded-xl bg-white text-xs font-mono font-bold text-[#1e2530] shadow-sm border border-white hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Navigation Link */}
          <div className="pt-2">
            <a
              href="#showcase-theater"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#eb4a2d] hover:underline"
            >
              <span>Explore All 8 Core Disciplines</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
