const Layanan = () => {
    const layananData = [
      { id: 1, title: "Layanan 1", image: "/bg.JPG" },
      { id: 2, title: "Layanan 2", image: "/bg.JPG" },
      { id: 3, title: "Layanan 3", image: "/bg.JPG" },
      { id: 4, title: "Layanan 4", image: "/bg.JPG" },
      { id: 5, title: "Layanan 5", image: "/bg.JPG" },
    ];
  
    return (
      <div className="text-center mt-20 font-poppins px-[9rem] mb-10">
        <h1 className="text-5xl font-extrabold">Layanan MASJID</h1>
        <p className="text-xl max-w-4xl mt-3 mx-auto">
          Masjid Al-Anhar menyediakan berbagai layanan untuk mendukung kebutuhan ibadah dan kegiatan sosial umat. Kami berkomitmen untuk menciptakan lingkungan yang nyaman dan aman bagi seluruh jamaah.
        </p>
  
        {/* Gambar layanan berjajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {layananData.map((layanan) => (
            <div key={layanan.id} className="relative">
              <div className="w-full h-[200px] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={layanan.image}
                  alt={layanan.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradien di bagian bawah */}
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t opacity-80 from-black to-transparent px-3 pt-36 rounded-b-lg">
                  <h2 className="text-white text-lg font-bold text-left">{layanan.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Layanan;
  