"use client";

import { ArrowDown, ChevronLeft } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy-light" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px] animate-pulse-soft [animation-delay:1.5s]" />

      {/* Decorative Lines */}
      <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-transparent via-accent/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          מומחים בהנדסה אזרחית מאז 2013
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-6 animate-fade-up">
          מומחים במבני
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent-light via-accent to-accent-dark">
            בטון מזוין ודרוך
          </span>
          <br />
          גשרים ותשתיות
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-light/80 leading-relaxed mb-10 animate-fade-up [animation-delay:0.2s]">
          גדליה אוליצקי הנדסה — ניהול, פיקוח, בקרת איכות, הבטחת איכות וסקירות
          גשרים ומבני דרך בפרויקטי התשתיות המובילים בישראל.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:0.4s]">
          <button
            onClick={() => scrollTo("#services")}
            className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            השירותים שלנו
            <ChevronLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 text-white font-semibold rounded-2xl border border-white/15 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            צרו קשר
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-light/40 animate-fade-in [animation-delay:1s]">
        <span className="text-xs tracking-widest">גלול למטה</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
