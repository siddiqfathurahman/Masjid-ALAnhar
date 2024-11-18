import React, { useEffect, useRef, useState } from 'react';
import Gallerydakwah from '../components/ui/Galerydakwah';

const Program = () => {
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
    <>
    <div className='font-poppins text-center flex flex-col items-center mb-10 mt-10 px-5'>
      <h1 className='text-3xl font-extrabold'>Program Dakwah</h1>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>
        <span
          ref={titleRef}
          className={`relative inline-block mt-2 p-1 text-white ${isVisible ? 'animate-gradient-box transform ' : ''}`}
        >
          MASJID AL-ANHAR
        </span>
      </h2>
      <div className='flex flex-col md:flex-row gap-10 md:gap-32 mt-12 items-center'>
        <div className='flex flex-col items-center'>
          <img src="/bg.JPG" alt="pengajian" className='w-full max-w-md h-auto rounded-2xl' />
          <p className='md:max-w-md pt-3 text-left'>
          Kegiatan pengajian rutin diadakan setiap akhir bulan pada hari Selasa. 
          Acara ini bertujuan untuk mempererat ukhuwah Islamiyah dan meningkatkan pemahaman keagamaan bagi seluruh jamaah.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/bg.JPG" alt="pengajian" className='w-full max-w-md h-auto rounded-2xl' />
          <p className='md:max-w-md pt-3 text-left'>
          Kajian tafsir Al-Qur'an diadakan setiap dua minggu sekali, pada hari Rabu. 
          Program ini bertujuan untuk mendalami isi Al-Qur'an dan mengaplikasikan nilai-nilainya dalam kehidupan sehari-hari.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="border-2 border-gray-300 rounded-lg p-6 text-center max-w-lg bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800">Mari Bergabung!</h3>
          <p className="text-gray-600 mt-3">
          Jangan lewatkan kesempatan untuk memperdalam ilmu agama dan mempererat silaturahmi. 
          Ikuti kegiatan rutin kami dan jadilah bagian dari keluarga besar Masjid Al-Anhar!
          </p>
        </div>
      </div>
    </div>
    <Gallerydakwah />

    </>
    
  );
};

export default Program;
