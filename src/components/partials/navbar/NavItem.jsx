import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PortfolioDropdown } from "./PortfolioDropdown";
import { useClickOutside } from "../../../hooks/useClickOutside";

export const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);
  const location = useLocation();

  useClickOutside(itemRef, () => setIsOpen(false));

  const isActive =
    location.pathname === item.href ||
    (item.href !== "/" && location.pathname.startsWith(item.href));

  const handleClick = (e) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      ref={itemRef}
      className="relative flex items-center"
      onMouseEnter={() => item.hasDropdown && setIsOpen(true)}
      onMouseLeave={() => item.hasDropdown && setIsOpen(false)}
    >
      <Link
        to={item.href || "/"}
        onClick={handleClick}
        className={`px-5 py-2 text-[16px] transition-all duration-200 rounded-full flex items-center gap-1.5 focus:outline-none select-none cursor-pointer ${
          isActive
            ? "bg-white text-black font-semibold shadow-xs border border-slate-200/80"
            : "text-black/80 hover:text-black font-normal hover:bg-white/60"
        }`}
      >
        <span>{item.label}</span>
        {item.hasDropdown && (
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 text-black/60 ${
              isOpen ? "rotate-180 text-black" : ""
            }`}
          />
        )}
      </Link>

      {/* Mega Dropdown Portal */}
      {item.hasDropdown && isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-[22%] pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <PortfolioDropdown
            data={item.dropdownData}
            onClose={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};
