import React from "react";
import { navConfig } from "../../../config/navigation.config";
import { NavItem } from "./NavItem";

export const NavMenu = ({ activeId, setActiveId }) => {
  return (
    <nav className="hidden lg:flex items-center gap-1.5 bg-[#F1F3F5] rounded-full p-1.5 border border-slate-200/60 shadow-xs">
      {navConfig.items.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </nav>
  );
};
