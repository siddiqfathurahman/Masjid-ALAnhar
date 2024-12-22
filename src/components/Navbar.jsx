import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const isActive = (path) => (location.pathname === path ? 'border-b-2 border-white' : '');

  return (
    <nav className="bg-hijau px-2 w-full z-10 font-poppins font-medium">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="md:w-44 w-36" />
        </div>

        <ul className="hidden md:flex items-center text-[20px] space-x-6 text-white">
          <li className={`hover:text-lemon cursor-pointer ${isActive('/')}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-lemon cursor-pointer ${isActive('/profil')}`}>
            <Link to="/profil">Profil Masjid</Link>
          </li>
          <li className={`hover:text-lemon cursor-pointer ${isActive('/program')}`}>
            <Link to="/program">Program Dakwah</Link>
          </li>
          <li className="relative flex items-center">
            <button
              className={`hover:text-lemon flex items-center ${isActive('/organisasi')}`}
              onClick={toggleDropdown}
            >
              <span>Lembaga</span>
              <svg
                className={`w-6 h-6 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-16 left-[-120px] bg-hijau text-white w-[330px] rounded-sm pt-1 shadow-lg z-10">
                <li className="hover:text-lemon px-4 py-2" onClick={toggleMenu}>
                  <Link to="/organisasi/takmir" onClick={closeDropdown}>Takmir</Link>
                </li>
                <li className="hover:text-lemon px-4 py-2" onClick={toggleMenu}>
                  <Link to="/organisasi/ramah" onClick={closeDropdown}>Remaja Masjid</Link>
                </li>
                <li className="hover:text-lemon px-4 py-2" onClick={toggleMenu}>
                  <Link to="/organisasi/tpa" onClick={closeDropdown}>TPA</Link>
                </li>
                <li className="hover:text-lemon px-4 py-2" onClick={toggleMenu}>
                  <Link to="/organisasi/aisyiyah" onClick={closeDropdown}>Aisyiyah</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`hover:text-lemon cursor-pointer ${isActive('/kontak')}`}>
            <Link to="/kontak">Kontak</Link>
          </li>
          <li
            className={`cursor-pointer rounded-lg px-2 py-1 transition duration-200 bg-lemon text-hijau ${isActive('/al-quran')}`}
          >
            <Link to="/al-quran">Al-Qur'an</Link>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white transform transition-transform duration-300 z-20 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleMenu} className="text-black text-xl">&times;</button>
        </div>
        <ul className="flex flex-col space-y-6 p-6 text-black">
          <li className={`hover:text-green-800 cursor-pointer ${isActive('/')}`} onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-green-800 cursor-pointer ${isActive('/profil')}`} onClick={toggleMenu}>
            <Link to="/profil">Profil Masjid</Link>
          </li>
          <li className={`hover:text-green-800 cursor-pointer ${isActive('/program')}`} onClick={toggleMenu}>
            <Link to="/program">Program Dakwah</Link>
          </li>
          <li className="cursor-pointer">
            <button
              className="flex items-center w-full hover:text-green-800"
              onClick={toggleDropdown}
            >
              <span>Lembaga</span>
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-6">
                <li className="hover:text-green-800 cursor-pointer" onClick={toggleMenu}>
                  <Link to="/organisasi/takmir" onClick={closeDropdown}>Takmir</Link>
                </li>
                <li className="hover:text-green-800 cursor-pointer" onClick={toggleMenu}>
                  <Link to="/organisasi/ramah" onClick={closeDropdown}>Remaja Masjid</Link>
                </li>
                <li className="hover:text-green-800 cursor-pointer" onClick={toggleMenu}>
                  <Link to="/organisasi/tpa" onClick={closeDropdown}>TPA</Link>
                </li>
                <li className="hover:text-green-800 cursor-pointer" onClick={toggleMenu}>
                  <Link to="/organisasi/aisyiyah" onClick={closeDropdown}>Aisyiyah</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`hover:text-green-800 cursor-pointer ${isActive('/kontak')}`} onClick={toggleMenu}>
            <Link to="/kontak">Kontak</Link>
          </li>
          <li
            className={`cursor-pointer rounded-lg px-2 py-1 w-24 transition duration-200 bg-hijau text-white ${isActive('/al-quran')}`}
          >
            <Link to="/al-quran">Al-Qur'an</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
