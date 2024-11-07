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
    <div>
      <div className="relative w-full h-[400px]">
        <img 
          className="w-full h-full object-cover" 
          style={{ objectPosition: 'center 70%' }} 
          src="/masjid.jpg" 
          alt="Masjid"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-green-800 rounded-2xl"
          style={{ bottom: '-25%' }}
        ></div>
      </div>

     
      <div className="font-poppins text-center mt-36">
        <h1 className="text-5xl font-extrabold">
          <span className="text-black">Profil </span>
          <span 
            ref={titleRef} 
            className={`relative inline-block p-1 text-white ${isVisible ? 'animate-gradient-box' : ''}`}
          >
            MASJID AL-ANHAR
          </span>
        </h1>
        <p className="text-xl max-w-4xl mt-3 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eligendi neque esse cum fuga, 
          repudiandae repellat obcaecati quidem? Id ab iusto quod a illo eius itaque cupiditate beatae nisi aspernatur?
        </p>
      </div>
    </div>
  );
};

export default Hero;
