import React, { useState } from 'react';

const Programdakwah = () => {
  const [view, setView] = useState('dakwah');

  return (
    <div className="text-center p-5">
      {/* Button Section */}
      <div className="mb-4 inline-flex rounded-2xl shadow-xl overflow-hidden">
        <button
          className={`px-6 py-3 rounded-2xl transition-colors duration-300 ${
            view === 'dakwah' ? 'bg-green-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setView('dakwah')}
        >
          Dakwah
        </button>
        <button
          className={`px-6 py-3 rounded-2xl transition-colors duration-300 ${
            view === 'visi' ? 'bg-green-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setView('visi')}
        >
          Visi
        </button>
      </div>

      {/* Content Section */}
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {view === 'dakwah'
          ? Array(2)
              .fill()
              .map((_, idx) => (
                <div key={idx} className="w-24 h-24 bg-red-500"></div>
              ))
          : Array(4)
              .fill()
              .map((_, idx) => (
                <div key={idx} className="w-24 h-24 bg-green-500"></div>
              ))}
      </div>
    </div>
  );
};

export default Programdakwah;
