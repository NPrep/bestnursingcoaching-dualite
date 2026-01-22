import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { EXAMS } from '../data/mockData';
import { CheckCircle, Book, FileText, Award } from 'lucide-react';

export const ExamDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const exam = EXAMS.find(e => e.slug === slug);

  if (!exam) {
    return <Navigate to="/exams" replace />;
  }

  return (
    <>
      <SEO 
        title={`${exam.name} Nursing Exam Details`} 
        description={`Everything you need to know about ${exam.name}. Syllabus, Pattern, Eligibility, and Best Coaching recommendations.`}
      />
      
      <div className="bg-white">
        {/* Header */}
        <div className="bg-brand-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-brand-yellow font-semibold tracking-wide uppercase text-sm">{exam.category} Exam</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">{exam.name} Nursing Exam</h1>
            <p className="text-gray-300 max-w-2xl text-lg">{exam.overview}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Book className="h-6 w-6 text-brand-yellow" /> Exam Overview
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <th className="py-3 text-gray-600 font-medium w-1/3">Conducting Body</th>
                        <td className="py-3 text-gray-900 font-semibold">{exam.conductingBody}</td>
                      </tr>
                      <tr>
                        <th className="py-3 text-gray-600 font-medium">Eligibility</th>
                        <td className="py-3 text-gray-900">{exam.eligibility}</td>
                      </tr>
                      <tr>
                        <th className="py-3 text-gray-600 font-medium">Exam Pattern</th>
                        <td className="py-3 text-gray-900">{exam.pattern}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-brand-yellow" /> Syllabus
                </h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">The syllabus for {exam.name} is vast and covers all major nursing subjects. Key areas include:</p>
                  <p className="bg-yellow-50 p-4 rounded border-l-4 border-brand-yellow italic">
                    {exam.syllabus}
                  </p>
                  <p className="mt-4">
                    Candidates are advised to focus heavily on clinical scenarios and image-based questions, especially for exams like AIIMS NORCET.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-brand-yellow" /> Recommended Preparation
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-3">Why Students Prefer NPrep for {exam.name}</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Dedicated {exam.name} crash courses and full-length batches.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Previous year questions integrated directly into lectures.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Test series designed by ex-toppers of {exam.name}.</span>
                    </li>
                  </ul>
                  <Link to="/nursing-exam-courses" className="text-brand-dark font-bold underline hover:text-blue-600">
                    View NPrep Courses for {exam.name} &rarr;
                  </Link>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/nursing-pyq" className="block w-full text-center py-2 px-4 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 font-medium">
                    Download {exam.name} PYQs
                  </Link>
                  <Link to="/nursing-test-series" className="block w-full text-center py-2 px-4 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50 font-medium">
                    Attempt Mock Tests
                  </Link>
                  <Link to="/best-nursing-coaching-in-india" className="block w-full text-center py-2 px-4 bg-brand-yellow text-brand-dark rounded font-bold hover:bg-yellow-400">
                    Compare Coaching
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
