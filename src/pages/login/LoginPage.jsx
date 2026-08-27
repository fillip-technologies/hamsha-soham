import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  User,
} from "lucide-react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.usernameOrEmail || !formData.password) {
      setErrorMessage("Please enter your username/email and password.");
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1200);
    }, 900);
  };

  return (
    <div className="min-h-[88vh] bg-gradient-to-br from-[#F4F8FC] via-[#F8FBFE] to-white text-slate-900 font-sans select-none flex flex-col justify-center items-center py-10 sm:py-16 px-4 relative overflow-hidden">
      
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-orange-100/30 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      {/* Centered Login Card */}
      <div className="w-full max-w-[480px] relative z-10 space-y-6">
        
        {/* Main Form Container Card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xl space-y-6 text-left relative overflow-hidden">
          
          {/* Card Title */}
          <div className="text-center space-y-1.5 border-b border-slate-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B132B] tracking-tight">
              Sign In to Account
            </h1>
            <p className="text-xs text-slate-500 font-normal">
              Enter your credentials below to access your account.
            </p>
          </div>

          {/* Success Notification */}
          {isSuccess && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Authenticated successfully! Redirecting...</span>
            </div>
          )}

          {/* Error Notification */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Elements */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* 1. Username or Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                Username or Email Address <span className="text-[#FF4D27]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  placeholder="e.g. developer5.filliptechnologies@gmail.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#FF4D27] focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                />
              </div>
            </div>

            {/* 2. Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 block">
                  Password <span className="text-[#FF4D27]">*</span>
                </label>
                <Link
                  to="/contact"
                  className="text-[11px] font-bold text-[#FF4D27] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#FF4D27] focus:bg-white text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* 3. Remember Me Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-slate-300 text-[#FF4D27] focus:ring-[#FF4D27] cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="text-xs text-slate-600 font-medium cursor-pointer"
              >
                Keep me signed in on this terminal
              </label>
            </div>

            {/* 4. Submit Sign In Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#FF4D27] to-[#FF7043] hover:from-[#E03A14] hover:to-[#FF4D27] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#FF4D27]/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </span>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

        {/* Help / Support Link */}
        <div className="text-center text-xs text-slate-500">
          <span>Need help logging in? </span>
          <Link to="/contact" className="font-bold text-[#0B132B] hover:text-[#FF4D27] underline">
            Contact IT Support
          </Link>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;
