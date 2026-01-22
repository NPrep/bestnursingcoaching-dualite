import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';

// Pages
import { Home } from './pages/Home';
import { ExamDirectory } from './pages/ExamDirectory';
import { ExamDetail } from './pages/ExamDetail';
import { CoachingComparison } from './pages/CoachingComparison';
import { Courses } from './pages/Courses';
import { PYQHub } from './pages/PYQHub';
import { TestSeries } from './pages/TestSeries';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* Exam Routes */}
            <Route path="exams" element={<ExamDirectory />} />
            <Route path="exams/:slug" element={<ExamDetail />} />
            
            {/* Comparison Route */}
            <Route path="best-nursing-coaching-in-india" element={<CoachingComparison />} />
            
            {/* Resources Routes */}
            <Route path="nursing-exam-courses" element={<Courses />} />
            <Route path="nursing-pyq" element={<PYQHub />} />
            <Route path="nursing-test-series" element={<TestSeries />} />
            
            {/* Blog Routes */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
