import { FileSpreadsheet, ArrowLeftRight, Building } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: FileSpreadsheet,
      title: "Manufacturers & Exporters",
      description: "Manage export orders, documents, costing and incentives seamlessly.",
      href: "/solutions/manufacturers/",
    },
    {
      icon: ArrowLeftRight,
      title: "Trading & Merchant Exporters",
      description: "Keep customer documents, certificates and shipments organized.",
      href: "/solutions/merchants/",
    },
    {
      icon: Building,
      title: "Multi-Company Groups",
      description: "Run and manage multiple export companies from a single platform.",
      href: "/solutions/multi-company-groups/",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-solutions-bg border border-solutions-border rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-4 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-snug tracking-tight">
              Solutions for <br className="hidden sm:inline" />
              Export Businesses
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-body leading-relaxed">
              Designed for exporters, manufacturers, and trading companies handling end-to-end export
              operations.
            </p>
          </div>

          {/* Middle Column: 3 Solution Items */}
          <div className="lg:col-span-5 space-y-4">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-start gap-3.5 p-2 rounded-xl hover:bg-white/70 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-200/70 flex items-center justify-center shrink-0 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right Column: Cargo Ship at Port Graphic */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[320px] rounded-xl overflow-hidden shadow-lg border border-white/60">
              <img
                src="/cargo_ship_port.jpg"
                alt="Cargo Container Ship at Port"
                className="w-full h-auto object-cover rounded-xl select-none"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
