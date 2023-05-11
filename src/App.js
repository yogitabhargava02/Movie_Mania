import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import ConfirmationPage from './Pages/ConfirmationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/confirmation/:id" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
