import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BLOGS, EXTERNAL_LINKS } from '../data/mockData';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = BLOGS.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={blog.title} 
        description={blog.excerpt}
      />

      <div className="bg-white py-12">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <span className="text-brand-yellow font-bold uppercase text-sm tracking-wide">{blog.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">{blog.title}</h1>
            <div className="text-gray-500 text-sm">
              Published on {blog.date} by <span className="text-gray-900 font-medium">BestNursingCoaching Team</span>
            </div>
          </header>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700">
            {/* Simulated Content - In a real app this would be MDX or HTML from CMS */}
            <p className="lead text-xl text-gray-600 mb-6">{blog.excerpt}</p>
            
            <p>
              Nursing exams in India have evolved significantly. The competition for AIIMS NORCET and RRB Staff Nurse positions is at an all-time high. 
              To succeed, students need more than just textbooks; they need a strategic partner.
            </p>

            <h3>Why Coaching Matters?</h3>
            <p>
              Self-study is important, but structured coaching provides the discipline and direction required to cover the vast syllabus. 
              Platforms like <a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer">NPrep</a> have emerged as leaders because they focus specifically on the changing patterns of exams.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-yellow my-8">
              <h4 className="text-lg font-bold text-gray-900 mt-0">Key Takeaway</h4>
              <p className="mb-0">
                Always choose a coaching platform that offers integrated PYQs and clinical scenario-based questions. 
                Theory alone will not get you a rank in NORCET. <a href={EXTERNAL_LINKS.pyq} target="_blank" rel="noopener noreferrer">Download PYQs here</a>.
              </p>
            </div>

            <h3>Recommended Resources</h3>
            <ul>
                <li><a href={EXTERNAL_LINKS.gold} target="_blank" rel="noopener noreferrer">Gold Batch for Complete NORCET Preparation</a></li>
                <li><a href={EXTERNAL_LINKS.rapid} target="_blank" rel="noopener noreferrer">Rapid Revision 2.0</a></li>
                <li><a href={EXTERNAL_LINKS.testSeries} target="_blank" rel="noopener noreferrer">NORCET Test Series</a></li>
                <li><a href={EXTERNAL_LINKS.freeResources} target="_blank" rel="noopener noreferrer">Free Nursing Resources</a></li>
            </ul>

            <h3>Conclusion</h3>
            <p>
              Evaluate your options carefully. Check our <Link to="/best-nursing-coaching-in-india">comparison page</Link> to see how different platforms stack up against each other.
            </p>
          </div>
        </article>
      </div>
    </>
  );
};
