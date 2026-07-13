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

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-border bg-white p-5 flex items-start gap-4 transition-shadow hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">כתובת</h3>
                <p className="text-slate text-sm mb-2">{CONTACT_INFO.address}</p>
                <div className="flex items-center gap-3">
                  <a href={CONTACT_INFO.addressMapLink} target="_blank" rel="noreferrer" className="text-accent text-sm hover:underline font-medium">Google Maps</a>
                  <span className="text-border">|</span>
                  <a href={CONTACT_INFO.addressWazeLink} target="_blank" rel="noreferrer" className="text-accent text-sm hover:underline font-medium">Waze</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 flex items-start gap-4 transition-shadow hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/5 text-accent shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">טלפון</h3>
                <p className="text-slate text-sm flex items-center gap-2">
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent transition-colors" dir="ltr">{CONTACT_INFO.phone}</a>
                  <span className="text-border">|</span>
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-accent transition-colors" dir="ltr">{CONTACT_INFO.mobile}</a>
                </p>
                <p className="text-slate-light text-xs mt-1" dir="ltr">
                  פקס: {CONTACT_INFO.fax}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={`https://wa.me/972${CONTACT_INFO.whatsapp.substring(1)}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-white p-4 flex flex-1 items-center justify-center transition-all hover:shadow-md hover:border-[#25D366]/30"
              >
                <WhatsappIcon size={32} className="text-[#25D366] transition-transform group-hover:scale-110" />
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-white p-4 flex flex-1 items-center justify-center transition-all hover:shadow-md hover:border-[#0A66C2]/30"
              >
                <LinkedinIcon size={32} className="text-[#0A66C2] transition-transform group-hover:scale-110" />
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group rounded-2xl border border-border bg-white p-4 flex flex-[2.5] flex-col items-center justify-center gap-1.5 transition-all hover:shadow-md hover:border-accent/30"
              >
                <Mail size={24} className="text-accent transition-transform group-hover:scale-110" />
                <span className="text-slate-dark text-sm font-medium group-hover:text-accent transition-colors text-center w-full truncate">
                  {CONTACT_INFO.email}
                </span>
              </a>
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
