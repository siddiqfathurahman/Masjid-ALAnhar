import React from 'react';

export default function Profil() {
  return (
    <div className="font-poppins md:px-10 mb-10 px-3 mt-10">
      <h1 className="text-3xl font-bold">Profil Masjid AL-ANHAR</h1>
      <p className="pt-5 text-justify indent-8">
        Masjid Al-Anhar, terletak di Keparakan Kidul, menjadi pusat kegiatan keagamaan dan sosial masyarakat. Selain sebagai tempat ibadah, masjid ini berfungsi sebagai pusat pembinaan spiritual, pendidikan, dan berbagai program sosial. Dengan arsitektur sederhana namun nyaman, Masjid Al-Anhar mendukung ukhuwah Islamiyah dan gotong royong warga sekitar.
      </p>

      <h1 className="text-2xl font-bold mt-8">Asal Muasal Nama Masjid</h1>
      <p className="pt-5 text-justify indent-8">
        Nama <span className="font-bold">"Al-Anhar"</span>, yang berarti <span className="font-bold">"sungai-sungai"</span> dalam bahasa Arab, terinspirasi dari gambaran surga dalam Al-Qur'an. Nama ini mencerminkan harapan agar Masjid Al-Anhar menjadi sumber kedamaian dan keberkahan, layaknya sungai yang mengalir membawa kehidupan. Selain itu, nama ini juga menggambarkan keinginan pendiri masjid untuk menjadikannya pusat spiritual, mengalirkan ilmu dan kebaikan bagi masyarakat.
      </p>

      <div className="mt-8">
        <div className="mt-4 gap-8 flex flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Visi</h2>
            <p className="pt-2">
              Menjadi pusat kegiatan keagamaan yang mendukung pembinaan umat, mempererat ukhuwah Islamiyah, serta mengembangkan kehidupan yang berlandaskan syariat Islam.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">Misi</h2>
            <ol className="pt-2 list-decimal list-inside">
              <li className='pt-2'>Menyediakan sarana dan prasarana yang nyaman untuk kegiatan ibadah.</li>
              <li className='pt-2'>Mengadakan kajian rutin untuk memperkuat pemahaman Islam.</li>
              <li className='pt-2'>Menyelenggarakan kegiatan sosial untuk memperkuat hubungan masyarakat.</li>
            </ol>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-8">Program Masjid</h1>
      <p className="pt-5">
        Masjid Al-Anhar mengadakan berbagai program untuk mendukung kegiatan ibadah, pendidikan, dan sosial masyarakat. Berikut adalah 10 program utama Masjid Al-Anhar:
      </p>
      <ol className="list-decimal list-inside pt-5 pl-6">
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

      <h1 className="text-3xl font-bold mt-8">Pengurus Masjid</h1>

      {/* Tabel Pengurus Masjid */}
      <table className="min-w-full mt-4 table-auto border-collapse border-2 border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-center border-2">No</th>
            <th className="px-4 py-2 text-center border-2">Nama</th>
            <th className="px-4 py-2 text-center border-2">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 text-center border-2">{index + 1}</td>
              <td className="px-4 py-2 text-center border-2">Lorem Ipsum</td>
              <td className="px-4 py-2 text-center border-2">Jabatan {index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
