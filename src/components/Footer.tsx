import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-32 bg-white/5 rounded-lg p-2">
                <Image 
                  src="/images/logo.jpg" 
                  alt="גדליה אוליצקי הנדסה" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-slate-light text-sm leading-relaxed max-w-xs">
              מומחים בהנדסת גשרים, בטון מזוין ודרוך, תשתיות תחבורה, בקרת
              ואבטחת איכות.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5">ניווט מהיר</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-light hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5">יצירת קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-sm text-slate-light">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-sm text-slate-light" dir="ltr">
                  {CONTACT_INFO.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-accent hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-light/60">
            © {new Date().getFullYear()} גדליה אוליצקי הנדסה בע&quot;מ — כל הזכויות
            שמורות
          </p>
          <p className="text-xs text-slate-light/40">
            Gdalia Olitsky Engineering LTD
          </p>
        </div>
      </div>
    </footer>
  );
}
