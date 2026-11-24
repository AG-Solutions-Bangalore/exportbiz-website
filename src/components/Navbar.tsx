import { useState, useEffect } from "react";
import {
  ArrowRight,
  X,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Play,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../constants";
import { useModal } from "../context/ModalContext";
import SocialLinks from "./SocialLinks";
import { scrollToTarget, scrollToTop } from "../utils/scroll";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDemoModal } = useModal();
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "";

  const navLinks = [
    {
      label: "Home",
      href: "/#hero",
      index: "01",
      title: "Export Biz – Complete Export Business Workspace",
    },
    {
      label: "Why Us",
      href: "/#why-us",
      index: "02",
      title: "Why Choose Export Biz",
    },
    {
      label: "Documents",
      href: "/#documents",
      index: "03",
      title: "Explore Export Documentation Solutions",
    },
    {
      label: "Features",
      href: "/#features",
      index: "04",
      title: "Explore Export Biz Platform Features",
    },
    {
      label: "Solutions",
      href: "/#solutions",
      index: "05",
      title: "Export Business Management Solutions",
    },
    {
      label: "Contact",
      href: "/#contact",
      index: "06",
      title: "Export Business Management Solutions",
    },
  ];

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (targetId === "hero") {
        scrollToTop();
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          scrollToTarget(elem, { offset: -80 });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  const handleOpenDemo = () => {
    setMobileMenuOpen(false);
    openDemoModal();
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link to="/" title="Export Biz – Home" className="flex items-center gap-3 group">
              <img
                src={COMPANY_INFO.logo}
                alt="Export Biz – Export Business Management Platform"
                title="Export Biz – Export Business Management Platform"
                width="160"
                height="48"
                loading="eager"
                decoding="async"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Links (>= lg) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-600">
              {navLinks.map((link) =>
                link.label === "Contact" ? (
                  <button
                    key={link.index}
                    type="button"
                    onClick={openDemoModal}
                    title={link.title}
                    className="px-3.5 py-2 rounded-full hover:text-brand-blue hover:bg-brand-blue-50/70 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.index}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    title={link.title}
                    className="px-3.5 py-2 rounded-full hover:text-brand-blue hover:bg-brand-blue-50/70 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Quick Demo CTA visible on desktop and tablets */}
              <button
                type="button"
                onClick={openDemoModal}
                title="Request a Free Demo of Export Biz"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full transition-all shadow-sm hover:shadow-md hover:shadow-brand-orange/25 cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Modern Awwwards-style Animated Hamburger Toggle (< lg) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-navy-900 flex flex-col items-center justify-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 cursor-pointer active:scale-95"
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className={`w-5 h-0.5 bg-navy-900 rounded-full transition-all duration-300 transform origin-center ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-navy-900 rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-navy-900 rounded-full transition-all duration-300 transform origin-center ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Awwwards-Caliber Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden flex flex-col bg-white/98 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0952F7 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Drawer Header Bar */}
        <div className="relative z-10 flex items-center justify-between px-5 sm:px-6 h-18 border-b border-slate-100/80 bg-white/60 backdrop-blur-md">
          <Link
            to="/"
            title="Export Biz – Home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src={COMPANY_INFO.logo}
              alt="Export Biz – Export Documentation Software"
              title="Export Biz – Export Documentation Software"
              width="240"
              height="80"
              loading="lazy"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-navy-900 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 text-navy-900" />
          </button>
        </div>

        {/* Scrollable Drawer Content */}
        <div className="relative z-10 flex-1 overflow-y-auto px-5 sm:px-6 py-6 flex flex-col justify-between space-y-6">
          {/* Main Navigation Index */}
          <div>
            <div className="flex items-center justify-between pb-3 px-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                Navigation Index
              </span>
            </div>

            <nav className="divide-y divide-slate-100/80">
              {navLinks.map((link) => (
                <div key={link.index} className="py-1">
                  {link.label === "Contact" ? (
                    <button
                      type="button"
                      onClick={handleOpenDemo}
                      title={link.title}
                      className="w-full text-left py-3 px-3.5 rounded-xl hover:bg-brand-blue-50/70 active:bg-brand-blue-50 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span className="flex items-baseline gap-3.5">
                        <span className="text-xs font-mono font-bold text-brand-blue/70 group-hover:text-brand-blue transition-colors">
                          {link.index}
                        </span>
                        <span className="text-xl sm:text-2xl font-extrabold text-navy-900 group-hover:text-brand-blue transition-colors tracking-tight">
                          {link.label}
                        </span>
                      </span>
                     
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      title={link.title}
                      className="py-3 px-3.5 rounded-xl hover:bg-brand-blue-50/70 active:bg-brand-blue-50 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-baseline gap-3.5">
                        <span className="text-xs font-mono font-bold text-brand-blue/70 group-hover:text-brand-blue transition-colors">
                          {link.index}
                        </span>
                        <span className="text-xl sm:text-2xl font-extrabold text-navy-900 group-hover:text-brand-blue transition-colors tracking-tight">
                          {link.label}
                        </span>
                      </div>
                     
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Action Hub & Quick Conversion CTAs */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleOpenDemo}
                title="Request a Free Demo of Export Biz"
                className="w-full py-3.5 px-6 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-brand-orange/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request a Free Demo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="https://demo.exportbiz.in/signup"
                target="_blank"
                rel="noopener noreferrer"
                title="Sign Up for Export Biz"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold text-sm transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <div className="w-4 h-4 rounded-full border border-navy-900/60 flex items-center justify-center">
                  <Play className="w-2 h-2 fill-navy-900 text-navy-900 ml-0.5" />
                </div>
                <span>Start Free Trial</span>
              </a>
            </div>

            {/* Direct Contact & Credibility Info */}
            <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-navy-900">
                  Direct Support
                </span>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1 text-xs text-slate-600">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  title="Call Export Biz for Enquiries and Support"
                  className="flex items-center gap-2 hover:text-brand-blue transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <span className="hidden sm:inline text-slate-300">·</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  title="Email Export Biz for Enquiries and Support"
                  className="flex items-center gap-2 hover:text-brand-blue transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-600 border-t border-slate-200/60">
                <a
                  href={COMPANY_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-blue transition-colors truncate"
                  title="View on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span className="truncate">{COMPANY_INFO.address.full}</span>
                </a>
              </div>
            </div>

            {/* Parent Brand & Social Links */}
            <div className="flex items-center justify-between pt-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span>
                  By{" "}
                  <a
                    href={COMPANY_INFO.parentWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Website Development and Technology Partner"
                    className="text-brand-blue hover:underline"
                  >
                    <strong className="text-navy-900">
                      {COMPANY_INFO.parentCompany}
                    </strong>
                  </a>
                </span>
              </div>

              <SocialLinks
                className="flex items-center space-x-2 text-slate-500"
                linkClassName="w-8 h-8 rounded-lg bg-slate-100 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
