"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { STATS, CERTIFICATIONS } from "@/lib/constants";
import { Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-bold text-sm mb-3 tracking-wide">
            אודות החברה
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
            מוניטין של מצוינות
            <br />
            <span className="text-slate">בהנדסה אזרחית</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Right: Description + Certifications */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-5 text-lg text-slate-dark leading-relaxed">
              <p>
                החברה הוקמה בשנת 2013 ומציעה פתרונות ושירותים הנדסיים בתחום
                ניהול, ביצוע ואיכות פרויקטי תשתיות תחבורה, וסקירות גשרים ומבני
                דרך.
              </p>
              <p>
                החברה מוכרת בזכות המוניטין המצוין שצבר המייסד והמהנדס הראשי
                גדליה אוליצקי לאורך{" "}
                <span className="font-bold text-navy">30 שנות עבודתו</span>{" "}
                במיזמים הבולטים בארץ — עבור רכבת ישראל, נתיבי-ישראל, חברת מוריה
                ועוד.
              </p>
              <p>
                החברה משפרת באופן מתמיד את רמת האיכות והשירות ומיישמת את נוהל
                הבטחת האיכות במסגרת התקן{" "}
                <span className="font-bold text-navy">ISO 9001:2015</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="text-3xl font-extrabold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-navy" size={24} />
                <h3 className="font-bold text-navy text-xl">
                  הסמכות ותעודות
                </h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-sm text-slate-dark font-medium">
                    <CheckCircle
                      size={18}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left: Founder Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/images/about/gdalia.jpg"
              alt="גדליה אוליצקי"
              fill
              className="object-cover"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-navy/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
