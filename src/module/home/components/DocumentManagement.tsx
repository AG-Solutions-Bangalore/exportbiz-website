import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DocumentManagement() {
  const checklist = [
    "Commercial Contracts & Orders",
    "Certificate of Origin",
    "Invoice, Packing List & PL",
    "Inspection Certificates",
    "Bill of Lading (B/L)",
    "Other Shipment Documents",
  ];

  return (
    <section id="documents" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background soft ambient gradient curve on the right as per client audio */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Floating Documents Mockup */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-full max-w-[540px]">
            {/* Subtle glow underneath */}
            <div className="absolute inset-0 bg-brand-blue-100/40 rounded-full blur-3xl -z-10" />
            <img
              src="/export_biz_documents_transparent.webp"
              alt="Export Documents: Commercial Invoice, Packing List, Bill of Lading"
              className="w-full scale-[1.11] h-auto object-contain drop-shadow-xl select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="lg:col-span-6 text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-badge-bg border border-badge-border mb-4">
            <span className="text-[11px] sm:text-xs font-bold text-badge-text tracking-wider uppercase">
              EXPORT DOCUMENTATION MANAGEMENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Every Export Document. <br />
            Organized in One Place.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-body leading-relaxed max-w-xl">
            Create, manage and track all key export documents from contract to shipment, with a
            clear and structured workflow.
          </p>

          {/* Checklist 2-Column Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2">
            {checklist.map((label, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-sm font-semibold text-navy-800">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/features/documentation/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold text-sm transition-all shadow-sm hover:shadow"
            >
              Explore Documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
