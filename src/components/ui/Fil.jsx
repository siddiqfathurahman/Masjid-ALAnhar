import React, { useEffect, useRef, useState } from 'react';

const Fil = () => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className="lg:px-0 font-poppins mt-10  text-left md:text-center">
      <h1 className="px-5 text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <span className="text-black">Profil </span>
        <span
          ref={titleRef}
          className={`relative inline-block p-1 text-white ${isVisible ? 'animate-gradient-box transform skew-y-2' : ''}`}
        >
          MASJID AL-ANHAR
        </span>
      </h1>
      <p className="px-5 text-lg md:text-xl max-w-2xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto">
        Masjid Al-Anhar, terletak di Keparakan Kidul, menjadi pusat kegiatan keagamaan dan sosial masyarakat. 
        Selain sebagai tempat ibadah, masjid ini berfungsi sebagai pusat pembinaan spiritual, pendidikan, dan berbagai program sosial.
        Dengan arsitektur sederhana namun nyaman, Masjid Al-Anhar mendukung ukhuwah Islamiyah dan gotong royong warga sekitar.
      </p>
    </div>
  );
};

export default Fil;
