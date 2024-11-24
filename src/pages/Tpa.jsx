import React, { useRef, useState, useEffect } from 'react';

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
    <div className="font-poppins text-center flex flex-col items-center mb-10 mt-10 px-7">
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
      
      <h2 className="mt-14 text-3xl font-bold text-left">Pengurus Takmir Periode 2022 - 2026</h2>
      <table className="min-w-full mt-4 table-auto border-collapse border-2 border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-center border-2">No</th>
            <th className="px-4 py-2 text-center border-2">Nama</th>
            <th className="px-4 py-2 text-center border-2">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 text-center border-2">{index + 1}</td>
              <td className="px-4 py-2 text-center border-2">Lorem Ipsum</td>
              <td className="px-4 py-2 text-center border-2">Jabatan {index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tpa;
