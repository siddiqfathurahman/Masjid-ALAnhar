import Struktur from '../components/ui/Strukturramah';
import Bidang from '../components/ui/Bidang';
import Vidio from '../components/ui/Vidioyt';
import Gallery from '../components/ui/Gallery';
import AnimatedText from '../components/ui/AnimatedText';
import Strukturdestop from '../components/ui/Strukturdestop';

export default function Ramah() {

  const images = [
    { id: 1, src: "/ramah1.jpeg", title: "ramah mergangsan" },
    { id: 2, src: "/ramah2.jpeg", title: "ramah mergangsan" },
    { id: 3, src: "/ramah3.jpeg", title: "ramah mergangsan" },
    { id: 4, src: "/ramah4.jpeg", title: "ramah mergangsan" },
    { id: 5, src: "/ramah5.jpeg", title: "ramah mergangsan" },
    { id: 6, src: "/ramah6.jpeg", title: "ramah mergangsan" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 font-poppins">
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold">
        <AnimatedText>RAMAH MERGANGSAN</AnimatedText>
        </h2>
        <h1 className="md:text-3xl text-2xl font-extrabold pt-2 text-black">
          Remaja Masjid Al-Anhar
        </h1>
        <p className="md:text-lg text-xs text-gray-700 italic mt-2">
          "Bersama Menuju Generasi Islami yang Kreatif dan Berakhlak Mulia"
        </p>
      </header>

      <div className="md:px-10 px-3">
        <h1 className="text-3xl font-extrabold mb-3">Tentang Kami</h1>
        <p className="indent-8">
          Remaja Masjid Al-Anhar adalah pemuda & pemudi yang berdedikasi untuk menyelenggarakan kegiatan keagamaan,
          sosial, dan pendidikan. Dengan semangat kebersamaan, kami bertujuan untuk menciptakan generasi muda yang
          berkarakter Islami, kreatif, dan berakhlak mulia. Kegiatan kami mencakup kajian tematik, pelatihan kepemimpinan,
          serta program-program sosial yang bertujuan memberikan manfaat langsung bagi masyarakat.
        </p>
      </div>

      <div className="md:px-10 pt-10 px-3">
        <h1 className="text-3xl font-extrabold mb-3">Program Kerja</h1>
        <ol className="list-decimal list-inside pl-1 text-left">
          <li className="pt-2">Bakti sosial dan santunan masyarakat.</li>
          <li className="pt-2">Menjadikan Masjid sebagai Pusat Aktivitas Remaja.</li>
          <li className="pt-2">Event Ramadhan: buka puasa bersama dan takjil gratis.</li>
          <li className="pt-2">Tadarus Al-Qur'an selama Ramadhan.</li>
          <li className="pt-2">Takbiran keliling Idul Fitri.</li>
          <li className="pt-2">Panitia Penyembelihan dan distribusi kurban.</li>
          <li className="pt-2">Berperan Aktif dalam Kegiatan Sosial Masyarakat.</li>
        </ol>
      </div>

      <div>
      <div className="block md:hidden">
        <Struktur />
      </div>


      <div className="hidden md:block">
        <Strukturdestop />
      </div>
    </div>
      <Bidang />
      <Gallery
        title="Galeri"
        images={images}
        imageStyle="rounded-lg shadow-lg"
      />
      <Vidio />

      <div className="pt-10 grid md:px-32 px-0 grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://drive.google.com/your-link-1443H"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center relative"
        >
          <div className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded text-[10px] font-semibold">
            Video
          </div>
          DOKUMENTASI TAKBIRAN 1443H/2022
        </a>

        <a
          href="https://drive.google.com/your-link-1444H"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center relative"
        >
          <div className="absolute top-1 right-1 bg-blue-500 text-white px-1 py-1 rounded text-xs font-semibold">
            Foto
          </div>
          DOKUMENTASI TAKBIRAN 1444H/2023
        </a>

        <a
          href="https://drive.google.com/your-link-1445H"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center relative"
        >
          <div className="absolute top-1 right-1 bg-red-500 text-white px-1 py-1 rounded text-[10px] font-semibold">
            Video
          </div>
          DOKUMENTASI TAKBIRAN 1445H/2024
        </a>

        <a
          href="https://drive.google.com/your-link-qurban-1445H"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center relative"
        >
          <div className="absolute top-1 right-1 bg-blue-500 text-white px-1 py-1 rounded text-xs font-semibold">
            Foto
          </div>
          DOKUMENTASI QURBAN 1445H/2024
        </a>
      </div>
    </div>
  );
}
