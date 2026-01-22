// Centralized mock data to simulate a CMS
import { Heart, Baby, Brain, Microscope, Stethoscope, Activity, Utensils, BookOpen } from 'lucide-react';

export const EXTERNAL_LINKS = {
  gold: 'https://gold.nprep.in',
  rapid: 'https://rapid.nprep.in',
  testSeries: 'https://qtestseries.nprep.in',
  pyq: 'https://links.nprep.in/aimfBv60HYb',
  dailyTest: 'https://links.nprep.in/o0EgHK1NQZb',
  freeResources: 'https://links.nprep.in/MgQYauwAAZb',
  rrb_2021: 'https://links.nprep.in/QNGYhi8GfZb',
  rrb_officer: 'https://links.nprep.in/aU5kPu0bJZb',
};

export const EXAMS = [
  {
    id: 'aiims-norcet',
    name: 'AIIMS NORCET',
    slug: 'aiims-norcet-nursing-exam',
    category: 'Central Govt',
    overview: 'The Nursing Officer Recruitment Common Eligibility Test (NORCET) is conducted by AIIMS New Delhi for recruitment of Nursing Officers.',
    conductingBody: 'AIIMS New Delhi',
    eligibility: 'B.Sc Nursing / Post Basic B.Sc Nursing or GNM with 2 years experience.',
    pattern: '200 MCQs (180 Subject + 20 GK/Aptitude), 3 Hours duration.',
    syllabus: 'Medical Surgical Nursing, Pediatric Nursing, OBG, Community Health, Mental Health, etc.',
    pyqAvailable: true,
  },
  {
    id: 'rrb-nursing-superintendent',
    name: 'RRB Nursing Superintendent',
    slug: 'rrb-nursing-superintendent-exam',
    category: 'Central Govt',
    overview: 'Railway Recruitment Board (RRB) conducts this exam for Nursing Superintendent positions in Indian Railways.',
    conductingBody: 'Railway Recruitment Board',
    eligibility: 'General Nursing and Midwifery (GNM) or B.Sc Nursing.',
    pattern: '100 Questions (70 Professional + 30 Gen Awareness/Science/Arithmetic).',
    syllabus: 'Anatomy, Physiology, Nutrition, Nursing Foundations, etc.',
    pyqAvailable: true,
  },
  {
    id: 'dsssb-nursing',
    name: 'DSSSB Nursing Officer',
    slug: 'dsssb-nursing-officer-exam',
    category: 'State Govt',
    overview: 'Delhi Subordinate Services Selection Board exam for nursing positions in Delhi Govt hospitals.',
    conductingBody: 'DSSSB',
    eligibility: 'GNM or B.Sc Nursing with registration.',
    pattern: '200 Marks (Section A: General, Section B: Nursing Subjects).',
    syllabus: 'General Awareness, Reasoning, Math, Hindi, English, Nursing Subjects.',
    pyqAvailable: true,
  },
  {
    id: 'esic-nursing',
    name: 'ESIC Nursing Officer',
    slug: 'esic-nursing-officer',
    category: 'Central Govt',
    overview: 'Employees State Insurance Corporation exam for nursing officers.',
    conductingBody: 'ESIC',
    eligibility: 'Diploma in GNM or Degree in Nursing.',
    pattern: '125 Questions (100 Technical + 25 General Aptitude).',
    syllabus: 'Nursing subjects, General Awareness, Aptitude.',
    pyqAvailable: true,
  }
];

export const COURSES = [
  {
    id: 1,
    title: 'GOLD Batch',
    provider: 'NPrep',
    link: EXTERNAL_LINKS.gold,
    features: [
      'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
      '900 Hours - Basic to Advanced Theory (with Clinicals)',
      '100 Hrs - Rapid Revision 2.0',
      '30,000 Questions - QBank (Topic Wise)',
      'Daily Test Series',
      'Previous Year Papers',
      'Subject Wise Papers'
    ],
    exam: 'AIIMS NORCET',
    color: 'text-yellow-600',
    borderColor: 'border-yellow-400',
    bg: 'bg-yellow-50'
  },
  {
    id: 2,
    title: 'Rapid Revision 2.0',
    provider: 'NPrep',
    link: EXTERNAL_LINKS.rapid,
    features: [
      'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
      'Complete Nursing Syllabus in 100 Hours',
      'Previous Year Papers - with Explainations',
      'Daily Test Series',
      '30,000+ Questions - QBank ( Topic Wise)',
      'Subject Wise Tests'
    ],
    exam: 'All Exams',
    color: 'text-red-600',
    borderColor: 'border-red-400',
    bg: 'bg-red-50'
  },
  {
    id: 3,
    title: 'NPrep Test Series',
    provider: 'NPrep',
    link: EXTERNAL_LINKS.testSeries,
    features: [
      '30,000+ Questions - QBank(Topic Wise)',
      'Each Question with Explaination',
      'Subject Wise Tests',
      'Daily Test Series',
      'Previous Year Question Papers',
      'IBQs, Clinical Scenario Questions'
    ],
    exam: 'Test Series',
    color: 'text-blue-600',
    borderColor: 'border-blue-400',
    bg: 'bg-blue-50'
  }
];

