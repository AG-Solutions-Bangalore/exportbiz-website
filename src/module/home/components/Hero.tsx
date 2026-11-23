import { ArrowRight, Play, Building2, FileText, BarChart3 } from "lucide-react";
import { useModal } from "../../../context/ModalContext";
import { COMPANY_INFO } from "../../../constants";

export default function Hero() {
  const { openDemoModal } = useModal();

  return (
    <section id="hero" className="relative overflow-hidden bg-[#EAF3FE] pt-0 pb-12 sm:pt-6 sm:pb-16 lg:pb-20">
      {/* Background Banner Image on Desktop: perfectly fitted to the right without being too big */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain pointer-events-none hidden lg:block"
        style={{ backgroundImage: `url('${COMPANY_INFO.imageBaseUrl}/hero_image.webp')` }}
      />

      {/* Subtle ambient lighting on the left */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Full-width Mobile Image Hero with Floating Badge in Blank Space */}
      <div className="relative w-full h-[220px] sm:h-[290px] overflow-hidden lg:hidden block">
        <img
          src={`${COMPANY_INFO.imageBaseUrl}/hero_image.webp`}
          alt="Export Biz Workspace Dashboard – Export Management Platform"
          title="Export Biz Workspace Dashboard – Export Management Platform"
          className="w-full h-full object-cover object-[72%_center] sm:object-[68%_center] select-none"
          loading="eager"
        />

        {/* Small floating badge positioned in the top-left blank sky area */}
        <div className="absolute top-3 left-4 z-20 max-w-[55%]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-xs">
            <span className="text-[9px] font-extrabold text-brand-blue tracking-wide uppercase leading-tight">
              Export Documentation Software
            </span>
          </div>
        </div>

        {/* Soft edge gradients blending image with background */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#EAF3FE] via-[#EAF3FE]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#EAF3FE]/40 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-8 sm:-mt-10 lg:mt-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Content Column: Appears below image on mobile (order-2), left column on desktop */}
          <div className="w-full lg:col-span-7 xl:col-span-6 text-left order-2 lg:order-1">
            {/* Pill Badge: Displayed on Desktop */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-badge-bg border border-badge-border mb-6 shadow-xs max-w-full">
              <span className="text-xs font-bold text-badge-text tracking-wider uppercase truncate">
                EXPORT DOCUMENTATION MANAGEMENT SOFTWARE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-[1.15] tracking-tight">
              Your Complete <br className="hidden sm:inline" />
              Export Business. <br />
              <span className="text-brand-blue sm:text-nowrap">
                One Intelligent Workspace.
              </span>
            </h1>

            {/* Description Subtitle */}
            <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-slate-800 leading-relaxed max-w-xl">
              Prepare export documents, manage certificates, calculate product
              costing, monitor customer outstanding balances, track export
              incentives, and organize your business operations — all with
              Export Biz.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold text-xs sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Request a Free Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://demo.exportbiz.in/signup"
                target="_blank"
                rel="noopener noreferrer"
                title="Sign Up for Export Biz"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white hover:bg-gray-50 text-navy-800 font-semibold text-xs sm:text-base border border-gray-300 shadow-sm transition-all cursor-pointer"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-navy-800/60 flex items-center justify-center">
                  <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-navy-800 text-navy-800 ml-0.5" />
                </div>
                Free Trial
              </a>
            </div>

            {/* Key Highlights Row */}
            <div className="mt-7 hidden sm:mt-10 pt-4 sm:pt-6 border-t border-brand-blue-200/60 md:grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-2">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-navy-900 leading-snug">
                  Multiple Company <br className="hidden sm:inline" />
                  Management
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-2">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-navy-900 leading-snug">
                  Export <br className="hidden sm:inline" />
                  Documentation
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-2">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-navy-900 leading-snug">
                  Business & <br className="hidden sm:inline" />
                  Financial Visibility
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
