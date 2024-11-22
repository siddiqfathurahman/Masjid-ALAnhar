const Vidio = () => {
    const videoLinks = [
      "https://www.youtube.com/embed/9JxctSJK_Us",
      "https://www.youtube.com/embed/e8Ayrygig9k",
      "https://www.youtube.com/embed/_3hb1n-5fV8",
      "https://www.youtube.com/embed/Ti01ozKhkeI"
    ];
  
    return (
      <div className="p-6">

        <h1 className="text-2xl font-bold font-poppins font-extrabold mb-6">Vidio Terbaru</h1>
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {videoLinks.map((link, index) => (
            <iframe
              key={index}
              className="w-full h-48 md:h-60 rounded-lg"
              src={link}
              title={`Vidio ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    );
  };
  
  export default Vidio;
  