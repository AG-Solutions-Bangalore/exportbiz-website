import { useState, useEffect, useRef } from "react";
import { COMPANY_INFO } from "../../../constants";

export default function FeatureGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const features = [
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_doc.webp`,
      title: "Export Documentation",
      imageTitle: "Digital Export Documentation Management",
      href: "/features/documentation/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_customer.webp`,
      title: "Customer Management",
      imageTitle: "Export Customer and Client Management",
      href: "/features/customers/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_costing.webp`,
      title: "Costing & Product Pricing",
      imageTitle: "Export Costing and Product Pricing Management",
      href: "/features/costing/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_compliance.webp`,
      title: "Certificates & Compliance",
      imageTitle: "Export Certificates and Compliance Management",
      href: "/features/compliance/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_incentives.webp`,
      title: "Export Incentives",
      imageTitle: "Export Incentives and Benefits Management",
      href: "/features/incentives/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_analytics.webp`,
      title: "Reports & Analytics",
      imageTitle: "Export Business Reports and Analytics",
      href: "/features/analytics/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_companies.webp`,
      title: "Multiple Companies",
      imageTitle: "Multiple Company Management for Exporters",
      href: "/features/multi-company/",
    },
    {
      image: `${COMPANY_INFO.imageBaseUrl}/features/icon_3d_sharing.webp`,
      title: "Business Files & Sharing",
      imageTitle: "Export Business File Management and Sharing",
      href: "/features/files/",
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
          Explore the Complete Feature Set
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600">
          A comprehensive suite of tools to manage your export business end to end.
        </p>
      </div>

      {/* 8 Features Tiles with larger 3D Icons & reduced gap on small devices */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-3.5">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-2.5 sm:p-4 lg:p-5 border border-gray-100 shadow-xs hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center justify-between min-h-[145px] sm:min-h-[165px] lg:min-h-[180px]"
          >
            {/* Even Bigger 3D Icon Container on small devices */}
            <div className="w-20 h-20 sm:w-20 sm:h-20 lg:w-20 lg:h-20 flex items-center justify-center mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300">
              {isVisible ? (
                <img
                  src={item.image}
                  alt={item.imageTitle}
                  title={item.imageTitle}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain filter drop-shadow-md select-none"
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
            </div>

            {/* Feature Label: Compact and readable */}
            <span className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-navy-900 group-hover:text-brand-blue leading-tight sm:leading-snug transition-colors">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
