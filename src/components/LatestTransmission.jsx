import React from 'react';
import { Play } from 'lucide-react';

const LatestTransmission = () => {
  return (
    <section id="laboratory" className="py-20 px-6 bg-[#0E1629]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2">
          <span className="text-[#5CDBD3] text-xs font-mono tracking-widest mb-4 block">// LATEST_TRANSMISSION</span>
          <h2 className="font-serif text-4xl mb-6">Why Boredom is Essential for Genius</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            In this entry of The Lucid Archive, we explore the neuroscience behind "doing nothing." 
            History's greatest thinkers—Einstein, Dali, Newton—all prioritized idleness. 
            Are we killing our creativity by being constantly busy?
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-6 py-3 bg-[#F0F4F8] text-[#0B132B] font-bold uppercase text-sm hover:bg-gray-200 transition-colors">
              <Play size={16} fill="#0B132B" /> Watch Now
            </button>
            <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 font-bold uppercase text-sm hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
              Read Transcript
            </button>
          </div>
        </div>
        
        {/* Mock Video Player */}
        <div className="lg:w-1/2 w-full aspect-video bg-black relative group cursor-pointer overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
           {/* Thumbnail Placeholder */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
           
           <div className="absolute inset-0 z-20 flex items-center justify-center">
             <div className="w-20 h-20 bg-[#C5A059]/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-[#C5A059] transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
               <Play size={32} fill="#0B132B" className="text-[#0B132B]" />
             </div>
           </div>
           <div className="absolute bottom-6 left-6 z-20">
             <div className="px-2 py-1 bg-black/60 text-white text-xs font-bold rounded inline-block mb-2">12:45</div>
             <h3 className="text-white font-serif text-xl">Episode 01: The Science of Idleness</h3>
           </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTransmission;
