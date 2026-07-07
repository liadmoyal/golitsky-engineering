"use client";

import { ArrowDown, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/bridge.jpg"
          alt="גשר"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm text-sm font-medium animate-fade-in shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
          מומחים בהנדסה אזרחית מאז 2013
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-6 animate-fade-up">
          מומחים במבני
          <br />
          <span className="text-accent-light">
            בטון מזוין ודרוך
          </span>
          <br />
          גשרים ותשתיות
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed mb-10 animate-fade-up [animation-delay:0.2s]">
          גדליה אוליצקי הנדסה — ניהול, פיקוח, בקרת איכות, הבטחת איכות וסקירות
          גשרים ומבני דרך בפרויקטי התשתיות המובילים בישראל.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:0.4s]">
          <button
            onClick={() => scrollTo("#services")}
            className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            השירותים שלנו
            <ChevronLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-navy transition-all duration-300 hover:-translate-y-0.5"
          >
            צרו קשר
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-fade-in [animation-delay:1s] z-10">
        <span className="text-xs tracking-widest font-medium">גלול למטה</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
