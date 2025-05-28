import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Improved active link detection to handle sub-routes
  const isActive = (path) => 
    location.pathname === path || 
    (path !== "/" && location.pathname.startsWith(path));

  // Reusable NavLink component with animated underline
  const NavLink = ({ to, isActive, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className={`relative px-1 py-2 font-medium transition-colors duration-300 block md:inline-block ${
        isActive ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"></span>
      )}
    </Link>
  );

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 text-white sticky top-0 z-50 transition-all duration-300 hover:bg-gray-900/95">
      <div className="relative container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand section with animation */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group"
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="Logo" 
              className="rounded-full h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-[30deg]"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-900"></span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            FOTBAL
          </h1>
        </Link>

        {/* Navigation links with animated underline */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/matches" isActive={isActive("/matches")}>
            Matches
          </NavLink>
          <NavLink to="/connect" isActive={isActive("/connect")}>
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed right-0 w-full bg-gray-900/90 px-6 py-4 space-y-4 text-center">
          <NavLink to="/" isActive={isActive("/")} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/matches" isActive={isActive("/matches")} onClick={() => setMenuOpen(false)}>
            Matches
          </NavLink>
          <NavLink to="/connect" isActive={isActive("/connect")} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;