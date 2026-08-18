import React from "react";

export const Badge = ({ children, variant = "flame", className = "" }) => {
  const variants = {
    flame: "bg-[#FF4D27]/10 text-[#FF4D27] border border-[#FF4D27]/25",
    slate: "bg-slate-100 text-slate-800 border border-slate-200",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
