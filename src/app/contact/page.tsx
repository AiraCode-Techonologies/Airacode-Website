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
  Send,
  Copy,
  Check,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicScrollTracker from "@/components/CinematicScrollTracker";
import ClayAmbientShapes from "@/components/ClayAmbientShapes";
import SectionHeader from "@/components/SectionHeader";
import ProjectEstimator from "@/components/ProjectEstimator";

const SERVICE_LABELS: Record<string, string> = {
  "ai-website-dev": "AI Website Development",
  "ai-product-dev": "AI Product Development",
  "web-maintenance-opt": "Website Maintenance & Optimization",
  "ai-finetuning": "AI Fine-Tuning & Model Optimization",
  "cloud-deployments": "Cloud Infrastructure & Multi-Cloud",
  "data-engineering": "Data Analysis & Engineering",
  "workflow-automation": "Enterprise Workflow Automation",
  "agentic-ai": "Agentic AI & Autonomous Workflows",
};

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
  const [leadRef, setLeadRef] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleCopyRef = () => {
    if (leadRef) {
      navigator.clipboard.writeText(leadRef);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const ref = "ARC-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setLeadRef(ref);

    const serviceLabel = SERVICE_LABELS[formData.serviceNeeded] || formData.serviceNeeded;
    const companyLabel = formData.company ? formData.company.trim() : "Individual / Stealth";
    const ndaLabel = formData.ndaRequired ? "CONFIRMED // Bilateral Mutual NDA Active" : "Standard Scoping Agreement";
    const timestampStr = new Date().toUTCString();

    const teamSubject = `[AIRACODE INQUIRY] ${ref} — ${serviceLabel} (${formData.name} / ${companyLabel})`;

    const visitorAutoresponse = `============================================================
              AIRACODE TECHNOLOGIES INC.
       Autonomous Systems & Enterprise Modernization
============================================================

TRANSMISSION RECEIPT: [REF: ${ref}]
SECURITY CLEARANCE: BILATERAL MUTUAL NDA ACTIVE
STATUS: LOGGED INTO PRINCIPAL ARCHITECT SPRINT QUEUE

Hi ${formData.name},

Thank you for contacting AIRACODE Technologies. We have successfully registered your project specifications and assigned your inquiry to our Lead Systems Architect.

------------------------------------------------------------
                     ENGAGEMENT SUMMARY
------------------------------------------------------------
- Tracking Reference : ${ref}
- Service Track      : ${serviceLabel}
- Organization       : ${companyLabel}
- Allocated Bracket  : ${formData.budget}
- Mutual NDA Status  : ${ndaLabel}
- Logged Timestamp   : ${timestampStr}
- Target SLA         : Response within 4 business hours

------------------------------------------------------------
                    PROJECT SCOPE BRIEF
------------------------------------------------------------
"${formData.message}"

------------------------------------------------------------
                      DEPLOYMENT ROADMAP
------------------------------------------------------------
Phase 01 // ARCHITECTURAL AUDIT
Our team benchmarks your stack constraints, API boundaries, and vector pipeline topologies.

Phase 02 // TECHNICAL SCOPING & NDA REVIEW
We prepare a tailored Proof-of-Concept (PoC) roadmap and schedule a 30-minute discovery session with our Lead Architect.

Phase 03 // SPRINT INITIATION
Deployment pod onboarded with 2-week agile delivery cadences and direct engineering Slack/Teams integration.

------------------------------------------------------------
DIRECT ESCALATION CHANNELS:
- Lead Architecture Desk : arch@airacode.online
- Security & Compliance  : security@airacode.online
- Emergency Incident SRE : sre@airacode.online
- Web Portal             : https://airacode.online

Need to update your technical requirements before our call? 
Simply reply directly to this email.

Best regards,

Principal Systems Architect
AIRACODE Technologies
https://airacode.online
contact@airacode.online
============================================================`;

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact";
      let res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          leadId: ref,
        }),
      });

      // Seamless fallback for static hosting (e.g. GitHub Pages where /api/contact is 404/405)
      // Dispatches via background AJAX without ever launching the device's mail client
      if (res.status === 404 || res.status === 405) {
        res = await fetch("https://formsubmit.co/ajax/nagarajendra432@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: companyLabel,
            serviceNeeded: serviceLabel,
            budget: formData.budget,
            ndaRequired: formData.ndaRequired ? "Yes" : "No",
            message: formData.message,
            tracking_id: ref,
            _subject: teamSubject,
            _replyto: formData.email,
            _template: "table",
            "Tracking Reference": ref,
            "Client Name": formData.name,
            "Corporate Email": formData.email,
            "Company / Organization": companyLabel,
            "Service Track": serviceLabel,
            "Budget Allocation": formData.budget,
            "Mutual NDA Required": ndaLabel,
            "Project Scope Overview": formData.message,
            "Logged Timestamp": timestampStr,
            _autoresponse: visitorAutoresponse,
          }),
        });
      }

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || data?.error || `Submission failed with status ${res.status}`);
      }
      setSubmittedData({ ...formData });
      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "Failed to process inquiry. Please try again.");
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
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                  {/* Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#ede9e0] dark:border-white/10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                      <span>TRANSMISSION CONFIRMED // MUTUAL NDA ACTIVE</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10 text-xs font-mono font-bold text-[#1e2530] dark:text-[#f3f4f6]">
                      <span className="text-[#6b7280] dark:text-[#9ca3af]">REF:</span>
                      <span className="text-[#eb4a2d]">{leadRef || "ARC-LEAD"}</span>
                      <button
                        type="button"
                        onClick={handleCopyRef}
                        className="ml-1 p-1 hover:bg-[#ede9e0] dark:hover:bg-white/10 rounded transition-colors text-[#6b7280] hover:text-[#1e2530] dark:hover:text-white"
                        title="Copy Reference ID"
                      >
                        {copiedRef ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#059669]/15 text-[#059669] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-black text-[#1e2530] dark:text-[#f3f4f6]">
                        Inquiry Registered, {submittedData?.name || formData.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] font-medium leading-relaxed">
                        Our Lead Systems Architect will review your specifications and follow up within{" "}
                        <strong className="text-[#059669]">4 business hours</strong> under mutual NDA.
                      </p>
                    </div>
                  </div>

                  {/* Receipt Notification Banner */}
                  <div className="p-4 rounded-2xl bg-[#eb4a2d]/5 dark:bg-[#eb4a2d]/10 border border-[#eb4a2d]/20 text-xs text-[#1e2530] dark:text-[#f3f4f6] flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#eb4a2d] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold">
                        A confirmation receipt has been dispatched to{" "}
                        <span className="font-mono text-[#eb4a2d]">{submittedData?.email || formData.email}</span>.
                      </p>
                      <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                        Please check your inbox (and spam/promotions folder). You can reply directly to that email with any supplementary documentation or architecture diagrams.
                      </p>
                    </div>
                  </div>

                  {/* Summary Parameter Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#6b7280] dark:text-[#9ca3af] block font-bold">
                        Service Track
                      </span>
                      <span className="font-bold text-[#1e2530] dark:text-[#f3f4f6] line-clamp-1">
                        {SERVICE_LABELS[submittedData?.serviceNeeded || formData.serviceNeeded] || (submittedData?.serviceNeeded || formData.serviceNeeded)}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#6b7280] dark:text-[#9ca3af] block font-bold">
                        Organization
                      </span>
                      <span className="font-bold text-[#1e2530] dark:text-[#f3f4f6] line-clamp-1">
                        {submittedData?.company || formData.company || "Individual / Stealth"}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#6b7280] dark:text-[#9ca3af] block font-bold">
                        Allocated Budget
                      </span>
                      <span className="font-bold text-[#059669]">
                        {submittedData?.budget || formData.budget}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#6b7280] dark:text-[#9ca3af] block font-bold">
                        Confidentiality
                      </span>
                      <span className="font-bold text-[#7c3aed] flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> Mutual NDA Enforced
                      </span>
                    </div>
                  </div>

                  {/* Project Brief Excerpt */}
                  <div className="p-4 rounded-xl bg-[#f6f3ee] dark:bg-[#151a24] border border-transparent dark:border-white/10 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#6b7280] dark:text-[#9ca3af] font-bold block">
                      Logged Scope Overview
                    </span>
                    <p className="text-xs text-[#374151] dark:text-[#d1d5db] font-mono leading-relaxed italic bg-white/70 dark:bg-black/20 p-3 rounded-lg border border-black/5 dark:border-white/5">
                      &ldquo;{submittedData?.message || formData.message}&rdquo;
                    </p>
                  </div>

                  {/* Next Milestones Pipeline */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#eb4a2d] font-bold block">
                      Next Operational Milestones
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10 space-y-1">
                        <span className="text-[#eb4a2d] font-mono font-black text-[11px]">01 // AUDIT</span>
                        <p className="font-bold text-[#1e2530] dark:text-[#f3f4f6]">Constraint Review</p>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                          Architectural benchmarks and vector pipeline feasibility mapped in 24h.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10 space-y-1">
                        <span className="text-[#7c3aed] font-mono font-black text-[11px]">02 // BRIEF</span>
                        <p className="font-bold text-[#1e2530] dark:text-[#f3f4f6]">Technical Discovery</p>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                          30-minute scoping session scheduled with our Principal AI Architect.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#151a24] border border-[#ede9e0] dark:border-white/10 space-y-1">
                        <span className="text-[#059669] font-mono font-black text-[11px]">03 // SPRINT</span>
                        <p className="font-bold text-[#1e2530] dark:text-[#f3f4f6]">Pod Onboarding</p>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                          Autonomous pod deployed with direct Slack/Teams integration.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#ede9e0] dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          serviceNeeded: "agentic-ai",
                          budget: "$25k - $50k",
                          ndaRequired: true,
                          message: "",
                        });
                      }}
                      className="clay-btn clay-btn-white px-5 py-2.5 text-xs font-bold text-[#eb4a2d] cursor-pointer"
                    >
                      Transmit Another Inquiry
                    </button>

                    <a
                      href="mailto:contact@airacode.online"
                      className="text-xs font-mono font-bold text-[#6b7280] dark:text-[#9ca3af] hover:text-[#eb4a2d] transition-colors"
                    >
                      Need immediate escalation? contact@airacode.online →
                    </a>
                  </div>
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
