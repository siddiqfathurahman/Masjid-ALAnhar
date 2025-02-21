import React, { useState } from 'react';

const data = [
  { date: 'Sabtu, 1 Maret 2025', names: ['Nayla', 'Rafi', 'Lovy', 'Dani', 'Akmal', 'deplin', 'Queen', 'Briyan', 'eka','Royhan', 'Adit', 'Nada', 'Rafa', 'Nita', 'Fatur'] },
  { date: 'Minggu, 2 Maret 2025', names: ['Rani', 'Bayu', 'Nayaka', 'Safa', 'Wanti', 'Queen', 'Lintang', 'deplin','Royhan', 'Rafa','Fatur', 'aga', 'Nada', 'Nita'] },
  { date: 'Senin, 3 Maret 2025', names: ['Ilham (Kikik)', 'Dani', 'Tata', 'Ripat', 'Nayaka', 'Putra', 'Nita', 'rega', 'Nada', 'Queen', 'Lepy', 'Nayla', 'Lovy', 'Kevin'] },
  { date: 'Selasa, 4 Maret 2025', names: ['Nayaka', 'Wanti', 'Kevin', 'Bayu', 'Evan', 'Pandya', 'Arvan', 'Lovy', 'Dea', 'Kiki', 'Rafa', 'Ripat', 'Selo', 'Nita'] },
  { date: 'Rabu, 5 Maret 2025', names: ['Putra', 'Lepy', 'Rani', 'Tata', 'deplin', 'Kiki', 'Dapol', 'Dea', 'Lovy', 'Kevin', 'Ripat', 'Dodot', 'Evan', 'rega'] },
  { date: 'Kamis, 6 Maret 2025', names: ['Putra', 'Nayla', 'aga', 'Dani', 'Ilham (Kikik)', 'Adit', 'Dea', 'Romy', 'Danis', 'Rafa', 'Dapol', 'Kevin', 'Ripat'] },
  { date: 'Jumat, 7 Maret 2025', names: ['Bayu', 'Rafa', 'Rafi', 'Rani', 'Kiki', 'Ilham (Kikik)', 'Bian', 'Lintang', 'Dani', 'Nada', 'Dapol', 'Danis', 'Lovy', 'Nayla'] },
  { date: 'Sabtu, 8 Maret 2025', names: ['Evan','Fatur','Royhan', 'Kevin', 'Arvan', 'Kiki', 'Adit', 'Rafi', 'aga', 'Briyan', 'Nada', 'eka', 'Abi', 'Salsa', 'Ripat'] },
  { date: 'Minggu, 9 Maret 2025', names: ['Pandya','Royhan', 'Queen', 'deplin', 'Fatur', 'Nayaka', 'Lovy', 'Lepy', 'Rafi', 'Nayla', 'Danis', 'Dodot', 'Dapol'] },
  { date: 'Senin, 10 Maret 2025', names: ['Nayaka', 'Pandya', 'Wanti', 'deplin', 'Nada', 'Putra', 'Dodot', 'Lintang', 'Danis', 'Arvan', 'Lepy', 'Adit', 'Dapol'] },
  { date: 'Selasa, 11 Maret 2025', names: ['Kevin', 'Bian', 'Dea', 'Akmal', 'Nada', 'eka', 'Lepy', 'Dani', 'Evan', 'Selo', 'aga', 'Lintang', 'Rafa', 'Ripat'] },
  { date: 'Rabu, 12 Maret 2025', names: ['Lintang', 'Romy', 'Evan', 'Rani', 'Danis', 'Rafa', 'Akmal', 'Queen', 'Selo', 'Dani', 'Briyan', 'Adit', 'Bayu'] },
  { date: 'Kamis, 13 Maret 2025', names: ['Nayla', 'Nayaka', 'aga', 'Evan', 'Rafa', 'Rafi', 'Kiki', 'Ilham (Kikik)', 'Wanti', 'Bian', 'Danis', 'Pandya', 'Salsa'] },
  { date: 'Jumat, 14 Maret 2025', names: ['Arvan', 'Kiki', 'Wanti', 'Nayaka', 'Tata', 'Lepy', 'Ilham (Kikik)', 'Bayu', 'Nita', 'Dani', 'Pandya', 'Briyan', 'Selo', 'Abi'] },
  { date: 'Sabtu, 15 Maret 2025', names: ['Bian', 'Briyan', 'Rani', 'Tata','Royhan', 'Kevin','Fatur', 'Abi', 'eka', 'Kiki', 'Wanti', 'Pandya', 'Romy', 'Dodot'] },
  { date: 'Minggu, 16 Maret 2025', names: ['Tata', 'Royhan', 'Lintang','Fatur','Lepy', 'Rafi', 'Danis', 'Putra', 'Arvan', 'rega', 'Bian', 'Rani', 'Abi', 'Ripat', 'Selo'] },
  { date: 'Senin, 17 Maret 2025', names: ['Lovy', 'Tata', 'Akmal', 'Danis', 'eka', 'Rafi', 'Safa', 'Selo', 'Adit', 'Kiki', 'Dodot', 'Pandya', 'Romy', 'Abi'] },
  { date: 'Selasa, 18 Maret 2025', names: ['Bian', 'Queen', 'Dani', 'Safa', 'Putra', 'Lovy', 'Bayu', 'Lepy', 'Dea', 'Briyan', 'aga', 'Pandya', 'Romy', 'Ripat'] },
  { date: 'Rabu, 19 Maret 2025', names: ['Lepy', 'Nayla', 'Dea', 'Salsa', 'rega', 'aga', 'Tata', 'Safa', 'Queen', 'Rafi', 'Abi', 'Pandya', 'Selo','Dapol'] },
  { date: 'Kamis, 20 Maret 2025', names: ['Dea', 'Evan', 'Akmal', 'Kevin', 'eka', 'Ilham (Kikik)', 'Safa', 'Nita', 'rega', 'Arvan', 'Dodot', 'Romy'] },
  { date: 'Jumat, 21 Maret 2025', names: ['Abi', 'Akmal', 'deplin', 'Salsa', 'Tata', 'Dea', 'Dani', 'Putra', 'Selo', 'Queen', 'Nita', 'Evan', 'Romy', 'Rafa'] },
  { date: 'Sabtu, 22 Maret 2025', names: ['Bayu', 'Tata', 'Putra', 'Salsa', 'Arvan', 'Lintang','Royhan','Fatur', 'Bian', 'rega', 'Ripat', 'Nayla', 'Rani'] },
  { date: 'Minggu, 23 Maret 2025', names: ['Queen','Royhan', 'Ilham (Kikik)', 'Safa', 'deplin', 'Nayaka', 'Bian', 'Rani','Fatur', 'Rafi', 'Dapol', 'eka', 'Selo'] },
  { date: 'Senin, 24 Maret 2025', names: ['Ilham (Kikik)', 'Ripat', 'Kiki', 'Nayaka', 'Salsa', 'Akmal', 'rega', 'Arvan', 'Dodot', 'Dapol', 'Briyan'] },
  { date: 'Selasa, 25 Maret 2025', names: ['Dea', 'Akmal', 'Salsa', 'Abi', 'Dodot', 'Adit', 'Nayla', 'Wanti', 'Danis', 'Bian', 'Kevin', 'Briyan', 'Evan'] },
  { date: 'Rabu, 26 Maret 2025', names: ['deplin', 'Akmal', 'Nayla', 'Lintang', 'Safa', 'Wanti', 'Queen', 'Kevin', 'Rafa', 'Lepy', 'Adit', 'Nita', 'Abi'] },
  { date: 'Kamis, 27 Maret 2025', names: ['Bian', 'Putra', 'Safa', 'Lintang', 'Ilham (Kikik)', 'Akmal', 'Rafi', 'Lovy', 'Nita', 'Romy', 'rega', 'Salsa', 'Dapol'] },
  { date: 'Jumat, 28 Maret 2025', names: ['rega', 'Tata', 'Salsa', 'Rani', 'Bayu', 'deplin', 'Pandya', 'Nita', 'Romy', 'eka', 'Adit', 'Dodot', 'Lintang'] },
  { date: 'Sabtu, 29 Maret 2025', names: ['Putra','Fatur', 'Wanti','Royhan', 'Arvan', 'Rani', 'Nada', 'Selo', 'Evan', 'Dodot', 'eka', 'aga', 'Briyan', 'Romy'] },
];

const JadwalRemaja = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.map(item => ({
    ...item,
    names: item.names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(item => item.names.length > 0);

  return (
    <div className="p-6 font-poppins max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="md:text-2xl text-1xl font-semibold text-center text-gray-800 mb-6">Jadwal Pengurus Takjil Remaja Masjid</h1>
      <input
        type="text"
        placeholder="Cari nama..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hijau mb-6"
      />
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-hijau text-white">
          <tr className=''>
            <th className="py-3 px-6 text-left">Hari dan Tanggal</th>
            <th className="py-3 px-6 text-left">Nama</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-3 px-6 border-b">{item.date}</td>
              <td className="py-3 px-6 border-b">{item.names.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JadwalRemaja;
