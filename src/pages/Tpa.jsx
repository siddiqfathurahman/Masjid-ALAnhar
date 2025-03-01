import Gallery from '../components/ui/Gallery';
import AnimatedText from '../components/ui/AnimatedText';

const Tpa = () => {

  const images = [
    { id: 1, src: "/tpa1.webp", title: "tpa al-anhar" },
    { id: 2, src: "/tpa2.webp", title: "tpa al-anhar" },
    { id: 3, src: "/tpa3.webp", title: "tpa al-anhar" },
    { id: 4, src: "/tpa4.webp", title: "tpa al-anhar" },
  ];

  const data = [
    { no: 1, name: "Sodara Hamzah", role: "Pengajar" },
    { no: 2, name: "Sodara Yudha", role: "Pengajar" },
    { no: 3, name: "Sodari Tika", role: "Pengajar" },
    { no: 4, name: "Ustaz Ummi Ibrohim", role: "Pengajar" },
    { no: 5, name: "Ibu Bambang", role: "Pengajar" },
    { no: 6, name: "Sodari Ria", role: "Pengajar" },
    { no: 7, name: "Sodari Gina", role: "Pengajar" },
    { no: 8, name: "Sodari Khan", role: "Pengajar" },
    { no: 9, name: "Ibu Yanton", role: "Pengajar" },
  ];

  return (
    <div className="font-poppins text-center flex flex-col mb-10 mt-10 px-7">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
      <AnimatedText>TAMAN PENDIDIKAN AL QUR'AN</AnimatedText>
      </h2>
      <p className="px-5 text-lg md:text-xl max-w-4xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto">
        TPA Masjid Al-Anhar adalah program pendidikan Al-Quran yang bertujuan untuk membina anak-anak usia dini hingga
        remaja dalam membaca, memahami, dan mengamalkan ajaran Al-Quran.
      </p>

      <div>
        <h2 className="mt-8 md:text-3xl text-2xl font-bold text-left">Program dan Kegiatan</h2>
        <p className="pt-5 text-left">
          Taman Pendidikan Al-Qur'an (TPA) Masjid Al-Anhar menyelenggarakan berbagai program untuk mendukung
          pembelajaran Al-Qur'an dan penanaman nilai-nilai Islami. Berikut adalah 7 program utama yang diadakan:
        </p>
        <ol className="list-decimal list-inside pl-1 text-left">
          {[
            'Pembelajaran membaca dan menulis Al-Qur\'an dengan metode Iqro.',
            'Hafalan surat pendek dan doa-doa harian.',
            'Kajian akhlak dan nilai-nilai Islami untuk anak-anak.',
            'Lomba-lomba Islami, seperti adzan dan cerdas cermat Al-Qur\'an.',
            'Kegiatan bersama, seperti buka puasa sunnah dan perayaan hari besar Islam.',
            'Kelas Tahsin untuk memperbaiki bacaan Al-Qur\'an.',
            'Pembinaan remaja melalui diskusi Islami dan pelatihan keterampilan.',
          ].map((item, index) => (
            <li key={index} className="pl-2 pt-2">
              {item} 
            </li>
          ))}
        </ol>
      </div>



      <div className="pt-10">
        <h1 className="text-3xl font-bold text-center">Jadwal Belajar</h1>
        <div className="flex flex-col mx-auto md:flex-row justify-center px-12 gap-4 pt-6">
          {[
            { day: 'RABU', time: '16.00 - 17.00', color: 'bg-red-500' },
            { day: 'SABTU', time: '16.00 - 17.00', color: 'bg-yellow-500' },
          ].map((schedule, index) => (
            <div
              key={index}
              className={`${schedule.color} text-white rounded-lg w-52 h-52 text-center flex flex-col items-center justify-center`}
            >
              <h1 className="font-bold text-3xl">{schedule.day}</h1>
              <h2 className="text-2xl">{schedule.time}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="border-2 border-gray-300 rounded-lg p-10 text-center max-w-xl bg-white shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800">GRATIS</h3>
          <p className="text-gray-600 mt-3">
            Ayo daftarkan buah hati Anda di TPA Masjid Al-Anhar! Bersama kami, si kecil akan belajar Al-Qur'an dan
            nilai-nilai Islami untuk menjadi generasi Qurani yang cerdas dan berakhlak mulia.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Info Pendaftaran</button>
        </div>
      </div>

      <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Daftar Pengajar dan Pendamping</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-2 text-center border-2er">No</th>
              <th className="px-4 py-2 text-center border-2">Nama</th>
              <th className="px-4 py-2 text-center border-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no} className="border-b">
                <td className="px-4 py-2 text-center border-2">{item.no}</td>
                <td className="px-4 py-2 text-left border-2">{item.name}</td>
                <td className="px-4 py-2 text-left border-2">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      <Gallery
        title="Galeri Tpa"
        images={images}
        imageStyle="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Tpa;
