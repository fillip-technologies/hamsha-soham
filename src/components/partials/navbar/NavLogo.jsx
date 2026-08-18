import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.png";

export const NavLogo = ({ onClick }) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center group focus:outline-none select-none cursor-pointer"
    >
      <img
        src={logoImg}
        alt="HAMSA SOHAM Logo"
        className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};
