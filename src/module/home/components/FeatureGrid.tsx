import { Link } from "react-router-dom";

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
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
          Explore the Complete Feature Set
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-body">
          A comprehensive suite of tools to manage your export business end to end.
        </p>
      </div>

      {/* 8 Features Tiles with 3D Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {features.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className="group  bg-white rounded-2xl p-3.5 sm:p-6 border border-card-border shadow-card-soft hover:shadow-card-hover hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[135px] sm:min-h-[150px]"
          >
            {/* 3D Icon Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-11 h-11 sm:w-13 sm:h-13 object-contain filter drop-shadow-md select-none"
                loading="lazy"
              />
            </div>

            {/* Feature Label */}
            <span className="text-xs font-bold text-navy-900 group-hover:text-brand-blue leading-snug transition-colors">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
