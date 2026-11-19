import { Users, Layers, Building, ShieldCheck } from "lucide-react";

export default function MetricsBar() {
  const metrics = [
    {
      icon: Users,
      value: "500+",
      label: "Exporters",
    },
    {
      icon: Layers,
      value: "10,000+",
      label: "Documents Managed",
    },
    {
      icon: Building,
      value: "Multi-Company",
      label: "Support",
    },
    {
      icon: ShieldCheck,
      value: "Reliable &",
      label: "Business-Focused",
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-12 sm:mb-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-card-soft border border-card-border py-5 px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-navy-900 leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-muted">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
