const BidangAisyiyah = () => {
    return (
      <div className="md:px-10 md:pt-20 pt-10 px-3">  
        <h1 className="text-center mb-10 text-3xl md:text-1xl font-bold">Struktur Pengurus 2022-2027</h1>
        
        {/* Struktur Pengurus Utama */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:gap-10 gap-4 text-left justify-center">
            <ul className="list-none space-y-2 text-lg">
              <li><strong>Ketua:</strong> Nama Ketua</li>
              <li><strong>Wakil:</strong> Nama Wakil</li>
              <li><strong>Sekretaris 1:</strong> Nama Sekretaris 1</li>
            </ul>
            <ul className="list-none space-y-2 text-lg">
              <li><strong>Sekretaris 2:</strong> Nama Sekretaris 2</li>
              <li><strong>Bendahara 1:</strong> Nama Bendahara 1</li>
              <li><strong>Bendahara 2:</strong> Nama Bendahara 2</li>
            </ul>
          </div>
        </div>
        
        {/* Bidang Pengurus */}
        <div className="grid grid-cols-1 text-left md:grid-cols-4 gap-6">
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS TABLIGH DAN KETARJIHAN</h2>
            <ul className="list-decimal pl-5">
              <li>Al Daffa Saputra</li>
              <li>Bayu Setiawan</li>
            </ul>
          </div>
  
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS DIKDASMGN - PAUD</h2>
            <ul className="list-decimal pl-5">
              <li>Nada Alifah Setiawan</li>
              <li>Ayu Rizki DarmaWanti</li>
            </ul>
          </div>
  
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS EKONOMI</h2>
            <ul className="list-decimal pl-5">
              <li>Salsabila Saputri</li>
              <li>Keysa Arnanda</li>
              <li>Muh Wahyudi Nugraha Saputra</li>
            </ul>
          </div>
  
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS KESEJAHTERAAN SOSIAL</h2>
            <ul className="list-decimal pl-5">
              <li>Dwi Cahyo Lintang Saputra</li>
              <li>Rafael Kevin Syahrisa</li>
            </ul>
          </div>
  
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS KESEHATAN & LINGKINGAN HIDUP</h2>
            <ul className="list-decimal pl-5">
              <li>Evan Rafif Prayoga</li>
              <li>Lintang Satria Nugraha</li>
            </ul>
          </div>
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS PERIZINAN KADER</h2>
            <ul className="list-decimal pl-5">
              <li>Evan Rafif Prayoga</li>
              <li>Lintang Satria Nugraha</li>
            </ul>
          </div>
          <div className="mb:mb-6 mb-1">
            <h2 className="text-1xl font-bold">MAJELIS HUKUM & HAM</h2>
            <ul className="list-decimal pl-5">
              <li>Evan Rafif Prayoga</li>
              <li>Lintang Satria Nugraha</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default BidangAisyiyah;
  