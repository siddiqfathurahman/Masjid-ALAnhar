import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const isActive = (path) => (location.pathname === path ? 'border-b-2 border-white' : '');

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-green-800 px-2 w-full z-10 font-poppins font-medium">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="md:w-44 w-36" />
        </div>
        <ul className="hidden md:flex text-[20px] space-x-6 text-white">
          <li className={`hover:text-slate-300 cursor-pointer ${isActive('/')}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-slate-300 cursor-pointer ${isActive('/profil')}`}>
            <Link to="/profil">Profil Masjid</Link>
          </li>
          <li className={`hover:text-slate-300 cursor-pointer ${isActive('/program')}`}>
            <Link to="/program">Program Dakwah</Link>
          </li>
          <li className="relative flex items-center" ref={dropdownRef}>
            <button
              className={`hover:text-slate-300 ${isActive('/organisasi')} flex items-center`}
              onClick={toggleDropdown}
            >
              <span>Lembaga </span>
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
                  isDropdownOpen ? 'transform rotate-180' : ''
                }`}
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
              <ul className="absolute top-16 left-[-120px] bg-green-800 text-white w-[330px] rounded-sm pt-1 shadow-lg z-10">
                <li className="hover:text-yellow-300 px-4 py-2">
                  <Link to="/organisasi/takmir" onClick={closeDropdown}>
                    Takmir
                  </Link>
                </li>
                <li className="hover:text-yellow-300 px-4 py-2">
                  <Link to="/organisasi/ramah" onClick={closeDropdown}>
                    Remaja Masjid (ramah)
                  </Link>
                </li>
                <li className="hover:text-yellow-300 px-4 py-2">
                  <Link to="/organisasi/tpa" onClick={closeDropdown}>
                    Taman Pendidikan Al-Qur'an (TPA)
                  </Link>
                </li>
                <li className="hover:text-yellow-300 px-4 py-2">
                  <Link to="/organisasi/aisyiyah" onClick={closeDropdown}>
                    Aisyiyah
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`hover:text-blue-300 cursor-pointer ${isActive('/kontak')}`}>
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
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
    </nav>
  );
}
