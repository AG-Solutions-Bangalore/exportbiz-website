import { ArrowRight, Play, Building2, FileText, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EAF3FE] py-8 sm:py-12">
      {/* Background Banner Image on Desktop: perfectly fitted to the right without being too big */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain pointer-events-none hidden lg:block"
        style={{ backgroundImage: "url('/hero_image.webp')" }}
      />

      {/* Subtle ambient lighting on the left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Content (Restrained to left half so it doesn't cover the laptop banner image) */}
          <div className="lg:col-span-7 xl:col-span-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-badge-bg border border-badge-border mb-5 sm:mb-6 shadow-xs">
              <span className="text-[11px] sm:text-xs font-bold text-badge-text tracking-wider uppercase">
                EXPORT DOCUMENTATION & BUSINESS MANAGEMENT SOFTWARE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-[1.14] tracking-tight">
              Your Complete <br className="hidden sm:inline" />
              Export Business. <br />
              <span className="text-brand-blue text-nowrap">
                One Intelligent Workspace.
              </span>
            </h1>

            {/* Description Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-900 leading-tight max-w-xl">
              Prepare export documents, manage certificates, calculate product
              costing, monitor customer outstanding balances, track export
              incentives, and organize your business operations — all with
              Export Biz.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/request-demo/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                Request a Free Demo
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/features/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-gray-50 text-navy-800 font-semibold text-sm sm:text-base border border-gray-300 shadow-sm transition-all"
              >
                <div className="w-5 h-5 rounded-full border border-navy-800/60 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-navy-800 text-navy-800 ml-0.5" />
                </div>
                Explore Features
              </Link>
            </div>

            {/* Key Highlights Row */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-brand-blue-200/60 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg">
              <div className="flex items-start gap-2">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-navy-900 leading-snug">
                  Multiple Company <br />
                  Management
                </span>
              </div>

              <div className="flex items-start gap-2">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-navy-900 leading-snug">
                  Export <br />
                  Documentation
                </span>
              </div>

              <div className="flex items-start gap-2">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-navy-900 leading-snug">
                  Business & <br />
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
