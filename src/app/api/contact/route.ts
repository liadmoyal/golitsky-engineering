import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  _honey?: string;
}

export async function POST(request: Request) {
  try {
    // 1. Basic Security: Check Origin
    // In production, we should only allow requests from our domain
    const origin = request.headers.get("origin") || "";
    const isProduction = process.env.NODE_ENV === "production";
    
    const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL || "";
    
    if (isProduction && allowedOrigin && !origin.includes(allowedOrigin)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized origin" },
        { status: 403 }
      );
    }

    const body: ContactPayload = await request.json();
    const { name, email, phone, subject, message, _honey } = body;

    // 2. Security: Honeypot Check
    // If a bot fills out the hidden `_honey` field, we reject it but return a 200 OK 
    // to fool the bot into thinking it succeeded.
    if (_honey) {
      console.warn("Spam blocked by honeypot:", body);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. Validation
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

    // Determine Subject string from select value
    const subjectMap: Record<string, string> = {
      "project-management": "ניהול פרויקט ופיקוח",
      "bridge-surveys": "סקירות גשרים",
      "quality-control": "בקרת איכות",
      "quality-assurance": "הבטחת איכות",
      "other": "אחר",
    };
    const readableSubject = subjectMap[subject] || subject || "כללי";

    // Format the specific subject line for Gmail Tagging
    // Example: [Website Lead] New message from Israel Israeli - סקירות גשרים
    const emailSubject = `[Website Lead] New message from ${name} - ${readableSubject}`;

    // Send the email via Resend
    // Important: The `from` address must be a verified domain in Resend (e.g., info@yourdomain.com)
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "liad@golitsky.co.il",
      subject: emailSubject,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #0A2342; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">פנייה חדשה מאתר האינטרנט</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>שם מלא:</strong> ${name}</p>
            <p><strong>דוא״ל:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>טלפון:</strong> ${phone || "לא סופק"}</p>
            <p><strong>נושא:</strong> ${readableSubject}</p>
          </div>
          
          <div style="margin-top: 20px; background-color: #f8fafc; padding: 15px; border-radius: 8px; border-right: 4px solid #F59E0B;">
            <p style="margin: 0; font-weight: bold;">הודעה:</p>
            <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
            הודעה זו נשלחה אוטומטית מטופס יצירת הקשר באתר גוליצקי הנדסה.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { success: false, error: "שגיאה בשליחת ההודעה" }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "שגיאה בשרת" },
      { status: 500 }
    );
  }
}
