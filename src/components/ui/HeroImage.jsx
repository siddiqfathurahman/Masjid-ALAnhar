
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { images } from '../../data/databerita';

const HeroImage = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    accessibility: true,
  };

  return (
    <div className="relative w-full font-poppins">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group"
            aria-hidden="false"
            tabIndex={0}
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                src={image.src}
                alt={image.alt}
                width="100%" 
                height="auto" 
                loading="lazy" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute md:bottom-6 bottom-4 md:left-7 left-4 pr-7 text-white text-xs sm:text-lg max-w-8xl md:text-xl lg:text-4xl font-semibold">
              <p>{image.berita}</p>
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <Link
                  to={image.path}
                  className="text-white hover:underline hover:text-blue-400 flex items-center pt-2 gap-1"
                >
                  Baca Selengkapnya
                  <FaArrowUpRightFromSquare className="inline-block " size={10} />
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
