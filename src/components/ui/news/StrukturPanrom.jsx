const Strukturpanrom = () => {
    return (
      <div className="md:p-12 px-3 py-10 bg-gray-50 rounded-lg shadow-md font-poppins">
        <h2 className="md:text-2xl text-1xl font-bold text-center text-black mb-4">
          Struktur Panitia Ramadhan 1446H <br /> Masjid Al-Anhar
        </h2>
  
        <div className="mb-6 border-b pb-4">
          <h3 className="text-xl font-semibold text-black bold mb-2">Struktur Panitia</h3>
          <ul className="list-none space-y-2 ml-4">
            <li>
              <span className="font-semibold">Ketua:</span> Raditya Ala Alston
            </li>
            <li>
              <span className="font-semibold">Sekretaris:</span>
              <ul className="ml-6 space-y-1">
                <li className="before:content-['•'] before:mr-2">Royhan Kholiq</li>
                <li className="before:content-['•'] before:mr-2">Siddiq Fathurahman</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Bendahara Panrom:</span> Danis
            </li>
          </ul>
        </div>
  
        <div className="mb-6 border-b pb-4">
          <h3 className="text-xl font-semibold text-black bold mb-2">Koordinasi Kegiatan</h3>
          <ul className="list-none space-y-2 ml-4">
            <li>
              <span className="font-semibold">Koordinasi Takjil:</span> Terlampir di bawah
            </li>
            <li>
              <span className="font-semibold">Koordinasi Tarawih Anak-anak:</span> Evant, Kevin
            </li>
            <li>
              <span className="font-semibold">Pj Nuzulul Quran:</span> Ketua
            </li>
            <li>
              <span className="font-semibold">Tadarus Bapak-Bapak:</span> Pak Rustam
            </li>
            <li>
              <span className="font-semibold">Tadarus Ibu-Ibu:</span> Ibu Azizah
            </li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold text-black bold mb-2">Lainnya</h3>
          <ul className="list-none space-y-2 ml-4">
            <li>
              <span className="font-semibold">Koordinator Zakat:</span> Royhan
            </li>
            <li>
              <span className="font-semibold">Humas:</span> Terlampir
            </li>
            <li>
              <span className="font-semibold">Dokumentasi:</span> Lintang, Kevin
            </li>
            <li>
              <span className="font-semibold">Pj Song-Song Ramadhan:</span> Ketua
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Strukturpanrom;
  