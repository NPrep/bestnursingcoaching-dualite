import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
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
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BestNursingCoaching.com. All rights reserved.</p>
          <p className="mt-2 text-xs">Disclaimer: We are an informational portal. NPrep is mentioned based on our independent evaluation of features and student feedback.</p>
        </div>
      </div>
    </footer>
  );
};
