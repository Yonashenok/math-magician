import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<QuotePage />} />
      </Routes>
    </div>
  );
}

export default App;
