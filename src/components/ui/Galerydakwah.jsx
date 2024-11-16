import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallerydakwah = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: '/bg.JPG', title: 'galery1' },
    { id: 2, src: '/bg.JPG', title: 'galery2' },
    { id: 3, src: '/bg.JPG', title: 'galery3' },
    { id: 4, src: '/bg.JPG', title: 'galery4' },
    { id: 5, src: '/bg.JPG', title: 'galery5' },
    { id: 6, src: '/bg.JPG', title: 'galery6' }
  ];

  const visibleImages = showMore ? images : images.slice(0, 3);

  const handleImageClick = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length].src);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length].src);
  };

  return (
    <div className="text-center my-16 font-poppins">
      <h2 className="text-3xl font-extrabold mb-6">Galeri Foto</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
        {visibleImages.map((image, index) => (
          <div key={image.id} className="relative">
            <div
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="px-6 py-2 text-black rounded-md transition"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <>
              <FiChevronUp className="inline-block" /> Tutup
            </>
          ) : (
            <>
              Lihat Semua <FiChevronDown className="inline-block" />
            </>
          )}
        </button>
      </div>


      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 text-white text-3xl font-bold p-2"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain"
              />
              <div className="flex justify-between w-full max-w-sm mt-4">
                <button
                  onClick={goToPreviousImage}
                  className="text-white text-3xl p-4"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={goToNextImage}
                  className="text-white text-3xl p-4"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallerydakwah;
