import React from 'react';
import Hero from '../components/ui/Hero';


export default function Home() {
  return (
    <>
    <Hero />
    <div className="flex items-center justify-center h-screen font-poppins">
      <h1 className="text-2xl font-bold">Ini merupakan halaman home</h1>
    </div>
    </>
  );
}
