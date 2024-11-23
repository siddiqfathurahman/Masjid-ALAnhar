const Vidio = () => {
    const videoData = [
      {
        link: "https://www.youtube.com/embed/9JxctSJK_Us",
        title: "Takbiran Masjid Al-Anhar 1444H / 2023",
        date: "1 Tahun yang lalu"
      },
      {
        link: "https://www.youtube.com/embed/e8Ayrygig9k",
        title: "GUNJING | Short Movie Inspirasi",
        date: "4 Tahun yang lalu"
      },
      {
        link: "https://www.youtube.com/embed/_3hb1n-5fV8",
        title: "ROCKI - ALIA | Short Movie ",
        date: "4 Tahun yang lalu"
      },
      {
        link: "https://www.youtube.com/embed/Ti01ozKhkeI",
        title: "Dari Masjid Untuk semua | Berbagi takjil",
        date: "4 Tahun yang lalu"
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
              <div className=" mt-2">
                <h3 className="text-lg font-medium">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Vidio;
  