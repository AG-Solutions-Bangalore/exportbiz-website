import MetricsBar from "./MetricsBar";

export default function PlatformFeatures() {
  const cards = [
    {
      title: "Export Documentation",
      description:
        "Prepare and organize essential export documents across the shipment lifecycle.",
      icon: "/icon_doc.webp",
      cardBg: "from-[#F0F6FF] via-[#F8FAFF] to-white",
      borderColor: "border-blue-100/80 hover:border-blue-300",
      glowColor: "bg-blue-400/15",
    },
    {
      title: "Compliance Support",
      description:
        "Configure customer-specific certificates and document requirements.",
      icon: "/icon_shield.webp",
      cardBg: "from-[#F5F1FE] via-[#FAF7FF] to-white",
      borderColor: "border-purple-100/80 hover:border-purple-300",
      glowColor: "bg-purple-400/15",
    },
    {
      title: "Financial Visibility",
      description:
        "Review customer outstanding balances, foreign-currency billing values, and expected export incentives.",
      icon: "/icon_chart.webp",
      cardBg: "from-[#EFFBF4] via-[#F6FCF8] to-white",
      borderColor: "border-emerald-100/80 hover:border-emerald-300",
      glowColor: "bg-emerald-400/15",
    },
    {
      title: "Business Operations",
      description:
        "Manage costing templates, reports, multiple companies, and shared business records.",
      icon: "/icon_folder.webp",
      cardBg: "from-[#FFF9ED] via-[#FFFDF7] to-white",
      borderColor: "border-amber-100/80 hover:border-amber-300",
      glowColor: "bg-amber-400/15",
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

      {/* 4 Cards Grid: Left side full image, Right side content, gradient background, NO arrow button */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl p-5 bg-gradient-to-br ${card.cardBg} border ${card.borderColor} shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-3.5 sm:gap-4 overflow-hidden`}
          >
            {/* Ambient soft glow radiating from the icon side */}
            <div
              className={`absolute -left-6 -top-6 w-28 h-28 rounded-full ${card.glowColor} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
            />

            {/* Left side full 3D image container */}
            <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 shrink-0 flex items-center justify-center group-hover:scale-108 transition-transform duration-300">
              <img
                src={card.icon}
                alt={card.title}
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)] select-none"
                loading="lazy"
              />
            </div>

            {/* Right side: Title & Description */}
            <div className="relative z-10 flex-1 min-w-0">
              <h3 className="text-sm sm:text-[15px] font-extrabold text-navy-900 group-hover:text-brand-blue transition-colors leading-tight">
                {card.title}
              </h3>
              <p className="mt-1.5 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
