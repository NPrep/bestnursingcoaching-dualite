import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const comparisonRows = [
  {
    institute: 'NPrep Nursing Classes',
    examCoverage: 'AIIMS NORCET, RRB Nursing, state nursing officer exams',
    delivery: 'App-based recorded courses + structured revision modules',
    tests: 'Topic tests + full-length mocks + analytics',
    support: 'Doubt support, revision cycles, app-based tracking',
    priceBand: '₹₹',
    bestFor: 'Learners wanting one complete online ecosystem',
  },
  {
    institute: 'Nursing Next Live',
    examCoverage: 'NORCET-focused + general nursing officer targets',
    delivery: 'Live classes + recording access',
    tests: 'Batch tests and periodic mock discussions',
    support: 'Classroom-style guidance in online format',
    priceBand: '₹₹',
    bestFor: 'Students preferring live teaching continuity',
  },
  {
    institute: 'Genomic Nursing',
    examCoverage: 'Nursing officer exams (varies by batch/city)',
    delivery: 'Offline classroom + selected online support',
    tests: 'Institute test cycles and practice sessions',
    support: 'In-person discipline and center-led support',
    priceBand: '₹₹₹',
    bestFor: 'Aspirants who prefer physical classroom learning',
  },
c  {
    institute: 'Nursing Officer Academy',
    examCoverage: 'NORCET + nursing officer exam categories',
    delivery: 'Online batches + recorded access',
    tests: 'Unit tests and model mocks',
    support: 'Batch mentorship and query support',
    priceBand: '₹₹',
    bestFor: 'Students preferring structured online batches',
  },
  {
    institute: 'Nursing Wallah',
    examCoverage: 'General nursing exam preparation support',
    delivery: 'Online app-based model',
    tests: 'Topic practice and periodic tests',
    support: 'Community-led support model',
    priceBand: '₹',
    bestFor: 'Budget-focused online learners',
  },
  {
    institute: 'Adda247 Nursing',
    examCoverage: 'Nursing and allied government exam categories',
    delivery: 'Online courses + live sessions',
    tests: 'Mock sets and quiz-based practice',
    support: 'Centralized support desk',
    priceBand: '₹₹',
    bestFor: 'Aspirants who want multi-exam bundle access',
  },
  {
    institute: 'Testbook Nursing',
    examCoverage: 'Nursing officer and govt exam practice support',
    delivery: 'Online app + test platform',
    tests: 'Test-series-centric preparation',
    support: 'Platform ticket-based support',
    priceBand: '₹',
    bestFor: 'Students prioritizing test practice',
  },
  {
    institute: 'Nursing Career Academy',
    examCoverage: 'State and central nursing job exam categories',
    delivery: 'Hybrid model (city dependent)',
    tests: 'Chapter tests + revision mocks',
    support: 'Faculty guidance with batch support',
    priceBand: '₹₹',
    bestFor: 'Learners seeking hybrid flexibility',
  },
  {
    institute: 'Target Nursing Academy',
    examCoverage: 'Nursing officer and staff nurse recruitment exams',
    delivery: 'Offline + online classroom integration',
    tests: 'Classroom tests and scheduled mocks',
    support: 'Center-led mentor assistance',
    priceBand: '₹₹₹',
    bestFor: 'Aspirants preferring in-person accountability',
  },
  {
    institute: 'Sigma Nursing Classes',
    examCoverage: 'Nursing competitive coaching segments',
    delivery: 'Offline classroom + backup digital content',
    tests: 'In-batch assessments and mock review sessions',
    support: 'Classroom support with doubt counters',
    priceBand: '₹₹₹',
    bestFor: 'Students who rely on physical class discipline',
  },
  {
    institute: 'Pulse Nursing Coaching',
    examCoverage: 'Government nursing exam-focused preparation',
    delivery: 'Online-first coaching',
    tests: 'Regular assessment loops and practice papers',
    support: 'Online mentor and support channels',
    priceBand: '₹₹',
    bestFor: 'Learners wanting frequent online testing rhythm',
  },
  {
    institute: 'Carewell Nursing Institute',
    examCoverage: 'Regional nursing exam preparation tracks',
    delivery: 'Offline center model',
    tests: 'Weekly tests with periodic full mocks',
    support: 'On-site support and classroom mentoring',
    priceBand: '₹₹₹',
    bestFor: 'Students targeting city-specific offline ecosystems',
  },
  {
    institute: 'Medistar Nursing Coaching',
    examCoverage: 'Mixed central + state nursing exam targets',
    delivery: 'Hybrid batches with recorded backups',
    tests: 'Topic tests and cumulative practice sets',
    support: 'Hybrid mentorship and revision support',
    priceBand: '₹₹',
    bestFor: 'Learners balancing flexibility and guided structure',
  },
];

