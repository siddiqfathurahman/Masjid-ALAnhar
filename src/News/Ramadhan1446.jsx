import Coment from "../components/ui/ComentNews";
import ListBerita from "./ListBerita";
import { Link } from "react-router-dom";

const Ramadhan1446 = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 pt-10">
        <div className="w-full max-w-7xl">
          <div className="flex-col w-full md:p-8 p-3 bg-white shadow-lg rounded-lg">
            <h1 className="md:text-4xl max-w-5xl text-hijau text-lg font-extrabold mb-2">
              Ramadhan 1446H: Bulan Suci Penuh Berkah, Momentum untuk
              Mendekatkan Diri kepada Allah SWT
            </h1>
            <p className="text-gray-400 mb-5">Maret - April 2025 / 1446H</p>
            <p className="mb-4">
              Ramadhan adalah bulan istimewa yang dinanti-nantikan oleh seluruh
              umat Islam di dunia. Di bulan ini, setiap amal kebaikan
              dilipatgandakan pahalanya, pintu surga dibuka, dan pintu neraka
              ditutup. Bagi umat Muslim, Ramadhan menjadi momen terbaik untuk
              membersihkan hati, memperkuat ibadah, dan memperbaiki hubungan
              dengan Allah SWT serta sesama manusia.
            </p>

            <p className="mb-4">
              Kewajiban utama di bulan Ramadhan adalah menjalankan ibadah puasa,
              yang tidak hanya menahan diri dari makan dan minum, tetapi juga
              menjaga ucapan, pandangan, serta perilaku agar tetap sesuai dengan
              ajaran Islam. Selain itu, amalan sunnah seperti shalat tarawih,
              membaca Al-Qur'an, serta bersedekah menjadi amalan utama yang
              sangat dianjurkan selama bulan suci ini.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Keutamaan dan Hikmah Ramadhan
            </h2>
            <p className="mb-4">
              Ramadhan memberikan banyak manfaat baik secara spiritual maupun
              sosial. Beberapa keutamaan dan hikmah Ramadhan antara lain:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <span className="font-semibold">Pengampunan Dosa:</span> Allah
                SWT menjanjikan pengampunan dosa bagi mereka yang berpuasa
                dengan penuh keimanan dan mengharapkan ridha-Nya.
              </li>
              <li>
                <span className="font-semibold">Pelatihan Kesabaran:</span>{" "}
                Puasa melatih kita untuk lebih sabar, mengendalikan hawa nafsu,
                dan meningkatkan disiplin diri.
              </li>
              <li>
                <span className="font-semibold">Meningkatkan Empati:</span>{" "}
                Dengan berpuasa, kita bisa merasakan bagaimana rasanya lapar dan
                haus, sehingga lebih peduli terhadap orang-orang yang kurang
                mampu.
              </li>
              <li>
                <span className="font-semibold">Peningkatan Ibadah:</span>{" "}
                Ramadhan menjadi bulan yang penuh semangat untuk memperbanyak
                ibadah, seperti tadarus Al-Qur'an, shalat malam, dan
                memperbanyak doa.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">
              Kegiatan Ramadhan di Masjid Al-Anhar
            </h2>
            <p className="mb-4">
              Masjid Al-Anhar telah menyiapkan berbagai kegiatan yang bertujuan
              untuk menyemarakkan bulan Ramadhan sekaligus mempererat tali
              silaturahmi di antara jamaah. Beberapa kegiatan yang telah
              direncanakan meliputi:
            </p>
            <p className="mb-4">
              Setiap harinya Masjid Al-Anhar Menyediakan <span className="font-semibold">200 porsi takjil </span> 
              untuk berbuka puasa. Selain itu, untuk menambah kenyamanan saat tadarus dan tarawih, 
              juga disediakan <span className="font-semibold"> 30 snack basah</span> dan  
              <span className="font-semibold"> 50 snack kering</span>. Semoga semakin menambah 
              semangat dalam beribadah.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-center">
              Kegiatan Ramadhan 1446H
            </h2>
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-hijau text-white">
                  <th className="border border-slate-400 px-4 py-2">No</th>
                  <th className="border border-slate-400 px-4 py-2">
                    Kegiatan
                  </th>
                  <th className="border border-slate-400 px-4 py-2">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    no: 1,
                    kegiatan: "Hias kampung",
                    tanggal: "26 – 27 Februari",
                  },
                  {
                    no: 2,
                    kegiatan: "Song song Ramadhan",
                    tanggal: "19 Februari",
                  },
                  {
                    no: 3,
                    kegiatan: "Bersih-bersih masjid",
                    tanggal: "23 Februari",
                  },
                  { no: 4, kegiatan: "Takjilan", tanggal: "Selama Ramadhan" },
                  { no: 5, kegiatan: "Tarawih", tanggal: "Selama Ramadhan" },
                  { no: 6, kegiatan: "Tadarus", tanggal: "Selama Ramadhan" },
                  { no: 7, kegiatan: "Nuzulul Quran", tanggal: "17 Maret" },
                  { no: 8, kegiatan: "Khataman", tanggal: "25 Maret" },
                  {
                    no: 9,
                    kegiatan: "Kajian Ramadhan",
                    tanggal: "Setiap hari Rabu",
                  },
                  { no: 10, kegiatan: "Zakat Fitrah", tanggal: "27 Maret" },
                  { no: 11, kegiatan: "Itikaf", tanggal: "21 Maret" },
                  { no: 12, kegiatan: "Takbiran", tanggal: "30 Maret" },
                ].map((item) => (
                  <tr key={item.no} className="odd:bg-white even:bg-gray-100">
                    <td className="border border-slate-400 px-4 py-2 text-center">
                      {item.no}
                    </td>
                    <td className="border border-slate-400 px-4 py-2">
                      {item.kegiatan}
                    </td>
                    <td className="border border-slate-400 px-4 py-2">
                      {item.tanggal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center mt-6">
              <Link
                to="/ramadhan1446h/strukturpanrom1446h"
                className="bg-hijau text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
              >
                Struktur Panitia Ramadhan
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 md:pt-7 pt-5 md:px-3 text-center gap-4">
              <a
                href="/.pdf"
                download
                className="bg-green-600 text-white px-4 py-3 rounded-lg md:text-1xl text-xs font-semibold"
              >
                Jadwal Imam
              </a>
              <a
                href="/.pdf"
                download
                className="bg-green-600 text-white px-4 py-3 rounded-lg md:text-1xl text-xs font-semibold"
              >
                Jadwal Kajian Sore
              </a>
              <Link
                to="/ramadhan1446h/jadwalremaja"
                className="bg-green-600 text-white px-4 py-3 rounded-lg md:text-1xl text-xs font-semibold"
              >
                Jadwal Remaja
              </Link>
              <a
                href="/jadwal-mc-subuh-tarawih-remaja.pdf"
                download
                className="bg-green-600 text-white px-4 py-3 rounded-lg md:text-1xl text-xs font-semibold"
              >
                Jadwal MC Remaja
              </a>
            </div>

            <p className="mb-4 mt-4">
              Dengan berbagai amalan yang dilakukan, Ramadhan menjadi waktu
              terbaik bagi umat Islam untuk meningkatkan kualitas iman dan
              ketakwaan kepada Allah SWT. Semoga kita semua dapat menjalani
              Ramadhan dengan penuh keikhlasan dan meraih keberkahan yang
              berlimpah.
            </p>

            <Coment />
          </div>
        </div>
      </div>
      <ListBerita />
    </>
  );
};

export default Ramadhan1446;
