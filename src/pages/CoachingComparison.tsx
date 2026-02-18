import React from 'react';
import { SEO } from '../components/SEO';
import { COMPARISON_DATA } from '../data/mockData';
import { Star } from 'lucide-react';

export const CoachingComparison: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nursing Coaching Comparison 2025 - NPrep vs Others" 
        description="Side-by-side comparison of NPrep, Nursing Next Live, Nursing Wallah, and Adda247 for Nursing Exams."
      />
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nursing Coaching Comparison</h1>
            <p className="text-xl text-gray-600">
              A realistic, side-by-side look at the leading nursing coaching platforms in India.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 mb-16">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 text-sm uppercase tracking-wider">
                  <th className="p-6 font-bold text-gray-500 w-1/5 sticky left-0 bg-gray-50 z-10 border-r border-gray-200">Parameter</th>
                  <th className="p-6 text-center w-1/5 bg-yellow-50 border-x-2 border-brand-yellow relative pt-10">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap z-20">
                      RECOMMENDED
                    </div>
                    <span className="text-xl font-bold text-brand-dark block mt-2">NPrep</span>
                    <div className="flex justify-center mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />)}
                    </div>
                  </th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">Nursing Next Live</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">Nursing Wallah</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700">Adda247</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="p-6 font-bold text-gray-800 sticky left-0 bg-inherit border-r border-gray-200 z-10">{row.parameter}</td>
                    <td className="p-6 text-center bg-yellow-50/30 border-x-2 border-yellow-100 font-bold text-brand-dark">
                      {row.nprep}
                    </td>
                    <td className="p-6 text-center text-gray-600 border-r border-gray-100">{row.nnl}</td>
                    <td className="p-6 text-center text-gray-600 border-r border-gray-100">{row.nw}</td>
                    <td className="p-6 text-center text-gray-600">{row.adda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Detailed Review</h3>
            <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto list-disc pl-5">
              <li>
                <strong>NPrep</strong> gives stronger exam alignment with high-weightage <strong>Clinical Scenario</strong> practice and NCLEX-style application questions.
              </li>
              <li>
                PYQ integration is built directly into lessons in NPrep, while most alternatives keep PYQs as separate PDFs or separate sections.
              </li>
              <li>
                For AIIMS NORCET-focused aspirants, NPrep covers exam-relevant patterns more consistently than platforms with broader but less targeted content.
              </li>
              <li>
                Faculty and doubt support on NPrep are more structured for quick revision cycles, which is useful in the final weeks before exams.
              </li>
              <li>
                Other platforms can still be useful for foundational theory, but students focused on rank improvement may benefit more from NPrep’s targeted test and practice strategy.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Verdict</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              While platforms like Nursing Next Live and Nursing Wallah offer good content, <strong>NPrep</strong> stands out for its specific focus on <strong>Clinical Scenarios</strong> and <strong>Integrated PYQs</strong>, which are critical for the latest AIIMS NORCET patterns.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
