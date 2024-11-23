import React, { useState } from 'react';

const Sejarah = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullContent = `
    Sebelum meletusnya G30 S PKI Keparakan Kidul mayoritas berpaham komunis (PKI). 
    Pada tahun 1960-an dimana-mana masyarakat rata-rata mendapat kesulitan ekonomi 
    yaitu seperti kekurangan pangan hal ini juga melanda masyarakat keparakan kidul, 
    bahkan banyak penduduk kekurangan pangan hingga ada yang sampai terserang penyakit. 
    Oleh karena banyak organisasi-organisasi sosial kemasyarakatan yang berkunjung ke kampung 
    Keparakan Kidul memberikan bantuan bahan pangan. Begitu juga dengan Aisyiyah cabang Mergangsan 
    berkunjung untung memberikan bantuan pangan kepada rakyat Keparakan Kidul yang kekurangan pangan.
    
    Pada waktu orde baru disertai dengan meletusnya G30 S PKI kampung Keparakan Kidul merupakan daerah yang bergejolak juga. 
    Karena sedikitnya penganut agama terutama agama Islam dan kuatnya paham komunis pada waktu itu maka tergugahlah kaum Muslim 
    di Keparakan Kidul untuk menangkal adanya gerakan komunisme tersebut dengan menggiatkan dakwah agama Islam guna mempertebal iman manusia, 
    lalu terbentuklah suatu keputusan dan gagasan untuk mengusahakan sarana peribadatan yaitu sebuah Masjid.
    
    Pada tanggal 5 April 1971 bapak Haji Zubair mewakafkan tanah tersebut yang terletak di Keparakan Kidul ke Muhammadiyah lalu dengan tanah tersebut Muhammadiyah 
    mendirikan masjid dihimpun oleh orang-orang Muhammadiyah dan masyarakat Keparakan Kidul yang diketuai oleh Bapak KRT Djogonarpodo. Dan dengan ridho Allah SWT pembangunan masjid dilakukan pada tahun 1974 yang peletakan batu pertamanya dilakukan oleh Bapak Djumadji Dirdjopuspito yang waktu itu beliau adalah pimpinan ranting daerah Muhammadiyah lalu jadilah pembangunan masjid yang dinamakan masjid Al-Anhar.
    
    Karena pewakafan tanah pada waktu itu baru 100m² didorong oleh jamaah masjid yang bertambah pada waktu sholat dan jumataan juga maka Muhammadiyah memohon pewakafan ditambah atau diperluas, hal ini secara bertahap dikabulkan sehingga menjadi 200m². Dengan tanah yang tersedia panitia pendiri masjid bapak KRT Djogonarpodo sebagai ketua dan bapak Drs. Sukarno sebagai wakil ketua mencari contoh surat permohonan yang telah dikabulkan oleh presiden yaitu di Tegal Mulyo jetis untuk digunakan membuat surat permohonan kepada Presiden RI untuk permohonan dana yang hasilnya dikabulkan oleh Presiden sebesar Rp. 1.000.000 pada waktu itu. Bantuan dana yang diberikan oleh Presiden RI tersebut digunakan untuk membangun serambi dan emper masjid Al-Anhar bagian utara.
    
    Dengan seiringnya waktu masjid Al-Anhar dapat berkembang dengan adanya tambahan emper selatan dan perluasan tanah masjid Al-Anhar. 
    Lalu tak disangka gempa dahsyat tahun 2006 yang meluluh lantakkan wilayah Yogyakarta dan sekitarnya membuat bangunan masjid yang konstruksinya sudah termakan usia menjadi rapuh, kemudian takmir masjid Al-Anhar bersepakat untuk merenovasi ulang seluruh bagian masjid tersebut dengan membentuk panitia pembangunan masjid Al-Anhar dengan peletakan batu pertama pada tanggal 4 November 2007 oleh Walikota Yogyakarta sehingga masjid Al-anhar dapat berdiri megah, mempunyai banyak jamaah dan mampu mencetak orang-orang yang berkualitas.
  `;

  return (
    <div className="px-3 md:px-10 font-poppins mt-10 md:mt-14 pb-10 text-left">
      <h2 className="mt-16 text-2xl font-semibold text-left">Sejarah MASJID AL-ANHAR</h2>

      {/* Konten Sejarah */}
      <div
        className={`px-5 pt-5 text-justify indent-8 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-full' : 'max-h-[18rem]'
        }`}
        style={{
          lineHeight: '1.5rem', // Sesuaikan tinggi per baris
        }}
      >
        {fullContent}
      </div>

      {/* Tombol Baca Selengkapnya */}
      <span
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 cursor-pointer font-bold mt-2 inline-block"
      >
        {isExpanded ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}
      </span>
    </div>
  );
};

export default Sejarah;
