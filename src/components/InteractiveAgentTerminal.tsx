"use client";

import { useState, useEffect } from "react";
import { 
  Bot, 
  Terminal, 
  Cpu, 
  GitMerge, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  Zap, 
  ShieldAlert, 
  Database,
  Workflow,
  Sparkles
} from "lucide-react";

export default function InteractiveAgentTerminal() {
  const [activeTab, setActiveTab] = useState<"agentic" | "finetuning" | "modernization">("agentic");
  const [isRunning, setIsRunning] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const agenticSteps = [
    { title: "Planner Agent", desc: "Decomposing business goal into high-level DAG execution graph", icon: Bot, color: "bg-[#eb4a2d]" },
    { title: "Vector Memory", desc: "Querying Pinecone & Snowflake for enterprise schemata and runtime logs", icon: Database, color: "bg-[#2563eb]" },
    { title: "Tool Calling", desc: "Executing automated n8n webhook and calling cloud infrastructure API", icon: Workflow, color: "bg-[#7c3aed]" },
    { title: "Safety Verifier", desc: "Validating schema compliance, deterministic tests & zero hallucination check", icon: ShieldAlert, color: "bg-[#d97706]" },
    { title: "Edge Deployment", desc: "System auto-deployed to edge with zero downtime and verified audit log", icon: CheckCircle2, color: "bg-[#059669]" },
  ];

  const runSimulation = () => {
    setIsRunning(true);
    setSimStep(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (simStep < agenticSteps.length - 1) {
      const timer = setTimeout(() => {
        setSimStep((prev) => prev + 1);
      }, 950);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, simStep, agenticSteps.length]);

  return (
    <div className="clay-card p-6 sm:p-10 lg:p-12 relative overflow-hidden w-full">
      {/* Console Top Bar */}
      <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#ede9e0] dark:border-white/10 gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff7259] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.7),2px_2px_4px_rgba(0,0,0,0.15)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#fbbf24] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.7),2px_2px_4px_rgba(0,0,0,0.15)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#10b981] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.7),2px_2px_4px_rgba(0,0,0,0.15)]" />
          </div>
          <span className="text-xs sm:text-sm font-mono font-bold text-[#4b5563] dark:text-[#9ca3af] pl-2 border-l border-[#ede9e0] dark:border-white/10 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#eb4a2d]" />
            airacode-kernel v4.8 [active]
          </span>
        </div>

        {/* Tactile Tab Selector */}
        <div className="flex items-center p-1.5 rounded-2xl bg-[#ede9e0] dark:bg-[#151a24] shadow-[inset_2px_2px_5px_rgba(30,37,48,0.08),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5)] text-xs font-bold">
          <button
            onClick={() => setActiveTab("agentic")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "agentic"
                ? "bg-white dark:bg-[#1a2130] text-[#eb4a2d] shadow-[3px_4px_10px_rgba(30,37,48,0.08)] scale-105"
                : "text-[#6b7280] dark:text-[#9ca3af] hover:text-[#1e2530] dark:hover:text-white"
            }`}
          >
            Autonomous Swarm
          </button>
          <button
            onClick={() => setActiveTab("finetuning")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "finetuning"
                ? "bg-white dark:bg-[#1a2130] text-[#7c3aed] shadow-[3px_4px_10px_rgba(30,37,48,0.08)] scale-105"
                : "text-[#6b7280] dark:text-[#9ca3af] hover:text-[#1e2530] dark:hover:text-white"
            }`}
          >
            Model Quantization
          </button>
          <button
            onClick={() => setActiveTab("modernization")}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "modernization"
                ? "bg-white dark:bg-[#1a2130] text-[#2563eb] shadow-[3px_4px_10px_rgba(30,37,48,0.08)] scale-105"
                : "text-[#6b7280] dark:text-[#9ca3af] hover:text-[#1e2530] dark:hover:text-white"
            }`}
          >
            Modernization Protocol
          </button>
        </div>
      </div>

      {/* Tab 1: Autonomous Swarm Visualizer */}
      {activeTab === "agentic" && (
        <div className="pt-6 sm:pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#eb4a2d]" />
                Multi-Agent Workflow Orchestration Simulation
              </h3>
              <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1 font-medium">
                Watch autonomous agents collaborate in stop-motion style: decompose logic, query vector memory, call tools, and verify output.
              </p>
            </div>
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="clay-btn clay-btn-coral px-6 py-3 text-xs sm:text-sm font-bold tracking-wide"
            >
              {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {isRunning ? "Swarm Executing..." : "Trigger Autonomous Swarm"}
            </button>
          </div>

          {/* Stepper Grid with Tactile Clay Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {agenticSteps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = isRunning && simStep === idx;
              const isDone = (!isRunning && simStep === 4) || simStep > idx;

              return (
                <div
                  key={step.title}
                  className={`p-5 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                    isCurrent
                      ? "bg-white dark:bg-[#151a24] shadow-[12px_16px_30px_rgba(235,74,45,0.18)] scale-105 border-2 border-[#eb4a2d]"
                      : isDone
                      ? "bg-white dark:bg-[#151a24] shadow-[6px_8px_18px_rgba(5,150,105,0.12)] border border-[#10b981]/30"
                      : "bg-[#ede9e0]/60 dark:bg-white/5 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] opacity-70"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white ${step.color} shadow-sm`}
                        style={{
                          boxShadow: "inset 2px 2px 4px rgba(255, 255, 255, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <Icon className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#6b7280] dark:text-[#9ca3af]">0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-[#1e2530] dark:text-[#f3f4f6] mb-1">{step.title}</h4>
                    <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-snug">{step.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede9e0] dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-[#9ca3af]">State</span>
                    {isCurrent ? (
                      <span className="text-[#eb4a2d] animate-pulse">Running...</span>
                    ) : isDone ? (
                      <span className="text-[#059669]">✓ Completed</span>
                    ) : (
                      <span className="text-[#9ca3af]">Queued</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clay Inset Console Stream */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#ede9e0] dark:bg-[#0f131a] shadow-[inset_4px_5px_10px_rgba(30,37,48,0.08),inset_-3px_-3px_8px_rgba(255,255,255,0.9)] dark:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.6)] font-mono text-xs sm:text-sm space-y-2 text-[#1e2530] dark:text-[#f3f4f6]">
            <div className="text-[#6b7280] dark:text-[#9ca3af] font-bold flex items-center justify-between text-[11px] sm:text-xs pb-2 border-b border-[#d6cebe] dark:border-white/10">
              <span>TERMINAL STREAM // LIVE DISPATCH TRACE</span>
              <span className="text-[#059669]">EXECUTION: 42ms | DETERMINISTIC VERIFICATION: PASS</span>
            </div>
            <p className="text-[#eb4a2d] font-bold">
              [planner-01] &gt; Ingested goal: &quot;Modernize legacy transactional service and deploy AI risk gatekeeper&quot;
            </p>
            <p className="text-[#2563eb]">
              [rag-memory] &gt; Retrieved 12 schema definitions from PostgreSQL vector store; similarity score 0.941
            </p>
            <p className="text-[#7c3aed]">
              [tool-runner] &gt; Dispatching n8n webhook: executing migration script in isolated staging container
            </p>
            <p className="text-[#059669] font-bold">
              [audit-gate] &gt; Regression tests 100% passed. End-to-end response verified in 380ms. Ready for production.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Model Quantization */}
      {activeTab === "finetuning" && (
        <div className="pt-6 sm:pt-8 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed]" />
              AIRACODE Fine-Tuning &amp; Quantization vs Base Cloud Models
            </h3>
            <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1 font-medium">
              Verifiable empirical benchmark: standard generic cloud APIs vs AIRACODE fine-tuned 4-bit SLMs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#ede9e0]/80 dark:bg-[#151a24] shadow-[inset_3px_3px_8px_rgba(30,37,48,0.06)] dark:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-[#1a2130] text-xs font-mono font-bold text-[#6b7280] dark:text-[#cbd5e1] shadow-sm">
                  Standard Frontier Cloud API
                </span>
                <span className="text-xs font-bold text-[#c0392b]">High Latency / High Cost</span>
              </div>
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af]">
                <li className="flex justify-between border-b border-[#d6cebe] dark:border-white/10 pb-2">
                  <span>Time-to-First-Token:</span>
                  <span className="font-bold text-[#c0392b]">920ms</span>
                </li>
                <li className="flex justify-between border-b border-[#d6cebe] dark:border-white/10 pb-2">
                  <span>Domain Reasoning Accuracy:</span>
                  <span className="font-bold text-[#1e2530] dark:text-[#f3f4f6]">76.4%</span>
                </li>
                <li className="flex justify-between border-b border-[#d6cebe] dark:border-white/10 pb-2">
                  <span>Hosting Cost (1M Tokens):</span>
                  <span className="font-bold text-[#c0392b]">$15.00 / 1M</span>
                </li>
                <li className="flex justify-between">
                  <span>Data Isolation &amp; Privacy:</span>
                  <span className="font-bold text-[#d97706]">Shared Multi-Tenant</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151a24] shadow-[12px_16px_32px_rgba(124,58,237,0.12),inset_2px_2px_5px_rgba(255,255,255,0.9)] dark:shadow-[12px_16px_32px_rgba(124,58,237,0.15)] border-2 border-[#7c3aed]/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#7c3aed] text-xs font-mono font-bold text-white shadow-sm">
                  AIRACODE Domain SLM (LoRA + 4-bit AWQ)
                </span>
                <span className="text-xs font-bold text-[#059669]">Dedicated &amp; Ultra-Fast</span>
              </div>
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#1e2530] dark:text-[#f3f4f6]">
                <li className="flex justify-between border-b border-[#ede9e0] dark:border-white/10 pb-2">
                  <span className="text-[#6b7280] dark:text-[#9ca3af]">Time-to-First-Token:</span>
                  <span className="font-bold text-[#059669]">110ms (-88% Latency)</span>
                </li>
                <li className="flex justify-between border-b border-[#ede9e0] dark:border-white/10 pb-2">
                  <span className="text-[#6b7280] dark:text-[#9ca3af]">Domain Reasoning Accuracy:</span>
                  <span className="font-bold text-[#059669]">98.6% (+22% Lift)</span>
                </li>
                <li className="flex justify-between border-b border-[#ede9e0] dark:border-white/10 pb-2">
                  <span className="text-[#6b7280] dark:text-[#9ca3af]">Hosting Cost (1M Tokens):</span>
                  <span className="font-bold text-[#059669]">$1.80 / 1M (-88% Cost)</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#6b7280] dark:text-[#9ca3af]">Data Isolation &amp; Privacy:</span>
                  <span className="font-bold text-[#059669]">Dedicated Private VPC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Modernization Protocol */}
      {activeTab === "modernization" && (
        <div className="pt-6 sm:pt-8 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6] flex items-center gap-2">
              <GitMerge className="w-5 h-5 text-[#2563eb]" />
              Legacy-to-Cloud Native Event-Driven Modernization
            </h3>
            <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#9ca3af] mt-1 font-medium">
              How AIRACODE modernizes legacy monoliths without business disruption or downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-3xl bg-[#f6f3ee] dark:bg-[#151a24] shadow-sm text-center">
              <span className="text-[10px] font-mono text-[#6b7280] dark:text-[#9ca3af] uppercase font-bold block mb-1">Stage 01</span>
              <h5 className="text-sm sm:text-base font-black text-[#1e2530] dark:text-[#f3f4f6] mb-2">Legacy Monolith</h5>
              <p className="text-xs text-[#4b5563] dark:text-[#9ca3af]">Non-invasive CDC taps capture live writes</p>
            </div>
            <div className="p-6 rounded-3xl bg-white dark:bg-[#151a24] shadow-sm border border-[#2563eb]/20 text-center">
              <span className="text-[10px] font-mono text-[#2563eb] uppercase font-bold block mb-1">Stage 02</span>
              <h5 className="text-sm sm:text-base font-black text-[#2563eb] mb-2">Kafka Event Mesh</h5>
              <p className="text-xs text-[#4b5563] dark:text-[#9ca3af]">Real-time asynchronous event streaming</p>
            </div>
            <div className="p-6 rounded-3xl bg-white dark:bg-[#151a24] shadow-sm border border-[#7c3aed]/20 text-center">
              <span className="text-[10px] font-mono text-[#7c3aed] uppercase font-bold block mb-1">Stage 03</span>
              <h5 className="text-sm sm:text-base font-black text-[#7c3aed] mb-2">Microservices &amp; AI</h5>
              <p className="text-xs text-[#4b5563] dark:text-[#9ca3af]">Containerized auto-scaling pods + RAG</p>
            </div>
            <div className="p-6 rounded-3xl bg-white dark:bg-[#151a24] shadow-sm border border-[#059669]/20 text-center">
              <span className="text-[10px] font-mono text-[#059669] uppercase font-bold block mb-1">Stage 04</span>
              <h5 className="text-sm sm:text-base font-black text-[#059669] mb-2">Edge Experience</h5>
              <p className="text-xs text-[#4b5563] dark:text-[#9ca3af]">Sub-50ms globally distributed frontend</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
