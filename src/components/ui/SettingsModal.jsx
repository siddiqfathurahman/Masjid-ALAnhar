import React from 'react';
import { FaTimes } from 'react-icons/fa'; 

function SettingsModal({ modalOpen, toggleModal, arabicSize, setArabicSize, latinSize, setLatinSize, showLatin, setShowLatin, showTranslation, setShowTranslation }) {
  if (!modalOpen) return null;

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-20 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        <button 
          className="absolute top-2 right-2 text-lg"
          onClick={toggleModal}
        >
          <FaTimes />
        </button>

        <h2 className="text-lg font-semibold mb-4">Pengaturan Tampilan</h2>

        <div className="mb-4">
          <label className="block text-sm">Ukuran Huruf Arab</label>
          <input
            type="range"
            min="20"
            max="40"
            value={arabicSize}
            onChange={(e) => setArabicSize(e.target.value)}
            className="w-full h-2 bg-transparent appearance-none rounded-lg"
            style={{
              background: `linear-gradient(to right, #06623B ${((arabicSize - 20) / 20) * 100}%, #ddd ${((arabicSize - 20) / 20) * 100}%)`,
            }}
          />
          <p className="text-sm">Ukuran: {arabicSize}px</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm">Ukuran Huruf Latin</label>
          <input
            type="range"
            min="12"
            max="24"
            value={latinSize}
            onChange={(e) => setLatinSize(e.target.value)}
            className="w-full h-2 bg-transparent appearance-none rounded-lg"
            style={{
              background: `linear-gradient(to right, #06623B ${((latinSize - 12) / 12) * 100}%, #ddd ${((latinSize - 12) / 12) * 100}%)`,
            }}
          />
          <p className="text-sm">Ukuran: {latinSize}px</p>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showLatin}
              onChange={() => setShowLatin(!showLatin)}
              className="mr-2 w-6 h-6 rounded-full appearance-none border-2 border-gray-300 bg-gray-200 checked:bg-hijau checked:border-lemon focus:outline-none transition-colors"
            />
            Tampilkan Translasi Latin
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showTranslation}
              onChange={() => setShowTranslation(!showTranslation)}
              className="mr-2 w-6 h-6 rounded-full appearance-none border-2 border-gray-300 bg-gray-200 checked:bg-hijau checked:border-lemon focus:outline-none transition-colors"
            />
            Tampilkan Terjemahan
          </label>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
