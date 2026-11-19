import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo_transparent.png"
              alt="Export Biz by AG Solutions"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-muted">
            <a
              href="/"
              className="px-4 py-1.5 rounded-full bg-brand-blue-50 text-brand-blue font-semibold transition-colors"
            >
              Home
            </a>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors cursor-pointer"
              >
                Product
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-navy-900 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-card-border p-2 hidden group-hover:block transition-all">
                <a
                  href="/product/features/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Document Automation
                </a>
                <a
                  href="/product/compliance/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Compliance Tracking
                </a>
                <a
                  href="/product/financials/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Financial Overview
                </a>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors cursor-pointer"
              >
                Features
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-navy-900 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-card-border p-2 hidden group-hover:block transition-all">
                <a
                  href="/features/documentation/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Export Documentation
                </a>
                <a
                  href="/features/multi-company/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Multi-Company Management
                </a>
                <a
                  href="/features/costing/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Costing & Incentives
                </a>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors cursor-pointer"
              >
                Solutions
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-navy-900 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-card-border p-2 hidden group-hover:block transition-all">
                <a
                  href="/solutions/manufacturers/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Manufacturers & Exporters
                </a>
                <a
                  href="/solutions/merchants/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Trading & Merchant Exporters
                </a>
                <a
                  href="/solutions/multi-company-groups/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Multi-Company Groups
                </a>
              </div>
            </div>

            <a
              href="/extended-version/"
              className="px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors"
            >
              Extended Version
            </a>

            <a
              href="/about-us/"
              className="px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors"
            >
              About Us
            </a>

            <a
              href="/contact/"
              className="px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="/login/"
              className="px-5 py-2 text-sm font-semibold text-navy-800 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Login
            </a>
            <a
              href="/request-demo/"
              className="px-5 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-all shadow-sm flex items-center gap-1.5 hover:shadow-md"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-body hover:text-navy-900 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <a
            href="/"
            className="block px-3 py-2 rounded-lg bg-brand-blue-50 text-brand-blue font-semibold text-sm"
          >
            Home
          </a>
          <a
            href="/product/"
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Product
          </a>
          <a
            href="/features/"
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Features
          </a>
          <a
            href="/solutions/"
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Solutions
          </a>
          <a
            href="/extended-version/"
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Extended Version
          </a>
          <a
            href="/about-us/"
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            About Us
          </a>
          <a
            href="/contact/"
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Contact
          </a>
          <div className="pt-4 flex flex-col gap-2">
            <a
              href="/login/"
              className="w-full text-center py-2.5 text-sm font-semibold text-navy-800 border border-gray-300 rounded-full"
            >
              Login
            </a>
            <a
              href="/request-demo/"
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full flex items-center justify-center gap-1.5"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