export const SUBJECT_TESTS = [
  { name: 'Fundamentals of Nursing', link: 'https://links.nprep.in/uiXjRG1TPXb', subject: 'Foundation', color: 'bg-blue-50 text-blue-700', icon: 'Stethoscope' },
  { name: 'Medical Surgical Nursing', link: 'https://links.nprep.in/hm3aQhddIZb', subject: 'Clinical', color: 'bg-green-50 text-green-700', icon: 'Activity' },
  { name: 'Obstetrics & Gynecology', link: 'https://links.nprep.in/cpRfJAdQPYb', subject: 'Maternal', color: 'bg-pink-50 text-pink-700', icon: 'Baby' },
  { name: 'Community Health Nursing', link: 'https://links.nprep.in/vGYx4MAtWZb', subject: 'Public Health', color: 'bg-purple-50 text-purple-700', icon: 'Heart' },
  { name: 'Pediatrics', link: 'https://links.nprep.in/NbTlCc02ZZb', subject: 'Child Health', color: 'bg-yellow-50 text-yellow-700', icon: 'Baby' },
  { name: 'Psychiatry', link: 'https://links.nprep.in/mEhGXn27ZZb', subject: 'Mental Health', color: 'bg-indigo-50 text-indigo-700', icon: 'Brain' },
  { name: 'Nutrition', link: 'https://links.nprep.in/xqzNDqLI1Zb', subject: 'Dietetics', color: 'bg-orange-50 text-orange-700', icon: 'Utensils' },
  { name: 'Nursing Research', link: 'https://links.nprep.in/IuYQSDcC6Zb', subject: 'Research', color: 'bg-teal-50 text-teal-700', icon: 'Microscope' },
];

export const PYQ_LINKS = {
  general: EXTERNAL_LINKS.pyq,
  rrb: [
    { name: 'RRB Nursing Officer-2021', link: 'https://links.nprep.in/QNGYhi8GfZb' },
    { name: 'RRB Nursing Officer', link: 'https://links.nprep.in/aU5kPu0bJZb' },
    { name: 'RRB Shift - I (20 JULY )', link: 'https://links.nprep.in/Wm36lpRx0Zb' },
    { name: 'RRB Shift - I (21 July 2019)', link: 'https://links.nprep.in/9PwNw5DuPZb' },
    { name: 'RRB Nursing Superintendent 29 APRIL Shift 3', link: 'https://links.nprep.in/8LR9YaHPEZb' },
    { name: 'RRB Nursing Officer', link: 'https://links.nprep.in/iYJK63NtHZb' },
  ],
  cho: [
    { name: 'MP CHO', link: 'https://links.nprep.in/OT7EWR5r3Zb' },
    { name: 'MP CHO Paper - 2022', link: 'https://links.nprep.in/EKC5ZE7r3Zb' },
    { name: 'Rajasthan CHO - 2024', link: 'https://links.nprep.in/rocuf2uwYXb' },
    { name: 'Rajasthan CHO-2023', link: 'https://links.nprep.in/J4rAoKv3ZZb' },
    { name: 'UK CHO - 2021', link: 'https://links.nprep.in/3MAAJScs3Zb' },
    { name: 'UP CHO', link: 'https://links.nprep.in/7eNfOtC51Zb' },
    { name: 'NHM Haryana CHO Official Paper (29 Jan 2023)', link: 'https://links.nprep.in/SBr7raqs3Zb' },
  ],
  norcet: [
    { name: 'NORCET - 3 (2022) Shift - 1', link: 'https://links.nprep.in/f2X7pvwHMZb' },
    { name: 'NORCET 3 - 2022 ; Shift-II', link: 'https://links.nprep.in/K7VH496yQZb' },
    { name: 'NORCET 7 prelims - ( sep.) 2024', link: 'https://links.nprep.in/aXOX5oZXPZb' },
    { name: 'NORCET 3 - June 2023', link: 'https://links.nprep.in/weaumiphIZb' },
    { name: 'NORCET 20 Nov, Shift 2', link: 'https://links.nprep.in/xkOMXfpAhZb' },
  ]
};

