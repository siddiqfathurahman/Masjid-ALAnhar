import Coment from "../components/ui/ComentNews";
import ListBerita from "./ListBerita";

const Berita7 = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 pt-10">
        <div className="w-full max-w-7xl">
          <div className="flex-col w-full md:p-8 p-3 bg-white shadow-lg rounded-lg">
            <h1 className="md:text-4xl max-w-5xl text-hijau text-lg font-extrabold mb-2">
              Masjid Al-Anhar Semarakkan Takbiran 1446 H di GTNB#7: Gema Takbir Njeron Benteng
            </h1>
            <p className="text-gray-400 mb-5">9 April 2025 / 1446H</p>
            <p className="mb-4">
              Masjid Al-Anhar kembali menunjukkan semangatnya dalam menyemarakkan syiar Islam, kali ini dengan berpartisipasi dalam GTNB#7 (Gema Takbir Njeron Benteng) yang diselenggarakan oleh PCPM Kraton pada malam 1 Syawal 1446 H di Alun-Alun Kidul, Yogyakarta.
            </p>
            <p className="mb-4">
              Rombongan Masjid Al-Anhar hadir membawa semangat muda dan kreativitas yang tertuang dalam mobil hias bertema <span className="font-semibold">"Membangun Nusantara dengan Semangat Muda Muhammadiyah"</span>. Tema ini mengangkat peran penting generasi muda Muhammadiyah dalam membangun Indonesia melalui inovasi, nilai keislaman, dan kepedulian sosial.
            </p>
            <p className="mb-4">
              Salah satu sorotan utama partisipasi Masjid Al-Anhar adalah kehadiran <span className="font-semibold">kostum bertema "Nusantara Clothes"</span>. Kostum ini dirancang untuk mencerminkan semangat muda Muhammadiyah dalam membangun Nusantara berlandaskan nilai-nilai Islam berkemajuan. Warna biru cerah dipilih sebagai simbol spiritualitas, sementara sentuhan emas melambangkan kejayaan Islam. 
              Busana muslimah menggunakan rok dan rompi sebagai identitas khas Masjid Al-Anhar, sementara busana muslim pria tampil dengan rompi panjang. Semua kostum dipadukan dengan unsur-unsur pakaian adat dari berbagai daerah di Indonesia, menciptakan harmoni visual yang menggambarkan keanggunan, keteguhan, dan persatuan dalam keberagaman.
            </p>
            <p className="mb-4">
              Selain kostum, Masjid Al-Anhar juga menghadirkan <span className="font-semibold">lampion maskot bertajuk "Kokoh dalam Keberagaman"</span> berukuran 3x3 meter. Lampion ini menampilkan pohon beringin besar yang berdiri kokoh sebagai simbol persatuan bangsa, dengan pulau-pulau Indonesia dalam bentuk 3D di bawahnya yang merepresentasikan kekayaan dan keberagaman Nusantara. Di sekelilingnya terdapat bukit yang menggambarkan keteguhan negeri, dan di latar belakang terpampang logo Muhammadiyah yang bersinar terang—menjadi simbol Islam berkemajuan yang menyinari seluruh penjuru negeri.
            </p>
            <p className="mb-4">
              Dengan perpaduan kostum, lampion, serta semangat kolektif seluruh rombongan, keikutsertaan Masjid Al-Anhar di GTNB#7 menjadi penanda komitmen generasi muda dalam menyuarakan Islam yang mencerahkan, membangun, dan menyatukan. Acara ini bukan sekadar takbiran, melainkan momentum syiar yang menginspirasi dan memperkuat ukhuwah di tengah keberagaman.
            </p>
            <p className="text-blue-600">
              #wanitampil
            </p>
            <Coment />
          </div>
        </div>
      </div>
      <ListBerita />
    </>
  );
};

export default Berita7;
