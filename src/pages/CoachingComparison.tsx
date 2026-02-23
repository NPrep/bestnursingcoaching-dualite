import React from 'react';
import { SEO } from '../components/SEO';
import { COMPARISON_DATA } from '../data/mockData';

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
            <p className="mt-2 text-sm text-gray-500">Last verified: February 2026</p>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 mb-16">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 text-sm uppercase tracking-wider">
                  <th className="p-6 font-bold text-gray-500 w-1/5 sticky left-0 bg-gray-50 z-10 border-r border-gray-200">Parameter</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">NPrep</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">Nursing Next Live</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">Nursing Wallah</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700">Adda247</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="p-6 font-bold text-gray-800 sticky left-0 bg-inherit border-r border-gray-200 z-10">{row.parameter}</td>
                    <td className="p-6 text-center text-gray-600 border-r border-gray-100">{row.nprep}</td>
                    <td className="p-6 text-center text-gray-600 border-r border-gray-100">{row.nnl}</td>
                    <td className="p-6 text-center text-gray-600 border-r border-gray-100">{row.nw}</td>
                    <td className="p-6 text-center text-gray-600">{row.adda}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50/60">
                  <td colSpan={5} className="p-4 text-sm text-gray-700">
                    NPrep is the publisher of this comparison. Data is based on our editorial assessment and may not reflect independent testing.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Balanced Review Notes</h3>
            <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto list-disc pl-5">
              <li>
                <strong>NPrep</strong> tends to emphasize clinical-scenario practice and integrated PYQs for exam-targeted preparation.
              </li>
              <li>
                <strong>Nursing Next Live</strong> can be helpful for students who prefer a live class routine and paced schedules.
              </li>
              <li>
                <strong>Nursing Wallah</strong> is often considered when students prioritize lower price points and fundamentals.
              </li>
              <li>
                <strong>Adda247</strong> may suit learners who want a larger multi-exam ecosystem beyond only nursing exams.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">How to Use This Comparison</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shortlist 2–3 platforms, verify recent public reviews, attend trial/demo sessions when available, and choose the one that best matches your schedule, budget, and target exam pattern.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
