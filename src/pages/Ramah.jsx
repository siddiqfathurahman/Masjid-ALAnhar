
import Bidang from '../components/ui/BidangRemaja';
import Vidio from '../components/ui/Vidioyt';
import Gallery from '../components/ui/Gallery';
import AnimatedText from '../components/ui/AnimatedText';


export default function Ramah() {

  const images = [
    { id: 1, src: "/ramah5.webp", title: "ramah mergangsan" },
    { id: 2, src: "/ramah2.webp", title: "ramah mergangsan" },
    { id: 3, src: "/ramah3.avif", title: "ramah mergangsan" },
    { id: 4, src: "/ramah4.webp", title: "ramah mergangsan" },
    { id: 5, src: "/ramah1.webp", title: "ramah mergangsan" },
    { id: 6, src: "/ramah6.webp", title: "ramah mergangsan" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-5 font-poppins">
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
        <h1 className="md:text-3xl text-2xl font-extrabold mb-3">Tentang Kami</h1>
        <p className="indent-8">
          Remaja Masjid Al-Anhar adalah pemuda & pemudi yang berdedikasi untuk menyelenggarakan kegiatan keagamaan,
          sosial, dan pendidikan. Dengan semangat kebersamaan, kami bertujuan untuk menciptakan generasi muda yang
          berkarakter Islami, kreatif, dan berakhlak mulia. Kegiatan kami mencakup kajian tematik, pelatihan kepemimpinan,
          serta program-program sosial yang bertujuan memberikan manfaat langsung bagi masyarakat.
        </p>
      </div>

      <div className="md:px-10 pt-10 px-3">
        <h1 className="md:text-3xl text-2xl  font-extrabold mb-3">Program Kerja</h1>
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

    
    
      <Bidang />
      <Gallery
        title="Galeri"
        images={images}
        imageStyle="rounded-lg shadow-lg"
      />
      <Vidio />

    </div>
  );
}
