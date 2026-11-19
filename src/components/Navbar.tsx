import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo_transparent.png"
              alt="Export Biz by AG Solutions"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-muted">
            <Link
              to="/"
              className="px-4 py-1.5 rounded-full bg-brand-blue-50 text-brand-blue font-semibold transition-colors"
            >
              Home
            </Link>

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
                <Link
                  to="/product/features/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Document Automation
                </Link>
                <Link
                  to="/product/compliance/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Compliance Tracking
                </Link>
                <Link
                  to="/product/financials/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Financial Overview
                </Link>
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
                <Link
                  to="/features/documentation/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Export Documentation
                </Link>
                <Link
                  to="/features/multi-company/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Multi-Company Management
                </Link>
                <Link
                  to="/features/costing/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Costing & Incentives
                </Link>
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
                <Link
                  to="/solutions/manufacturers/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Manufacturers & Exporters
                </Link>
                <Link
                  to="/solutions/merchants/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Trading & Merchant Exporters
                </Link>
                <Link
                  to="/solutions/multi-company-groups/"
                  className="block px-3 py-2 text-xs font-medium text-slate-body hover:bg-brand-blue-50 hover:text-brand-blue rounded-lg"
                >
                  Multi-Company Groups
                </Link>
              </div>
            </div>

            <Link
              to="/extended-version/"
              className="px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors"
            >
              Extended Version
            </Link>

            <Link
              to="/about-us/"
              className="px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contact/"
              className="px-3 py-1.5 rounded-full hover:text-navy-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/login/"
              className="px-5 py-2 text-sm font-semibold text-navy-800 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/request-demo/"
              className="px-5 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full transition-all shadow-sm flex items-center gap-1.5 hover:shadow-md"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
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
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg bg-brand-blue-50 text-brand-blue font-semibold text-sm"
          >
            Home
          </Link>
          <Link
            to="/product/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Product
          </Link>
          <Link
            to="/features/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Features
          </Link>
          <Link
            to="/solutions/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Solutions
          </Link>
          <Link
            to="/extended-version/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Extended Version
          </Link>
          <Link
            to="/about-us/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            About Us
          </Link>
          <Link
            to="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-body hover:bg-gray-50 font-medium text-sm"
          >
            Contact
          </Link>
          <div className="pt-4 flex flex-col gap-2">
            <Link
              to="/login/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-navy-800 border border-gray-300 rounded-full"
            >
              Login
            </Link>
            <Link
              to="/request-demo/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-full flex items-center justify-center gap-1.5"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
