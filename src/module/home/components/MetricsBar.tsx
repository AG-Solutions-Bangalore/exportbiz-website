export default function MetricsBar() {
  const metrics = [
    {
      image: "/metrics/metric_3d_exporters.webp",
      value: "500+",
      label: "Exporters",
    },
    {
      image: "/metrics/metric_3d_documents.webp",
      value: "10,000+",
      label: "Documents Managed",
    },
    {
      image: "/metrics/metric_3d_companies.webp",
      value: "Multi-Company",
      label: "Support",
    },
    {
      image: "/metrics/metric_3d_reliable.webp",
      value: "Reliable &",
      label: "Business-Focused",
    },
  ];

  return (
    <div className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl py-4 sm:py-5 px-6 sm:px-8 shadow-lg border border-gray-100/80 overflow-hidden">
        {/* Top subtle highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-center gap-3 sm:gap-3.5 transition-transform duration-200 hover:-translate-y-0.5 ${
                idx > 0 ? "pt-3 md:pt-0 md:pl-5 lg:pl-6" : ""
              }`}
            >
              {/* 3D Icon Container */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-200 select-none"
                  loading="lazy"
                />
              </div>

              <div>
                <div className="text-sm sm:text-base lg:text-lg font-extrabold text-navy-900 leading-tight tracking-tight group-hover:text-brand-blue transition-colors">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight mt-0.5">
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
