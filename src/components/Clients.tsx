"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { CLIENTS } from "@/lib/constants";
import Image from "next/image";

export default function Clients() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="clients" className="py-20 md:py-24 bg-white border-t border-border">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-bold text-sm mb-3 tracking-wide">
            מאגרים ולקוחות
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            לקוחות שסומכים עלינו
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group relative flex flex-col items-center justify-center gap-4 py-8 px-4 rounded-xl border border-border bg-surface transition-all duration-500 hover:border-accent/30 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              {/* Logo */}
              <div className="relative w-24 h-16 flex items-center justify-center transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold text-slate text-center transition-colors duration-300 group-hover:text-navy">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
