import { useState } from "react";
import {
  FileSpreadsheet,
  ArrowLeftRight,
  Building,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useCreateEnquiry } from "../../Enquiry";
import { COMPANY_INFO } from "../../../constants";

export default function Solutions() {
  const [mobile, setMobile] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const { submit, loading } = useCreateEnquiry();

  const handleQuickDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMobile = mobile.trim().replace(/\D/g, "");
    if (!cleanMobile) {
      setErrorMsg("Please enter mobile number");
      return;
    }
    if (!/^[0-9]{10}$/.test(cleanMobile)) {
      setErrorMsg("Enter a valid 10-digit number");
      return;
    }

    setErrorMsg(null);
    const response = await submit({
      mobile_no: cleanMobile,
    });

    if (
      response &&
      (response.code === "200" ||
        response.code === 200 ||
        response.status === true ||
        !response.code)
    ) {
      setIsSuccess(true);
      setMobile("");
      setTimeout(() => setIsSuccess(false), 6000);
    } else {
      setErrorMsg("Failed to submit. Please try again.");
    }
  };

  const solutions = [
    {
      icon: FileSpreadsheet,
      title: "Manufacturers & Exporters",
      description:
        "Manage export orders, documents, costing and incentives seamlessly.",
    },
    {
      icon: ArrowLeftRight,
      title: "Trading & Merchant Exporters",
      description:
        "Keep customer documents, certificates and shipments organized.",
    },
    {
      icon: Building,
      title: "Multi-Company Groups",
      description:
        "Run and manage multiple export companies from a single platform.",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="relative bg-[#F5F8FE] border border-blue-100 rounded-2xl overflow-hidden shadow-sm">
        {/* Right side background image of port / cranes / container ship */}
        <div className="absolute -right-6 sm:-right-10 lg:-right-12 top-0 bottom-0 w-[46%] lg:w-[40%] xl:w-[35%] hidden md:block pointer-events-none">
          <img
            src={`${COMPANY_INFO.imageBaseUrl}/cargo_ship_image.webp`}
            alt="Global Export Shipping and Cargo Transportation"
            title="Global Export Shipping and Cargo Transportation"
            className="w-full h-full object-cover object-right select-none"
          />
          {/* Subtle horizontal gradient to seamlessly blend image into background */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F8FE] to-transparent" />
        </div>

        {/* Content container */}
        <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left: Title, Description & Quick Demo Input */}
          <div className="md:col-span-6 lg:col-span-5 text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B1536] tracking-tight leading-tight">
              Solutions for Export Businesses
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Designed for exporters, manufacturers, and trading companies
              handling end-to-end export operations.
            </p>

            {/* Quick Demo Mobile Input */}
            <div className="mt-4 max-w-sm">
              {isSuccess ? (
                <div className="flex items-center gap-2 py-2 px-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-xs font-semibold animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    Callback requested! Our team will call you shortly.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleQuickDemo}
                  className="space-y-1"
                  noValidate
                >
                  <div className="relative flex items-center">
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => {
                        setMobile(
                          e.target.value.replace(/\D/g, "").slice(0, 10),
                        );
                        if (errorMsg) setErrorMsg(null);
                      }}
                      placeholder="Enter mobile number for demo"
                      className={`w-full pl-3.5 pr-28 py-2.5 text-xs sm:text-sm rounded-xl bg-white border ${
                        errorMsg
                          ? "border-red-400 focus:border-red-500"
                          : "border-blue-200 focus:border-brand-blue"
                      } text-navy-900 placeholder:text-slate-400 shadow-2xs outline-none transition-all`}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-1 px-3 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold flex items-center gap-1 transition-all shadow-xs disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <>
                          <span>Get Demo</span>
                          <ArrowRight className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                  {errorMsg && (
                    <p className="text-[11px] text-red-600 font-medium pl-1">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Middle: 3 stacked list items */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3 sm:space-y-3.5">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-start sm:items-center gap-3 p-1.5 sm:p-0 rounded-xl transition-transform duration-150 hover:translate-x-0.5"
                >
                  {/* Rounded icon badge with soft blue tint */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-blue-100 shadow-xs flex items-center justify-center shrink-0 text-[#1D68F2] group-hover:bg-[#1D68F2] group-hover:text-white transition-colors mt-0.5 sm:mt-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0B1536] group-hover:text-[#1D68F2] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right spacer for the background image on desktop */}
          <div className="hidden lg:block lg:col-span-3" />
        </div>
      </div>
    </section>
  );
}
