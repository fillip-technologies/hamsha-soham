import React, { useState } from "react";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";
import { NavActions } from "./NavActions";
import { MobileDrawer } from "./MobileDrawer";
import { RequestDemoModal } from "../../common/RequestDemoModal";

export const Navbar = () => {
  const { isScrolled } = useScrollDirection();
  const [activeId, setActiveId] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Main Navbar Header */}
        <div
          className={`w-full transition-all duration-300 border-b ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-slate-200/90 shadow-xs py-3"
              : "bg-white border-slate-200/70 py-4"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between min-h-14">
            {/* Left Brand Logo */}
            <NavLogo onClick={() => setActiveId("home")} />

            {/* Center Floating Pill Navigation Menu */}
            <NavMenu activeId={activeId} setActiveId={setActiveId} />

            {/* Right Actions */}
            <NavActions
              isMobileOpen={isMobileOpen}
              onToggleMobile={() => setIsMobileOpen((prev) => !prev)}
              onRequestDemo={() => setIsDemoModalOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Drawer Overlay Partial */}
        <MobileDrawer
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          activeId={activeId}
          setActiveId={setActiveId}
          onRequestDemo={() => setIsDemoModalOpen(true)}
        />
      </header>

      {/* Global Request Live Demo Modal */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
