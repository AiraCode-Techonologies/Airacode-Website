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
import { servicesData } from "@/data/servicesData";

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
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How does AIRACODE ensure zero downtime during legacy system modernization?",
      a: "We implement non-invasive Change Data Capture (CDC) streaming to replicate live data writes into our target event mesh without locking legacy tables. Once the microservices and edge frontends pass automated regression tests, an active-active canary cutover shifts traffic with 0 seconds of transactional downtime.",
    },
    {
      q: "Will our proprietary business data or code be used to train external AI models?",
      a: "Never. All fine-tuned models, vector databases, and autonomous agents are deployed strictly within your dedicated, isolated Private VPC on AWS, GCP, or Azure. We sign rigorous enterprise NDAs and adhere strictly to SOC 2 Type II and HIPAA data isolation guidelines.",
    },
    {
      q: "What is the typical timeframe to deploy the first production milestone?",
      a: "Our dedicated engineering pods operate in rapid 2-week agile sprints. Following an initial 3-day architectural audit, we typically ship a functioning Proof-of-Concept or production canary within 14 to 21 business days.",
    },
    {
      q: "Do you offer 24/7 technical support and Site Reliability Engineering (SRE)?",
      a: "Yes. Our follow-the-sun global delivery hubs (SF, London, Singapore, Bengaluru) provide 24/7/365 proactive monitoring, synthetic uptime pings, automated canary rollbacks, and a contractual sub-15-minute SRE emergency response SLA.",
    },
    {
      q: "Who owns the intellectual property (IP) and custom code created by AIRACODE?",
      a: "You retain 100% full intellectual property ownership. All repositories, architectural documentation, model weights, and custom scripts are transferred directly into your enterprise code repositories upon completion.",
    },
  ];

  return (
    <>
      <CinematicScrollTracker />
      <ClayAmbientShapes />
      <Navbar />

      <main className="relative z-10 flex-1 w-full">
        {/* ================= SECTION 01: CONTACT HERO ================= */}
        <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden w-full">
          <div className="w-full max-w-[1800px] mx-auto text-center space-y-6 sm:space-y-8">
            <div className="status-badge text-[#eb4a2d] mx-auto">
              <span className="w-2 h-2 rounded-full bg-[#eb4a2d] animate-ping" />
              <span>01 // DIRECT ENGAGEMENT DESK</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1e2530] tracking-tight leading-tight max-w-6xl mx-auto">
              Initiate Your Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb4a2d] via-[#8b5cf6] to-[#3b82f6]">
                Modernization Sprint.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-[#4b5563] max-w-5xl mx-auto leading-relaxed font-medium">
              We transform your vision into reality by digitalizing your business, modernizing legacy systems, and scaling your digital products with state-of-the-art technology solutions.
            </p>

            {/* Tactile Pod Status */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-sm text-xs sm:text-sm font-mono font-bold text-[#1e2530]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]"></span>
              </span>
              <span>Pod Availability: 2 Dedicated Sprints Open for Immediate Onboarding</span>
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: INTERACTIVE SCOPE ESTIMATOR ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-8">
            <SectionHeader
              badge="02 // DYNAMIC SCOPING"
              title="Estimate Your"
              highlightedWord="Project Scope"
              subtitle="Calculate engineering pod requirements before scheduling your technical discovery session."
            />
            <ProjectEstimator />
          </div>
        </section>

        {/* ================= SECTION 03: ENTERPRISE RFP FORM ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-6xl mx-auto space-y-8">
            <SectionHeader
              badge="03 // CONFIDENTIAL RFP"
              title="Submit Technical"
              highlightedWord="Inquiry"
              subtitle="Directly connected to our Principal AI Systems Architect. We respond within 4 business hours under mutual NDA."
            />

            <div className="clay-card p-8 sm:p-14 lg:p-16">
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-[#10b981]/15 text-[#059669] mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1e2530]">Technical Inquiry Dispatched</h3>
                  <p className="text-sm sm:text-base text-[#4b5563] max-w-md mx-auto leading-relaxed font-medium">
                    Thank you. Your project parameters have been routed to our Lead Architect. We will provide an initial architecture review and schedule your technical discovery call within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="clay-btn clay-btn-white px-6 py-2.5 text-xs font-bold text-[#eb4a2d]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#ede9e0]/60 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] text-[#1e2530] placeholder-[#9ca3af] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#ede9e0]/60 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] text-[#1e2530] placeholder-[#9ca3af] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Global Technologies Inc."
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#ede9e0]/60 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] text-[#1e2530] placeholder-[#9ca3af] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#ede9e0]/60 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] text-[#1e2530] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-[#6b7280] block font-bold">
                      Architectural Overview &amp; Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current legacy architecture, technical bottlenecks, scale requirements, or specific autonomous AI vision..."
                      className="w-full px-5 py-3.5 rounded-2xl bg-[#ede9e0]/60 shadow-[inset_2px_2px_4px_rgba(30,37,48,0.06)] text-[#1e2530] placeholder-[#9ca3af] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#eb4a2d]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-medium text-[#4b5563]">
                      <input
                        type="checkbox"
                        checked={formData.ndaRequired}
                        onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                        className="rounded accent-[#eb4a2d] w-4 h-4"
                      />
                      <span>Execute Mutual NDA Prior to Technical Review</span>
                    </label>

                    <span className="text-xs sm:text-sm font-mono text-[#059669] font-bold flex items-center gap-1.5">
                      <Lock className="w-4 h-4" /> 256-bit Encrypted Enclave
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full clay-btn clay-btn-coral py-4 text-base font-black tracking-wide"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enterprise Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 04: GLOBAL HUBS ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-[1800px] mx-auto space-y-12">
            <SectionHeader
              badge="04 // GLOBAL PRESENCE"
              title="Global Engineering"
              highlightedWord="Hubs"
              subtitle="Direct contacts and follow-the-sun operations centers across four continents."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 font-mono text-xs sm:text-sm">
              <div className="clay-card p-7 space-y-3">
                <span className="text-[#eb4a2d] font-black text-base block">San Francisco // HQ</span>
                <p className="text-[#1e2530] font-sans font-medium">555 Mission St, Suite 2400</p>
                <p className="text-[#6b7280]">San Francisco, CA 94105</p>
                <p className="text-[#eb4a2d] font-bold pt-2">sf@airacode.com</p>
              </div>

              <div className="clay-card p-7 space-y-3">
                <span className="text-[#eb4a2d] font-black text-base block">London // EMEA</span>
                <p className="text-[#1e2530] font-sans font-medium">100 Bishopsgate, Level 18</p>
                <p className="text-[#6b7280]">London, EC2N 4AG, UK</p>
                <p className="text-[#eb4a2d] font-bold pt-2">london@airacode.com</p>
              </div>

              <div className="clay-card p-7 space-y-3">
                <span className="text-[#eb4a2d] font-black text-base block">Singapore // APAC</span>
                <p className="text-[#1e2530] font-sans font-medium">1 Marina Boulevard, #28-00</p>
                <p className="text-[#6b7280]">Singapore 018989</p>
                <p className="text-[#eb4a2d] font-bold pt-2">apac@airacode.com</p>
              </div>

              <div className="clay-card p-7 space-y-3">
                <span className="text-[#eb4a2d] font-black text-base block">Bengaluru // NOC</span>
                <p className="text-[#1e2530] font-sans font-medium">Outer Ring Road, Tech Park</p>
                <p className="text-[#6b7280]">Bengaluru, KA 560103, India</p>
                <p className="text-[#eb4a2d] font-bold pt-2">ops@airacode.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 05: ENTERPRISE FAQ ACCORDION ================= */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-[#ede9e0] w-full">
          <div className="w-full max-w-6xl mx-auto space-y-12">
            <SectionHeader
              badge="05 // CLARITY &amp; PROTOCOL"
              title="Frequently Asked"
              highlightedWord="Questions"
              subtitle="Key operational details regarding contracts, privacy, architecture, and deployment schedules."
            />

            <div className="space-y-4">
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
                      className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-[#f6f3ee]/50 transition-colors cursor-pointer"
                    >
                      <span className="text-base sm:text-xl font-black text-[#1e2530]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#eb4a2d] shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-6 sm:p-7 pt-0 text-sm sm:text-base text-[#4b5563] leading-relaxed border-t border-[#ede9e0] font-medium">
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
