const Hero = () => {
  return (
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
  );
};

export default Hero;
