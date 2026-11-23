import EnquiryForm from "../components/EnquiryForm";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { COMPANY_INFO } from "../../../constants";
import SocialLinks from "../../../components/SocialLinks";

export default function EnquiryPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            Contact & Enquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Connect with {COMPANY_INFO.name} Experts
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-body leading-relaxed">
            Get personalized assistance, ask product questions, or request a full walkthrough of our export documentation ERP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact details & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-navy-900">
                Contact Information
              </h2>

              <div className="space-y-4 text-sm text-slate-body">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Email Us</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      title={`Send email to ${COMPANY_INFO.email}`}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Call Us</p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      title={`Call Export Biz at ${COMPANY_INFO.phoneDisplay}`}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Official Website</p>
                    <a
                      href={COMPANY_INFO.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={COMPANY_INFO.website}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {COMPANY_INFO.websiteDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Location</p>
                    <a
                      href={COMPANY_INFO.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-slate-body hover:text-brand-blue transition-colors block"
                      title="View on Google Maps"
                    >
                      {COMPANY_INFO.address.full}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-gray-100">
                <p className="font-semibold text-navy-900 mb-3">Follow Us</p>
                <SocialLinks
                  className="flex items-center gap-2"
                  linkClassName="w-9 h-9 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                />
              </div>
            </div>

            {/* Why choose card */}
            <div className="bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold">Why {COMPANY_INFO.name}?</h3>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-blue-100 list-disc list-inside leading-relaxed">
                <li>Automated Pre & Post-shipment documentation</li>
                <li>Duty Drawback, RoDTEP & Advance License calculation</li>
                <li>Seamless Multi-company and merchant exporter support</li>
                <li>Cloud-ready, high security and role-based permissions</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Reusable Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm
              title="Send an Enquiry / Request Demo"
              subtitle="Please provide your shipment/software needs. We usually reply within 24 hours."
            />
          </div>

        </div>

      </div>
    </div>
  );
}
