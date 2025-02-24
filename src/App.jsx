import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import ScrollTop from "./components/ScrollTop";
import Berita from "./pages/Berita";
import Berita1 from "./News/Berita1";
import Berita2 from "./News/Berita2";
import Berita3 from "./News/Berita3";
import Berita4 from "./News/Berita4";
import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import AnalyticsTracker from "./AnalyticsTracker";
import { FaUser } from "react-icons/fa6";
import Ramadhan1446 from "./News/Ramadhan1446";
import JadwalRemaja from "./components/ui/news/JadwalRemaja";
import Strukturpanrom from "./components/ui/news/StrukturPanrom";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  const beritaRoutes = [
    { path: "/masjid-al-anhar-raih-penghargaan-di-ajang-takbir-keliling", component: Berita1 },
    { path: "/kajian-al-quran-rutin-di-masjid-al-anhar", component: Berita2 },
    { path: "/pengajian-bulanan-tradisi-di-masjid-al-anhar", component: Berita3 },
    { path: "/masjid-al-anhar-berhasil-memperoleh-9-lembu-dan-21-kambing-dalam-qurban-1445h-2024", component: Berita4 },
  ];

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const docRef = doc(db, "visits", "counter");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const currentCount = docSnap.data().count;

          await updateDoc(docRef, {
            count: currentCount + 1,
          });

          setVisitorCount(currentCount + 1);
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    updateVisitorCount();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          newWorker?.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              window.location.reload();
            }
          });
        });
      });
    }
  }, []);
  


  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />
      <ScrollTop />
      <RunningText text="Selamat datang di website Masjid Al-Anhar Keparakan kidul MG/1234 Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil-masjid-alanhar" element={<Profil />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/organisasi/ramah" element={<Ramah />} />
        <Route path="/organisasi/takmir" element={<Takmir />} />
        <Route path="/organisasi/tpa" element={<Tpa />} />
        <Route path="/organisasi/aisyiyah" element={<Aisyiyah />} />
        <Route path="/al-quran" element={<HeroQuran />} />
        <Route path="/al-quran/surah/:id" element={<SurahDetail />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
        <Route path="/ramadhan1446h" element={<Ramadhan1446 />} />
        <Route path="/ramadhan1446h/strukturpanrom1446h" element={<Strukturpanrom />} />
        <Route path="/ramadhan1446h/jadwalremaja" element={<JadwalRemaja />} />

        {beritaRoutes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <div className="font-poppins flex items-center justify-center text-center bg-hijau py-6 text-white">
        <div className="flex items-center space-x-2">
          <FaUser />
          <span>{visitorCount}</span>
        </div>
      </div>
    </Router>
  );
}
