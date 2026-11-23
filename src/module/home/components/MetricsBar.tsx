import { useState, useEffect, useRef } from "react";
import { COMPANY_INFO } from "../../../constants";

export default function MetricsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);
  const metrics = [
    {
      image: `${COMPANY_INFO.imageBaseUrl}/metrics/metric_3d_exporters.webp`,
      value: "500+",
      label: "Exporters",
      title: "Exporters Using Export Biz Platform",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/metrics/metric_3d_documents.webp`,
      value: "10,000+",
      label: "Documents Managed",
      title: "Export Documents Managed Digitally",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/metrics/metric_3d_companies.webp`,
      value: "Multi-Company",
      label: "Support",
      title: "Dedicated Support for Export Businesses",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/metrics/metric_3d_reliable.webp`,
      value: "Reliable &",
      label: "Business-Focused",
      title: "Reliable Export Business Management",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 max-w-6xl mx-auto px-3 sm:px-6"
    >
      <div className="relative bg-white rounded-2xl sm:rounded-3xl py-3.5 sm:py-5 px-4 sm:px-8 shadow-lg border border-gray-100/80 overflow-hidden">
        {/* Top subtle highlight */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-center gap-2.5 sm:gap-3.5 transition-transform duration-200 hover:-translate-y-0.5 ${
                idx > 0 ? "pt-2 sm:pt-0 lg:pl-6" : ""
              }`}
            >
              {/* 3D Icon Container with fixed dimensions to prevent layout shift */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
                {isVisible ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-200 select-none"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-lg bg-blue-50/40"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div>
                <div className="text-xs sm:text-base lg:text-lg font-extrabold text-navy-900 leading-tight tracking-tight group-hover:text-brand-blue transition-colors">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-600 leading-tight mt-0.5">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
