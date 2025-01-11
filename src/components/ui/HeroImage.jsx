import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
      src: "/ramah3.jpeg",
      alt: "Masjid 1",
      berita:
        "Masjid Al-Anhar Mendapatkan juara 1 Kategori Lampion dan juara 2 Kostum pada takbir keliling yang diselenggarakan oleh PHBI MERGANGSAN.",
      tanggal: "Kamis, 19 Desember 2024.",
      path: "/berita1",
    },
    {
      src: "/dakwah1.jpeg",
      alt: "Masjid 2",
      berita:
        "Kegiatan Rutin Pengajian Kajian Al-Quran surat pendek setiap 2 Minggu sekali pada hari Rabu & Senin Ba'da Isya.",
      tanggal: "Kamis, 19 Desember 2024",
      path: "/berita2",
    },
    {
      src: "/dakwah2.jpeg",
      alt: "Masjid 3",
      berita: "Pengajian bulanan diadakan setiap Selasa pada pekan pertama setiap bulan dan pada malam Jumat Kliwon setelah salat Isya",
      tanggal: "Kamis, 19 Desember 2024",
      path: "/berita3",
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
            <div className="absolute md:bottom-6 bottom-4 md:left-7 left-4 pr-7 text-white text-xs sm:text-lg max-w-8xl md:text-xl lg:text-4xl font-semibold">
              <p>{image.berita}</p>
              <div className="flex items-center gap-1 text-xs md:text-lg">
                <Link
                  to={image.path}
                  className="text-white underline hover:text-blue-400 flex items-center gap-1"
                >
                  baca selengkapnya
                  <FaArrowUpRightFromSquare className="inline-block text-xs md:text-sm" />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-1 right-4 text-white text-[8px] sm:text-sm md:text-lg">
              {image.tanggal}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImage;
