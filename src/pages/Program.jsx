
import Gallery from "../components/ui/Gallery";
import AnimatedText from "../components/ui/AnimatedText";

const Program = () => {

  const images = [
    { id: 1, src: "/dakwah1.jpeg", title: "kajian rabu" },
    { id: 2, src: "/dakwah2.jpeg", title: "kajian rabu" },
    { id: 3, src: "/dakwah3.jpeg", title: "kajian rabu" },
    { id: 4, src: "/bg.JPG", title: "kajian rabu" },
    { id: 5, src: "/bg.JPG", title: "kajian rabu" },
    { id: 6, src: "/bg.JPG", title: "kajian rabu" },
  ];

  return (
    <>
      <div className="font-poppins text-center flex flex-col items-center mb-10 mt-10 px-5">
        <h1 className="text-3xl font-extrabold">Program Dakwah</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <AnimatedText>MASJID AL-ANHAR</AnimatedText>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-32 mt-12 items-center">
          <div className="flex flex-col items-center">
            <img src="/kajian.jpg" alt="pengajian" className="w-96 max-w-md h-auto rounded-2xl" />
            <p className="md:max-w-md pt-3 text-left">
              Kegiatan pengajian rutin diadakan setiap akhir bulan pada hari Selasa. Acara ini bertujuan untuk
              mempererat ukhuwah Islamiyah dan meningkatkan pemahaman keagamaan bagi seluruh jamaah.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/kajian.jpg" alt="pengajian" className="w-96 max-w-md h-auto rounded-2xl" />
            <p className="md:max-w-md pt-3 text-left">
              Kajian tafsir Al-Qur'an diadakan setiap dua minggu sekali, pada hari Rabu. Program ini bertujuan untuk
              mendalami isi Al-Qur'an dan mengaplikasikan nilai-nilainya dalam kehidupan sehari-hari.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="border-2 border-gray-300 rounded-lg p-6 text-center max-w-lg bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Mari Bergabung!</h3>
            <p className="text-gray-600 mt-3">
              Jangan lewatkan kesempatan untuk memperdalam ilmu agama dan mempererat silaturahmi. Ikuti kegiatan rutin
              kami dan jadilah bagian dari keluarga besar Masjid Al-Anhar!
            </p>
          </div>
        </div>
      </div>

      <Gallery
        title="Galeri"
        images={images}
        imageStyle="rounded-lg shadow-lg"
      />
    </>
  );
};

export default Program;
