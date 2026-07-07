import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "כל השדות המסומנים הם חובה" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "כתובת דוא״ל לא תקינה" },
        { status: 400 }
      );
    }

    // ─── Integration Point ───
    // Replace this console.log with your preferred email service:
    //
    // Option 1: Resend (https://resend.com)
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from, to, subject, html });
    //
    // Option 2: Formspree (https://formspree.io)
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST', headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(body)
    //   });
    //
    // Option 3: SendGrid, Nodemailer, etc.

    console.log("─── New Contact Submission ───");
    console.log("Name:   ", name);
    console.log("Email:  ", email);
    console.log("Phone:  ", body.phone || "—");
    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("───────────────────────────────");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "שגיאה בשרת" },
      { status: 500 }
    );
  }
}
