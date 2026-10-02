import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, serviceNeeded, budget, message, botField } = body;

    if (botField) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide your name, valid email, and project overview." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Our Lead Architect will review your parameters and respond within 4 business hours under mutual NDA.",
        leadId: "lead_" + Date.now().toString(36),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
