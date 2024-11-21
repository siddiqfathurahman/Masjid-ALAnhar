import React, { useState } from 'react';

const Programdakwah = () => {
  const [view, setView] = useState('dakwah');

  const Dakwah = [
    { id: 1, title: "Dakwah 1", image: "/bg.JPG" },
    { id: 2, title: "Dakwah 2", image: "/bg.JPG" },
  ];

  const Visi = [
    { id: 1, title: "Visi 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { id: 2, title: "Visi 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, title: "Visi 3", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 4, title: "Visi 4", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
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
          <button
            className={`px-6 py-3 rounded-2xl transition-colors duration-300 ${
              view === 'visi' ? 'bg-green-800 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setView('visi')}
          > 
            Visi
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {view === 'dakwah'
          ? (
            Dakwah.map((layanan) => (
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
            ))
          )
          : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-40">
              {Visi.map((visi) => (
                <div
                  key={visi.id}
                  className="p-6 bg-white rounded-lg shadow-xl flex flex-col justify-center items-start"
                >
                  <h1 className="text-green-500 text-2xl font-bold mb-2 text-left">{visi.title}</h1>
                  <p className="text-black text-sm text-left overflow-hidden">{visi.content}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default Programdakwah;
