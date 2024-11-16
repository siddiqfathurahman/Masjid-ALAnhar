import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

const Kontak = () => {
  return (
    <div className="font-poppins mb-10">
      <div className="md:mt-10 md:ml-10 mt-10 ml-3">
        <h1 className="font-extrabold text-3xl">Kontak</h1>
        <p>
          Kami siap membantu Anda! Jika Anda memiliki pertanyaan atau ingin
          menghubungi kami, Anda dapat memilih salah satu cara berikut:
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-green-800 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2">
          <FaWhatsapp />
          <span>Admin Masjid</span>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-5 flex-wrap">
        <button className="bg-green-600 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0">
          <FaWhatsapp />
          <span>Infaq & Donasi</span>
        </button>

        <button className="bg-pink-500 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0">
          <FaInstagram />
          <span>@ramahmergangsan</span>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-5 flex-wrap">
        <button className="bg-yellow-400 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0">
          <MdEmail />
          <span>ramahofficialyk</span>
        </button>

        <button className="bg-red-600 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0">
          <FaYoutube />
          <span>Ramah Official YK</span>
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-5 flex-wrap">
        <button className="bg-green-500 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0">
          <GiPositionMarker />
          <span>Google Maps</span>
        </button>
      </div>
    </div>
  );
};

export default Kontak;
