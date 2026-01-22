import React from 'react';
import { SEO } from '../components/SEO';
import { Download, FileText, ChevronRight, ExternalLink } from 'lucide-react';
import { PYQ_LINKS, EXTERNAL_LINKS } from '../data/mockData';

export const PYQHub: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nursing Exam Previous Year Questions (PYQ) Download" 
        description="Download Year-wise and Topic-wise PYQs for AIIMS NORCET, RRB Nursing Superintendent, and State Nursing Exams. Essential for preparation."
      />

      <div className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Nursing Exam PYQ Hub</h1>
            <p className="text-lg text-gray-600">
              Previous Year Questions are the backbone of nursing exam preparation. 
              Access authentic memory-based papers and official keys here.
            </p>
            <div className="mt-6">
              <a href={EXTERNAL_LINKS.pyq} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors">
                <Download className="h-5 w-5" /> Download All PYQs
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NORCET Section */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" /> AIIMS NORCET Papers
              </h2>
              <ul className="space-y-3">
                {PYQ_LINKS.norcet.map((paper, idx) => (
                  <li key={idx}>
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 hover:border-brand-yellow hover:shadow-sm transition-all group">
                      <span className="text-gray-700 font-medium group-hover:text-brand-dark">{paper.name}</span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-brand-yellow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RRB Section */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-green-600" /> RRB Nursing Superintendent Papers
              </h2>
              <ul className="space-y-3">
                {PYQ_LINKS.rrb.map((paper, idx) => (
                  <li key={idx}>
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 hover:border-brand-yellow hover:shadow-sm transition-all group">
                      <span className="text-gray-700 font-medium group-hover:text-brand-dark">{paper.name}</span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-brand-yellow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CHO Section */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 md:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-purple-600" /> CHO (Community Health Officer) Papers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PYQ_LINKS.cho.map((paper, idx) => (
                  <a key={idx} href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-white p-3 rounded border border-gray-200 hover:border-brand-yellow hover:shadow-sm transition-all group">
                    <span className="text-gray-700 font-medium group-hover:text-brand-dark">{paper.name}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-brand-yellow" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Pro Tip: Don't just solve, Analyze!</h3>
            <p className="text-blue-800">
              Solving PYQs is not enough. You need detailed explanations and topic tagging. 
              <strong>NPrep's Q-Bank</strong> offers the industry's best PYQ analysis with video solutions for every question.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
