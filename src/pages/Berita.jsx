import { Link } from "react-router-dom"; // Pastikan Link diimpor
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Berita = () => {
  const Artikel = [
    {
      tittle: "Masjid Al-Anhar Raih Penghargaan di Ajang Takbir Keliling",
      date: "12 Januari 2025",
      berita: "Masjid Al-Anhar berhasil meraih juara 1 dalam kategori Lampion dan juara 2 untuk Kostum pada lomba Takbir Keliling yang diselenggarakan oleh PHBI Mergangsan. Prestasi ini menjadi kebanggaan tersendiri bagi jamaah dan pengurus masjid. Acara berlangsung meriah dengan partisipasi masyarakat yang antusias.",
      path: "/berita1",
    },
    {
      tittle: "Kajian Al-Quran Rutin di Masjid Al-Anhar",
      date: "13 Januari 2025",
      berita: "Masjid Al-Anhar mengadakan pengajian rutin berupa kajian Al-Quran untuk surat-surat pendek. Kegiatan ini diadakan setiap dua minggu sekali, tepatnya pada hari Rabu dan Senin setelah salat Isya. Pengajian ini bertujuan untuk memperdalam pemahaman Al-Quran dan mempererat ukhuwah Islamiyah.",
      path: "/berita2",
    },
    {
      tittle: "Pengajian Bulanan: Tradisi di Masjid Al-Anhar",
      date: "14 Januari 2025",
      berita: "Masjid Al-Anhar menggelar pengajian bulanan setiap Selasa pada pekan pertama bulan tersebut. Selain itu, ada juga pengajian khusus pada malam Jumat Kliwon yang diadakan setelah salat Isya. Acara ini dihadiri oleh jamaah dari berbagai kalangan, menambah semarak syiar Islam di lingkungan masjid.",
      path: "/berita3",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 py-10">
      <div className="w-full max-w-7xl">
        <div className="flex-col w-full p-8 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="md:text-3xl text-lg font-bold">
              Berita Menarik Masjid Al-Anhar
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 py-10 gap-6">
          {Artikel.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
            >
              <Link
                to={item.path}
                className="text-2xl font-semibold text-hijau mb-1 hover:underline"
              >
                {item.tittle}
              </Link>
              <p className="text-sm text-gray-500 mb-4">{item.date}</p>
              <p className="text-gray-700 mb-5">{item.berita}</p>
              <div className="absolute bottom-4 right-4">
                <Link
                  to={item.path}
                  className="text-sm font-semibold text-black flex items-center gap-2 hover:text-blue-500"
                >
                  Baca Lebih Lengkap
                  <FaArrowUpRightFromSquare className="inline-block text-xs md:text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berita;
