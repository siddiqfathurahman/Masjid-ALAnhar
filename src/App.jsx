import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Program from "./pages/Berita";
import Kontak from "./pages/Kontak";
import Ramah from "./pages/Ramah";
import Takmir from "./pages/Takmir";
import RunningText from "./components/ui/Running-text";
import Tpa from "./pages/Tpa";
import Aisyiyah from "./pages/Aisyiyah";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import HeroQuran from "./components/ui/HeroQuran";
import SurahDetail from "./components/ui/SurahDetail";
import ErrorPage from "./components/ErrorPage";
import Dokumentasi from "./components/ui/Dokumentasi";
import Berita from "./pages/Berita";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/profil"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Profil />
              <Footer />
            </>
          }
        />
        <Route
          path="/berita"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Berita />
              <Footer />
            </>
          }
        />
        <Route
          path="/kontak"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Kontak />
              <Footer />
            </>
          }
        />
        <Route
          path="/organisasi/ramah"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Ramah />
              <Footer />
            </>
          }
        />
        <Route
          path="/organisasi/takmir"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Takmir />
              <Footer />
            </>
          }
        />
        <Route
          path="/organisasi/tpa"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Tpa />
              <Footer />
            </>
          }
        />
        <Route
          path="/organisasi/aisyiyah"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Aisyiyah />
              <Footer />
            </>
          }
        />
        <Route
          path="/al-quran"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <HeroQuran />
              <Footer />
            </>
          }
        />
        <Route
          path="/al-quran/surah/:id"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <SurahDetail />
              <Footer />
            </>
          }
          
        />
        <Route 
          path="/dokumentasi"
          element={
            <>
              <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
              <Navbar />
              <Dokumentasi />
              <Footer />
            </>
          }
        
        />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
