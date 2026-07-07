import type { Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div
      className="group relative rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/20"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-surface-alt text-navy transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-md">
        <Icon className="w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-accent">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-dark leading-relaxed text-[0.95rem]">
        {service.description}
      </p>

      {/* Subtle top accent line */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
