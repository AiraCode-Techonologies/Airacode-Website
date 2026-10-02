import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, serviceNeeded, budget, message, botField } = body;

    // Honeypot anti-spam check
    if (botField) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide your name, valid email, and project overview." },
        { status: 400 }
      );
    }

    const leadId = "lead_" + Date.now().toString(36);
    const timestamp = new Date().toUTCString();

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "contact@airacode.online";
      const fromEmail = process.env.CONTACT_FROM_EMAIL || "AIRACODE <contact@airacode.online>";
      const fallbackFrom = process.env.CONTACT_FALLBACK_FROM_EMAIL || "AIRACODE <onboarding@resend.dev>";

      const notificationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0;">
          <div style="border-bottom: 2px solid #eb4a2d; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #1e2530; margin: 0; font-size: 22px;">New Project Inquiry // AIRACODE</h2>
            <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 13px; font-family: monospace;">ID: ${leadId} | ${timestamp}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; font-weight: bold;">Lead Name:</td>
              <td style="padding: 8px 0; color: #1e2530; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #eb4a2d; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #1e2530;">${company || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service Needed:</td>
              <td style="padding: 8px 0; color: #1e2530; font-weight: 600;">${serviceNeeded || "General Scoping"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Budget Range:</td>
              <td style="padding: 8px 0; color: #059669; font-weight: 600;">${budget || "Undisclosed"}</td>
            </tr>
          </table>

          <div style="background: #ffffff; padding: 16px; border-radius: 12px; border: 1px solid #ede9e0; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; color: #1e2530; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Project Brief:</h4>
            <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #ede9e0; padding-top: 16px;">
            AIRACODE Technologies // Autonomous Scale &amp; Modern Systems
          </div>
        </div>
      `;

      try {
        const res = await resend.emails.send({
          from: fromEmail,
          to: recipient,
          replyTo: email,
          subject: `[New Lead] ${name} — ${company || serviceNeeded || "Inquiry"}`,
          html: notificationHtml,
        });

        if (res.error) {
          console.warn("Primary sender error, falling back to onboarding@resend.dev:", res.error);
          await resend.emails.send({
            from: fallbackFrom,
            to: recipient,
            replyTo: email,
            subject: `[New Lead] ${name} — ${company || serviceNeeded || "Inquiry"}`,
            html: notificationHtml,
          });
        }
      } catch (sendErr) {
        console.error("Resend delivery exception:", sendErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our Lead Architect will review your parameters and respond within 4 business hours under mutual NDA.",
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
