import React, { useRef, useState, useEffect } from 'react';
import Gallerytpa from '../components/ui/Galerytpa';

const Tpa = () => {
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
    <div className="font-poppins text-center flex flex-col mb-10 mt-10 px-7">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <span
          ref={titleRef}
          className={`relative inline-block mt-2 p-1 text-white transition-transform duration-700 ${
            isVisible ? 'animate-gradient-box scale-105' : 'opacity-0'
          }`}
        >
          TAMAN PENDIDIKAN AL QUR'AN
        </span>
      </h2>
      <p className="px-5 text-lg md:text-xl max-w-4xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto">
      TPA Masjid Al-Anhar adalah program pendidikan Al-Quran yang bertujuan untuk membina anak-anak usia dini hingga remaja dalam membaca, memahami, dan mengamalkan ajaran Al-Quran
      </p>

    <div>
        <h2 className="mt-8 text-3xl font-bold text-left">Program & Kegiatan</h2>
        <p className="pt-5 text-left">
        Taman Pendidikan Al-Qur'an (TPA) Masjid Al-Anhar menyelenggarakan berbagai program untuk mendukung pembelajaran Al-Qur'an dan penanaman nilai-nilai Islami. Berikut adalah 7 program utama yang diadakan:</p>
            <ol className="list-decimal list-inside pl-1 text-left">
                <li className="pl-2 pt-2">Pembelajaran membaca dan menulis Al-Qur'an dengan metode Iqro.</li>
                <li className="pl-2 pt-2">Hafalan surat pendek dan doa-doa harian.</li>
                <li className="pl-2 pt-2">Kajian akhlak dan nilai-nilai Islami untuk anak-anak.</li>
                <li className="pl-2 pt-2">Lomba-lomba Islami, seperti adzan dan cerdas cermat Al-Qur'an.</li>
                <li className="pl-2 pt-2">Kegiatan bersama, seperti buka puasa sunnah dan perayaan hari besar Islam.</li>
                <li className="pl-2 pt-2">Kelas Tahsin untuk memperbaiki bacaan Al-Qur'an.</li>
                <li className="pl-2 pt-2">Pembinaan remaja melalui diskusi Islami dan pelatihan keterampilan.</li>
            </ol>
    </div>

    <div>
  <h2 className="mt-8 text-3xl font-bold text-left">Pengajar & Pendamping</h2>
  <ul className="list-decimal list-inside pl-1 text-left pt-4">
    <li className="pl-2 pt-2">Ustaz Lorem</li>
    <li className="pl-2 pt-2">Ustaz Lorem</li>
    <li className="pl-2 pt-2">Ustaz Lorem</li>
    <li className="pl-2 pt-2">Ustaz Lorem</li>
  </ul>
</div>
    
    <div className='pt-10'>
  <h1 className='text-3xl font-bold text-center'>Jadwal Belajar</h1>
  <div className='flex flex-col mx-auto md:flex-row justify-center gap-4 pt-6'>
    <div className='bg-red-500 text-white rounded-lg w-52 h-52 text-center flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl'>RABU</h1>
      <h2 className='text-2xl'>16.00 - 17.00</h2>
    </div>
    <div className='bg-yellow-500 text-white rounded-lg w-52 h-52 text-center flex flex-col items-center justify-center'>
      <h1 className='font-bold text-3xl'>SABTU</h1>
      <h2 className='text-2xl'>16.00 - 17.00</h2>
    </div>
  </div>
</div>



<div className="mt-8 flex justify-center">
  <div className="border-2 border-gray-300 rounded-lg p-10 text-center max-w-lg bg-white shadow-lg">
    <h3 className="text-2xl font-bold text-gray-800">GRATIS</h3>
    <p className="text-gray-600 mt-3">
      Ayo daftarkan buah hati Anda di TPA Masjid Al-Anhar! Bersama kami, si kecil akan belajar Al-Qur'an dan nilai-nilai Islami untuk menjadi generasi Qurani yang cerdas dan berakhlak mulia.
    </p>
    <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-4'>Info Pendaftaran</button>
  </div>
</div>

<Gallerytpa />


    </div>
  );
};

export default Tpa;
