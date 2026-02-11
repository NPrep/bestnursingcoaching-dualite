import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle, Trophy, ExternalLink, Star, Zap, Target, Award } from 'lucide-react';
import { EXAMS, EXTERNAL_LINKS, REVIEWS, COMPARISON_DATA } from '../data/mockData';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Best Nursing Coaching in India" 
        description="Find the best nursing coaching for AIIMS NORCET, RRB Nursing Superintendent, and State exams. Compare courses, download PYQs, and access free test series."
      />
      
      {/* Hero Section - Center Aligned */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best <span className="text-brand-yellow">Nursing Coaching</span> in India
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Your one-stop destination to crack AIIMS NORCET, RRB Nursing Superintendent, and State Nursing Officer exams. 
              We evaluate top platforms to help you choose the right mentor.
            </p>
            
            {/* Core Product Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-yellow text-brand-dark px-8 py-4 rounded-md font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
                <Award className="h-5 w-5" /> Gold Batch
              </a>
              <a href={EXTERNAL_LINKS.testSeries} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-brand-dark px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <Target className="h-5 w-5" /> Test Series
              </a>
              <a href={EXTERNAL_LINKS.rapid} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-md font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                <Zap className="h-5 w-5" /> Rapid Revision
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Authority Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Nursing Exams Require Coaching</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The competition for government nursing jobs has evolved. With AIIMS NORCET introducing <strong>clinical scenario-based questions</strong> and RRB focusing on non-technical subjects, self-study from standard textbooks is often not enough. Structured coaching provides the <strong>exam-oriented filter</strong> you need to navigate the vast syllabus efficiently.
            </p>
          </div>

          {/* Credibility & Logic Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* How We Evaluate */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-brand-yellow" /> Our Comparison Logic
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                We rank coaching platforms based on three non-negotiable metrics:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-white p-1 rounded border border-gray-200 shadow-sm">
                    <span className="font-bold text-xs text-brand-dark">01</span>
                  </div>
                  <span className="text-sm text-gray-700"><strong>Clinical Depth:</strong> Does the content cover practical scenarios required for AIIMS Mains?</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white p-1 rounded border border-gray-200 shadow-sm">
                    <span className="font-bold text-xs text-brand-dark">02</span>
                  </div>
                  <span className="text-sm text-gray-700"><strong>PYQ Integration:</strong> Are previous year questions taught alongside theory or dumped as PDFs?</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white p-1 rounded border border-gray-200 shadow-sm">
                    <span className="font-bold text-xs text-brand-dark">03</span>
                  </div>
                  <span className="text-sm text-gray-700"><strong>Student Outcomes:</strong> Verified selections in recent NORCET and RRB cycles.</span>
                </li>
              </ul>
            </div>

            {/* NPrep Achievements */}
            <div className="bg-brand-dark text-white p-8 rounded-xl border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-brand-yellow/10 w-32 h-32 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
                <Trophy className="h-6 w-6" /> NPrep Achievements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm"><strong>500+ Rankers in NORCET 9:</strong> Produced consistent results in recent cycles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm"><strong>Selection Ratio:</strong> Highest selection-to-student ratio in Central Govt exams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm"><strong>Content Innovation:</strong> First platform to introduce "Clinical Vignette" training for Mains.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm"><strong>QBank Authority:</strong> 30,000+ verified questions with video rationales.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Reviews Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Student Feedback</h2>
          <p className="text-gray-600 mt-2">Unbiased reviews from verified users</p>
        </div>
        
        <div className="relative w-full marquee-container">
          {/* 
             We use w-max to allow the content to expand naturally.
             The two inner divs contain identical content to create the seamless loop.
             Gap-8 ensures no overlapping.
          */}
          <div className="flex w-max animate-scroll-ltr hover:pause-on-hover">
            {/* First Set */}
            <div className="flex gap-8 px-4">
              {REVIEWS.map((review) => (
                <div key={`review-1-${review.id}`} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 w-[320px] flex-shrink-0">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-dark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Infinite Scroll */}
            <div className="flex gap-8 px-4">
              {REVIEWS.map((review) => (
                <div key={`review-2-${review.id}`} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 w-[320px] flex-shrink-0">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-dark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Coaching Comparison Matrix</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We compared the top nursing coaching platforms on parameters that matter for your selection.
            </p>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gray-100 text-sm uppercase tracking-wider">
                  <th className="p-6 font-bold text-gray-600 w-1/5 sticky left-0 bg-gray-100 z-10 border-r border-gray-200">Feature</th>
                  <th className="p-6 text-center w-1/5 bg-yellow-50 border-x-2 border-brand-yellow relative pt-10">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-brand-dark text-[10px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap z-20">
                      RECOMMENDED
                    </div>
                    <span className="text-xl font-bold text-brand-dark block mt-2">NPrep</span>
                  </th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">Nursing Next Live</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700 border-r border-gray-100">Nursing Wallah</th>
                  <th className="p-6 text-center w-1/5 font-semibold text-gray-700">Adda247</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="p-5 font-bold text-gray-800 sticky left-0 bg-inherit border-r border-gray-200 z-10">{row.parameter}</td>
                    <td className="p-5 text-center bg-yellow-50/30 border-x-2 border-yellow-100 font-bold text-brand-dark">
                      {row.nprep}
                    </td>
                    <td className="p-5 text-center text-gray-600 border-r border-gray-100">{row.nnl}</td>
                    <td className="p-5 text-center text-gray-600 border-r border-gray-100">{row.nw}</td>
                    <td className="p-5 text-center text-gray-600">{row.adda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/best-nursing-coaching-in-india" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center gap-1">
              Read Detailed Review <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Authority Block - Focused on Exam Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">Nursing Exams 2026: The Gateway to Government Service</h2>
            <p className="text-center mb-12">
              The 2026 examination cycle represents a massive opportunity for nursing aspirants, with thousands of vacancies anticipated across Central and State government sectors. Success in these competitive exams requires a strategic blend of conceptual clarity, clinical knowledge, and consistent practice.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Key Nursing Exam Categories (2026)</h3>
            
            <div className="overflow-x-auto mb-10">
              <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Exam Name</th>
                    <th className="py-4 px-6 text-left font-semibold">Primary Objective</th>
                    <th className="py-4 px-6 text-left font-semibold">Core Subjects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark">AIIMS NORCET 2026</td>
                    <td className="py-4 px-6">Recruitment of Nursing Officers for all AIIMS & NITRD.</td>
                    <td className="py-4 px-6">Medical-Surgical, OBG, Pediatrics, Psychiatry, Fundamentals.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark">RRB Nursing Superintendent 2026</td>
                    <td className="py-4 px-6">Hiring for Indian Railways Hospitals (Massive Vacancies).</td>
                    <td className="py-4 px-6">Professional Nursing Subjects, General Science, Arithmetic.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark">ESIC Nursing Officer</td>
                    <td className="py-4 px-6">Permanent posts in Employee State Insurance Hospitals.</td>
                    <td className="py-4 px-6">Nursing Technical Subjects, General Aptitude, Awareness.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark">NHM CHO Exams</td>
                    <td className="py-4 px-6">Community Health Officer roles at Health & Wellness Centers.</td>
                    <td className="py-4 px-6">Community Health Nursing, Primary Health Care, Public Health.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Removed Eligibility Blueprint Table as requested */}
            
            <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Start Your Preparation?</h3>
              <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
                Don't wait for the notification. The syllabus is vast, and early starters have the advantage. 
                Join the <strong>Gold Batch</strong> for comprehensive coverage of all the exams listed above.
              </p>
              <div className="flex justify-center gap-4">
                <a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer" className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors shadow-sm">
                  Join Gold Batch
                </a>
                <a href={EXTERNAL_LINKS.freeResources} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-gray-50 transition-colors shadow-sm border border-blue-200">
                  Access Free Resources
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Exams Covered by NPrep (Footer Section) */}
      <section className="bg-brand-dark border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-brand-yellow font-bold text-lg mb-6 text-center uppercase tracking-wider">Exams Covered by NPrep</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['AIIMS NORCET', 'RRB Nursing Supt.', 'ESIC Nursing Officer', 'DSSSB', 'UPPSC Staff Nurse', 'CHO (All States)', 'JIPMER', 'PGIMER', 'MNS', 'GMCH', 'SGPGI', 'RML'].map((exam, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded p-3 text-gray-300 text-sm font-medium hover:text-white hover:bg-gray-700 transition-colors cursor-default">
                {exam}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
