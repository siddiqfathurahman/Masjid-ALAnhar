import React from "react";
import Slider from "react-slick";

const HeroImage = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    {
      src: "/ramah4.jpeg",
      alt: "Masjid 1",
      berita: "Masjid Al-Anhar Mendapatkan juara 1 Kategori Lampion dan juara 2 Kostum pada takbir keliling yang diselenggarakan oleh PHBI MERGANGSAN",
      tanggal: "Kamis, 19 Desember 2024",
    },
    {
      src: "/dakwah1.jpeg",
      alt: "Masjid 2",
      berita:
        "Kegiatan Rutin Pengajian Kajian Al-Quran surat pendek setiap 2 Minggu sekali pada hari Rabu dan makan malam",
      tanggal: "Kamis, 19 Desember 2024",
    },
    {
      src: "/dakwah2.jpeg",
      alt: "Masjid 3",
      berita: "Kegiatan Pengajian Rutin setiap Kamis dan Jumat Kliwon di masjid",
      tanggal: "Kamis, 19 Desember 2024",
    },
  ];

  return (
    <div className="relative w-full font-poppins">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group"
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={image.src}
                alt={image.alt}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute md:bottom-14 bottom-8 md:left-7 left-4 pr-7 text-white text-sm sm:text-lg max-w-8xl md:text-xl lg:text-4xl font-semibold">
              {image.berita}
            </div>
            <div className="absolute bottom-1 right-4 text-white text-xs sm:text-sm md:text-lg">
              {image.tanggal}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImage;
