import React, { useState } from "react";

const Struktur = () => {
  const struktur = [
    { nama: "Ketua", jabatan: "Ketua", foto: "roy.jpg" },
    { nama: "Wakil Ketua", jabatan: "Wakil Ketua", foto: "roy.jpg" },
    { nama: "Sekretaris", jabatan: "Sekretaris", foto: "roy.jpg" },
    { nama: "Bendahara", jabatan: "Bendahara", foto: "roy.jpg" },
    { nama: "Media", jabatan: "Koordinator Media", foto: "roy.jpg" },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="font-poppins p-6">
      <h1 className="text-center text-2xl font-bold mb-36">Struktur Organisasi</h1>
      <div className="grid grid-cols-5 gap-x-6 gap-y-12 justify-center">
        {struktur.map((anggota, index) => (
          <div
            key={index}
            className="relative w-52 h-64 mx-auto perspective-1000 struktur-card"
            onClick={() => handleFlip(index)}
          >
            {/* Kotak Flip */}
            <div
              className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${
                flippedIndex === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Sisi Depan (Foto) */}
              <div
                className="absolute w-full h-full bg-cover bg-center rounded-lg shadow-md backface-hidden"
                style={{ backgroundImage: `url(/${anggota.foto})` }}
              ></div>

              {/* Sisi Belakang (Keterangan) */}
              <div className="absolute w-full h-full bg-white flex flex-col items-center justify-center text-center backface-hidden rotate-y-180 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{anggota.nama}</h3>
                <p className="text-sm">{anggota.jabatan}</p>
              </div>
            </div>
            
            {/* Menambahkan h1 di bawah box */}
            <h1 className="mt-4 text-center text-xl font-medium">{anggota.nama}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Struktur;
