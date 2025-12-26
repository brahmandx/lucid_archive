import React from 'react';
import { Youtube } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1 border border-[#5CDBD3]/30 rounded-full bg-[#5CDBD3]/10 backdrop-blur-sm">
          <span className="text-[#5CDBD3] text-xs tracking-[0.2em] uppercase">Documenting the Unknown</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F0F4F8] via-[#F0F4F8] to-[#94A3B8]">
          Where Imagination <br />
          <span className="italic font-light text-[#C5A059]">Meets Evidence</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          The Lucid Archive is a digital sanctuary for curiosity. We explore the space between abstract dreams and grounded research.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-[#C5A059] text-[#0B132B] font-bold tracking-widest uppercase overflow-hidden w-full md:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Watching <Youtube size={18} />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
          <button className="group px-8 py-4 border border-gray-600 hover:border-[#F0F4F8] text-[#F0F4F8] tracking-widest uppercase transition-all w-full md:w-auto">
            Read The Journal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
