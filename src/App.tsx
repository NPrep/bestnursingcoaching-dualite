import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RouterWrapper } from './next/RouterWrapper';

import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { StaticPage } from './pages/StaticPage';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogList />} />
          <Route path=":slug" element={<StaticPage />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;
