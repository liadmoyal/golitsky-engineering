"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { PROJECTS } from "@/lib/constants";
import { ArrowUpLeft, MapPin } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { ref, isVisible } = useIntersection();

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-surface-alt border-t border-border">
      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm mb-3 tracking-wide">
            פרויקטים נבחרים
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-4">
            חותם של מצוינות
          </h2>
          <p className="mx-auto max-w-2xl text-slate text-lg">
            מפרויקטי הדגל בתחום תשתיות התחבורה בישראל
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-none border border-border bg-surface-alt overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full bg-white overflow-hidden flex items-center justify-center border-b border-border p-6">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-light">
                    <span className="text-4xl font-bold opacity-20">GE</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-surface-alt border border-border text-navy-light text-xs font-bold w-fit">
                  <MapPin size={12} />
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy mb-3 leading-snug group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-dark text-sm leading-relaxed mt-auto">
                  {project.description}
                </p>

                {/* Hover arrow */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 z-10">
                  <ArrowUpLeft size={20} className="text-white drop-shadow-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
