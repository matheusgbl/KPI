import Questions from 'pages/Questions';
import Results from 'pages/Results';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/Home';

export const PageRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </Router>
);
