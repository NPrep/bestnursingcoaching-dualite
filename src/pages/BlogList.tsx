import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BLOGS } from '../data/mockData';
import { Calendar, ChevronRight } from 'lucide-react';

export const BlogList: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nursing Exam Preparation Blog" 
        description="Expert articles on nursing exam strategy, coaching reviews, and career guidance. Stay updated with the latest trends."
      />

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Nursing Preparation Blog</h1>
            <p className="text-gray-600 mt-2">Insights, Strategies, and Reviews for Aspirants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOGS.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-brand-yellow uppercase tracking-wide bg-brand-dark/5 px-2 py-1 rounded">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" /> {blog.date}
                    </span>
                  </div>
                  
                  <h2 className="text-lg font-bold text-gray-900 mb-4 leading-snug flex-grow">
                    <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors">
                      {blog.title}
                    </Link>
                  </h2>
                  
                  <div className="pt-4 mt-auto border-t border-gray-100">
                    <Link to={`/blog/${blog.slug}`} className="text-sm font-semibold text-brand-dark flex items-center gap-1 hover:text-blue-600">
                      Read Article <ChevronRight className="h-4 w-4" />
                    </Link>
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
