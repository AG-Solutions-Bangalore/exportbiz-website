import { FileSpreadsheet, ArrowLeftRight, Building } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-[#F5F8FE] border border-blue-100 rounded-2xl overflow-hidden shadow-sm">
        {/* Right side background image of port / cranes / container ship */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] lg:w-[38%] xl:w-[35%] hidden md:block pointer-events-none">
          <img
            src="/solutions_port_bg.png"
            alt="Port Background"
            className="w-full h-full object-cover object-right select-none"
          />
          {/* Subtle horizontal gradient to seamlessly blend image into background */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F8FE] to-transparent" />
        </div>

        {/* Content container */}
        <div className="relative z-10 px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Title & Description */}
          <div className="md:col-span-5 lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1536] tracking-tight leading-tight">
              Solutions for Export Businesses
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Designed for exporters, manufacturers, and trading companies handling end-to-end export operations.
            </p>
          </div>

          {/* Middle: 3 stacked list items matching the reference */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3.5">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.href}
                  className="group flex items-center gap-3 transition-transform duration-150 hover:translate-x-0.5"
                >
                  {/* Rounded icon badge with soft blue tint */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 shadow-xs flex items-center justify-center shrink-0 text-[#1D68F2] group-hover:bg-[#1D68F2] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B1536] group-hover:text-[#1D68F2] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right spacer for the background image on desktop */}
          <div className="hidden md:block md:col-span-3 lg:col-span-3" />

        </div>
      </div>
    </section>
  );
}
