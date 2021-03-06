import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
