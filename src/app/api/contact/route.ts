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

      const userConfirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0; color: #1e2530;">
          <div style="border-bottom: 2px solid #eb4a2d; padding-bottom: 14px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <h2 style="color: #1e2530; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">AIRA<span style="color: #eb4a2d;">CODE</span></h2>
              <p style="color: #6b7280; margin: 3px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-family: monospace;">Autonomous Systems &amp; AI Engineering Studio</p>
            </div>
            <div style="text-align: right;">
              <span style="display: inline-block; padding: 4px 10px; background: #ede9e0; border-radius: 20px; font-size: 11px; font-family: monospace; font-weight: 700; color: #eb4a2d;">${leadId}</span>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 18px; margin: 0 0 8px 0; color: #1e2530;">Inquiry Confirmed, ${name}</h3>
            <p style="font-size: 14px; line-height: 1.6; color: #4b5563; margin: 0;">
              Thank you for reaching out to AIRACODE. We have received your project inquiry and parameters. Our Lead Systems Architect will review your specifications and follow up within <strong>4 business hours</strong> under mutual NDA.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #ede9e0; border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #6b7280;">Your Submission Summary:</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr>
                <td style="padding: 6px 0; color: #6b7280; width: 130px; font-weight: 600;">Service Track:</td>
                <td style="padding: 6px 0; color: #1e2530; font-weight: 600;">${serviceNeeded || "General Scoping"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280; width: 130px; font-weight: 600;">Organization:</td>
                <td style="padding: 6px 0; color: #1e2530;">${company || "Individual / Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280; width: 130px; font-weight: 600;">Budget Allocation:</td>
                <td style="padding: 6px 0; color: #059669; font-weight: 600;">${budget || "Undisclosed"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280; width: 130px; font-weight: 600;">Received At:</td>
                <td style="padding: 6px 0; color: #1e2530; font-family: monospace; font-size: 12px;">${timestamp}</td>
              </tr>
            </table>

            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed #ede9e0;">
              <span style="display: block; font-size: 11px; text-transform: uppercase; color: #6b7280; font-weight: 600; margin-bottom: 4px;">Project Scope:</span>
              <p style="margin: 0; font-size: 13px; color: #374151; line-height: 1.5; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background: #f6f3ee; border-radius: 12px; padding: 14px 16px; margin-bottom: 24px; font-size: 13px; color: #4b5563; line-height: 1.5;">
            <strong style="color: #1e2530; display: block; margin-bottom: 4px;">What happens next?</strong>
            1. <strong>Architectural Review:</strong> We analyze your technology stack and target sprint milestones.<br/>
            2. <strong>Mutual NDA:</strong> If required, we execute standard bilateral NDA protection.<br/>
            3. <strong>Sprint Roadmap:</strong> We schedule a 30-minute scoping session to present solution architecture and sprint deliverables.
          </div>

          <div style="border-top: 1px solid #ede9e0; padding-top: 16px; text-align: center; font-size: 12px; color: #9ca3af;">
            <p style="margin: 0 0 4px 0;">Need immediate priority assistance? Reply directly to this email or write to <a href="mailto:contact@airacode.online" style="color: #eb4a2d; text-decoration: none; font-weight: 600;">contact@airacode.online</a></p>
            <p style="margin: 0; font-family: monospace; font-size: 11px;">AIRACODE Technologies // <a href="https://airacode.online" style="color: #6b7280; text-decoration: none;">airacode.online</a></p>
          </div>
        </div>
      `;

      // 1. Dispatch team lead notification
      try {
        const teamRes = await resend.emails.send({
          from: fromEmail,
          to: recipient,
          replyTo: email,
          subject: `[New Lead] ${name} — ${company || serviceNeeded || "Inquiry"}`,
          html: notificationHtml,
        });

        if (teamRes.error) {
          console.warn("Primary team sender error, attempting fallback:", teamRes.error);
          await resend.emails.send({
            from: fallbackFrom,
            to: recipient,
            replyTo: email,
            subject: `[New Lead] ${name} — ${company || serviceNeeded || "Inquiry"}`,
            html: notificationHtml,
          });
        }
      } catch (sendErr) {
        console.error("Team notification delivery exception:", sendErr);
      }

      // 2. Dispatch automated confirmation receipt to the user's email
      try {
        const userRes = await resend.emails.send({
          from: fromEmail,
          to: email,
          replyTo: "contact@airacode.online",
          subject: `Inquiry Confirmation // AIRACODE Technologies [Ref: ${leadId}]`,
          html: userConfirmationHtml,
        });

        if (userRes.error) {
          console.warn("Primary user confirmation error, attempting fallback:", userRes.error);
          await resend.emails.send({
            from: fallbackFrom,
            to: email,
            replyTo: "contact@airacode.online",
            subject: `Inquiry Confirmation // AIRACODE Technologies [Ref: ${leadId}]`,
            html: userConfirmationHtml,
          });
        }
      } catch (userSendErr) {
        console.error("User confirmation delivery exception:", userSendErr);
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
