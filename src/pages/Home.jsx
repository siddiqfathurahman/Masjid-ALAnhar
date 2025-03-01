import React from 'react';
import Hero from '../components/ui/Hero';
import Layanan from '../components/ui/Layanan';
import Fil from '../components/ui/Fil';
import Programdakwah from '../components/ui/Programdakwah';
import Logo from '../components/ui/Logokonten';
import Hadist from '../components/ui/Hadist';
import DonasiInfaq from '../components/ui/Donasi';



export default function Home() {
  return (
    <>
    <Hero />
    <Fil />
    <Layanan />
    <Programdakwah />
    <DonasiInfaq/>
    <Hadist />
    <Logo />
    </>
  );
}
