import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 font-poppins text-white px-8 py-5 flex flex-wrap justify-around">
      <div className="w-full sm:w-auto mb-4">
        <img src="/bg.JPG" alt="Background" className="h-16 w-16 object-cover mb-4" />
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum quae illo cumque vitae possimus, assumenda similique aut qui quod voluptas quo inventore, magni a magnam. Ipsa enim voluptas nisi?
        </p>
      </div>
      <div className="w-full sm:w-auto">
        <h1 className="font-bold mb-2">Menu</h1>
        <ul className="">
          <li>Home</li>
          <li>Profil</li>
          <li>Program</li>
          <li>Organisasi</li>
          <li>Kontak</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mb-4">
        <h1 className="font-bold mb-2">Organisasi</h1>
        <ul>
          <li>Ramah</li>
          <li>Takmir</li>
          <li>TPA</li>
          <li>Aisyiyah</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mb-4">
        <h1 className="font-bold mb-2">Pengajian</h1>
        <ul>
          <li>Kajian Tafsir</li>
          <li>Pengajian Rutin</li>
          <li>Song-Song Ramadhan</li>
          <li>Song-Song Idul Adha</li>
        </ul>
      </div>
      <div className="w-full sm:w-auto mb-4">
        <div className="flex gap-3">
          <FaInstagram className="text-4xl"/>
          <FaYoutube className="text-4xl"/>
          <FaWhatsapp className="text-4xl"/>
        </div>

        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7714640029835!2d110.37169497412104!3d-7.813999377588248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579ed87d4a77%3A0x75276a25a1d74088!2sMasjid%20Al%20Anhar!5e0!3m2!1sid!2sid!4v1731558857405!5m2!1sid!2sid"
            width="300" height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Masjid Al Anhar Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
