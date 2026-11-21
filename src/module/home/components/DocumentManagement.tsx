import { Check, ArrowRight } from "lucide-react";
import { useModal } from "../../../context/ModalContext";

export default function DocumentManagement() {
  const { openDemoModal } = useModal();

  const checklist = [
    "Commercial Contracts & Orders",
    "Certificate of Origin",
    "Invoice, Packing List & PL",
    "Inspection Certificates",
    "Bill of Lading (B/L)",
    "Other Shipment Documents",
  ];

  return (
    <section
      id="documents"
      className="relative overflow-hidden bg-[#F4F8FE] pt-0 pb-12 sm:pt-6 sm:pb-16 lg:py-[3.4rem]"
    >
      {/* Background Banner Image on Desktop: perfectly fitted to the left like hero section */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left bg-contain pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "url('/Export Biz Invoice Document Stack.png')",
        }}
      />

      {/* Subtle ambient lighting orb on the right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-white/50 rounded-full blur-3xl pointer-events-none" />

      {/* Full-width Mobile Image Hero with smooth gradient blend */}
      <div className="relative w-full h-[220px] sm:h-[290px] overflow-hidden lg:hidden block">
        <img
          src="/Export Biz Invoice Document Stack.png"
          alt="Export Documents – Commercial Invoice, Packing List and Bill of Lading"
          title="Export Documents – Commercial Invoice, Packing List and Bill of Lading"
          className="w-full h-full object-cover object-[-2%_center] sm:object-[20%_center] select-none"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 sm:-mt-10 lg:mt-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column Spacer on desktop so background documents shine through cleanly */}
          <div className="hidden lg:block lg:col-span-6" aria-hidden="true" />

          {/* Right Column: Copy & Checklist */}
          <div className="w-full lg:col-span-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 border border-blue-200/80 mb-3 sm:mb-4 shadow-xs">
              <span className="text-[10px] sm:text-xs font-bold text-brand-blue tracking-wider uppercase">
                EXPORT DOCUMENTATION MANAGEMENT
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Every Export Document. <br />
              Organized in One Place.
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-body leading-relaxed max-w-xl">
              Create, manage and track all key export documents from contract to
              shipment, with a clear and structured workflow.
            </p>

            {/* Checklist 2-Column Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-3">
              {checklist.map((label, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-navy-800">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button: Outlined like in reference image 2 */}
            <div className="mt-6 sm:mt-8">
              <button
                type="button"
                onClick={openDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-brand-blue border border-brand-blue text-brand-blue hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group active:scale-98"
              >
                <span>Explore Documentation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
