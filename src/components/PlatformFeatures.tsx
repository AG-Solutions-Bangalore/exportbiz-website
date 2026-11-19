import { ArrowRight } from "lucide-react";

export default function PlatformFeatures() {
  const cards = [
    {
      title: "Export Documentation",
      description: "Prepare and organize essential export documents across the shipment lifecycle.",
      icon: "/icon_doc.png",
      glow: "from-blue-50/70 to-transparent",
      accent: "text-brand-blue",
      href: "/features/documentation/",
    },
    {
      title: "Compliance Support",
      description: "Configure customer-specific certificates and document requirements.",
      icon: "/icon_shield.png",
      glow: "from-purple-50/70 to-transparent",
      accent: "text-purple-600",
      href: "/features/compliance/",
    },
    {
      title: "Financial Visibility",
      description:
        "Review customer outstanding balances, foreign-currency billing values, and expected export incentives.",
      icon: "/icon_chart.png",
      glow: "from-emerald-50/70 to-transparent",
      accent: "text-emerald-600",
      href: "/features/financials/",
    },
    {
      title: "Business Operations",
      description:
        "Manage costing templates, reports, multiple companies, and shared business records.",
      icon: "/icon_folder.png",
      glow: "from-amber-50/70 to-transparent",
      accent: "text-amber-600",
      href: "/features/operations/",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold tracking-widest text-slate-muted uppercase">
          THE EXPORT BIZ PLATFORM
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Everything Your Export Business Needs.{" "}
          <span className="text-brand-blue">Connected.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-body leading-relaxed">
          Export Biz by AG Solutions brings documentation, compliance support, financial
          information, reporting, and team collaboration together in one centralized workspace.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`group relative bg-white rounded-2xl p-6 sm:p-7 border border-card-border shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden`}
          >
            {/* Ambient corner glow */}
            <div
              className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${card.glow} blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
            />

            <div>
              {/* 3D Icon */}
              <div className="w-16 h-16 mb-5 flex items-center justify-start">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-14 h-14 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                {card.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-body leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Bottom Arrow Button */}
            <div className="mt-6 pt-2">
              <a
                href={card.href}
                className="w-8 h-8 rounded-full border border-card-border group-hover:border-brand-blue group-hover:bg-brand-blue flex items-center justify-center text-slate-400 group-hover:text-white transition-all shadow-sm"
                aria-label={`Explore ${card.title}`}
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
