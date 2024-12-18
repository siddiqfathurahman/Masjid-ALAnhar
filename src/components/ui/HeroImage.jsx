import React from "react";
import Slider from "react-slick";

const HeroImage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { src: "/masjid.jpg", alt: "Masjid 1" },
    { src: "/dakwah1.jpeg", alt: "Masjid 2" },
    { src: "/dakwah2.jpeg", alt: "Masjid 3" },
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 70%" }}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroImage;
