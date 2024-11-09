import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
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
    <div className=" lg:px-0">
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
        <img 
          className="w-full h-full object-cover" 
          style={{ objectPosition: 'center 70%' }} 
          src="/masjid.jpg" 
          alt="Masjid"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] h-[40%] md:h-[50%] bg-green-800 rounded-2xl"
          style={{ bottom: '-20%' }}
        ></div>
      </div>

      <div className=" md:px-0 font-poppins mt-20 md:mt-28 lg:mt-36 text-left md:text-center">
        <h1 className="px-5 text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <span className="text-black">Profil </span>
        <span 
        ref={titleRef} 
        className={`relative inline-block p-1 text-white ${isVisible ? 'animate-gradient-box' : ''}`}
        >
        MASJID AL-ANHAR
      </span>
      </h1>
      <p className=" px-5 text-lg md:text-xl max-w-2xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto text-left md:text-center px-3 md:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eligendi neque esse cum fuga, 
        repudiandae repellat obcaecati quidem? Id ab iusto quod a illo eius itaque cupiditate beatae nisi aspernatur?
      </p>
      </div>

    </div>
  );
};

export default Hero;
