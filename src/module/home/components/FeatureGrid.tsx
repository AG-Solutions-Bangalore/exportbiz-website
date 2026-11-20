export default function FeatureGrid() {
  const features = [
    {
      image: "/features/icon_3d_doc.webp",
      title: "Export Documentation",
      href: "/features/documentation/",
    },
    {
      image: "/features/icon_3d_customer.webp",
      title: "Customer Management",
      href: "/features/customers/",
    },
    {
      image: "/features/icon_3d_costing.webp",
      title: "Costing & Product Pricing",
      href: "/features/costing/",
    },
    {
      image: "/features/icon_3d_compliance.webp",
      title: "Certificates & Compliance",
      href: "/features/compliance/",
    },
    {
      image: "/features/icon_3d_incentives.webp",
      title: "Export Incentives",
      href: "/features/incentives/",
    },
    {
      image: "/features/icon_3d_analytics.webp",
      title: "Reports & Analytics",
      href: "/features/analytics/",
    },
    {
      image: "/features/icon_3d_companies.webp",
      title: "Multiple Companies",
      href: "/features/multi-company/",
    },
    {
      image: "/features/icon_3d_sharing.webp",
      title: "Business Files & Sharing",
      href: "/features/files/",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
          Explore the Complete Feature Set
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600">
          A comprehensive suite of tools to manage your export business end to end.
        </p>
      </div>

      {/* 8 Features Tiles with larger 3D Icons & text as requested */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center justify-between min-h-[165px] sm:min-h-[180px]"
          >
            {/* Larger 3D Icon Container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain filter drop-shadow-md select-none"
                loading="lazy"
              />
            </div>

            {/* Feature Label: Increased font size and line height */}
            <span className="text-xs sm:text-[13px] font-bold text-navy-900 group-hover:text-brand-blue leading-snug transition-colors">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
