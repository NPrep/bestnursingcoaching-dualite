import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Nursing Coaching Comparison', path: '/best-nursing-coaching-in-india' },
    { name: 'Courses', path: '/nursing-exam-courses' },
    { name: 'PYQs', path: '/nursing-pyq' },
    { name: 'Subject Wise Tests', path: '/nursing-test-series' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-brand-yellow p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-brand-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-brand-dark leading-tight">Best Nursing</span>
                <span className="font-semibold text-sm text-gray-600 leading-tight">Coaching</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-brand-yellow/10 text-brand-dark border-b-2 border-brand-yellow"
                    : "text-gray-600 hover:text-brand-dark hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/nursing-exam-courses"
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-brand-dark bg-brand-yellow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow"
            >
              Find Courses
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-yellow"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(item.path)
                    ? "bg-brand-yellow/20 text-brand-dark"
                    : "text-gray-600 hover:text-brand-dark hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
