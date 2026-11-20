import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product/" },
    { label: "Features", href: "/features/" },
    { label: "Solutions", href: "/solutions/" },
    { label: "Extended Version", href: "/extended-version/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Contact", href: "/contact/" },
  ];

  return (
    <footer className="mt-12 sm:mt-16 border-t border-gray-200/80 bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left: Brand Logo & Product by AG Solutions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo_transparent.webp"
                alt="Export Biz by AG Solutions"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <span className="hidden sm:inline-block text-gray-300">|</span>
            <span className="text-xs sm:text-sm text-slate-muted font-medium">
              A product by <strong className="font-semibold text-navy-900">AG Solutions</strong>
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-slate-body">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-3 text-slate-muted">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-brand-blue hover:bg-brand-blue-50 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53 1.53 1.53 0 0 0 1.53 1.53m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-brand-blue hover:bg-brand-blue-50 transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
              </svg>
            </a>
            <a
              href="https://agsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full hover:text-brand-blue hover:bg-brand-blue-50 transition-colors"
              aria-label="AG Solutions Website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-subtle gap-2">
          <p>© {new Date().getFullYear()} Export Biz by AG Solutions. All rights reserved.</p>
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
