import React from "react";
import { Link } from "react-router-dom";

export const PortfolioDropdown = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="w-[260px] bg-white border border-slate-200/90 rounded-2xl soft-card-shadow p-3 shadow-xl backdrop-blur-xl select-none">
      <div className="grid grid-cols-1 gap-1">
        {data.categories.map((cat, idx) => (
          <Link
            key={idx}
            to={cat.link}
            onClick={() => {
              if (onClose) onClose();
            }}
            className="group block px-4 py-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-200 text-left cursor-pointer"
          >
            <span className="text-sm font-bold text-slate-900 group-hover:text-[#FF4D27] transition-colors">
              {cat.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDropdown;
