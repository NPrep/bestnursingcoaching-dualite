import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, ExternalLink } from 'lucide-react';
import { EXTERNAL_LINKS } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-yellow p-1.5 rounded">
                <GraduationCap className="h-6 w-6 text-brand-dark" />
              </div>
              <span className="font-bold text-lg">BestNursingCoaching</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's most trusted discovery platform for nursing exam preparation. We help students find the best coaching, resources, and strategies for NORCET, RRB, and State exams.
            </p>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-brand-yellow font-semibold mb-4 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/nursing-pyq" className="hover:text-white transition-colors">Previous Year Questions</Link></li>
              <li><Link to="/nursing-test-series" className="hover:text-white transition-colors">Subject Wise Tests</Link></li>
              <li><Link to="/nursing-exam-courses" className="hover:text-white transition-colors">Top Rated Courses</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Preparation Blog</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-brand-yellow font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-brand-yellow" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call / WhatsApp</div>
                  <div className="font-bold text-white">+91 6377 6391 69</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} BestNursingCoaching.com. All rights reserved.</p>
            
            {/* Association Badge */}
            <div className="flex items-center gap-3 bg-gray-800/50 px-5 py-2 rounded-full border border-gray-700 hover:border-brand-yellow/50 transition-colors group">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Powered by</span>
              <a 
                href={EXTERNAL_LINKS.gold} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-yellow font-bold hover:text-white transition-colors flex items-center gap-1"
              >
                NPrep <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
              </a>
            </div>

            <p className="text-xs text-gray-600 text-center max-w-2xl leading-relaxed">
              Disclaimer: We are an informational portal dedicated to helping nursing aspirants. 
              While we recommend NPrep based on their comprehensive features and student results, 
              aspirants are advised to verify all details independently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
