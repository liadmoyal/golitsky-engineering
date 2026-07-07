"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { PROJECTS } from "@/lib/constants";
import { ArrowUpLeft, MapPin } from "lucide-react";

export default function Projects() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-navy">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm mb-3 tracking-wide">
            פרויקטים נבחרים
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            חותם של מצוינות
          </h2>
          <p className="mx-auto max-w-2xl text-slate-light text-lg">
            מפרויקטי הדגל בתחום תשתיות התחבורה בישראל
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-white/5 bg-navy-light/60 backdrop-blur-sm p-7 transition-all duration-500 hover:border-accent/20 hover:bg-navy-mid hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                <MapPin size={12} />
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent-light transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-light text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute top-7 left-7 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <ArrowUpLeft size={18} className="text-accent" />
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-gradient-to-l from-accent to-transparent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
