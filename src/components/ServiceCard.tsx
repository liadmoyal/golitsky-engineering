import type { Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-8 border-b border-border bg-white transition-all duration-300 hover:bg-surface-alt">
      {/* Index Number */}
      <div className="text-4xl font-extrabold text-slate-lighter group-hover:text-accent transition-colors w-16">
        {(index + 1).toString().padStart(2, '0')}
      </div>
      
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-alt text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white shrink-0">
        <Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-navy mb-2 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-dark leading-relaxed text-lg max-w-3xl">
          {service.description}
        </p>
      </div>
    </div>
  );
}
