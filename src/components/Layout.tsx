import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-brand-dark text-slate-700 flex flex-col overflow-x-clip">
      {/* Soft background glowing gradient decorations adapted for light mode */}
      <div className="absolute top-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-brand-cyan/3 blur-[100px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute bottom-[-5%] right-[-5%] h-[500px] w-[500px] rounded-full bg-brand-indigo/3 blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      
      {/* Decorative SVG Synapse Path - low opacity for clean light contrast */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="synGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="50%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <path
            d="M 50 150 Q 200 80 350 220 T 650 120 T 950 320 T 1250 150 T 1600 280"
            fill="transparent"
            stroke="url(#synGrad)"
            strokeWidth="1.5"
            className="synapse-path"
          />
          <path
            d="M -100 650 Q 150 480 300 680 T 600 520 T 900 750 T 1200 580 T 1700 700"
            fill="transparent"
            stroke="url(#synGrad)"
            strokeWidth="1"
            className="synapse-path"
            style={{ animationDirection: "reverse", animationDuration: "5s" }}
          />
        </svg>
      </div>

      <Navbar />

      <main className="relative flex-grow flex flex-col z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex-grow w-full">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
