
import AnimatedText from '../components/ui/AnimatedText';

const Takmir = () => {

  return (
    <div className="font-poppins text-center flex flex-col items-center mb-10 mt-10 px-7">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
      <AnimatedText>TAKMIR AL-ANHAR</AnimatedText>
      </h2>
      <p className="px-5 text-lg md:text-xl max-w-4xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto">

      Takmir masjid adalah organisasi yang bertugas mengelola dan mengembangkan kegiatan masjid, mencakup ibadah, sosial, dan pendidikan. Takmir memastikan masjid berfungsi optimal sebagai pusat ibadah, pembinaan umat, dan pemberdayaan masyarakat melalui program seperti pengajian, bimbingan Al-Quran, serta kegiatan sosial yang mendukung kemakmuran masjid dan kesejahteraan umat Islam.
      </p>

      <div className="mt-8 px-5 flex flex-col md:flex-row text-left">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Visi</h2>
          <p>
          Takmir masjid adalah organisasi yang mengelola dan mengembangkan kegiatan masjid, mencakup ibadah, sosial, dan pendidikan. Takmir memastikan masjid berfungsi optimal sebagai pusat ibadah, pembinaan umat, dan pemberdayaan masyarakat melalui program seperti pengajian, bimbingan Al-Quran, dan kegiatan sosial.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Misi</h2>
          <ol className="list-decimal list-inside">
            <li className='pt-2'>Menyediakan sarana dan prasarana yang nyaman untuk kegiatan ibadah.</li>
            <li className='pt-2'>Mengadakan kajian rutin untuk memperkuat pemahaman Islam.</li>
            <li className='pt-2'>Menyelenggarakan kegiatan sosial untuk memperkuat hubungan masyarakat.</li>
          </ol>
        </div>
      </div>

      <div>
      <h2 className="mt-8 text-3xl font-bold text-left">Program Masjid</h2>
      <p className="pt-5 text-left">
        Masjid Al-Anhar mengadakan berbagai program untuk mendukung kegiatan ibadah, pendidikan, dan sosial masyarakat. Berikut adalah 10 program utama Masjid Al-Anhar:
      </p>
      <p></p>
      <ol className="list-decimal list-inside pl-1 text-left">
        <li className="pl-2 pt-2">Pelaksanaan shalat berjamaah lima waktu dengan imam tetap.</li>
        <li className="pl-2 pt-2">Kajian keislaman rutin dan ceramah tematik setiap minggu.</li>
        <li className="pl-2 pt-2">Taman Pendidikan Al-Qur'an (TPA) untuk anak-anak dan remaja.</li>
        <li className="pl-2 pt-2">Program santunan anak yatim dan dhuafa secara rutin.</li>
        <li className="pl-2 pt-2">Penyelenggaraan kurban bersama pada Hari Raya Idul Adha.</li>
        <li className="pl-2 pt-2">Program khusus Ramadhan, termasuk buka puasa bersama dan tadarus Al-Qur'an.</li>
        <li className="pl-2 pt-2">Kelas Tahsin dan Tahfidz Al-Qur'an untuk semua kalangan.</li>
        <li className="pl-2 pt-2">Gerakan Sedekah Jumat untuk mendukung program sosial.</li>
        <li className="pl-2 pt-2">Kegiatan remaja masjid, seperti diskusi keislaman dan pelatihan kepemimpinan.</li>
        <li className="pl-2 pt-2">Renovasi fasilitas masjid dan pengadaan perpustakaan Islami.</li>
      </ol>
      </div>
      
      <h2 className="mt-14 text-3xl font-bold text-left">Pengurus Takmir Periode 2022 - 2026</h2>
      <table className="min-w-full mt-4 table-auto border-collapse border-2 border-gray-300">
  <thead>
    <tr className="bg-white">
      <th className="px-4 py-2 text-center border-2">No</th>
      <th className="px-4 py-2 text-center border-2">Nama</th>
      <th className="px-4 py-2 text-center border-2">Jabatan</th>
    </tr>
  </thead>
  <tbody>
    {[
      { nama: "Fatur Rahman", jabatan: "Ketua" },
      { nama: "Ahmad Zaki", jabatan: "Wakil Ketua" },
      { nama: "Siti Aisyah", jabatan: "Sekretaris" },
      { nama: "Rudi Hartono", jabatan: "Bendahara" },
      { nama: "Nurul Huda", jabatan: "Anggota 1" },
      { nama: "Farida Amalia", jabatan: "Anggota 2" },
      { nama: "Arif Setiawan", jabatan: "Koordinator Program" },
      { nama: "Budi Santoso", jabatan: "Koordinator Logistik" },
      { nama: "Citra Lestari", jabatan: "Koordinator Acara" },
      { nama: "Rina Permata", jabatan: "Koordinator Humas" },
    ].map((item, index) => (
      <tr key={index} className="border-b">
        <td className="px-4 py-2 text-center border-2">{index + 1}</td>
        <td className="px-4 py-2 text-center border-2">{item.nama}</td>
        <td className="px-4 py-2 text-center border-2">{item.jabatan}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default Takmir;
