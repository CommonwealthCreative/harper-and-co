import { NextResponse } from "next/server";
import { isValidEmail, escapeHtml } from "@/lib/sanitize";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitized = {
      name: escapeHtml(String(name)),
      email: escapeHtml(String(email)),
      phone: body.phone ? escapeHtml(String(body.phone)) : "",
      date: body.date ? escapeHtml(String(body.date)) : "",
      guests: body.guests ? escapeHtml(String(body.guests)) : "",
      referral: body.referral ? escapeHtml(String(body.referral)) : "",
      message: escapeHtml(String(message)),
    };

    // Log in development — replace with email service (Resend, SendGrid)
    // or webhook (Slack, Zapier) for production
    console.log("New consultation request:", sanitized);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
