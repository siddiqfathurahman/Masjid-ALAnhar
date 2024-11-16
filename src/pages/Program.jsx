import React, { useEffect, useRef, useState } from 'react';

const Program = () => {
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
    <div className='font-poppins text-center flex flex-col items-center mb-10 mt-10 px-5'>
      <h1 className='text-3xl font-extrabold'>Program Dakwah</h1>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>
        <span
          ref={titleRef}
          className={`relative inline-block p-1 text-white ${isVisible ? 'animate-gradient-box transform ' : ''}`}
        >
          MASJID AL-ANHAR
        </span>
      </h2>
      <div className='flex flex-col md:flex-row gap-10 md:gap-32 mt-12 items-center'>
        <div className='flex flex-col items-center'>
          <img src="/bg.JPG" alt="pengajian" className='w-full max-w-md h-auto rounded-2xl' />
          <p className='md:max-w-md pt-3text-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, alias sint. Magnam eveniet quas dolorum dolor consectetur a officia aspernatur. Minima similique, perferendis corrupti nulla consequuntur repudiandae dicta necessitatibus impedit.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/bg.JPG" alt="pengajian" className='w-full max-w-md h-auto rounded-2xl' />
          <p className='md:max-w-md pt-3 text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quibusdam reprehenderit eligendi, maiores ad officiis ipsa tenetur vitae laudantium iste ut quam voluptatem exercitationem et at labore ducimus porro itaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Program;
