"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { CLIENTS } from "@/lib/constants";
import { Building2 } from "lucide-react";

export default function Clients() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="clients" className="py-20 md:py-24 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm mb-3 tracking-wide">
            מאגרים ולקוחות
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            לקוחות שסומכים עלינו
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CLIENTS.map((client, i) => (
            <div
              key={client.name}
              className="group relative flex flex-col items-center justify-center gap-3 py-8 px-4 rounded-2xl border border-border bg-surface transition-all duration-500 hover:border-accent/20 hover:bg-white hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Placeholder Icon — will be replaced with actual logos */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-slate-lighter/30 transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-accent/5">
                <Building2
                  size={28}
                  className="text-slate transition-colors duration-500 group-hover:text-accent"
                />
              </div>
              <span className="text-sm font-medium text-slate text-center transition-colors duration-300 group-hover:text-navy">
                {client.shortName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
