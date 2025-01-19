import React from "react";
import Slider from "react-slick";


const Layanan = () => {
  const layananData = [
    { id: 1, title: "Fasilitas air minum gratis, bersih, dan sehat.", image: "/dispenser.jpeg" },
    { id: 2, title: "Tempat ibadah nyaman dengan pendingin ruangan", image: "/ac.jpeg" },
    { id: 3, title: "Tempat wudhu terpisah bersih dan mudah diakses", image: "/tempatwudhu.jpeg" },
    { id: 4, title: "Tersedia Al-Qur'an untuk mendukung kegiatan ibadah", image: "/etalasequran.jpeg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="text-center mt-20 font-poppins mb-10 px-4 md:px-0">
      <h1 className="text-2xl md:text-4xl font-extrabold text-left sm:text-center">
      Fasilitas Masjid
      </h1>
      <div className="w-28 h-1 bg-hijau rounded-xl md:mx-auto mt-2"></div>

      <p className="text-xl max-w-4xl mt-3 mx-auto text-left sm:text-center">
        Masjid Al-Anhar menyediakan berbagai layanan untuk mendukung kebutuhan ibadah dan kegiatan sosial umat. Kami berkomitmen untuk menciptakan lingkungan yang nyaman dan aman bagi seluruh jamaah.
      </p>
      
      <div className="mt-10">
        <div className="block md:hidden mx-14">
          <Slider {...settings}>
            {layananData.map((layanan) => (
              <div key={layanan.id} className="relative group">
                <div className="md:w-[200px] md:h-[250px] w-full h-[250px]  bg-gray-300 rounded-lg overflow-hidden">
                  <img
                    src={layanan.image}
                    alt={layanan.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t opacity-80 from-black to-transparent px-3 pt-44 rounded-b-lg">
                    <h2 className="text-white text-sm leading-snug font-semibold text-left">{layanan.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 mx-20 justify-items-center">
          {layananData.map((layanan) => (
            <div key={layanan.id} className="relative group">
              <div className="md:w-[200px] md:h-[250px] w-[170px] h-[250px] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={layanan.image}
                  alt={layanan.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t opacity-80 from-black to-transparent px-3 pt-44 rounded-b-lg">
                  <h2 className="text-white text-sm leading-snug font-semibold text-left">{layanan.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
