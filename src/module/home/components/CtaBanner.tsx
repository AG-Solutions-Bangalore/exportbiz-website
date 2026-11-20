import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1B68F8] via-[#2470F9] to-[#3B82F6] shadow-md border border-blue-400/30">
        
        {/* Right side port & container ship background image */}
        <div className="absolute right-0 top-0 bottom-0 w-[38%] hidden md:block pointer-events-none overflow-hidden">
          <img
            src="/solutions_port_bg.webp"
            alt="Cargo Ship and Port"
            className="w-full h-full object-cover object-right select-none"
          />
          {/* Smooth gradient blend into the vibrant blue banner */}
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#2470F9] via-[#2470F9]/80 to-transparent" />
        </div>

        {/* Content container */}
        <div className="relative z-10 px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left: Title & Description */}
          <div className="md:col-span-6 lg:col-span-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              See Export Biz in Action
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-blue-100 max-w-lg leading-relaxed">
              Experience how Export Biz can simplify your export documentation and business operations with a live demo.
            </p>
          </div>

          {/* Middle: Action Buttons */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-wrap items-center gap-3">
            <Link
              to="/request-demo/"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-[#1B68F8] font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
            >
              Request a Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/50 text-white font-semibold text-xs sm:text-sm backdrop-blur-xs transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Right spacer for background image display */}
          <div className="hidden md:block md:col-span-2 lg:col-span-2" />

        </div>
      </div>
    </section>
  );
}
