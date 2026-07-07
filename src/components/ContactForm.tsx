"use client";

import { useState, type FormEvent } from "react";
import { useIntersection } from "@/hooks/useIntersection";
import { CONTACT_INFO } from "@/lib/constants";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { ref, isVisible } = useIntersection();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-border to-transparent" />

      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm mb-3 tracking-wide">
            צרו קשר
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4">
            נשמח לעמוד לשירותכם
          </h2>
          <p className="mx-auto max-w-xl text-slate text-lg">
            השאירו את פרטיכם ומהות הפנייה ונחזור אליכם בהקדם
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-white p-6 flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">כתובת</h3>
                <p className="text-slate text-sm">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">טלפון</h3>
                <p className="text-slate text-sm">
                  {CONTACT_INFO.phone}
                  <span className="mx-2 text-border">|</span>
                  {CONTACT_INFO.mobile}
                </p>
                <p className="text-slate-light text-xs mt-1">
                  פקס: {CONTACT_INFO.fax}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6 flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">דוא״ל</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-accent text-sm hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-white p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    שם מלא
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-slate-dark placeholder:text-slate-light/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    דוא״ל
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-slate-dark placeholder:text-slate-light/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
                    placeholder="name@example.com"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    טלפון
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-slate-dark placeholder:text-slate-light/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none"
                    placeholder="050-0000000"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-navy mb-2"
                  >
                    נושא
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-slate-dark transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none appearance-none"
                  >
                    <option value="">בחרו נושא</option>
                    <option value="project-management">ניהול פרויקט ופיקוח</option>
                    <option value="bridge-surveys">סקירות גשרים</option>
                    <option value="quality-control">בקרת איכות</option>
                    <option value="quality-assurance">הבטחת איכות</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  הודעה
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-slate-dark placeholder:text-slate-light/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10 focus:outline-none resize-none"
                  placeholder="פרטו את מהות הפנייה..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {status === "loading" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    שולח...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} />
                    נשלח בהצלחה!
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle size={18} />
                    שגיאה — נסו שוב
                  </>
                )}
                {status === "idle" && (
                  <>
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                    />
                    שליחת הודעה
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-center text-sm text-error">
                  אירעה שגיאה בשליחה. אנא נסו שוב או פנו אלינו ישירות
                  בדוא״ל.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
