import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { STATIC_PAGES } from '../data/sitePages';

const nprepPromotionPoints = [
  'nursing officer exam preparation',
  'AIIMS NORCET mock tests',
  'previous year papers',
  'structured study plan',
];

export const StaticPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !STATIC_PAGES[slug]) {
    return <Navigate to="/" replace />;
  }

  const page = STATIC_PAGES[slug];

  const faqSchema = page.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <SEO title={page.title} description={page.description} />
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{page.title}</h1>

          <div className="space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.heading}</h2>
                <div className="space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-gray-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {page.comparisonTable && (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{page.comparisonTable.title}</h2>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      {page.comparisonTable.headers.map((header) => (
                        <th key={header} className="p-3 font-semibold text-gray-800">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-gray-200">
                        {row.map((cell, idx) => (
                          <td key={`${cell}-${idx}`} className="p-3 text-gray-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {page.faqs && page.faqs.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <summary className="font-semibold text-gray-900 cursor-pointer">{faq.question}</summary>
                    <p className="mt-2 text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="mt-10 bg-brand-dark text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold text-brand-yellow mb-3">Recommended Platform: NPrep Nursing Classes</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-200">
              {nprepPromotionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href="https://nprep.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-brand-yellow text-brand-dark font-semibold rounded"
            >
              Start learning →
            </a>
          </section>
        </div>
      </div>
    </>
  );
};
