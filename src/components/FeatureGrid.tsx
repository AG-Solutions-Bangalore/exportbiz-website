import {
  FileText,
  Users,
  Calculator,
  Award,
  Gift,
  BarChart2,
  Building2,
  FolderSync,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: FileText,
      title: "Export Documentation",
      href: "/features/documentation/",
    },
    {
      icon: Users,
      title: "Customer Management",
      href: "/features/customers/",
    },
    {
      icon: Calculator,
      title: "Costing & Product Pricing",
      href: "/features/costing/",
    },
    {
      icon: Award,
      title: "Certificates & Compliance",
      href: "/features/compliance/",
    },
    {
      icon: Gift,
      title: "Export Incentives",
      href: "/features/incentives/",
    },
    {
      icon: BarChart2,
      title: "Reports & Analytics",
      href: "/features/analytics/",
    },
    {
      icon: Building2,
      title: "Multiple Companies",
      href: "/features/multi-company/",
    },
    {
      icon: FolderSync,
      title: "Business Files & Sharing",
      href: "/features/files/",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
          Explore the Complete Feature Set
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-slate-body">
          A comprehensive suite of tools to manage your export business end to end.
        </p>
      </div>

      {/* 8 Features Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={idx}
              href={item.href}
              className="group bg-white rounded-xl p-4 border border-card-border shadow-card-soft hover:shadow-card-hover hover:border-brand-blue/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center justify-center min-h-[120px]"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue-50 border border-brand-blue-100/60 flex items-center justify-center text-brand-blue mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-navy-900 group-hover:text-brand-blue leading-snug transition-colors">
                {item.title}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
