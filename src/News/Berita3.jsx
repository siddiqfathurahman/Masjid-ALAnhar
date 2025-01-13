import Coment from "../components/ui/ComentNews";
import ListBerita from "./ListBerita";

const Berita3 = () => {
    return (
        <>
      <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 py-10">
        <div className="w-full max-w-7xl">
          <div className="flex-col w-full md:p-8 p-3 bg-white shadow-lg rounded-lg ">
            <h1 className="md:text-4xl max-w-5xl text-hijau text-lg font-extrabold mb-2">
              Pengajian Bulanan: Tradisi di Masjid Al-Anhar
            </h1>
            <p className="text-gray-400 mb-5">Selasa, 14 Januari 2025</p>
            <p className="mb-4">
              Masjid Al-Anhar kembali menghadirkan suasana keagamaan yang penuh hikmah melalui pengajian bulanan yang menjadi tradisi di lingkungan masjid. Pengajian ini digelar setiap Selasa pada pekan pertama setiap bulan. Selain itu, malam Jumat Kliwon juga menjadi momen istimewa, di mana jamaah berkumpul setelah salat Isya untuk mengikuti pengajian khusus.
            </p>
            <p className="mb-4">
              Acara ini tidak hanya menjadi ajang untuk menambah wawasan keagamaan, tetapi juga menjadi sarana mempererat ukhuwah Islamiyah di antara jamaah. Kegiatan ini dihadiri oleh jamaah dari berbagai kalangan, mulai dari anak muda hingga orang tua, menciptakan suasana yang harmonis dan penuh keakraban. 
            </p>
            <p className="mb-4">
              Pada malam Jumat Kliwon, suasana terasa lebih khidmat. Jamaah terlihat antusias mendengarkan ceramah yang disampaikan oleh ustaz dengan gaya penyampaian yang menarik dan mendalam. Ceramah tersebut seringkali mengangkat tema-tema yang relevan dengan kehidupan sehari-hari, memberikan pencerahan dan inspirasi bagi setiap yang hadir.
            </p>
            <p className="mb-4">
              Salah seorang jamaah yang rutin menghadiri pengajian bulanan ini mengungkapkan, “Kegiatan ini sangat bermanfaat bagi kami. Selain mendapatkan ilmu, kami juga merasa lebih dekat dengan sesama jamaah. Suasananya sangat kekeluargaan.”
            </p>
            <p>
              Dengan pengajian bulanan dan malam Jumat Kliwon, Masjid Al-Anhar berharap dapat terus menjaga tradisi syiar Islam yang telah berjalan selama bertahun-tahun. Kegiatan ini menjadi bukti nyata bahwa masjid tidak hanya sebagai tempat ibadah, tetapi juga pusat pembelajaran dan persatuan umat.
            </p>
            <Coment />
          </div>
        </div>
      </div>
      <ListBerita />
      </>
    );
  };
  
  export default Berita3;
  