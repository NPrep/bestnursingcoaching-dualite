import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { EXAMS } from '../data/mockData';
import { ChevronRight } from 'lucide-react';

export const ExamDirectory: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nursing Exams Directory 2025" 
        description="Complete list of Nursing Exams in India including AIIMS NORCET, RRB Staff Nurse, ESIC, and State Nursing Officer exams. Syllabus, Eligibility and Patterns."
      />
      
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nursing Exams Directory</h1>
            <p className="text-lg text-gray-600">
              Comprehensive information on all Central and State government nursing examinations. 
              Click on an exam to view detailed syllabus, eligibility, and preparation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main List */}
            <div className="lg:col-span-2 space-y-6">
              {EXAMS.map((exam) => (
                <div key={exam.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                        {exam.category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{exam.name}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{exam.overview}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-gray-100 px-2 py-1 rounded">Body: {exam.conductingBody}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">PYQs Available: {exam.pyqAvailable ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to={`/exams/${exam.slug}`} 
                    className="inline-flex items-center text-brand-dark font-semibold hover:text-blue-600"
                  >
                    View Exam Details <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Preparation Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/best-nursing-coaching-in-india" className="block p-3 rounded bg-yellow-50 hover:bg-yellow-100 text-brand-dark font-medium transition-colors">
                      🏆 Best Coaching Comparison
                    </Link>
                  </li>
                  <li>
                    <Link to="/nursing-pyq" className="block p-3 rounded bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition-colors">
                      📚 Download PYQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/nursing-test-series" className="block p-3 rounded bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition-colors">
                      📝 Free Mock Tests
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Why NPrep?</h4>
                  <p className="text-sm text-blue-800 mb-3">
                    Rated #1 for exam coverage and PYQ integration by students.
                  </p>
                  <a href="#" className="text-xs font-bold text-blue-600 uppercase tracking-wide hover:underline">Read Review &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
