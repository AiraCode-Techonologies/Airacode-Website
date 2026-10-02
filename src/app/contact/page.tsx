"use client";

import { useState } from "react";
import { 
  Bot, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Lock, 
  ChevronDown, 
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import ProjectEstimator from "@/components/ProjectEstimator";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceNeeded: "agentic-ai",
    budget: "$25k - $50k",
    ndaRequired: true,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || data?.error || `Server responded with ${res.status}`);
      }
      setSubmitted(true);
    } catch (err: any) {
      console.warn("Contact endpoint unavailable or static host detected, using direct client dispatch fallback:", err);
      // Fallback for static hosts (e.g. GitHub Pages without serverless functions)
      const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceNeeded} - ${formData.company || formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nService Needed: ${formData.serviceNeeded}\nBudget: ${formData.budget}\nNDA Required: ${formData.ndaRequired ? "Yes" : "No"}\n\nProject Brief:\n${formData.message}`
      );
      window.location.href = `mailto:contact@airacode.online?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How do you ensure zero downtime during modernization?",
      a: "We implement non-invasive CDC streaming to replicate live data into our target mesh without locking tables. An active-active canary cutover then shifts traffic with zero downtime.",
    },
    {
      q: "Will our data or code train external AI models?",
      a: "Never. All fine-tuned models and vectors run strictly within your dedicated Private VPC on AWS, GCP, or Azure with strict SOC 2 Type II and HIPAA isolation.",
    },
    {
      q: "What is the typical timeframe to ship the first milestone?",
      a: "Our pods work in 2-week sprints. Following an initial 3-day architectural audit, we ship a functioning PoC or production canary in 14 to 21 business days.",
    },
    {
      q: "Do you offer 24/7 technical support and SRE coverage?",
      a: "Yes. Our follow-the-sun global delivery hubs provide continuous monitoring, synthetic uptime pings, and a contractual sub-15-minute emergency SLA.",
    },
    {
      q: "Who owns the intellectual property (IP) and custom code?",
      a: "You retain 100% full intellectual property ownership. Repositories, weights, and documentation are transferred directly into your enterprise git repos.",
    },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: HERO ================= */}
        <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-5">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1e2530] dark:text-[#f3f4f6] tracking-tight leading-[1.05]">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Us
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4b5563] dark:text-[#9ca3af] max-w-2xl mx-auto font-medium">
              Direct connection with our Principal AI Systems Architects.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#151a24] border border-transparent dark:border-white/10 shadow-sm text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
              <span>2 Dedicated Sprints Open for Immediate Onboarding</span>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: SCOPE ESTIMATOR ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-8">
            <SectionHeader
              title="Scope"
              highlightedWord="Estimator"
              subtitle="Calculate pod requirements before scheduling your technical discovery session."
            />
            <ProjectEstimator />
          </div>
        </section>

        {/* ================= SECTION 03: RFP FORM ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <SectionHeader
              title="Direct"
              highlightedWord="Inquiry"
              subtitle="We respond within 4 business hours under mutual NDA."
            />

            <div className="clay-card p-6 sm:p-10">
              {submitted ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#10b981]/15 text-[#059669] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-black text-[#1e2530] dark:text-[#f3f4f6]">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] max-w-md mx-auto leading-relaxed font-medium">
                    Our Lead Architect will review your parameters and respond within 4 hours under mutual NDA.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="clay-btn clay-btn-white px-5 py-2 text-xs font-bold text-[#eb4a2d]"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3 rounded-xl bg-[#eb4a2d]/10 border border-[#eb4a2d]/20 text-[#eb4a2d] text-xs font-bold">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 focus:border-[#eb4a2d] focus:bg-white dark:focus:bg-[#1a2130] text-xs sm:text-sm outline-none transition-all font-medium text-[#1e2530] dark:text-[#f3f4f6]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">Corporate Email</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 focus:border-[#eb4a2d] focus:bg-white dark:focus:bg-[#1a2130] text-xs sm:text-sm outline-none transition-all font-medium text-[#1e2530] dark:text-[#f3f4f6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">Company</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Global Inc"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 focus:border-[#eb4a2d] focus:bg-white dark:focus:bg-[#1a2130] text-xs sm:text-sm outline-none transition-all font-medium text-[#1e2530] dark:text-[#f3f4f6]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">Primary Service</label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 focus:border-[#eb4a2d] focus:bg-white dark:focus:bg-[#1a2130] text-xs sm:text-sm outline-none transition-all font-medium text-[#1e2530] dark:text-[#f3f4f6]"
                      >
                        <option value="ai-website-dev">AI Website Development</option>
                        <option value="ai-product-dev">AI Product Development</option>
                        <option value="web-maintenance-opt">Website Maintenance &amp; Optimization</option>
                        <option value="ai-finetuning">AI Fine-Tuning &amp; Model Optimization</option>
                        <option value="cloud-deployments">Cloud Infrastructure &amp; Multi-Cloud</option>
                        <option value="data-engineering">Data Analysis &amp; Engineering</option>
                        <option value="workflow-automation">Enterprise Workflow Automation</option>
                        <option value="agentic-ai">Agentic AI &amp; Autonomous Workflows</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">Project Overview</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your architecture bottlenecks or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 focus:border-[#eb4a2d] focus:bg-white dark:focus:bg-[#1a2130] text-xs sm:text-sm outline-none transition-all font-medium text-[#1e2530] dark:text-[#f3f4f6]"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-xs text-[#6b7280] dark:text-[#9ca3af]">
                    <Lock className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Protected under strict enterprise mutual NDA.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full clay-btn clay-btn-coral py-3 text-sm font-black tracking-wide cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Send Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: DIRECT CHANNELS ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-10">
            <SectionHeader
              title="Direct"
              highlightedWord="Channels"
              subtitle="Direct lines to our engineering leads and incident desk."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 font-mono text-xs">
              <div className="clay-card p-5 space-y-2">
                <span className="text-[#eb4a2d] font-black text-sm block">Architecture</span>
                <p className="text-[#1e2530] dark:text-[#f3f4f6] font-sans font-medium">New System Scoping &amp; Audits</p>
                <a href="mailto:arch@airacode.online" className="text-[#eb4a2d] font-bold hover:underline block">
                  arch@airacode.online
                </a>
              </div>

              <div className="clay-card p-5 space-y-2">
                <span className="text-[#7c3aed] font-black text-sm block">Engineering</span>
                <p className="text-[#1e2530] dark:text-[#f3f4f6] font-sans font-medium">Sprint &amp; SOW Inquiries</p>
                <a href="mailto:dev@airacode.online" className="text-[#7c3aed] font-bold hover:underline block">
                  dev@airacode.online
                </a>
              </div>

              <div className="clay-card p-5 space-y-2">
                <span className="text-[#059669] font-black text-sm block">Security</span>
                <p className="text-[#1e2530] dark:text-[#f3f4f6] font-sans font-medium">VPC Isolation &amp; Mutual NDA</p>
                <a href="mailto:security@airacode.online" className="text-[#059669] font-bold hover:underline block">
                  security@airacode.online
                </a>
              </div>

              <div className="clay-card p-5 space-y-2">
                <span className="text-[#2563eb] font-black text-sm block">Incident Desk</span>
                <p className="text-[#1e2530] dark:text-[#f3f4f6] font-sans font-medium">24/7 Production SRE Escalation</p>
                <a href="mailto:sre@airacode.online" className="text-[#2563eb] font-bold hover:underline block">
                  sre@airacode.online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: FAQ ================= */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] dark:border-white/10 w-full">
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <SectionHeader
              title="Quick"
              highlightedWord="Answers"
              subtitle="Key operational details regarding contracts, privacy, and SLAs."
            />

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="clay-card overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-[#f6f3ee]/50 dark:hover:bg-white/5 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-black text-[#1e2530] dark:text-[#f3f4f6]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#eb4a2d] shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed border-t border-[#ede9e0] dark:border-white/10 font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
