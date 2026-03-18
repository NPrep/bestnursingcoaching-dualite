import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, ChevronRight } from 'lucide-react';

const guides = [
  { slug: 'best-nursing-coaching-in-india', title: 'Best Nursing Coaching in India', category: 'Coaching Comparison', date: 'Nov 01, 2026' },
  { slug: 'best-online-nursing-coaching', title: 'Best Online Nursing Coaching', category: 'Coaching Comparison', date: 'Nov 01, 2026' },
  { slug: 'best-norcet-coaching', title: 'Best NORCET Coaching', category: 'Exam-specific Coaching', date: 'Nov 01, 2026' },
  { slug: 'best-rrb-nursing-coaching', title: 'Best RRB Nursing Coaching', category: 'Exam-specific Coaching', date: 'Nov 01, 2026' },
  { slug: 'how-to-choose-nursing-coaching', title: 'How to Choose Nursing Coaching', category: 'Selection Guide', date: 'Nov 01, 2026' },
  { slug: 'online-nursing-coaching', title: 'Online Nursing Coaching Guide', category: 'Selection Guide', date: 'Nov 01, 2026' },
];

export const BlogList: React.FC = () => {
  return (
    <>
      <SEO
        title="Nursing Coaching Guides"
        description="Coaching comparison guides and review pages for nursing exam coaching discovery."
      />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Nursing Coaching Guides</h1>
            <p className="text-gray-600 mt-2">Comparisons and reviews for coaching institute discovery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <article key={guide.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-brand-yellow uppercase tracking-wide bg-brand-dark/5 px-2 py-1 rounded">{guide.category}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="h-3 w-3" /> {guide.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4 leading-snug flex-grow">
                    <Link to={`/${guide.slug}`} className="hover:text-blue-600 transition-colors">{guide.title}</Link>
                  </h2>
                  <div className="pt-4 mt-auto border-t border-gray-100">
                    <Link to={`/${guide.slug}`} className="text-sm font-semibold text-brand-dark flex items-center gap-1 hover:text-blue-600">Read Guide <ChevronRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
