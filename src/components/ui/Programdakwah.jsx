import React, { useState } from 'react';

const Programdakwah = () => {
  const [view, setView] = useState('dakwah');

  const Dakwah = [
    { id: 1, title: "Dakwah 1", image: "/kajian.jpg" },
    { id: 2, title: "Dakwah 2", image: "/kajian.jpg" },
  ];

  return (
    <div className="text-center p-5 font-poppins">
      <div className="bg-slate-100 rounded-2xl w-56 p-2 py-2 mx-auto">
        <div className="flex justify-center rounded-xl shadow-2xl overflow-hidden">
          <button
            className={`px-6 py-3 rounded-2xl transition-colors duration-300 ${
              view === 'dakwah' ? 'bg-green-800 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setView('dakwah')}
          >
            Dakwah
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {Dakwah.map((layanan) => (
          <div
            key={layanan.id}
            className="w-96 h-96 bg-red-500 rounded-lg overflow-hidden flex justify-center items-center"
          >
            <img
              src={layanan.image}
              alt={layanan.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programdakwah;
