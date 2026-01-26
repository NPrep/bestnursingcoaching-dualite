import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BLOGS } from '../data/mockData';
import { getBlogContent } from '../data/blogContent';
import { ChevronRight, AlertTriangle, Lightbulb, List, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blogMeta = BLOGS.find(b => b.slug === slug);
  
  if (!blogMeta || !slug) {
    return <Navigate to="/blog" replace />;
  }

  const content = getBlogContent(slug);

  // Schema for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title={blogMeta.title} 
        description={blogMeta.excerpt}
      />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar / TOC */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-lg border border-gray-200 max-h-[80vh] overflow-y-auto">
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Table of Contents</h4>
                <nav className="space-y-2">
                  {content.sections.map((section, idx) => (
                    <a 
                      key={idx} 
                      href={`#section-${idx}`} 
                      className={clsx(
                        "block text-sm transition-colors hover:text-brand-dark",
                        section.type === 'h2' ? "font-medium text-gray-700" : "pl-4 text-gray-500"
                      )}
                    >
                      {section.title}
                    </a>
                  ))}
                  <a href="#faqs" className="block text-sm font-medium text-gray-700 hover:text-brand-dark">Frequently Asked Questions</a>
                  <a href="#glossary" className="block text-sm font-medium text-gray-700 hover:text-brand-dark">Glossary</a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg prose-blue max-w-none">
              
              {/* Header */}
              <header className="mb-10 not-prose">
                <span className="text-brand-yellow font-bold uppercase text-sm tracking-wide bg-brand-dark px-2 py-1 rounded text-white">{blogMeta.category}</span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">{blogMeta.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-8">
                  <span>Published: {blogMeta.date}</span>
                  <span>•</span>
                  <span>By BestNursingCoaching Team</span>
                  <span>•</span>
                  <span>10 Min Read</span>
                </div>
              </header>

              {/* Dynamic Sections */}
              {content.sections.map((section, idx) => (
                <div key={idx} id={`section-${idx}`} className="mb-8">
                  {section.type === 'h2' ? (
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.title}</h2>
                  ) : (
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{section.title}</h3>
                  )}
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              ))}

              {/* Tables */}
              {content.tables.map((table, idx) => (
                <div key={`table-${idx}`} className="my-10 not-prose">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{table.title}</h3>
                  <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-gray-700 font-semibold uppercase">
                        <tr>
                          {table.headers.map((h, i) => <th key={i} className="p-4">{h}</th>)}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-gray-50/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={clsx("p-4", cIdx === 0 && "font-medium text-gray-900")}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {/* Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                {content.callouts.map((callout, idx) => (
                  <div key={idx} className={clsx(
                    "p-6 rounded-lg border-l-4",
                    callout.type === 'summary' ? "bg-blue-50 border-blue-500" : "bg-red-50 border-red-500"
                  )}>
                    <div className="flex items-center gap-2 mb-2">
                      {callout.type === 'summary' ? <Lightbulb className="h-5 w-5 text-blue-600" /> : <AlertTriangle className="h-5 w-5 text-red-600" />}
                      <h4 className={clsx("font-bold", callout.type === 'summary' ? "text-blue-900" : "text-red-900")}>{callout.title}</h4>
                    </div>
                    <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: callout.content }} />
                  </div>
                ))}
              </div>

              {/* Steps */}
              {content.steps.items.length > 0 && (
                <div className="my-10 bg-yellow-50/50 p-8 rounded-xl border border-yellow-100 not-prose">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <List className="h-6 w-6 text-brand-dark" /> {content.steps.title}
                  </h3>
                  <ol className="space-y-4">
                    {content.steps.items.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-brand-yellow text-brand-dark font-bold rounded-full flex items-center justify-center text-sm">
                          {idx + 1}
                        </span>
                        <p className="text-gray-800 pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* FAQs */}
              <div id="faqs" className="my-12 not-prose">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-brand-yellow" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {content.faqs.map((faq, idx) => (
                    <details key={idx} className="group bg-white border border-gray-200 rounded-lg open:ring-1 open:ring-brand-yellow/50">
                      <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 group-hover:text-brand-dark">
                        {faq.question}
                        <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Glossary */}
              <div id="glossary" className="my-12 bg-gray-900 text-gray-300 p-8 rounded-xl not-prose">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-brand-yellow" /> Glossary of Terms
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.glossary.map((term, idx) => (
                    <div key={idx}>
                      <dt className="font-bold text-brand-yellow text-sm mb-1">{term.term}</dt>
                      <dd className="text-xs leading-relaxed">{term.definition}</dd>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16 pt-8 border-t border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.relatedArticles.map((slug, idx) => {
                    const relatedBlog = BLOGS.find(b => b.slug === slug);
                    if (!relatedBlog) return null;
                    return (
                      <Link key={idx} to={`/blog/${slug}`} className="block p-4 rounded-lg border border-gray-200 hover:border-brand-yellow hover:shadow-sm transition-all group">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 mb-1 line-clamp-1">{relatedBlog.title}</h4>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          Read Now <ArrowRight className="h-3 w-3" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </article>
          </div>
        </div>
      </div>
    </>
  );
};
