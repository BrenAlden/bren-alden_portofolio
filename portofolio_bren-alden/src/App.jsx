// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import AboutMePage from './components/AboutMe'; 
import ContactMe from './components/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container"> 
        <Header /> 
        <Routes> 
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactMe />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;