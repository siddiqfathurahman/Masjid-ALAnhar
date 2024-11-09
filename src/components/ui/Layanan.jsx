const Layanan = () => {
  const layananData = [
    { id: 1, title: "Layanan 1", image: "/bg.JPG" },
    { id: 2, title: "Layanan 2", image: "/bg.JPG" },
    { id: 3, title: "Layanan 3", image: "/bg.JPG" },
    { id: 4, title: "Layanan 4", image: "/bg.JPG" },
  ];

  return (
    <div className="text-center mt-20 font-poppins mb-10 px-4 md:px-0">
      <h1 className="text-3xl font-extrabold text-left sm:text-center">
        Layanan MASJID
      </h1>
      <p className="text-xl max-w-4xl mt-3 mx-auto text-left sm:text-center">
        Masjid Al-Anhar menyediakan berbagai layanan untuk mendukung kebutuhan ibadah dan kegiatan sosial umat. Kami berkomitmen untuk menciptakan lingkungan yang nyaman dan aman bagi seluruh jamaah.
      </p>

      {/* Grid untuk gambar di mobile, tablet, dan desktop */}
      <div className="grid px-40 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        {layananData.map((layanan) => (
          <div key={layanan.id} className="relative">
            <div className="w-full h-[250px] bg-gray-300 rounded-lg overflow-hidden">
              <img
                src={layanan.image}
                alt={layanan.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t opacity-80 from-black to-transparent px-3 pt-44 rounded-b-lg">
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
