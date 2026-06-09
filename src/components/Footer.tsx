import React from "react";
import { Link } from "react-router-dom";
import { Brain, Github } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white py-10 text-slate-500 shadow-inner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-brand-indigo animate-pulse" />
              <span className="font-display font-bold text-slate-800 text-base">
                Ghana Neuroscience Masterclass
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Cultivating a pipeline of future researchers, clinicians, innovators, and leaders equipped to address neurological and mental health challenges facing Africa.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col space-y-2 md:items-center">
            <span className="font-display font-bold text-slate-800 text-sm">Navigation</span>
            <div className="flex flex-col space-y-1 text-xs md:items-center">
              <Link to="/" className="hover:text-brand-indigo transition-colors">Home</Link>
              <Link to="/prep" className="hover:text-brand-indigo transition-colors">Course Prep</Link>
              <Link to="/git" className="hover:text-brand-indigo transition-colors">Git Guide</Link>
              <Link to="/people" className="hover:text-brand-indigo transition-colors">People</Link>
            </div>
          </div>

          {/* Resource Column */}
          <div className="flex flex-col space-y-3 md:items-end">
            <span className="font-display font-bold text-slate-800 text-sm">Code Resources</span>
            <a
              href="https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-[10px] text-slate-400">
          <div>
            &copy; {currentYear} Ghana Neuroscience Masterclass. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
