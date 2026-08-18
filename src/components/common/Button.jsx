import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-xl select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#FF4D27] hover:bg-[#E03A14] text-white flame-glow hover:shadow-lg hover:shadow-[#FF4D27]/30 hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#FF4D27]",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-400",
    outline:
      "border-2 border-slate-200 text-slate-700 hover:border-[#FF4D27] hover:text-[#FF4D27] hover:bg-[#FF4D27]/5 focus:ring-[#FF4D27]",
    ghost:
      "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-4.5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};
