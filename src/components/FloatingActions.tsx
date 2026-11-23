import { useState, useEffect } from "react";
import { Phone, Mail, MessageSquareMore } from "lucide-react";
import { COMPANY_INFO } from "../constants";

const WhatsAppIcon = () => (
  <svg
    className="w-[18px] h-[18px] sm:w-6 sm:h-6 fill-current text-white"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.32z" />
  </svg>
);

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Reveal shortly after page load, no scrolling required
    const timer = window.setTimeout(() => setIsVisible(true), 300);
    return () => window.clearTimeout(timer);
  }, []);

  const whatsappNumber = COMPANY_INFO.phoneRaw.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello! I am interested in Export Biz export documentation software."
  )}`;

  const baseButtonClasses =
    "group relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl text-white flex items-center justify-center transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform hover:scale-110 active:scale-95";

  const actionsShown = isVisible && isExpanded;

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 print:hidden select-none pointer-events-none"
    >
      <div
        id="floating-contact-actions"
        className="relative flex items-center gap-2 sm:gap-2.5 pointer-events-auto"
        onMouseLeave={() => setIsExpanded(false)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsExpanded(false);
          }
        }}
      >
        {/* 1. WhatsApp Button (appears last - right to left) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          aria-hidden={!actionsShown}
          tabIndex={actionsShown ? 0 : -1}
          style={{ transitionDelay: actionsShown ? "140ms" : "0ms" }}
          className={`${baseButtonClasses} bg-[#25D366] hover:bg-[#20be5b] shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/45 ${
            actionsShown
              ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-x-4 scale-95 pointer-events-none"
          }`}
        >
          <WhatsAppIcon />
          <span className="pointer-events-none hidden sm:block absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-navy-950 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            WhatsApp
          </span>
        </a>

        {/* 2. Direct Call Button (appears second) */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          aria-label={`Call us at ${COMPANY_INFO.phoneDisplay}`}
          aria-hidden={!actionsShown}
          tabIndex={actionsShown ? 0 : -1}
          style={{ transitionDelay: actionsShown ? "70ms" : "0ms" }}
          className={`${baseButtonClasses} bg-[#FF7A1A] hover:bg-[#f06f0e] shadow-lg shadow-[#FF7A1A]/35 hover:shadow-xl hover:shadow-[#FF7A1A]/45 ${
            actionsShown
              ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-x-4 scale-95 pointer-events-none"
          }`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
          <span className="pointer-events-none hidden sm:block absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-navy-950 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            Call Now
          </span>
        </a>

        {/* 3. Direct Email Button (appears first - right to left) */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          aria-label={`Send email to ${COMPANY_INFO.email}`}
          aria-hidden={!actionsShown}
          tabIndex={actionsShown ? 0 : -1}
          style={{ transitionDelay: actionsShown ? "0ms" : "0ms" }}
          className={`${baseButtonClasses} bg-[#0F1E36] hover:bg-[#152a4a] shadow-lg shadow-[#0F1E36]/35 hover:shadow-xl hover:shadow-[#0F1E36]/45 ${
            actionsShown
              ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-x-4 scale-95 pointer-events-none"
          }`}
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
          <span className="pointer-events-none hidden sm:block absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-navy-950 text-white text-[11px] font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            Email Us
          </span>
        </a>

        {/* 4. Toggle Button - only shows/hides the other 3 buttons */}
        <button
          type="button"
          onMouseEnter={() => setIsExpanded(true)}
          onFocus={() => setIsExpanded(true)}
          aria-label="Show or hide quick contact actions"
          aria-expanded={actionsShown}
          aria-controls="floating-contact-actions"
          style={{ transitionDelay: "0ms" }}
          className={`${baseButtonClasses} bg-[#FF7A1A] hover:bg-[#f06f0e] shadow-lg shadow-[#FF7A1A]/35 hover:shadow-xl hover:shadow-[#FF7A1A]/45 cursor-pointer ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-8 scale-70 pointer-events-none"
          }`}
        >
          <MessageSquareMore className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
        </button>
      </div>
    </aside>
  );
}
