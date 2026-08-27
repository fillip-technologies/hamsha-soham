import React, { useState, useEffect } from "react";
import {
  X,
  Lock,
  Building2,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  User,
  KeyRound,
  Hospital,
} from "lucide-react";

export const LoginModal = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState("hospital"); // 'hospital' | 'doctor' | 'partner'
  const [formData, setFormData] = useState({
    hospitalCode: "",
    username: "",
    password: "",
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSubmittedMessage("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage("Connecting to secure hospital gateway...");
      setTimeout(() => {
        setSubmittedMessage("");
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative text-slate-900 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF4D27] text-[10px] font-black uppercase tracking-wider">
              <Lock className="w-3 h-3" />
              <span>Client Portal Access</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0B132B] tracking-tight">
              Sign In to Platform
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close login modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Role Selector */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl mb-5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setSelectedRole("hospital")}
            className={`py-2 px-1 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 transition-all cursor-pointer ${
              selectedRole === "hospital"
                ? "bg-white text-[#0B132B] shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Hospital className="w-3.5 h-3.5" />
            <span>Hospital</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole("doctor")}
            className={`py-2 px-1 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 transition-all cursor-pointer ${
              selectedRole === "doctor"
                ? "bg-white text-[#0B132B] shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Doctor</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedRole("partner")}
            className={`py-2 px-1 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 transition-all cursor-pointer ${
              selectedRole === "partner"
                ? "bg-white text-[#0B132B] shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Diagnostics</span>
          </button>
        </div>

        {submittedMessage ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="font-extrabold text-emerald-900 text-base">
              Authenticated
            </h4>
            <p className="text-xs text-emerald-700 font-medium">
              {submittedMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Hospital Code */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Hospital / Organization Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. HS-PATNA-01"
                  value={formData.hospitalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, hospitalCode: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#FF4D27] focus:ring-2 focus:ring-[#FF4D27]/20 outline-none text-xs sm:text-sm font-medium transition-all"
                />
                <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Username / Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Username or Staff Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="name@hospital.com"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#FF4D27] focus:ring-2 focus:ring-[#FF4D27]/20 outline-none text-xs sm:text-sm font-medium transition-all"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Please contact your hospital IT administrator to reset credentials.");
                  }}
                  className="text-[11px] font-bold text-[#FF4D27] hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#FF4D27] focus:ring-2 focus:ring-[#FF4D27]/20 outline-none text-xs sm:text-sm font-medium transition-all"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
                className="w-4 h-4 rounded text-[#FF4D27] focus:ring-[#FF4D27] border-slate-300"
              />
              <label htmlFor="remember" className="text-xs text-slate-600 font-medium cursor-pointer">
                Keep me signed in on this terminal
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full bg-[#FF4D27] hover:bg-[#E03A14] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF4D27]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer mt-2 disabled:opacity-70"
            >
              <span>{isSubmitting ? "Authenticating..." : "Sign In to Portal"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Security Footer Note */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>256-Bit SSL Encrypted • NABH / ABDM Gateway</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
