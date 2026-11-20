import { ArrowRight } from "lucide-react";
import MetricsBar from "./MetricsBar";

export default function PlatformFeatures() {
  const cards = [
    {
      title: "Export Documentation",
      description:
        "Prepare and organize essential export documents across the shipment lifecycle.",
      icon: "/icon_doc.webp",
      glowBg: "from-blue-50/50 via-white to-white",
      hoverBorder: "hover:border-blue-200",
      arrowHover: "group-hover:border-blue-400 group-hover:text-brand-blue",
    },
    {
      title: "Compliance Support",
      description:
        "Configure customer-specific certificates and document requirements.",
      icon: "/icon_shield.webp",
      glowBg: "from-purple-50/50 via-white to-white",
      hoverBorder: "hover:border-purple-200",
      arrowHover: "group-hover:border-purple-400 group-hover:text-purple-600",
    },
    {
      title: "Financial Visibility",
      description:
        "Review customer outstanding balances, foreign-currency billing values, and expected export incentives.",
      icon: "/icon_chart.webp",
      glowBg: "from-emerald-50/50 via-white to-white",
      hoverBorder: "hover:border-emerald-200",
      arrowHover: "group-hover:border-emerald-400 group-hover:text-emerald-600",
    },
    {
      title: "Business Operations",
      description:
        "Manage costing templates, reports, multiple companies, and shared business records.",
      icon: "/icon_folder.webp",
      glowBg: "from-amber-50/50 via-white to-white",
      hoverBorder: "hover:border-amber-200",
      arrowHover: "group-hover:border-amber-400 group-hover:text-amber-600",
    },
  ];

  return (
    <section id="why-us" className="pt-0 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Metrics Bar overlapping Hero bottom */}
      <MetricsBar />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mt-12 sm:mt-16 mb-10 sm:mb-14">
        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
          THE EXPORT BIZ PLATFORM
        </span>
        <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
          Everything Your Export Business Needs.{" "}
          <span className="text-brand-blue">Connected.</span>
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Export Biz by AG Solutions brings documentation, compliance support,
          financial information, reporting, and team collaboration together in
          one centralized workspace.
        </p>
      </div>

      {/* 4 Cards Grid: Left side full image, Right side content and button */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl p-4 sm:p-5 bg-gradient-to-br ${card.glowBg} bg-white border border-gray-100 shadow-sm hover:shadow-md ${card.hoverBorder} transition-all duration-300 flex items-center gap-3.5 sm:gap-4`}
          >
            {/* Left side full 3D image container */}
            <div className="w-20 h-20 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img
                src={card.icon}
                alt={card.title}
                className="w-full h-full object-contain filter drop-shadow-md select-none"
                loading="lazy"
              />
            </div>

            {/* Right side: Title, Description, and Button */}
            <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm sm:text-[15px] font-extrabold text-navy-900 group-hover:text-brand-blue transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>

              {/* Small circular arrow button at bottom right */}
              <div className="mt-2.5">
                <div
                  className={`w-6 h-6 rounded-full border border-gray-200 bg-white shadow-2xs flex items-center justify-center text-slate-500 ${card.arrowHover} transition-all duration-200`}
                >
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
