import React, { useEffect, useRef, useState } from 'react';
import Struktur from '../components/ui/Strukturramah';
import Galleryramah from '../components/ui/Galeryramah';
import Bidang from '../components/ui/Bidang';

export default function Ramah() {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 font-poppins">
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          <span
            ref={titleRef}
            className={`relative inline-block mt-2 p-2 text-white ${
              isVisible ? 'animate-gradient-box transform' : ''
            }`}
          >
            RAMAH Mergangsan
          </span>
        </h2>
        <h1 className="md:text-3xl text-2xl font-extrabold pt-2 text-black">Remaja Masjid Al-Anhar</h1>
        <p className="text-lg text-gray-700 italic mt-2">
          "Bersama Menuju Generasi Islami yang Kreatif dan Berakhlak Mulia"
        </p>
      </header>

      <div className="md:px-10 px-3">
        <h1 className="text-3xl font-extrabold mb-3">Tentang Kami</h1>
        <p className="indent-8">
          Remaja Masjid Al-Anhar adalah pemuda & pemudi yang berdedikasi untuk menyelenggarakan kegiatan keagamaan,
          sosial, dan pendidikan. Dengan semangat kebersamaan, kami bertujuan untuk menciptakan generasi muda yang
          berkarakter Islami, kreatif, dan berakhlak mulia. Kegiatan kami mencakup kajian tematik, pelatihan kepemimpinan,
          serta program-program sosial yang bertujuan memberikan manfaat langsung bagi masyarakat.
        </p>
      </div>

      <div className="md:px-10 pt-10 px-3">
        <h1 className="text-3xl font-extrabold mb-3">Program Kerja</h1>
        <ol className="list-decimal list-inside pl-3 text-left">
          <li className="pl-2 pt-2">Bakti sosial dan santunan masyarakat.</li>
          <li className="pl-2 pt-2">Menjadikan Masjid sebagai Pusat Aktivitas Remaja</li>
          <li className="pl-2 pt-2">Event Ramadhan: buka puasa bersama dan takjil gratis.</li>
          <li className="pl-2 pt-2">Tadarus Al-Qur'an selama Ramadhan.</li>
          <li className="pl-2 pt-2">Takbiran keliling Idul Fitri</li>
          <li className="pl-2 pt-2">Panitia Penyembelihan dan distribusi kurban.</li>
          <li className="pl-2 pt-2">Berperan Aktif dalam Kegiatan Sosial Masyarakat.</li>
        </ol>
      </div>
      <Struktur />
      <Bidang />
      <Galleryramah />
    </div>
  );
}
