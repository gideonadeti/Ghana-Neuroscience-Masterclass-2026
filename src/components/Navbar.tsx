import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Course Prep", path: "/prep" },
    { name: "Git Guide", path: "/git" },
    { name: "People", path: "/people" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/85 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand Title */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo p-1.5 shadow-sm">
              <Brain className="h-4.5 w-4.5 text-white animate-pulse" />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-brand-indigo transition-colors duration-200">
              Ghana Neuroscience Masterclass 2026
            </span>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-brand-indigo bg-brand-indigo/5 border-b-2 border-brand-indigo/40"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="true"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg" id="mobile-menu">
          <div className="space-y-1 px-2 pb-4 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-brand-indigo bg-brand-indigo/5 pl-4 border-l-4 border-brand-indigo"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
