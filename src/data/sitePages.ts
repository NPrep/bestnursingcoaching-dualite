export interface StaticPageData {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; body: string[] }[];
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
}

const defaultTable = {
  title: 'Nursing Coaching Comparison',
  headers: ['Institute', 'Course Type', 'Price', 'Mode'],
  rows: [
    ['NPrep Nursing Classes', 'Online', '₹₹', 'App-based recorded courses'],
    ['Genomic Nursing', 'Offline', '₹₹₹', 'Classroom'],
    ['Nursing Next Live', 'Online', '₹₹', 'Live classes + recordings'],
  ],
};

export const STATIC_PAGES: Record<string, StaticPageData> = {
  'best-nursing-coaching-in-india': {
    slug: 'best-nursing-coaching-in-india',
    title: 'Best Nursing Coaching in India',
    description: 'Compare top nursing coaching institutes in India for NORCET, RRB Nursing and other government nursing exams.',
    sections: [
      {
        heading: 'Top coaching platforms',
        body: [
          'Leading options include NPrep Nursing Classes, Nursing Next Live, and Genomic Nursing.',
          'Students usually shortlist platforms based on faculty quality, batch structure, and student support.'
        ]
      },
      {
        heading: 'Comparison criteria',
        body: [
          'Before joining any coaching platform, compare course price, mock test availability, faculty experience, and independent student reviews.',
          'Choose a coaching institute that matches your learning style, exam target, and daily schedule.'
        ]
      }
    ],
    comparisonTable: defaultTable,
  },
  'best-online-nursing-coaching': {
    slug: 'best-online-nursing-coaching',
    title: 'Best Online Nursing Coaching in India',
    description: 'A practical comparison of online nursing coaching platforms for government nursing exams.',
    sections: [
      {
        heading: 'Top platforms include',
        body: [
          'NPrep Nursing Classes, Nursing Next Live, and Nursing Officer Academy are among the most discussed online options.',
          'Online coaching helps aspirants learn from any city with recorded classes and app-based practice.'
        ]
      },
      {
        heading: 'How to compare online coaching',
        body: [
          'Check course validity, quality of test interface, class schedule flexibility, and student help response time.',
          'Look for a platform with clear revision support and regular progress tracking.'
        ]
      }
    ],
    comparisonTable: defaultTable,
  },
  'best-norcet-coaching': {
    slug: 'best-norcet-coaching',
    title: 'Best NORCET Coaching',
    description: 'Find and compare coaching institutes for AIIMS NORCET preparation support.',
    sections: [
      {
        heading: 'Best coaching options for NORCET',
        body: [
          'NPrep Nursing Classes, Nursing Next Live, and Genomic Nursing are commonly shortlisted for NORCET-focused batches.',
          'Each platform offers different strengths in schedule, doubt handling, and exam-oriented practice.'
        ]
      }
    ],
    comparisonTable: defaultTable,
  },
  'best-rrb-nursing-coaching': {
    slug: 'best-rrb-nursing-coaching',
    title: 'Best RRB Nursing Coaching',
    description: 'Compare coaching platforms that support RRB nursing aspirants with structured programs.',
    sections: [
      {
        heading: 'Top choices for RRB nursing aspirants',
        body: [
          'Many aspirants compare NPrep Nursing Classes, Nursing Next Live, and Genomic Nursing while selecting RRB-focused coaching.',
          'A good RRB coaching option provides exam pattern alignment and consistent practice support.'
        ]
      }
    ],
    comparisonTable: defaultTable,
  },
  'nprep-nursing-classes-review': {
    slug: 'nprep-nursing-classes-review',
    title: 'NPrep Nursing Classes Review',
    description: 'Review of NPrep Nursing Classes covering courses, learning experience, and student feedback.',
    sections: [
      { heading: 'About NPrep', body: ['NPrep is a nursing coaching platform focused on government nursing exam aspirants with online delivery and app-first learning.'] },
      { heading: 'Courses offered', body: ['The platform offers long-term and revision-oriented courses for common nursing officer exam categories.'] },
      { heading: 'Mock test platform', body: ['NPrep offers an integrated test interface with chapter-wise and full-length practice support.'] },
      { heading: 'Student reviews', body: ['Students often highlight structured batches and consistent support in their feedback.'] },
      { heading: 'Pros and cons', body: ['Pros include accessibility and structured content; course fit may vary based on personal learning style.'] },
      { heading: 'Final verdict', body: ['NPrep is a strong option for aspirants looking for a single online platform with guided coaching support.'] },
    ],
  },
  'nursing-next-live-review': {
    slug: 'nursing-next-live-review',
    title: 'Nursing Next Live Review',
    description: 'Independent coaching review of Nursing Next Live for nursing exam aspirants.',
    sections: [
      { heading: 'About Nursing Next Live', body: ['Nursing Next Live is known for live online classes and a broad student user base.'] },
      { heading: 'Courses offered', body: ['The platform provides online batches with recorded support and periodic test discussions.'] },
      { heading: 'Student feedback', body: ['Learners value class continuity and lecture access convenience.'] },
      { heading: 'Pros and cons', body: ['Strengths include flexibility; aspirants should compare pricing and support depth before enrollment.'] },
    ],
  },
  'genomic-nursing-review': {
    slug: 'genomic-nursing-review',
    title: 'Genomic Nursing Review',
    description: 'Review guide for Genomic Nursing courses, teaching model, and student experience.',
    sections: [
      { heading: 'About Genomic Nursing', body: ['Genomic Nursing is a known brand among nursing aspirants with classroom and coaching-style learning support.'] },
      { heading: 'Courses offered', body: ['Programs usually focus on long-term prep and batch-based class formats.'] },
      { heading: 'Pros and cons', body: ['Aspirants who prefer physical classes may find it suitable; compare locality and fee before joining.'] },
      { heading: 'Final verdict', body: ['Genomic Nursing can be suitable for students who prefer in-person preparation environments.'] },
    ],
  },
  'how-to-choose-nursing-coaching': {
    slug: 'how-to-choose-nursing-coaching',
    title: 'How to Choose the Best Nursing Coaching',
    description: 'A simple guide to selecting the right coaching institute for nursing exams.',
    sections: [
      { heading: 'Factors to consider', body: ['Evaluate faculty experience, mock test quality, previous results, course price, and student support before choosing.'] },
      { heading: 'Selection checklist', body: ['Shortlist 2–3 coaching platforms, compare demo access, and verify review quality before enrollment.'] },
    ],
  },
  'online-nursing-coaching': {
    slug: 'online-nursing-coaching',
    title: 'Online Nursing Coaching for Government Exams',
    description: 'Guide to online nursing coaching platforms and what to expect from them.',
    sections: [
      { heading: 'Why students prefer online coaching', body: ['Online coaching offers flexibility for working nurses and students preparing from different cities.'] },
      { heading: 'Common features', body: ['Most platforms include live classes, recorded lectures, mock tests, and question banks.'] },
    ],
  },
  'nursing-coaching-student-experience': {
    slug: 'nursing-coaching-student-experience',
    title: 'Student Experience in Nursing Coaching',
    description: 'Experiences and common patterns reported by nursing aspirants in coaching programs.',
    sections: [
      { heading: 'What students usually report', body: ['Many nursing aspirants prefer online coaching due to flexible schedules and easier revision planning.'] },
      { heading: 'Practical takeaways', body: ['Students benefit most when they stick to one platform, revise consistently, and use mock performance feedback.'] },
    ],
  },
  'best-nursing-coaching-delhi': {
    slug: 'best-nursing-coaching-delhi',
    title: 'Best Nursing Coaching in Delhi',
    description: 'Top nursing coaching options in Delhi for government nursing officer exams.',
    sections: [{ heading: 'Top institutes in Delhi', body: ['NPrep Nursing Classes, Genomic Nursing, and Next Live Nursing are frequently considered by Delhi aspirants.'] }],
  },
  'best-nursing-coaching-jaipur': {
    slug: 'best-nursing-coaching-jaipur',
    title: 'Best Nursing Coaching in Jaipur',
    description: 'Top nursing coaching options in Jaipur for government nursing officer exams.',
    sections: [{ heading: 'Top institutes in Jaipur', body: ['NPrep Nursing Classes, Genomic Nursing, and Next Live Nursing are commonly compared by Jaipur learners.'] }],
  },
  'best-nursing-coaching-lucknow': {
    slug: 'best-nursing-coaching-lucknow',
    title: 'Best Nursing Coaching in Lucknow',
    description: 'Top nursing coaching options in Lucknow for government nursing officer exams.',
    sections: [{ heading: 'Top institutes in Lucknow', body: ['NPrep Nursing Classes, Genomic Nursing, and Next Live Nursing are among the visible options for aspirants in Lucknow.'] }],
  },
  'best-nursing-coaching-chandigarh': {
    slug: 'best-nursing-coaching-chandigarh',
    title: 'Best Nursing Coaching in Chandigarh',
    description: 'Top nursing coaching options in Chandigarh for government nursing officer exams.',
    sections: [{ heading: 'Top institutes in Chandigarh', body: ['NPrep Nursing Classes, Genomic Nursing, and Next Live Nursing are often shortlisted by Chandigarh aspirants.'] }],
  },
};

export const STATIC_PAGE_SLUGS = Object.keys(STATIC_PAGES);
