import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle, BookOpen, Users, Trophy, ExternalLink, Star } from 'lucide-react';
import { EXAMS, EXTERNAL_LINKS, REVIEWS } from '../data/mockData';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Best Nursing Coaching in India" 
        description="Find the best nursing coaching for AIIMS NORCET, RRB Nursing Superintendent, and State exams. Compare courses, download PYQs, and access free test series."
      />
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        {/* Updated Image: Nurses working in a hospital setting */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Best <span className="text-brand-yellow">Nursing Coaching</span> in India <br/>
              <span className="text-2xl md:text-3xl font-medium text-gray-300 block mt-2">Exams, Courses, PYQs & Preparation Platforms</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Your one-stop destination to crack AIIMS NORCET, RRB Nursing Superintendent, and State Nursing Officer exams. 
              We evaluate the top coaching institutes and provide honest, data-backed comparisons to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer" className="bg-brand-yellow text-brand-dark px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors flex items-center gap-2">
                Explore Gold Batch <ArrowRight className="h-5 w-5" />
              </a>
              <a href={EXTERNAL_LINKS.pyq} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-colors">
                Download PYQs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Authority Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Nursing Exams Are Highly Competitive</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With over 10 lakh aspirants appearing for central and state nursing exams annually, the competition is fierce. 
            Structured preparation is no longer optional—it's a necessity. Whether you choose online platforms, offline institutes, 
            or hybrid coaching, the right guidance defines your rank.
          </p>
          <div className="bg-yellow-50 border-l-4 border-brand-yellow p-6 text-left rounded-r-lg">
            <p className="font-medium text-gray-800">
              <span className="font-bold text-brand-dark">Our Recommendation:</span> Based on our extensive evaluation of content depth, 
              faculty expertise, and student results, <a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-dark underline decoration-brand-yellow decoration-2 underline-offset-2">NPrep</a> stands out as one of the 
              most comprehensive and exam-focused nursing preparation platforms in India today.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Explore Nursing Exams</h2>
            <p className="mt-4 text-gray-600">Complete details, syllabus, and patterns for all major exams</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXAMS.map((exam) => (
              <Link key={exam.id} to={`/exams/${exam.slug}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-yellow transition-colors">
                  <BookOpen className="h-6 w-6 text-blue-600 group-hover:text-brand-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{exam.category}</p>
                <span className="text-brand-dark font-medium text-sm flex items-center gap-1 group-hover:text-blue-600">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/exams" className="text-blue-600 font-semibold hover:text-blue-800">View All Exams &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Features / USP Grid */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Unbiased Comparisons</h3>
              <p className="text-gray-600">We evaluate coaching platforms on 20+ parameters including faculty, PYQs, and test series.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Centric</h3>
              <p className="text-gray-600">Our reviews are based on real student feedback and actual platform usage.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exam Focused</h3>
              <p className="text-gray-600">We prioritize platforms that focus on exam-relevant content rather than generic theory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Reviews Section */}
      <section className="py-12 bg-gray-50 overflow-hidden border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">What Students Say About NPrep</h2>
          <p className="text-gray-600 mt-2">Real feedback from successful nursing officers</p>
        </div>
        
        <div className="relative w-full marquee-container">
          <div className="flex w-[200%] animate-scroll-ltr hover:pause-on-hover">
            {/* First Set */}
            <div className="flex w-1/2 justify-around gap-6 px-4">
              {REVIEWS.map((review) => (
                <div key={`review-1-${review.id}`} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-w-[300px] max-w-[350px] flex-shrink-0">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-dark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
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
            <div className="flex w-1/2 justify-around gap-6 px-4">
              {REVIEWS.map((review) => (
                <div key={`review-2-${review.id}`} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-w-[300px] max-w-[350px] flex-shrink-0">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-dark text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
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

      {/* SEO Authority Block - Comprehensive Nursing Exams Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">The Nursing Profession: A Pillar of Healthcare</h2>
            <p>
              Nursing stands as the backbone of the global healthcare infrastructure, dedicated to the holistic care, recovery, and health maintenance of individuals and communities. Beyond administering medication, modern nursing involves complex clinical decision-making, patient advocacy, and specialized care across critical domains like trauma, pediatrics, and oncology. For aspiring professionals in India, the journey begins with rigorous entrance exams and culminates in prestigious recruitment tests that open doors to government service and top-tier medical institutions.
            </p>

            <h2 className="text-3xl font-bold text-brand-dark mt-12 mb-6">Nursing Exams 2026: The Gateway to Government Service</h2>
            <p>
              The 2026 examination cycle represents a massive opportunity for nursing aspirants, with thousands of vacancies anticipated across Central and State government sectors. These exams are the qualifying criteria for securing permanent Nursing Officer positions in premier institutes like AIIMS, PGIMER, and JIPMER, as well as massive recruitment drives by the Indian Railways (RRB) and ESIC. Success in these competitive exams requires a strategic blend of conceptual clarity, clinical knowledge, and consistent practice using resources like <a href={EXTERNAL_LINKS.testSeries} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">NPrep Test Series</a>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Key Nursing Exam Categories (2026)</h3>
            <p className="mb-6">
              Nursing exams in India are broadly categorized into Recruitment Exams (for jobs) and Entrance Exams (for higher education). Below is the breakdown of the major exams scheduled for the upcoming academic and financial year.
            </p>
            
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
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark">B.Sc Nursing Entrance</td>
                    <td className="py-4 px-6">Admission to top Nursing Colleges (AIIMS, JIPMER, etc.).</td>
                    <td className="py-4 px-6">Physics, Chemistry, Biology (Botany & Zoology), Aptitude.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Eligibility Blueprint for 2026 Exams</h3>
            <p className="mb-6">
              Eligibility criteria vary significantly between central and state level exams. While B.Sc Nursing is the standard gold qualification, GNM candidates often require additional experience for central institutes. Refer to the table below for a quick eligibility check.
            </p>

            <div className="overflow-x-auto mb-10">
              <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold w-1/3">Examination</th>
                    <th className="py-4 px-6 text-left font-semibold">Required Qualifications & Age Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark align-top">AIIMS NORCET</td>
                    <td className="py-4 px-6">
                      <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li><strong>B.Sc Nursing:</strong> No experience required.</li>
                        <li><strong>GNM:</strong> Minimum 2 years of experience in a 50-bedded hospital.</li>
                        <li><strong>Age:</strong> 18-30 Years (Relaxation for reserved categories).</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark align-top">RRB Nursing Superintendent</td>
                    <td className="py-4 px-6">
                      <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>GNM or B.Sc Nursing from a recognized institution.</li>
                        <li>Must be a registered nurse with Indian Nursing Council.</li>
                        <li><strong>Age:</strong> 20-40 Years (Generally higher upper limit).</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark align-top">Military Nursing Service (MNS)</td>
                    <td className="py-4 px-6">
                      <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>M.Sc Nursing / PB B.Sc Nursing / B.Sc Nursing.</li>
                        <li>Only for Female candidates.</li>
                        <li>Physical fitness standards apply.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-bold text-brand-dark align-top">State NHM CHO</td>
                    <td className="py-4 px-6">
                      <ul className="list-disc pl-4 space-y-1 text-gray-600">
                        <li>B.Sc Nursing / GNM with Integrated CCH Course preferred.</li>
                        <li>State Nursing Council registration is often mandatory.</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-dark mt-16 mb-8 border-b-4 border-brand-yellow inline-block pb-2">Comprehensive List of Nursing Exams in India (2026)</h2>
            <p className="mb-8 text-lg">
              Below is the detailed breakdown of every major nursing exam conducted in India. Aspiring nurses should keep a close watch on official notifications for these opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Central Govt Exams */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gray-100 p-3 rounded-lg">Central Government Recruitment</h3>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand-yellow" /> AIIMS NORCET
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  The <strong>Nursing Officer Recruitment Common Eligibility Test</strong> is the most prestigious exam, recruiting for all AIIMS institutes (New Delhi, Rishikesh, Jodhpur, etc.) and NITRD. It is known for its clinical-scenario based questions.
                </p>
                <a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold hover:underline">Prepare for NORCET &rarr;</a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand-yellow" /> RRB Nursing Superintendent
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Conducted by the <strong>Railway Recruitment Board</strong>, this exam fills vacancies in the vast Indian Railways healthcare network. It is highly anticipated in 2026 due to expected large-scale vacancies.
                </p>
                <a href={EXTERNAL_LINKS.testSeries} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold hover:underline">RRB Mock Tests &rarr;</a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand-yellow" /> ESIC Nursing Officer
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  The <strong>Employees' State Insurance Corporation</strong> recruits nursing officers for its hospitals across India. These posts offer excellent job security and central government allowances.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand-yellow" /> DSSSB Nursing Officer
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  The <strong>Delhi Subordinate Services Selection Board</strong> conducts exams for nursing posts in Delhi Government hospitals (like LNJP, GTB). A top choice for those wishing to work in the capital.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand-yellow" /> JIPMER & PGIMER
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>JIPMER (Puducherry)</strong> and <strong>PGIMER (Chandigarh)</strong> are autonomous institutes of national importance. Their exams are known for high difficulty levels and focus on research/academic oriented nursing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand-yellow" /> Military Nursing Service (MNS)
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  A commissioned officer post in the <strong>Indian Army, Navy, or Air Force</strong>. This is a unique opportunity for female candidates to serve the nation in uniform with the rank of Lieutenant.
                </p>
              </div>

              {/* State & Other Exams */}
              <div className="col-span-1 md:col-span-2 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gray-100 p-3 rounded-lg">State PSC & NHM Exams</h3>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2">UPPSC Staff Nurse</h4>
                <p className="text-sm text-gray-600">
                  Uttar Pradesh Public Service Commission recruits thousands of nurses for state medical colleges and hospitals. It often involves a Prelims and Mains structure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2">OSSSC Nursing Officer</h4>
                <p className="text-sm text-gray-600">
                  Odisha Sub-ordinate Staff Selection Commission conducts recruitment for district-level posts in Odisha. Known for regular vacancies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2">NHM CHO (All States)</h4>
                <p className="text-sm text-gray-600">
                  <strong>Community Health Officer</strong> exams are conducted by National Health Missions of various states (MP, Rajasthan, Bihar, UP). These are critical for strengthening rural healthcare.
                </p>
                <a href={EXTERNAL_LINKS.pyq} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold hover:underline">Download CHO PYQs &rarr;</a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-brand-yellow transition-colors">
                <h4 className="text-xl font-bold text-brand-dark mb-2">Other State Exams</h4>
                <p className="text-sm text-gray-600">
                  Includes <strong>BTSC (Bihar)</strong>, <strong>UKMSSB (Uttarakhand)</strong>, <strong>HSSC (Haryana)</strong>, <strong>DHS (Maharashtra)</strong>, and <strong>KPSC (Kerala)</strong>. Each has specific domicile and language requirements.
                </p>
              </div>
              
            </div>

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
    </>
  );
};
