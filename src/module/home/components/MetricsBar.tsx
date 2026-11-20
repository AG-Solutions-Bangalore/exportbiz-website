export default function MetricsBar() {
  const metrics = [
    {
      image: "/metrics/metric_3d_exporters.png",
      value: "500+",
      label: "Exporters",
      glow: "from-blue-100/60 to-transparent",
    },
    {
      image: "/metrics/metric_3d_documents.png",
      value: "10,000+",
      label: "Documents Managed",
      glow: "from-sky-100/60 to-transparent",
    },
    {
      image: "/metrics/metric_3d_companies.png",
      value: "Multi-Company",
      label: "Support",
      glow: "from-indigo-100/60 to-transparent",
    },
    {
      image: "/metrics/metric_3d_reliable.png",
      value: "Reliable &",
      label: "Business-Focused",
      glow: "from-blue-100/60 to-transparent",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 lg:-mt-14 py-16  max-w-6xl mx-auto px-4 sm:px-6">
      <div className="relative bg-white/95 sm:rounded-3xl py-5 sm:py-6 px-6 sm:px-10 overflow-hidden">
        {/* Top glass edge reflection */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100/80">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-center gap-3.5 sm:gap-4 transition-transform duration-200 hover:-translate-y-0.5 ${
                idx > 0 ? "pt-4 md:pt-0 md:pl-6 lg:pl-8" : ""
              }`}
            >
              {/* 3D Icon Container with subtle halo glow */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.glow} blur-xs opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none`}
                />
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-11 h-11 sm:w-13 sm:h-13 object-contain filter drop-shadow-[0_4px_10px_rgba(9,82,247,0.14)] group-hover:scale-108 transition-transform duration-300 select-none"
                  loading="lazy"
                />
              </div>

              <div>
                <div className="text-base sm:text-lg lg:text-xl font-extrabold text-navy-900 leading-tight tracking-tight group-hover:text-brand-blue transition-colors">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-muted leading-tight mt-0.5">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
