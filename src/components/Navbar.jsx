import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-green-900 p-4 w-full z-10 font-poppins font-bold">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link to="/">logo</Link>
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-slate-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-slate-300 cursor-pointer">
            <Link to="/profil">Profil</Link>
          </li>
          <li className="hover:text-slate-300 cursor-pointer">
            <Link to="/program">Program Dakwah</Link>
          </li>
          <li className="relative cursor-pointer flex items-center" onClick={toggleDropdown}>
            <span className="hover:text-slate-300">Organisasi</span>
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-green-800 text-white w-40 rounded-lg pt-1 shadow-lg">
                <li className="hover:bg-slate-300 px-4 py-2">
                  <Link to="/organisasi/ramah" onClick={() => { toggleMenu(); closeDropdown(); }}>Ramah</Link>
                </li>
                <li className="hover:bg-slate-300 px-4 py-2">
                  <Link to="/organisasi/takmir" onClick={() => { toggleMenu(); closeDropdown(); }}>Takmir</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-4/5 bg-slate-100 transform transition-transform duration-300 z-20 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4 flex justify-end">
            <button onClick={toggleMenu} className="text-black text-xl">
              &times;
            </button>
          </div>
          <ul className="flex flex-col space-y-6 p-6 text-black">
            <li className="hover:text-green-800 cursor-pointer">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:text-green-800 cursor-pointer">
              <Link to="/profil" onClick={toggleMenu}>Profil</Link>
            </li>
            <li className="hover:text-green-800 cursor-pointer">
              <Link to="/program" onClick={toggleMenu}>Program</Link>
            </li>
            <li className="cursor-pointer" onClick={toggleDropdown}>
              <div className="flex items-center">
                <span className="hover:text-green-800">Organisasi</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              {isDropdownOpen && (
                <ul className="mt-2 space-y-2 pl-6 text-black">
                  <li className="hover:text-blue-300">
                    <Link to="/organisasi/ramah" onClick={() => { toggleMenu(); closeDropdown(); }}>Ramah</Link>
                  </li>
                  <li className="hover:text-blue-300">
                    <Link to="/organisasi/takmir" onClick={() => { toggleMenu(); closeDropdown(); }}>Takmir</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-blue-300 cursor-pointer">
              <Link to="/kontak" onClick={toggleMenu}>Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
