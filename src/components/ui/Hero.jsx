const Hero = () => {
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
    <div className="font-poppins text-center mt-36 ">
      <h1 className="text-5xl font-extrabold">Profil Masjid AL-ANHAR</h1>
      <p className="text-xl max-w-4xl mt-3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eligendi neque esse cum fuga, repudiandae repellat obcaecati quidem? Id ab iusto quod a illo eius itaque cupiditate beatae nisi aspernatur?</p>
    </div>
    </div>
    
  );
};

export default Hero;
