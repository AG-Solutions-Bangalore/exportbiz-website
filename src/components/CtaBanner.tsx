import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-banner-start via-banner-mid to-banner-end p-8 sm:p-10 lg:p-12 text-white shadow-banner">
        
        {/* Subtle background glow rings */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              See Export Biz in Action
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
              Experience how Export Biz can simplify your export documentation and business
              operations with a live demo.
            </p>
          </div>

          {/* Right Column: CTA Buttons & Ship illustration */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-start sm:items-center justify-end gap-3.5 relative">
            <a
              href="/request-demo/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blue-50 text-brand-blue font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Request a Free Demo
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold text-sm backdrop-blur-sm transition-all"
            >
              Contact Us
            </a>

            {/* Ship illustration in bottom corner */}
            <div className="hidden xl:block absolute -bottom-8 -right-6 w-48 rounded-xl overflow-hidden shadow-md opacity-90 pointer-events-none">
              <img
                src="/cargo_ship_port.jpg"
                alt="Cargo shipping"
                className="w-full h-auto object-cover rounded-xl select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
