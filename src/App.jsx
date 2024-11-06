import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Profil from './pages/Profil';
import Program from './pages/Program';
import Organisasi from './pages/Organisasi';
import Kontak from './pages/Kontak';
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
          <Route path="/program" element={<Program />} />
          <Route path="/organisasi" element={<Organisasi />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
