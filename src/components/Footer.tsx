import {
  Globe,
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../constants";
import SocialLinks from "./SocialLinks";
import { useModal } from "../context/ModalContext";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
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
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070D1E] text-slate-300 pt-16 sm:pt-16 pb-6 overflow-hidden border-t border-slate-800/80">
      {/* Ambient background lighting and subtle glowing orb */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid backdrop pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand & Parent Company Pitch (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo_transparent.webp"
                alt={COMPANY_INFO.fullBrandName}
                className="h-11 sm:h-12 w-auto object-contain filter brightness-0 invert opacity-95"
              />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The next-generation export documentation and operations workspace.
              Designed for manufacturers, trading houses, and multi-company
              groups worldwide.
            </p>

            {/* Parent company badges & website link with icon */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={COMPANY_INFO.parentWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-brand-blue/60 text-xs text-slate-300 hover:text-white transition-all backdrop-blur-sm group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>A product by</span>
                <strong className="text-white font-bold tracking-wide group-hover:text-blue-300 transition-colors">
                  {COMPANY_INFO.parentCompany}
                </strong>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={COMPANY_INFO.parentWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 text-xs font-semibold text-blue-300 hover:text-white transition-all group"
              >
                <Globe className="w-3.5 h-3.5 text-brand-blue group-hover:rotate-12 transition-transform" />
                <span>ag-solutions.in</span>
                <ArrowUpRight className="w-3 h-3 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Social Media Links with authentic brand colors */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-brand-blue" />
                Official Social Channels
              </span>
              <SocialLinks
                colorful={true}
                className="flex items-center space-x-2.5"
              />
            </div>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {link.label === "Contact" ? (
                    <button
                      type="button"
                      onClick={openDemoModal}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-blue" />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-blue" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Live Demo CTA Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Get In Touch
            </h4>

            <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 space-y-3.5 backdrop-blur-md">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-brand-blue shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <a
                  href={COMPANY_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-xs truncate"
                  title="View on Google Maps"
                >
                  {COMPANY_INFO.address.full}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-brand-blue shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <a
                    href={COMPANY_INFO.parentWebsite}
                    className="hover:text-white transition-colors flex items-center gap-1 text-slate-200 font-medium"
                  >
                    <span>ag-solutions.in</span>
                    <ArrowUpRight className="w-3 h-3 text-brand-blue" />
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Parent Website
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold transition-all shadow-md hover:shadow-brand-blue/25 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request Live Demonstration</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Policies & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
            <p>
              © {CURRENT_YEAR}{" "}
              <a
                href={COMPANY_INFO.parentWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {COMPANY_INFO.fullBrandName}
              </a>
              . All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/policies/" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white font-medium transition-colors cursor-pointer inline-flex items-center gap-1 group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-brand-blue" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
