import { Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../constants";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  const links = [
    { label: "Home", href: "/#hero" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Documents", href: "/#documents" },
    { label: "Features", href: "/#features" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="mt-12 sm:mt-16 border-t border-gray-200/80 bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left: Brand Logo (Larger size) & Product by AG Solutions (Bold AG Solutions) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo_transparent.webp"
                alt={COMPANY_INFO.fullBrandName}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <span className="hidden sm:inline-block text-gray-300">|</span>
            <span className="text-xs sm:text-sm text-slate-muted font-medium">
              A product by <strong className="font-extrabold text-navy-900 tracking-tight text-sm sm:text-base">{COMPANY_INFO.parentCompany}</strong>
            </span>
          </div>

          {/* Center: Single-Page Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-brand-blue transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-3 text-slate-muted">
            <SocialLinks />
            <a
              href={COMPANY_INFO.parentWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-brand-blue hover:bg-brand-blue-50 transition-colors"
              aria-label={`${COMPANY_INFO.parentCompany} Website`}
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-subtle gap-2">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullBrandName}. All rights reserved. <span className="opacity-70">v{COMPANY_INFO.version}</span></p>
          <div className="flex items-center space-x-4">
            <Link to="/policies/" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-brand-blue transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
