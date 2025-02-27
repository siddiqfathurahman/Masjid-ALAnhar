import Coment from "../components/ui/ComentNews";
import ListBerita from "./ListBerita";

const Berita6 = () => {
    return (
        <>
      <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 py-10">
        <div className="w-full max-w-7xl">
          <div className="flex-col w-full md:p-8 p-3 bg-white shadow-lg rounded-lg ">
            <h1 className="md:text-4xl max-w-5xl text-hijau text-lg font-extrabold mb-2">
            Menyambut Ramadan dengan Ilmu dan Kebersamaan dalam Pengajian Spesial di Masjid Al-Anhar
            </h1>
            <p className="text-gray-400 mb-5">Minggu, 23 Februari 2025</p>
            <p className="mb-4">
              Masjid Al-Anhar mengadakan pengajian spesial dalam rangka menyongsong bulan suci Ramadan. Kegiatan ini dibagi menjadi dua sesi utama, yaitu pengajian untuk jamaah bapak-bapak dan ibu-ibu, serta pengajian khusus anak-anak. 
            </p>
            <p className="mb-4">
              Pengajian untuk bapak-bapak dan ibu-ibu akan diisi oleh Ustaz Dwi Yunianto dengan tema inspiratif, "Jika Tahun Ini Merupakan Ramadan Terakhirku". Tema ini diharapkan dapat memberikan refleksi mendalam bagi jamaah dalam menyambut Ramadan dengan penuh kesungguhan dan keikhlasan. 
            </p>
            <p className="mb-4">
              Sementara itu, pengajian anak-anak akan dipandu oleh Kak Untung yang akan membawakan sesi dongeng anak. Dengan penyampaian yang menarik dan interaktif, anak-anak diharapkan bisa mendapatkan nilai-nilai Islami dengan cara yang menyenangkan. 
            </p>
            <p className="mb-4">
              Sebagai penutup, akan diadakan sesi spesial berupa kado silang untuk anak-anak dengan harga Rp3.000. Kegiatan ini bertujuan untuk menumbuhkan kebersamaan, saling berbagi, dan mempererat ukhuwah di antara para peserta. 
            </p>
            <p>
              Masjid Al-Anhar berharap kegiatan ini dapat menjadi momen yang bermakna bagi seluruh jamaah, baik dewasa maupun anak-anak, dalam menyambut bulan penuh berkah dengan hati yang lebih siap dan ikhlas. 
            </p>
            <Coment />
          </div>
        </div>
      </div>
      <ListBerita />
      </>
    );
  };
  
  export default Berita6;
