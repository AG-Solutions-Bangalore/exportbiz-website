import { ArrowRight, Play, Building2, FileText, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-3/5 h-full pointer-events-none opacity-60">
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-blue-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-blue-100/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 xl:col-span-5 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-badge-bg border border-badge-border mb-6">
              <span className="text-[11px] sm:text-xs font-bold text-badge-text tracking-wider uppercase">
                EXPORT DOCUMENTATION & BUSINESS MANAGEMENT SOFTWARE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-[52px] font-extrabold text-navy-900 leading-[1.12] tracking-tight">
              Your Complete <br className="hidden sm:inline" />
              Export Business. <br />
              <span className="text-brand-blue">One Intelligent Workspace.</span>
            </h1>

            {/* Description Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-body leading-relaxed max-w-xl">
              Prepare export documents, manage certificates, calculate product costing, monitor
              customer outstanding balances, track export incentives, and organize your business
              operations — all with Export Biz.
            </p>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/request-demo/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                Request a Free Demo
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/features/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 text-navy-800 font-semibold text-sm sm:text-base border border-gray-300 shadow-sm transition-all"
              >
                <div className="w-5 h-5 rounded-full border border-navy-800/60 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-navy-800 text-navy-800 ml-0.5" />
                </div>
                Explore Features
              </a>
            </div>

            {/* Key Highlights Row */}
            <div className="mt-10 pt-6 border-t border-brand-blue-100/80 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-navy-900 leading-snug">
                  Multiple Company <br />
                  Management
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-navy-900 leading-snug">
                  Export <br />
                  Documentation
                </span>
              </div>

              <div className="flex items-start gap-2 sm:gap-2.5">
                <div className="p-1 rounded-md text-brand-blue mt-0.5 shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-navy-900 leading-snug">
                  Business & <br />
                  Financial Visibility
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Illustration (Laptop, Dashboard, Airplane, Ship) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-center relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-[640px] rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white/40 backdrop-blur-sm p-1.5 sm:p-2.5">
              <img
                src="/hero_workspace.jpg"
                alt="Export Biz Dashboard Laptop Workspace with Ship and Airplane"
                className="w-full h-auto object-cover rounded-xl select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
