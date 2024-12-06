import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Struktur = () => {
  const struktur = [
    { nama: "Muh Royhan Kholiq", jabatan: "Ketua", foto: "roy.jpg", motto: "Hidup seperti lary" },
    { nama: "Wakil Ketua", jabatan: "Wakil Ketua", foto: "roy.jpg", motto: "Hidup seperti lary" },
    { nama: "Sekretaris", jabatan: "Sekretaris", foto: "roy.jpg", motto: "Hidup seperti lary" },
    { nama: "Bendahara", jabatan: "Bendahara", foto: "roy.jpg", motto: "Hidup seperti lary" },
    { nama: "Muh Siddiq Fathurahman", jabatan: "Media", foto: "ftr.jpeg", motto: "Hidup seperti lary" },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="font-poppins p-6">
      <h1 className="text-center text-1xl font-bold mb-7">Struktur Organisasi Masa Priode 2022-2040</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
        {struktur.map((anggota, index) => (
          <div
            key={index}
            className={`relative w-56 h-64 mx-auto perspective-1000 struktur-card ${
              anggota.jabatan === "Ketua" ? "order-first sm:order-none" : ""
            }`}
            onClick={() => handleFlip(index)}
            data-aos="zoom-in" 
          >
            <div
              className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
                flippedIndex === index ? "rotate-y-180" : ""
              }`}
            >
              <div
                className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-md backface-hidden"
                style={{ backgroundImage: `url(/${anggota.foto})` }}
              ></div>
              <div className="absolute w-full h-full bg-white flex flex-col text-center items-center justify-center backface-hidden rotate-y-180 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{anggota.nama}</h3>
                <p className="text-sm">Jabatan: {anggota.jabatan}</p>
                <p>{anggota.motto}</p>
              </div>
            </div>
            <h1 className="md:mt-4 mb-16 text-center text-xl font-medium">{anggota.jabatan}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Struktur;
