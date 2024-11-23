const Vidio = () => {
    const videoData = [
      {
        link: "https://www.youtube.com/embed/9JxctSJK_Us",
        title: "Kegiatan Takbiran 1443H",
        date: "12 Mei 2023"
      },
      {
        link: "https://www.youtube.com/embed/e8Ayrygig9k",
        title: "Kajian Tematik",
        date: "25 Juli 2023"
      },
      {
        link: "https://www.youtube.com/embed/_3hb1n-5fV8",
        title: "Program Sosial",
        date: "10 Oktober 2023"
      },
      {
        link: "https://www.youtube.com/embed/Ti01ozKhkeI",
        title: "Pelatihan Kepemimpinan",
        date: "5 November 2023"
      }
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold font-poppins font-extrabold mb-6">Vidio Terbaru</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {videoData.map((video, index) => (
            <div key={index} className="w-full">
              <iframe
                className="w-full h-48 md:h-60 rounded-lg"
                src={video.link}
                title={`Vidio ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Vidio;
  