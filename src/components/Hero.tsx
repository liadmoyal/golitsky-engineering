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
      className="relative min-h-dvh flex items-center justify-center"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      {/* Background Image with CSS Parallax */}
      <div className="fixed inset-0 -z-10 h-[100dvh] w-full">
        <Image
          src="/images/hero/bridge-resized.jpg"
          alt="גשר"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Elegant Dark Overlay */}
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-sm border border-accent/50 bg-navy/80 text-white backdrop-blur-md text-sm font-bold tracking-wide animate-fade-in shadow-sm">
          <span className="w-2 h-2 bg-accent animate-pulse" />
          גדליה אוליצקי הנדסה בע״מ
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] mb-6 animate-fade-up drop-shadow-2xl">
          מומחים במבני
          <br />
          <span className="text-accent-light drop-shadow-lg">
            בטון מזוין ודרוך
          </span>
          <br />
          גשרים ותשתיות
        </h1>

        {/* Subtitle */}
        <div className="mx-auto max-w-3xl mb-10 animate-fade-up [animation-delay:0.2s]">
          <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium drop-shadow-xl">
            ניהול, פיקוח, בקרת איכות, הבטחת איכות וסקירות
            גשרים ומבני דרך בפרויקטי התשתיות המובילים בישראל.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:0.4s]">
          <button
            onClick={() => scrollTo("#services")}
            className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-none transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 tracking-wide"
          >
            השירותים שלנו
            <ChevronLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 text-white font-bold rounded-none border-2 border-white hover:bg-white hover:text-navy transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
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
