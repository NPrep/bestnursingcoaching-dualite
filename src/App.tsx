import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RouterWrapper } from './next/RouterWrapper';

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

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
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
    </RouterWrapper>
  );
}

export default App;
