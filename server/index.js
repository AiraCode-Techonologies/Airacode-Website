const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Configuration
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "AIRACODE <contact@airacode.online>";
const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "contact@airacode.online";
const TEAM_ALERT_EMAIL = process.env.TEAM_ALERT_EMAIL || "nagarajendra432@gmail.com";

const resend = new Resend(RESEND_API_KEY);

// CORS middleware allowing airacode.online and local development
const allowedOrigins = [
  "https://airacode.online",
  "https://www.airacode.online",
  "http://localhost:3000",
  "http://localhost:3001",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || origin.endsWith(".github.io") || origin.endsWith(".onrender.com") || origin.endsWith(".railway.app")) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive for API gateway calls
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

// Service label mapping
const SERVICE_LABELS = {
  "ai-website-dev": "AI Website Development",
  "ai-product-dev": "AI Product Development",
  "web-maintenance-opt": "Website Maintenance & Optimization",
  "ai-finetuning": "AI Fine-Tuning & Model Optimization",
  "cloud-deployments": "Cloud Infrastructure & Multi-Cloud",
  "data-engineering": "Data Analysis & Engineering",
  "workflow-automation": "Enterprise Workflow Automation",
  "agentic-ai": "Agentic AI & Autonomous Workflows",
};

// 1. Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "online",
    service: "AIRACODE Enterprise Mail Gateway",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// 2. Contact inquiry endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, serviceNeeded, budget, message, ndaRequired, botField } = req.body;

    // Honeypot anti-spam check
    if (botField) {
      return res.status(200).json({ success: true, message: "Inquiry received." });
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Please provide name, corporate email, and project overview.",
      });
    }

    const leadId = "ARC-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const timestamp = new Date().toUTCString();
    const serviceLabel = SERVICE_LABELS[serviceNeeded] || serviceNeeded || "Custom Architecture Inquiry";
    const companyLabel = company ? company.trim() : "Individual / Stealth";
    const ndaStatus = ndaRequired !== false ? "CONFIRMED // Bilateral Mutual NDA Active" : "Standard Scoping Agreement";

    // ----------------------------------------------------
    // EMAIL TEMPLATE 1: Team Alert Email
    // ----------------------------------------------------
    const teamHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0; color: #1e2530;">
        <div style="border-bottom: 2px solid #eb4a2d; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h2 style="color: #1e2530; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">AIRA<span style="color: #eb4a2d;">CODE</span></h2>
            <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">New Enterprise Project Inquiry</p>
          </div>
          <div style="text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background: #ede9e0; border-radius: 20px; font-size: 11px; font-family: monospace; font-weight: 700; color: #eb4a2d;">${leadId}</span>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 140px; font-weight: 600;">Client Name:</td>
            <td style="padding: 8px 0; color: #1e2530; font-weight: 700;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Corporate Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #eb4a2d; text-decoration: none; font-weight: 700;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Organization:</td>
            <td style="padding: 8px 0; color: #1e2530; font-weight: 600;">${companyLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Service Track:</td>
            <td style="padding: 8px 0; color: #1e2530; font-weight: 700;">${serviceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Allocated Budget:</td>
            <td style="padding: 8px 0; color: #059669; font-weight: 700;">${budget || "$25k - $50k"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Confidentiality:</td>
            <td style="padding: 8px 0; color: #7c3aed; font-weight: 700;">${ndaStatus}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Received Timestamp:</td>
            <td style="padding: 8px 0; color: #6b7280; font-family: monospace; font-size: 12px;">${timestamp}</td>
          </tr>
        </table>

        <div style="background: #ffffff; padding: 18px; border-radius: 12px; border: 1px solid #ede9e0; margin-bottom: 24px;">
          <h4 style="margin: 0 0 10px 0; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700;">Project Scope Overview:</h4>
          <p style="margin: 0; color: #1e2530; font-size: 13px; line-height: 1.6; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${message}</p>
        </div>

        <div style="text-align: center; margin-bottom: 20px;">
          <a href="mailto:${email}?subject=Re: [AIRACODE] ${serviceLabel} - Technical Discovery [${leadId}]" style="display: inline-block; padding: 12px 24px; background: #eb4a2d; color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 700; font-size: 13px;">
            Reply to ${name} &rarr;
          </a>
        </div>

        <div style="font-size: 11px; color: #9ca3af; text-align: center; border-top: 1px solid #ede9e0; padding-top: 16px;">
          AIRACODE Technologies Inc. &bull; Enterprise Autonomous Systems &bull; <a href="https://airacode.online" style="color: #6b7280; text-decoration: none;">airacode.online</a>
        </div>
      </div>
    `;

    // ----------------------------------------------------
    // EMAIL TEMPLATE 2: Visitor Confirmation Email
    // ----------------------------------------------------
    const visitorHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0; color: #1e2530;">
        <div style="border-bottom: 2px solid #eb4a2d; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h2 style="color: #1e2530; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">AIRA<span style="color: #eb4a2d;">CODE</span></h2>
            <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">Autonomous Systems &amp; AI Engineering Studio</p>
          </div>
          <div style="text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background: #ede9e0; border-radius: 20px; font-size: 11px; font-family: monospace; font-weight: 700; color: #eb4a2d;">${leadId}</span>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <div style="display: inline-block; padding: 4px 12px; background: #05966915; border: 1px solid #05966930; border-radius: 20px; color: #059669; font-size: 11px; font-family: monospace; font-weight: 700; margin-bottom: 12px;">
            &bull; TRANSMISSION CONFIRMED // MUTUAL NDA ACTIVE
          </div>
          <h3 style="font-size: 20px; margin: 0 0 8px 0; color: #1e2530; font-weight: 800;">Inquiry Registered, ${name}</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #4b5563; margin: 0;">
            Thank you for contacting AIRACODE Technologies. We have successfully registered your project specifications and assigned your inquiry to our Lead Systems Architect. We will review your parameters and follow up within <strong style="color: #059669;">4 business hours</strong> under mutual NDA.
          </p>
        </div>

        <div style="background: #ffffff; border: 1px solid #ede9e0; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 700;">Engagement Parameters Summary:</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr>
              <td style="padding: 6px 0; color: #6b7280; width: 140px; font-weight: 600;">Tracking Reference:</td>
              <td style="padding: 6px 0; color: #eb4a2d; font-family: monospace; font-weight: 700;">${leadId}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Service Track:</td>
              <td style="padding: 6px 0; color: #1e2530; font-weight: 700;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Organization:</td>
              <td style="padding: 6px 0; color: #1e2530; font-weight: 600;">${companyLabel}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Allocated Bracket:</td>
              <td style="padding: 6px 0; color: #059669; font-weight: 700;">${budget || "$25k - $50k"}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280; font-weight: 600;">Confidentiality:</td>
              <td style="padding: 6px 0; color: #7c3aed; font-weight: 700;">${ndaStatus}</td>
            </tr>
          </table>

          <div style="margin-top: 14px; padding-top: 14px; border-top: 1px dashed #ede9e0;">
            <span style="display: block; font-size: 11px; text-transform: uppercase; color: #6b7280; font-weight: 700; margin-bottom: 6px;">Logged Project Scope:</span>
            <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.6; white-space: pre-wrap; font-style: italic; background: #faf8f5; padding: 12px; border-radius: 8px; border: 1px solid #ede9e0;">&ldquo;${message}&rdquo;</p>
          </div>
        </div>

        <div style="background: #f6f3ee; border-radius: 12px; padding: 16px 18px; margin-bottom: 24px; font-size: 13px; color: #4b5563; line-height: 1.6;">
          <strong style="color: #1e2530; display: block; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Next Operational Milestones:</strong>
          <div style="margin-bottom: 8px;"><strong>01 // ARCHITECTURAL AUDIT:</strong> We map technical constraints, API boundaries, and vector pipeline topologies within 24 hours.</div>
          <div style="margin-bottom: 8px;"><strong>02 // TECHNICAL DISCOVERY:</strong> 30-minute scoping session with our Lead Architect to present solution architecture and PoC deliverables.</div>
          <div><strong>03 // SPRINT INITIATION:</strong> Pod onboarded with 2-week delivery cadences and direct engineering Slack/Teams integration.</div>
        </div>

        <div style="border-top: 1px solid #ede9e0; padding-top: 18px; font-size: 12px; color: #6b7280; line-height: 1.5;">
          <p style="margin: 0 0 6px 0;">Need to provide supplemental diagrams or requirements? Simply reply directly to this email or write to <a href="mailto:contact@airacode.online" style="color: #eb4a2d; text-decoration: none; font-weight: 700;">contact@airacode.online</a></p>
          <div style="margin-top: 10px; font-size: 11px; color: #9ca3af; text-align: center; font-family: monospace;">
            AIRACODE Technologies Inc. &bull; <a href="https://airacode.online" style="color: #6b7280; text-decoration: none;">airacode.online</a> &bull; Direct Escalation: arch@airacode.online
          </div>
        </div>
      </div>
    `;

    // 1. Dispatch team lead notification
    const teamRecipients = [TEAM_ALERT_EMAIL];
    if (CONTACT_RECIPIENT_EMAIL && !teamRecipients.includes(CONTACT_RECIPIENT_EMAIL)) {
      teamRecipients.push(CONTACT_RECIPIENT_EMAIL);
    }

    const teamEmailResult = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: teamRecipients,
      replyTo: email,
      subject: `[AIRACODE INQUIRY] ${leadId} — ${serviceLabel} (${name} / ${companyLabel})`,
      html: teamHtml,
    });

    if (teamEmailResult.error) {
      console.error("Team email delivery error:", teamEmailResult.error);
    } else {
      console.log(`Team notification sent [${leadId}]:`, teamEmailResult.data?.id);
    }

    // 2. Dispatch automated confirmation receipt to the visitor's email
    const visitorEmailResult = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: email,
      replyTo: "contact@airacode.online",
      subject: `Inquiry Confirmation // AIRACODE Technologies [Ref: ${leadId}]`,
      html: visitorHtml,
    });

    if (visitorEmailResult.error) {
      console.error("Visitor confirmation delivery error:", visitorEmailResult.error);
    } else {
      console.log(`Visitor confirmation sent to ${email} [${leadId}]:`, visitorEmailResult.data?.id);
    }

    return res.status(200).json({
      success: true,
      leadId,
      message: "Inquiry processed successfully. Confirmation email sent.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to process inquiry.",
    });
  }
});

