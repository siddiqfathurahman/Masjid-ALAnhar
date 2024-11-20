import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-800 to-green-900 py-10 font-poppins relative">

      <div className="container mx-auto px-5 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="order-1 md:order-1">
            <img src="/logo.png" alt="FAHost" className="h-20" />
            <p className="text-sm text-white">
            Mari bersama-sama memakmurkan Masjid Al-Anhar melalui doa, donasi, dan partisipasi aktif dalam program-program kami. Bergabunglah dalam perjalanan menuju keberkahan
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 order-2 md:order-2">
            <div>
              <h4 className="font-semibold text-white mb-2">Menu</h4>
              <ul className="text-sm text-slate-100 space-y-2">
                {['Home', 'Profil', 'Program', 'Organisasi', 'Kontak'].map((item, index) => (
                  <li 
                    key={index}
                    className="hover:text-green-200 hover:underline hover:underline-offset-4 transition duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Organisasi</h4>
              <ul className="text-sm text-slate-100 space-y-2">
                {['Ramah', 'Takmir', 'TPA', 'Aisyiyah'].map((item, index) => (
                  <li 
                    key={index}
                    className="hover:text-green-200 hover:underline hover:underline-offset-4 transition duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-3 md:order-3">
            <h4 className="font-semibold text-white mb-2">Pengajian</h4>
            <ul className="text-sm text-slate-100 space-y-2">
              {['Kajian Tafsir Al-Qur\'an', 'Pengajian Rutin', 'Song-Song Ramadhan', 'Song-Song Idul Adha'].map((item, index) => (
                <li 
                  key={index}
                  className="hover:text-green-200 hover:underline hover:underline-offset-4 transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6 order-4 md:order-4">
            <div className="flex gap-6">
              <FaInstagram className="text-4xl text-white" />
              <FaYoutube className="text-4xl text-white" />
              <FaWhatsapp className="text-4xl text-white" />
            </div>
            <div className="w-full flex justify-center sm:justify-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7714640029835!2d110.37169497412104!3d-7.813999377588248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579ed87d4a77%3A0x75276a25a1d74088!2sMasjid%20Al%20Anhar!5e0!3m2!1sid!2sid!4v1731558857405!5m2!1sid!2sid"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masjid Al Anhar Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="items-center justify-center text-center pt-10 text-slate-100">
          <h1>@Dikelola oleh Remaja masjid Al-Anhar</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
