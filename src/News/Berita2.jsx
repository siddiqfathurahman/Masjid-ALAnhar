import ListBerita from "./ListBerita";

const Berita2 = () => {
    return (
        <>
      <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 pt-10">
        <div className="w-full max-w-7xl">
          <div className="flex-col w-full md:p-8 p-3 bg-white shadow-lg rounded-lg">
            <h1 className="md:text-4xl max-w-5xl text-hijau text-lg font-extrabold mb-2">
              Kajian Surah Pendek Al-Quran Rutin di Masjid Al-Anhar
            </h1>
            <p className="text-gray-400 mb-5">Rabu, 15 Januari 2025</p>
            <p className="mb-4">
              Masjid Al-Anhar terus berupaya menjadi pusat kegiatan keagamaan yang bermanfaat bagi masyarakat sekitar. Salah satu kegiatan yang rutin diadakan adalah kajian Al-Quran yang berfokus pada surat-surat pendek. Kegiatan ini digelar setiap dua minggu sekali, yaitu pada hari Rabu dan Senin setelah salat Isya.
            </p>
            <p className="mb-4">
              Sebelum kajian dimulai, para jamaah diundang untuk mengikuti makan malam bersama yang disediakan oleh pengurus masjid. Suasana kebersamaan dan kekeluargaan terlihat jelas saat jamaah menikmati santapan sederhana namun penuh keberkahan ini. Kegiatan ini menjadi awal yang hangat sebelum memasuki kajian.
            </p>
            <p className="mb-4">
              Kajian ini bertujuan untuk memperdalam pemahaman umat terhadap Al-Quran, khususnya pada surat-surat pendek yang sering dibaca dalam kehidupan sehari-hari. Dengan suasana yang khusyuk dan interaktif, para peserta diajak untuk memahami makna ayat-ayat Al-Quran serta cara mengimplementasikannya dalam kehidupan. 
            </p>
            <p className="mb-4">
              Salah satu peserta kajian menyampaikan kesannya, “Kegiatan ini sangat bermanfaat, terutama untuk kami yang ingin memperbaiki bacaan sekaligus memahami makna Al-Quran dengan lebih baik. Selain itu, suasana kebersamaan di masjid ini membuat kami semakin semangat untuk belajar.”
            </p>
            <p className="mb-4">
              Kegiatan ini juga menjadi ajang untuk mempererat ukhuwah Islamiyah antarjamaah. Tidak hanya berdiskusi tentang Al-Quran, para peserta juga saling berbagi pengalaman dan saling menginspirasi dalam menjalani kehidupan Islami. Pengajian yang dipimpin oleh ustaz yang berpengalaman ini mengedepankan metode belajar yang sederhana, namun mendalam.
            </p>
            <p>
              Dengan terselenggaranya kajian ini secara rutin, Masjid Al-Anhar berharap dapat terus mendorong semangat masyarakat untuk mendalami Al-Quran. Kegiatan ini juga diharapkan mampu menjadi salah satu media untuk memperkuat iman dan mempererat persaudaraan di tengah-tengah jamaah.
            </p>
          </div>
        </div>
      </div>
      <ListBerita />
      </>
    );
  };
  
  export default Berita2;
  