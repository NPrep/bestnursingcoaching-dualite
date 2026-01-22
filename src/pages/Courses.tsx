import React from 'react';
import { SEO } from '../components/SEO';
import { COURSES } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export const Courses: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nursing Exam Courses - Minimalist List" 
        description="Structured courses for NORCET, RRB, and State Exams. Simple, direct links to the best preparation material."
      />

      <div className="bg-white min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Nursing Exam Courses</h1>
            <p className="text-gray-500 mt-3 text-lg">Select your preparation path.</p>
          </div>

          <div className="space-y-8">
            {COURSES.map((course) => (
              <div 
                key={course.id} 
                className={`group relative p-8 border-l-4 ${course.borderColor} bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-r-lg border-y border-r border-gray-100`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className={`text-3xl font-bold ${course.color} mb-3`}>{course.title}</h2>
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">{course.provider}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${course.bg.replace('bg-', 'bg-opacity-100 bg-')}`}></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-8 py-4 rounded text-sm font-bold uppercase tracking-wide transition-colors ${course.bg} ${course.color} hover:brightness-95`}
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
