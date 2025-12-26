import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NeuralLink from './components/NeuralLink';
import Pillars from './components/Pillars';
import LatestTransmission from './components/LatestTransmission';
import Community from './components/Community';
import Footer from './components/Footer';

/* THE LUCID ARCHIVE - OFFICIAL WEBSITE 
  Theme: Dark Academia x Futurism
  Palette: Void Blue (#0B132B), Gold (#C5A059), Teal (#5CDBD3), Starlight (#F0F4F8)
*/

const App = () => {
  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F0F4F8] font-sans selection:bg-[#5CDBD3] selection:text-[#0B132B] overflow-x-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1C2541] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5CDBD3] rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#C5A059] rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <NeuralLink />
        <Pillars />
        <LatestTransmission />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;