// 3. Newsletter subscription endpoint
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(400).json({ success: false, error: "Valid email required." });
    }

    const subId = "SUB-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const timestamp = new Date().toUTCString();

    const newsletterWelcomeHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0; color: #1e2530;">
        <div style="border-bottom: 2px solid #eb4a2d; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h2 style="color: #1e2530; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">AIRA<span style="color: #eb4a2d;">CODE</span></h2>
            <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">AI Architecture &amp; Systems Dispatches</p>
          </div>
          <div style="text-align: right;">
            <span style="display: inline-block; padding: 4px 10px; background: #ede9e0; border-radius: 20px; font-size: 11px; font-family: monospace; font-weight: 700; color: #059669;">CONFIRMED</span>
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <h3 style="font-size: 20px; margin: 0 0 8px 0; color: #1e2530; font-weight: 800;">Welcome to Architecture Dispatches</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #4b5563; margin: 0;">
            You have been successfully added to our private distribution list. You will receive our bi-weekly engineering briefings covering autonomous systems and modern cloud architectures.
          </p>
        </div>

        <div style="background: #ffffff; border: 1px solid #ede9e0; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280; font-weight: 700;">Curated Briefing Topics:</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #374151; line-height: 1.8;">
            <li><strong>Autonomous Agentic AI:</strong> Multi-agent orchestration, LangGraph, AutoGen patterns</li>
            <li><strong>Zero-Downtime Modernization:</strong> CDC data streaming, shadow traffic, active-active canaries</li>
            <li><strong>Enterprise VPC Hardening:</strong> SOC 2 Type II, HIPAA isolation, Private VPC deployments</li>
            <li><strong>Production SRE Benchmarks:</strong> Latency optimization, error budgets, and SLA guarantees</li>
          </ul>
        </div>

        <div style="border-top: 1px solid #ede9e0; padding-top: 18px; font-size: 12px; color: #6b7280; text-align: center;">
          <p style="margin: 0 0 4px 0;">Have a project requiring architectural scoping? Visit <a href="https://airacode.online" style="color: #eb4a2d; text-decoration: none; font-weight: 700;">airacode.online</a></p>
          <p style="margin: 0; font-size: 11px; color: #9ca3af; font-family: monospace;">AIRACODE Technologies Inc. &bull; contact@airacode.online</p>
        </div>
      </div>
    `;

    // 1. Notify team
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [TEAM_ALERT_EMAIL],
      subject: `[AIRACODE DISPATCH] New Subscriber: ${email} [${subId}]`,
      html: `<p>New subscriber registered on airacode.online: <strong>${email}</strong> at ${timestamp}</p>`,
    });

    // 2. Send welcome email to subscriber
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: email,
      subject: `Welcome to AIRACODE Architecture Dispatches [Ref: ${subId}]`,
      html: newsletterWelcomeHtml,
    });

    return res.status(200).json({ success: true, subId });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return res.status(500).json({ success: false, error: "Failed to process subscription." });
  }
});

app.listen(PORT, () => {
  console.log(`[AIRACODE Mail Service] Running on port ${PORT}`);
});
