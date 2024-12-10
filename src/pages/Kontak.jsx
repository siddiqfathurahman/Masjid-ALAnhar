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
        <a
          href="https://wa.me/1234567890" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-800 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2"
        >
          <FaWhatsapp />
          <span>Admin Masjid</span>
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-5 flex-wrap">
        <a
          href="https://wa.me/0987654321"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0"
        >
          <FaWhatsapp />
          <span>Infaq & Donasi</span>
        </a>

        <a
          href="https://www.instagram.com/ramahmergangsan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0"
        >
          <FaInstagram />
          <span>@ramahmergangsan</span>
        </a>

        <a
          href="https://wa.me/1122334455" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0"
        >
          <FaWhatsapp />
          <span>Pendaftaran TPA</span>
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-5 flex-wrap">
        <a
          href="mailto:ramahofficialyk@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0"
        >
          <MdEmail />
          <span>ramahofficialyk</span>
        </a>

        <a
          href="https://www.youtube.com/channel/ramahofficialyk" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0"
        >
          <FaYoutube />
          <span>Ramah Official YK</span>
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-5 flex-wrap">
        <a
          href="https://goo.gl/maps/example" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 flex items-center space-x-2 text-2xl font-bold text-white rounded-lg text-center p-2 mb-4 md:mb-0"
        >
          <GiPositionMarker />
          <span>Google Maps</span>
        </a>
      </div>
    </div>
  );
};

export default Kontak;
