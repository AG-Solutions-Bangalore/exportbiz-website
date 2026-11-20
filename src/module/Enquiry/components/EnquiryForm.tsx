import { useState } from "react";
import { useCreateEnquiry } from "../hooks/useCreateEnquiry";
import type { CreateEnquiryPayload } from "../api/enquiryApi";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export interface EnquiryFormProps {
  onSuccess?: () => void;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function EnquiryForm({
  onSuccess,
  className = "",
  title = "Get in Touch / Request a Demo",
  subtitle = "Fill in the details below and our export business experts will reach out to you.",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<CreateEnquiryPayload>({
    full_name: "",
    mobile_no: "",
    email_id: "",
    lookingfor: "",
    quantity: "",
    lookingUnits: "",
    remarks: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { submit, loading, error, reset } = useCreateEnquiry();

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.full_name.trim()) {
      errors.full_name = "Full name is required";
    }
    if (!formData.mobile_no.trim()) {
      errors.mobile_no = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile_no.trim())) {
      errors.mobile_no = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email_id.trim()) {
      errors.email_id = "Email address is required";
    } else if (!emailRegex.test(formData.email_id.trim())) {
      errors.email_id = "Please enter a valid email address";
    }
    if (!formData.lookingfor.trim()) {
      errors.lookingfor = "Please specify what you are looking for";
    }
    if (!formData.quantity.trim()) {
      errors.quantity = "Quantity is required";
    }
    if (!formData.lookingUnits.trim()) {
      errors.lookingUnits = "Please select a unit";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus("idle");
    const response = await submit(formData);
    if (response) {
      setSubmitStatus("success");
      setFormData({
        full_name: "",
        mobile_no: "",
        email_id: "",
        lookingfor: "",
        quantity: "",
        lookingUnits: "",
        remarks: "",
      });
      onSuccess?.();
    } else {
      setSubmitStatus("error");
    }
  };

  const handleNewEnquiry = () => {
    reset();
    setSubmitStatus("idle");
  };

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-8 ${className}`}>
      {title && (
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-xs sm:text-sm text-slate-body leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {submitStatus === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-navy-900">Enquiry Submitted Successfully!</h4>
          <p className="text-sm text-slate-body max-w-md mx-auto">
            Thank you for reaching out. Our team will review your requirements and get in touch with you shortly.
          </p>
          <button
            type="button"
            onClick={handleNewEnquiry}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-blue text-white font-semibold text-xs sm:text-sm shadow hover:bg-brand-blue-hover transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
          {submitStatus === "error" && error && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 p-3.5 text-red-800 text-xs sm:text-sm"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-muted bg-white transition-all outline-none ${
                  fieldErrors.full_name
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
                }`}
              />
              {fieldErrors.full_name && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.full_name}</p>
              )}
            </div>

            {/* Mobile No */}
            <div>
              <label htmlFor="mobile_no" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobile_no"
                name="mobile_no"
                type="tel"
                maxLength={10}
                value={formData.mobile_no}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-muted bg-white transition-all outline-none ${
                  fieldErrors.mobile_no
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
                }`}
              />
              {fieldErrors.mobile_no && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.mobile_no}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email_id" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email_id"
                name="email_id"
                type="email"
                value={formData.email_id}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-muted bg-white transition-all outline-none ${
                  fieldErrors.email_id
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
                }`}
              />
              {fieldErrors.email_id && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.email_id}</p>
              )}
            </div>

            {/* Looking For */}
            <div>
              <label htmlFor="lookingfor" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                Looking For <span className="text-red-500">*</span>
              </label>
              <input
                id="lookingfor"
                name="lookingfor"
                type="text"
                value={formData.lookingfor}
                onChange={handleChange}
                placeholder="e.g. Export Documentation ERP"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-muted bg-white transition-all outline-none ${
                  fieldErrors.lookingfor
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
                }`}
              />
              {fieldErrors.lookingfor && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.lookingfor}</p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-muted bg-white transition-all outline-none ${
                  fieldErrors.quantity
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
                }`}
              />
              {fieldErrors.quantity && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.quantity}</p>
              )}
            </div>

            {/* Units Dropdown */}
            <div>
              <label htmlFor="lookingUnits" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                Unit of Measure <span className="text-red-500">*</span>
              </label>
              <select
                id="lookingUnits"
                name="lookingUnits"
                value={formData.lookingUnits}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-navy-900 bg-white transition-all outline-none ${
                  fieldErrors.lookingUnits
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
                }`}
              >
                <option value="">Select unit</option>
                <option value="KG">KG (Kilograms)</option>
                <option value="TON">TON (Metric Tons)</option>
                <option value="NOS">NOS (Units / Numbers)</option>
                <option value="PCS">PCS (Pieces)</option>
                <option value="BOX">BOX (Boxes / Cartons)</option>
                <option value="CBM">CBM (Cubic Meters)</option>
                <option value="LTR">LTR (Liters)</option>
                <option value="CONTAINER">CONTAINER</option>
                <option value="OTHER">Other</option>
              </select>
              {fieldErrors.lookingUnits && (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.lookingUnits}</p>
              )}
            </div>
          </div>

          {/* Remarks */}
          <div>
            <label htmlFor="remarks" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
              Remarks / Additional Requirements
            </label>
            <textarea
              id="remarks"
              name="remarks"
              rows={2}
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Any specific instructions, export destination, questions..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-slate-muted bg-white transition-all outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <span>Submit Enquiry</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
