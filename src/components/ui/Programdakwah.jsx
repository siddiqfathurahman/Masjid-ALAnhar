import React from "react";

const Programdakwah = () => {
  return (
    <div className="font-poppins text-center flex flex-col items-center mb-10 mt-10 px-5">
      <h1 className="text-2xl md:text-3xl font-extrabold">Kegiatan Dakwah</h1>
      <div className="flex flex-col md:flex-row md:justify-center gap-10 mt-7">
       
        <div className="flex flex-col items-center max-w-sm md:max-w-md">
          <img
            src="/posterpengajian.webp"
            alt="pengajian"
            className="w-full h-auto rounded-2xl shadow-md"
          />
          <p className="text-sm md:text-base pt-3 text-gray-700 text-left">
            Kegiatan pengajian rutin diadakan setiap akhir bulan pada hari Selasa. Acara ini bertujuan
            untuk mempererat ukhuwah Islamiyah dan meningkatkan pemahaman keagamaan bagi seluruh jamaah.
          </p>
        </div>

        
        <div className="flex flex-col items-center max-w-sm md:max-w-md">
          <img
            src="/kajian.webp"
            alt="kajian"
            className="w-full h-auto rounded-2xl shadow-md"
          />
          <p className="text-sm md:text-base pt-3 text-gray-700 text-left">
            Kajian tafsir Al-Qur'an diadakan setiap dua minggu sekali, pada hari Rabu. Program ini
            bertujuan untuk mendalami isi Al-Qur'an dan mengaplikasikan nilai-nilainya dalam kehidupan
            sehari-hari.
          </p>
        </div>
      </div>

    
      <div className="mt-10 flex justify-center w-full">
        <div className="border-2 border-gray-300 rounded-lg p-6 text-center max-w-lg bg-white shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">Mari Bergabung!</h3>
          <p className="text-sm md:text-base text-gray-600 mt-3">
            Jangan lewatkan kesempatan untuk memperdalam ilmu agama dan mempererat silaturahmi. Ikuti
            kegiatan rutin kami dan jadilah bagian dari keluarga besar Masjid Al-Anhar!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programdakwah;
