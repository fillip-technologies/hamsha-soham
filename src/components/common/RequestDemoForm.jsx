import React, { useState } from "react";
import {
  User,
  Building2,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Hospital,
  Bed,
  Layers,
  FileSpreadsheet,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

export const RequestDemoForm = ({ defaultProduct = "", onSuccess, isInModal = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    designation: "",
    email: "",
    mobile: "",
    city: "",
    hospitalType: "",
    beds: "",
    product: defaultProduct || "e_Kshitiz",
    currentHis: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 2500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h4 className="text-2xl font-black text-[#0B132B]">
          Demo Request Submitted Successfully!
        </h4>
        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our healthcare solutions specialist will contact you at{" "}
          <span className="font-bold text-slate-900">{formData.mobile || formData.email}</span> within 2 business hours to schedule your personalized live demo for{" "}
          <span className="font-bold text-slate-900">{formData.organization || "your organization"}</span>.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              organization: "",
              designation: "",
              email: "",
              mobile: "",
              city: "",
              hospitalType: "",
              beds: "",
              product: defaultProduct || "e_Kshitiz",
              currentHis: "",
              message: "",
            });
          }}
          className="px-6 py-2.5 rounded-full bg-[#0B132B] text-white font-bold text-xs hover:bg-[#FF4D27] transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left select-none">
      
      {/* Row 1: Name & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Name *</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dr. Rajesh Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Organization *</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Apollo / City Eye Hospital"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Designation & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Designation *</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Medical Director, IT Head, COO"
            value={formData.designation}
            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Email *</span>
          </label>
          <input
            type="email"
            required
            placeholder="rajesh@hospital.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Mobile & City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Mobile *</span>
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>City</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Patna, Delhi, Bengaluru"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Hospital Type & Number of Beds */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Hospital className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Hospital Type *</span>
          </label>
          <select
            required
            value={formData.hospitalType}
            onChange={(e) => setFormData({ ...formData, hospitalType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          >
            <option value="">Select Hospital Type</option>
            <option value="Multispeciality Hospital">Multispeciality Hospital</option>
            <option value="Eye Hospital">Eye Hospital</option>
            <option value="Clinic">Clinic</option>
            <option value="Diagnostic Centre">Diagnostic Centre</option>
            <option value="Healthcare Group">Healthcare Group</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-slate-500" />
            <span>Number of Beds</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 50 Beds, 100+ Beds"
            value={formData.beds}
            onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 5: Product Interested In & Current HIS/HMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#FF4D27]" />
            <span>Product Interested In *</span>
          </label>
          <select
            required
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          >
            <option value="e_Kshitiz">e_Kshitiz (Enterprise Hospital HIMS)</option>
            <option value="e_Kshitiz Lite">e_Kshitiz Lite (Hospital Management for SMBs)</option>
            <option value="e_Drishti">e_Drishti (Enterprise Eye Hospital HIMS)</option>
            <option value="e_Drishti Lite">e_Drishti Lite (Eye-care solution for smaller orgs)</option>
            <option value="HWAI">HWAI (Healthcare Workforce & Operations Platform)</option>
            <option value="Complete Healthcare IT Suite">Complete Healthcare IT Suite</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
            <FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />
            <span>Current HIS/HMS</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Manual/Paper, Existing vendor name"
            value={formData.currentHis}
            onChange={(e) => setFormData({ ...formData, currentHis: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 6: Message */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
          <span>Message</span>
        </label>
        <textarea
          rows={isInModal ? 2 : 3}
          placeholder="Specific requirements, branches count, integration needs, or preferred demo timings..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-[#FF4D27] focus:bg-white transition-colors resize-none"
        />
      </div>

      {/* Submit Action */}
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF4D27] to-[#FF6B4A] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF4D27]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
      >
        <span>Request Live Demo</span>
        <Send className="w-4 h-4" />
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        * Required fields. Your clinical and organizational data is strictly confidential under NABH & ISO 27001 standards.
      </p>
    </form>
  );
};

export default RequestDemoForm;
