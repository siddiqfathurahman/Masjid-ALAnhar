import React from 'react';
import Utama from '../components/ui/Utama';

export default function Home() {
  return (
    <>
    <Utama />
    <div className="flex items-center justify-center h-screen font-poppins">
      <h1 className="text-2xl font-bold">Ini merupakan halaman home</h1>
    </div>
    </>
  );
}