export const COMPARISON_DATA = [
  {
    parameter: 'Clinical Scenario Qs',
    nprep: 'High (NCLEX Level)',
    nnl: 'Medium',
    nw: 'Low (Theory Focused)',
    adda: 'Low'
  },
  {
    parameter: 'PYQ Integration',
    nprep: 'In-Video Integration',
    nnl: 'Separate PDFs',
    nw: 'Separate Section',
    adda: 'Separate Section'
  },
  {
    parameter: 'Exam Coverage',
    nprep: 'All (NORCET, RRB, CHO)',
    nnl: 'NORCET Focused',
    nw: 'General Nursing',
    adda: 'State Exams'
  },
  {
    parameter: 'Faculty Expertise',
    nprep: 'Ex-AIIMS Officers',
    nnl: 'Subject Experts',
    nw: 'Mixed Faculty',
    adda: 'General Faculty'
  },
  {
    parameter: 'Test Series Quality',
    nprep: 'Rank Predictive AI',
    nnl: 'Standard',
    nw: 'Basic',
    adda: 'Standard'
  },
  {
    parameter: 'Doubt Resolution',
    nprep: '24/7 Doubt Engine',
    nnl: 'Scheduled Sessions',
    nw: 'Community Based',
    adda: 'Limited'
  }
];

export const BLOGS = [
  {
    id: 1,
    slug: 'best-nursing-coaching-in-india',
    title: 'Best Nursing Coaching in India: A Comprehensive Review 2025',
    excerpt: 'Choosing the right coaching is crucial for NORCET and RRB success. We compare top platforms based on results, faculty, and content.',
    date: 'Oct 15, 2025',
    category: 'Coaching Comparison'
  },
  {
    id: 2,
    slug: 'why-pyqs-matter-in-nursing-exams',
    title: 'Why Previous Year Questions (PYQs) Are the Key to Cracking AIIMS NORCET',
    excerpt: 'Analysis shows 40% of concepts repeat in nursing exams. Learn how to leverage PYQs effectively with NPrep.',
    date: 'Oct 12, 2025',
    category: 'Preparation Strategy'
  },
  {
    id: 3,
    slug: 'online-vs-offline-nursing-coaching',
    title: 'Online vs Offline Nursing Coaching: What Works Best for Working Nurses?',
    excerpt: 'With hectic shifts, is offline coaching viable? We explore why online platforms like NPrep are becoming the top choice.',
    date: 'Oct 08, 2025',
    category: 'Career Guidance'
  },
  {
    id: 4,
    slug: 'rrb-nursing-superintendent-strategy',
    title: 'RRB Nursing Superintendent 2026: Complete Preparation Strategy',
    excerpt: 'Detailed roadmap to crack the upcoming Railway Nursing exam with focus on non-technical subjects.',
    date: 'Oct 05, 2025',
    category: 'Exam Strategy'
  },
  {
    id: 5,
    slug: 'norcet-7-paper-analysis',
    title: 'NORCET 7 Prelims Analysis: Shift-wise Breakdown & Cutoff Prediction',
    excerpt: 'A deep dive into the difficulty level and topic weightage of the recent NORCET exam.',
    date: 'Oct 01, 2025',
    category: 'Exam Analysis'
  },
  {
    id: 6,
    slug: 'how-to-manage-clinical-duties-study',
    title: 'Balancing Clinical Duties & Studies: Tips for Working Nurses',
    excerpt: 'Practical time management tips for nurses working in private hospitals while preparing for govt exams.',
    date: 'Sep 28, 2025',
    category: 'Motivation'
  },
  {
    id: 7,
    slug: 'cho-exam-preparation-guide',
    title: 'State CHO Exams: Syllabus, Pattern, and How to Prepare',
    excerpt: 'Everything you need to know about Community Health Officer exams in UP, MP, and Rajasthan.',
    date: 'Sep 25, 2025',
    category: 'State Exams'
  },
  {
    id: 8,
    slug: 'best-books-for-nursing-exams',
    title: 'Top 5 Books Every Nursing Aspirant Must Have in 2025',
    excerpt: 'A curated list of standard textbooks and guidebooks for NORCET and other nursing competitive exams.',
    date: 'Sep 20, 2025',
    category: 'Resources'
  },
  {
    id: 9,
    slug: 'mns-exam-eligibility-pattern',
    title: 'Military Nursing Service (MNS): Eligibility, Pattern & Interview Tips',
    excerpt: 'A complete guide for female aspirants aiming to join the Indian Armed Forces as Nursing Officers.',
    date: 'Sep 15, 2025',
    category: 'Defense Nursing'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "AIIMS NORCET Rank 142",
    text: "The Gold Batch changed my life. The clinical scenarios are exactly like what came in the exam. NPrep's faculty is unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "RRB Nursing Superintendent Aspirant",
    text: "Rapid Revision 2.0 helped me clear my concepts in just 2 months. The daily test series kept me on track.",
    rating: 5
  },
  {
    id: 3,
    name: "Anjali Gupta",
    role: "CHO Selection",
    text: "Best Test Series for Nursing. The explanations are detailed and the analytics helped me find my weak areas instantly.",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Nursing Student",
    text: "Finally a platform that teaches concepts, not just rote learning. The PYQ integration in lectures is a game changer.",
    rating: 5
  },
  {
    id: 5,
    name: "Sneha Patel",
    role: "ESIC Nursing Officer",
    text: "I used the NPrep QBank for 3 months and saw a massive improvement in my mock scores. Highly recommended!",
    rating: 5
  }
];
