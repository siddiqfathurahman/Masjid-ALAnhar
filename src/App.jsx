import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Profil from './pages/Profil';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/program"  />
          <Route path="/organisasi"  />
          <Route path="/kontak" />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
