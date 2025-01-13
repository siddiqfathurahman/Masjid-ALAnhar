import React from "react";
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-hijau py-10 font-poppins relative">
      <div className="container mx-auto px-5 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="order-1 md:order-1">
            <img src="/logo.png" alt="logo" className="h-20" />
            <p className="text-sm text-white">
              Mari bersama-sama memakmurkan Masjid Al-Anhar melalui doa, donasi, dan partisipasi aktif dalam program-program kami. Bergabunglah dalam perjalanan menuju keberkahan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 order-2 md:order-2">
            <div>
              <h4 className="font-semibold text-white mb-2">Menu</h4>
              <ul className="text-sm text-slate-100 space-y-2">
                {[
                  { name: "Home", link: "/" },
                  { name: "Profil", link: "/profil" },
                  { name: "Berita", link: "/berita" },
                  { name: "Organisasi", link: "/organisasi" },
                  { name: "Kontak", link: "/kontak" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="hover:text-lemon hover:underline hover:underline-offset-4 transition duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Organisasi</h4>
              <ul className="text-sm text-slate-100 space-y-2">
                {[
                  { name: "Ramah", link: "/organisasi/ramah" },
                  { name: "Takmir", link: "/organisasi/takmir" },
                  { name: "TPA", link: "/organisasi/tpa" },
                  { name: "Aisyiyah", link: "/organisasi/aisyiyah" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="hover:text-lemon hover:underline hover:underline-offset-4 transition duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-3 md:order-3">
            <h4 className="font-semibold text-white mb-2">Pengajian</h4>
            <ul className="text-sm text-slate-100 space-y-2">
              {[
                { name: "Kajian Tafsir Al-Qur'an", link: "/berita2" },
                { name: "Pengajian Rutin", link: "/berita3" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-lemon hover:underline hover:underline-offset-4 transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
                
              ))}
            </ul>
            <div className="pt-5">
              <h1 className="text-white font-bold mb-2 ">Qur'an Digital</h1>
              <Link to="/al-quran">
              <button className="bg-lemon text-hijau py-1 px-2 rounded">
              Al-Qur'an
              </button>
              </Link>
            </div>
            <div className="pt-5">
              <h1 className="text-white font-bold mb-2 ">Dokumentasi Kegiatan</h1>
              <Link to="/dokumentasi">
              <button className="bg-lemon text-hijau py-1 px-2 rounded">
              Dokumentasi
              </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 order-4 md:order-4">
            <div className="flex gap-6">
              <a href="https://wa.me/6285743702115" target="_blank" rel="noopener noreferrer">
                <img src="/wa.jpeg" alt="admin" className="md:w-14 w-10 rounded-xl" />
              </a>
              <a
                href="https://www.instagram.com/ramahmergangsan?igsh=MTFkcmpkYnJocmZocA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/ig.jpeg" alt="ig" className="md:w-14 w-10 rounded-xl" />
              </a>
              <a
                href="https://youtube.com/@ramahofficialyk5950?si=uQNYevlfyXnOfjr4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/yt.jpeg" alt="yt" className="md:w-14 w-10 rounded-xl" />
              </a>
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

        <div className="items-center justify-center text-center pt-3 text-slate-100">
          <h1>Website ini Dikelola team IT Masjid Alanhar</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
