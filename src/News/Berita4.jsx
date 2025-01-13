import Coment from "../components/ui/ComentNews";
import ListBerita from "./ListBerita";

const Berita4 = () => {
    return (
        <>
      <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 py-10">
        <div className="w-full max-w-7xl">
          <div className="flex-col w-full md:p-8 p-3 bg-white shadow-lg rounded-lg ">
            <h1 className="md:text-4xl max-w-5xl text-hijau text-lg font-extrabold mb-2">
              Qurban Masjid Al-Anhar: 9 Lembu dan 21 Kambing untuk 1.375 Penerima
            </h1>
            <p className="text-gray-400 mb-5">Sabtu, 29 Juni 2024</p>
            <p className="mb-4">
              Masjid Al-Anhar sukses melaksanakan program qurban dengan menyembelih 9 lembu dan 21 kambing, yang didistribusikan kepada 1.375 penerima manfaat yang tersebar di 8 RT dan 3 RW. Kegiatan ini melibatkan hampir 200 orang panitia yang bekerja keras untuk memastikan kelancaran proses penyembelihan dan pembagian daging qurban.
            </p>
            <p className="mb-4">
              Proses penyembelihan dimulai pada pukul 08:00 setelah sholat Eid, dengan menggunakan alat perebah sapi untuk mempercepat proses penyembelihan lembu. Alat ini terbukti sangat efektif dalam mengurangi waktu yang dibutuhkan, memastikan penyembelihan dapat selesai dengan lebih efisien. Semua hewan qurban, baik lembu maupun kambing, berhasil disembelih tepat pada pukul 11:10.
            </p>
            <p className="mb-4">
              Untuk memudahkan distribusi, panitia juga menerapkan sistem voucher yang dibagikan kepada setiap penerima manfaat. Voucher tersebut kemudian ditukarkan untuk mendapatkan jatah daging qurban sesuai dengan bagian yang telah ditentukan. Proses pendistribusian daging berlangsung dengan lancar dan selesai pada pukul 17:00, memastikan setiap penerima mendapat bagian mereka tepat waktu.
            </p>
            <p className="mb-4">
              Keberhasilan program ini juga berkat dukungan penuh dari jamaah dan masyarakat yang ikut serta dalam persiapan dan pelaksanaan acara. Panitia yang terdiri dari hampir 200 orang bekerja dengan penuh semangat, menjaga agar setiap tahap berjalan dengan lancar dan aman.
            </p>
            <p className="mb-4">
              Ketua panitia qurban, Sdr Fathurahman, menyampaikan, “Alhamdulillah, tahun ini kami bisa menyalurkan daging qurban kepada lebih banyak keluarga. Terima kasih kepada seluruh panitia dan jamaah yang turut membantu dalam pelaksanaan acara ini. Semoga tahun depan lebih banyak lagi yang bisa kita bantu.”
            </p>
            <p>
              Program qurban di Masjid Al-Anhar tidak hanya memberikan manfaat materi, tetapi juga mempererat tali silaturahmi di antara jamaah dan masyarakat. Semoga kegiatan ini terus menjadi tradisi yang bermanfaat, serta memperkuat rasa kepedulian sosial di lingkungan sekitar.
            </p>
            <Coment />
          </div>
        </div>
      </div>
      <ListBerita />
      </>
    );
  };
  
  export default Berita4;