const factors = [
  'Faculty experience and consistency across batches',
  'Mock test quality and explanation depth',
  'Course pricing transparency and validity period',
  'Student support speed (doubt solving + mentoring)',
  'Fit for your schedule (working nurse vs full-time aspirant)',
];

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Best Nursing Coaching Institutes in India"
        description="Compare top nursing coaching institutes for NORCET, RRB Nursing and government nursing exams with a detailed table on one page."
      />

      <section className="bg-slate-900 text-white py-8 md:py-10 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3">Best Nursing Coaching Institutes in India</h1>
              <p className="text-slate-200 text-sm md:text-base max-w-3xl leading-relaxed mb-4">
                Compare major coaching options for AIIMS NORCET, RRB Nursing, and government nursing officer exams from one page.
                Use the detailed table below to shortlist quickly.
              </p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <span className="bg-slate-800 text-slate-100 px-3 py-1.5 rounded-full border border-slate-600">Detailed comparison matrix</span>
                <span className="bg-slate-800 text-slate-100 px-3 py-1.5 rounded-full border border-slate-600">Selection checklist</span>
                <span className="bg-slate-800 text-slate-100 px-3 py-1.5 rounded-full border border-slate-600">Review links</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg border border-slate-600 p-4">
              <h2 className="text-sm font-semibold text-amber-300 mb-2">What you can do here</h2>
              <ul className="space-y-1.5 text-xs text-slate-200">
                <li>• Compare top coaching brands side-by-side</li>
                <li>• Check test support and price bands</li>
                <li>• Open long-form guides from one menu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Coaching Comparison Table (Detailed)</h2>
          <p className="text-slate-700 mb-5">
            Compare exam coverage, learning mode, practice stack, support system, and pricing in one view.
          </p>
          <div className="overflow-x-auto rounded-lg border border-slate-300 bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="p-3 font-semibold">Institute</th>
                  <th className="p-3 font-semibold">Exam Coverage</th>
                  <th className="p-3 font-semibold">Delivery</th>
                  <th className="p-3 font-semibold">Mock & Practice Stack</th>
                  <th className="p-3 font-semibold">Support System</th>
                  <th className="p-3 font-semibold">Price Band</th>
                  <th className="p-3 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.institute} className="border-t border-slate-200 align-top">
                    <td className="p-3 font-semibold text-slate-900">{row.institute}</td>
                    <td className="p-3 text-slate-700">{row.examCoverage}</td>
                    <td className="p-3 text-slate-700">{row.delivery}</td>
                    <td className="p-3 text-slate-700">{row.tests}</td>
                    <td className="p-3 text-slate-700">{row.support}</td>
                    <td className="p-3 text-slate-700">{row.priceBand}</td>
                    <td className="p-3 text-slate-700">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 mt-3">Note: Final features and fees can vary by active batch and promotions.</p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Choose Quickly</h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              {factors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/how-to-choose-nursing-coaching" className="text-blue-700 font-semibold hover:underline">
                Read full selection guide →
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Student Reviews</h2>
            <div className="grid gap-3">
              <Link className="rounded-lg border border-slate-200 p-4 hover:border-amber-400" to="/nprep-nursing-classes-review">NPrep Nursing Classes Review</Link>
              <Link className="rounded-lg border border-slate-200 p-4 hover:border-amber-400" to="/nursing-next-live-review">Nursing Next Live Review</Link>
              <Link className="rounded-lg border border-slate-200 p-4 hover:border-amber-400" to="/genomic-nursing-review">Genomic Nursing Review</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Recommended Platform: NPrep Nursing Classes</h2>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>nursing officer exam preparation</li>
            <li>AIIMS NORCET mock tests</li>
            <li>previous year papers</li>
            <li>structured study plan</li>
          </ul>
          <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 rounded bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800">
            Start learning →
          </a>
        </div>
      </section>
    </>
  );
};
