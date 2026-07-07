import type { Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/8 hover:border-accent/20 gradient-border ${
        service.colSpan || ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/5 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/25">
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-accent">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate leading-relaxed text-[0.95rem]">
        {service.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-l from-accent via-accent-light to-transparent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
    </div>
  );
}
