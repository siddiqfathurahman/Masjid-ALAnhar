import Coment from "../components/ui/ComentNews";
import ListBerita from "./ListBerita";

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
              Ramadhan adalah bulan kesembilan dalam kalender Hijriyah yang
              memiliki makna istimewa bagi umat Islam di seluruh dunia. Bulan
              ini dikenal sebagai bulan penuh keberkahan, ampunan, dan rahmat
              dari Allah SWT. Selama bulan Ramadhan, umat Islam diwajibkan untuk
              berpuasa dari fajar hingga matahari terbenam sebagai bentuk ibadah
              dan pengendalian diri.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Struktur Panitia Ramadhan 1446H Masjid Al-Anhar
            </h2>
            <p className="mb-4">
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <span className="font-semibold">Ketua:</span> Raditya Ala
                  Alston
                </li>
                <li>
                  <span className="font-semibold">Sekretaris:</span>
                  <ul className="list-disc ml-6">
                    <li>Royhan Kholiq</li>
                    <li>Siddiq Fathurahman</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Bendahara Panrom:</span> Danis
                </li>
              </ul>
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Koordinasi Kegiatan
            </h2>
            <p className="mb-4">
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <span className="font-semibold">Koordinasi Takjil:</span>{" "}
                  Terlampir di bawah
                </li>
                <li>
                  <span className="font-semibold">
                    Koordinasi Tarawih Anak-anak:
                  </span>{" "}
                  Evant, Kevin
                </li>
                <li>
                  <span className="font-semibold">Pj Nuzulul Quran:</span> Ketua
                </li>
                <li>
                  <span className="font-semibold">Tadarus Bapak-Bapak:</span>{" "}
                  Pak Rustam
                </li>
                <li>
                  <span className="font-semibold">Tadarus Ibu-Ibu:</span> Ibu
                  Azizah
                </li>
              </ul>
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Lainnya</h2>
            <p className="mb-4">
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <span className="font-semibold">Koordinator Zakat:</span>{" "}
                  Royhan
                </li>
                <li>
                  <span className="font-semibold">Humas:</span> Terlampir
                </li>
                <li>
                  <span className="font-semibold">Dokumentasi:</span> Lintang,
                  Kevin
                </li>
                <li>
                  <span className="font-semibold">Pj Song-Song Ramadhan:</span>{" "}
                  Ketua
                </li>
              </ul>
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Urutan penyedia Takjil dan Jaburan
            </h2>
            <p className="mb-4">
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <span className="font-semibold">Takjil:</span> RW 12, RW 11,
                  RW 13
                </li>
                <li>
                  <span className="font-semibold">Jaburan:</span> RW 13, RW 12,
                  RW 11
                </li>
              </ul>
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2 text-center">
              Kegiatan Ramadhan 1446H
            </h2>
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-hijau text-white">
                  <th className="border border-black px-4 py-2">No</th>
                  <th className="border border-black px-4 py-2">Kegiatan</th>
                  <th className="border border-black px-4 py-2">Tanggal</th>
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
                    kegiatan: "Bersih bersih masjid",
                    tanggal: "23 Februari",
                  },
                  { no: 4, kegiatan: "Takjilan", tanggal: "Selama Ramadhan" },
                  { no: 5, kegiatan: "Tarawih", tanggal: "Selama Ramadhan" },
                  { no: 6, kegiatan: "Tadarus", tanggal: "Selama Ramadhan" },
                  { no: 7, kegiatan: "Nuzul Quran", tanggal: "17 Maret" },
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
                    <td className="border border-black px-4 py-2 text-center">
                      {item.no}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {item.kegiatan}
                    </td>
                    <td className="border border-black px-4 py-2">
                      {item.tanggal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="grid grid-cols-2 md:grid-cols-4 md:pt-7 pt-5 md:px-3 text-center gap-4">
                <a href="/.pdf" download className="bg-green-600 text-white px-4 py-2 rounded-lg text-1xl font-semibold">Jadwal Imam</a>
                <a href="/.pdf" download className="bg-green-600 text-white px-4 py-2 rounded-lg text-1xl font-semibold">Jadwal Kajian</a>
                <a className="bg-green-600 text-white px-4 py-2 rounded-lg text-1xl font-semibold">Jadwal Remaja</a>
                <a className="bg-green-600 text-white px-4 py-2 rounded-lg text-1xl font-semibold">Jadwal Mc</a>
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
