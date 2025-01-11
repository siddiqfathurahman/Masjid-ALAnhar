const Bidang = () => {
  return (
    <div className="md:px-10 md:pt-20 pt-10 px-3">  
    <h1 className="text-center mb-10 text-3xl md:text-2xl font-bold">Struktur Pengurus 2022-2026</h1>
      <div className="mb-10">
        <div className="flex flex-col justify-center md:gap-10 gap-1 md:flex-row ">
          <ul className="list-none space-y-2 text-lg ">
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



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">BIDANG HUMAS</h2>
          <p><strong>Ketua Bidang:</strong> Fulvian Aldha Pandya S.</p>
          <p><strong>Anggota:</strong></p>
          <ul className="list-decimal pl-5">
            <li>Al Daffa Saputra</li>
            <li>Bayu Setiawan</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">BIDANG KEGIATAN</h2>
          <p><strong>Ketua Bidang:</strong> Qurrota A'yun</p>
          <p><strong>Anggota:</strong></p>
          <ul className="list-decimal pl-5">
            <li>Nada Alifah Setiawan</li>
            <li>Ayu Rizki DarmaWanti</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">BIDANG RUMAH TANGGA</h2>
          <p><strong>Ketua Bidang:</strong> Amelia Rosa Dealova</p>
          <p><strong>Anggota:</strong></p>
          <ul className="list-decimal pl-5">
            <li>Salsabila Saputri</li>
            <li>Keysa Arnanda</li>
            <li>Muh Wahyudi Nugraha Saputra</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">BIDANG MEDIA</h2>
          <p><strong>Ketua Bidang:</strong> Muh Siddiq Faturrahman</p>
          <p><strong>Anggota:</strong></p>
          <ul className="list-decimal pl-5">
            <li>Dwi Cahyo Lintang Saputra</li>
            <li>Rafael Kevin Syahrisa</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">BIDANG SOSIAL</h2>
          <p><strong>Ketua Bidang:</strong> Raditya Ala Alston</p>
          <p><strong>Anggota:</strong></p>
          <ul className="list-decimal pl-5">
            <li>Evan Rafif Prayoga</li>
            <li>Lintang Satria Nugraha</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bidang;
