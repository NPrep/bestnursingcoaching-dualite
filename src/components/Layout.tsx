import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-gray-50">
      <div className="bg-[#1e3a5f] text-white text-[13px] px-4 py-[10px] text-center">
        Disclosure: This website is owned and operated by NPrep. Reviews and comparisons reflect our editorial perspective.
      </div>
      <Header />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
