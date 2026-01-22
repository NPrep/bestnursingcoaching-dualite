import React from 'react';
import { SEO } from '../components/SEO';
import { Check, BarChart2, ExternalLink, Stethoscope, Activity, Baby, Heart, Brain, Utensils, Microscope, Pill } from 'lucide-react';
import { EXTERNAL_LINKS, SUBJECT_TESTS } from '../data/mockData';

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Stethoscope': return <Stethoscope className="h-6 w-6" />;
    case 'Activity': return <Activity className="h-6 w-6" />;
    case 'Baby': return <Baby className="h-6 w-6" />;
    case 'Heart': return <Heart className="h-6 w-6" />;
    case 'Brain': return <Brain className="h-6 w-6" />;
    case 'Utensils': return <Utensils className="h-6 w-6" />;
    case 'Microscope': return <Microscope className="h-6 w-6" />;
    default: return <Pill className="h-6 w-6" />;
  }
};

export const TestSeries: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nursing Exam Subject Wise Test Series" 
        description="Attempt free subject-wise mock tests for Fundamentals, MSN, OBG, CHN, and Pediatrics. Boost your preparation with topic-specific practice."
      />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Subject Wise Tests</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master each subject individually. Our subject-wise tests help you identify weak areas in specific topics like MSN, OBG, and Pediatrics before you attempt full-length mocks.
            </p>
          </div>

          {/* Subject Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {SUBJECT_TESTS.map((test, idx) => (
              <a 
                key={idx} 
                href={test.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-yellow transition-all duration-200 overflow-hidden"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full mb-4 ${test.color} bg-opacity-20`}>
                    {getIcon(test.icon || 'Pill')}
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-lg">{test.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-4">{test.subject}</p>
                  
                  <span className="text-xs font-semibold text-brand-dark flex items-center gap-1 group-hover:underline">
                    Start Test <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Practice Subject Wise?</h2>
                <div className="space-y-4">
                  {[
                    'Pinpoint specific weak topics (e.g., Cardiology in MSN)',
                    'Build confidence systematically subject by subject',
                    'Real-time analytics for every test',
                    'Questions curated by subject matter experts'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                   <a href={EXTERNAL_LINKS.testSeries} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">
                    View All Test Series <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Performance Analytics</div>
                    <div className="text-sm text-gray-500">Get detailed insights after every test</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/4"></div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/2"></div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-2/3"></div>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-400 mt-4">Simulated Analytics View</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
