import React from 'react';
import Head from 'next/head';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  const siteTitle = "Best Nursing Coaching";
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = "https://bestnursingcoaching.com";
  const { pathname } = useLocation();
  const currentUrl = canonical || `${siteUrl}${pathname}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};
