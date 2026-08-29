import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioConfig } from "@/config/portfolio.config";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const message = formData.get("message");
    const name = formData.get("name");
    const senderEmail = formData.get("SenderEmail");

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured. Add RESEND_API_KEY to your .env file." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: portfolioConfig.email,
      subject: `${name || "Someone"} From Contact Form.`,
      reply_to: typeof senderEmail === "string" ? senderEmail : undefined,
      text: `sender email: ${senderEmail || "unknown"}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
