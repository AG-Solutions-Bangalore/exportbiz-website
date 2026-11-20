import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../constants";
import { useModal } from "../context/ModalContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDemoModal } = useModal();
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "";

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Documents", href: "/#documents" },
    { label: "Features", href: "/#features" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo (Larger size as per client request) */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo_transparent.webp"
              alt={COMPANY_INFO.fullBrandName}
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-600">
            {navLinks.map((link, idx) => (
              link.label === "Contact" ? (
                <button
                  key={idx}
                  type="button"
                  onClick={openDemoModal}
                  className="px-3.5 py-2 rounded-full hover:text-brand-blue hover:bg-brand-blue-50/70 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3.5 py-2 rounded-full hover:text-brand-blue hover:bg-brand-blue-50/70 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              type="button"
              onClick={openDemoModal}
              className="px-5 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-all shadow-sm flex items-center gap-1.5 hover:shadow-md cursor-pointer"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-body hover:text-navy-900 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link, idx) => (
            link.label === "Contact" ? (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="w-full text-left block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
              >
                {link.label}
              </a>
            )
          ))}
          <div className="pt-4 flex flex-col gap-2 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
