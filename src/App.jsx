import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Profil from './pages/Profil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Program from './pages/Program';
import Kontak from './pages/Kontak';
import Ramah from './pages/Ramah';
import Takmir from './pages/Takmir';
import RunningText from './components/ui/Running-text';
import Tpa from './pages/Tpa';
import Aisyiyah from './pages/Aisyiyah';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen'; 
import HeroQuran from './components/ui/HeroQuran';
import SurahDetail from './components/ui/SurahDetail';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoaded={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/program" element={<Program />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/organisasi/ramah" element={<Ramah />} />
          <Route path="/organisasi/takmir" element={<Takmir />} />
          <Route path="/organisasi/tpa" element={<Tpa />} />
          <Route path="/organisasi/aisyiyah" element={<Aisyiyah />} />
          <Route path="/al-quran" element={<HeroQuran />} /> 
          <Route path="/al-quran/surah/:id" element={<SurahDetail />} /> 
        </Routes>
      </div>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}
