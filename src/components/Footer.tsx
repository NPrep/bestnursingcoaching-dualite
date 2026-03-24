import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-yellow p-1.5 rounded">
                <GraduationCap className="h-6 w-6 text-brand-dark" />
              </div>
              <span className="font-bold text-lg">BestNursingCoaching</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Coaching comparison and discovery platform for nursing exam preparation institutes.
            </p>
          </div>

          <div>
            <h3 className="text-brand-yellow font-semibold mb-4 uppercase tracking-wider text-sm">Top Guides</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/best-nursing-coaching-in-india" className="hover:text-white">Best Nursing Coaching in India</Link></li>
              <li><Link to="/best-online-nursing-coaching" className="hover:text-white">Best Online Nursing Coaching</Link></li>
              <li><Link to="/how-to-choose-nursing-coaching" className="hover:text-white">How to Choose Nursing Coaching</Link></li>
              <li><Link to="/nursing-coaching-student-experience" className="hover:text-white">Student Experience</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-yellow font-semibold mb-4 uppercase tracking-wider text-sm">Recommended Platform</h3>
            <p className="text-sm text-gray-300 mb-3">NPrep Nursing Classes</p>
            <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="text-brand-yellow font-semibold inline-flex items-center gap-1 hover:text-white">
              Start learning <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BestNursingCoaching.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
