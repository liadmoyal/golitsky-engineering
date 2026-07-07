"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-surface">
      {/* Subtle top divider */}
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
            שירותי הנדסה
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4">
            פתרונות הנדסיים מקצועיים
          </h2>
          <p className="mx-auto max-w-2xl text-slate text-lg">
            מגוון שירותים מקיף לפרויקטי תשתיות, גשרים ומבני דרך
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
