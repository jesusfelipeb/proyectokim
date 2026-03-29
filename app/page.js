import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Accreditations from '@/components/Accreditations';
import Multimedia from '@/components/Multimedia';
import Booking from '@/components/Booking';
import Shop from '@/components/Shop';
import Footer from '@/components/Footer';

export default function Home() {
  return (

    <main className="relative min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Shop />
      <Booking />
      <About />

      {/* <Multimedia /> */}
      <Accreditations />
      <Footer />
    </main>
  );
}