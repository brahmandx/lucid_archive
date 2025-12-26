import React, { useState, useEffect } from 'react';
import TLALogo from '../../assets/images/lucidlogotrans.png';
import { 
  Menu, 
  X,
  BrainCircuit
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-[#0B132B]/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION UPDATED */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <img 
            src={TLALogo} 
            alt="The Lucid Archive Logo" 
            className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_8px_rgba(92,219,211,0.5)] transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.15em] font-bold text-[#F0F4F8]">LUCID ARCHIVE</span>
            <span className="text-[10px] text-[#5CDBD3] tracking-[0.3em] uppercase">Est. 2025</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-gray-400 font-medium">
          <a href="#neural-link" className="hover:text-[#5CDBD3] transition-colors flex items-center gap-1"><BrainCircuit size={14} /> Neural Link</a>
          <a href="#laboratory" className="hover:text-[#C5A059] transition-colors">The Lab</a>
          <a href="#dreamscape" className="hover:text-[#5CDBD3] transition-colors">Dreamscape</a>
          <a href="#community" className="hover:text-[#F0F4F8] transition-colors">Society</a>
          <button className="px-5 py-2 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B132B] transition-all duration-300 rounded-sm">
            Access Archive
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#F0F4F8]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B132B] border-b border-gray-800 p-6 flex flex-col gap-6 text-center z-40">
          <a href="#neural-link" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#5CDBD3]">Neural Link</a>
          <a href="#laboratory" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#C5A059]">The Lab</a>
          <a href="#dreamscape" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-[#5CDBD3]">Dreamscape</a>
          <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Society</a>
          <button className="w-full py-3 border border-[#C5A059] text-[#C5A059]">Access Archive</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
