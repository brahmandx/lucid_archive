import React from 'react';
import { 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050914] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-serif text-2xl text-[#F0F4F8] mb-4">THE LUCID ARCHIVE</h4>
          <p className="text-gray-500 max-w-sm mb-6">
            Documenting the space between dreams and reality. A digital sanctuary for the curious mind.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-[#5CDBD3] text-xs font-bold uppercase tracking-widest mb-6">Sitemap</h5>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Laboratory</a></li>
            <li><a href="#" className="hover:text-white transition-colors">The Dreamscape</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h5 className="text-[#5CDBD3] text-xs font-bold uppercase tracking-widest mb-6">Legal</h5>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Copyright</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-gray-900">
        <p>&copy; 2025 The Lucid Archive. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-mono">Designed for the curious.</p>
      </div>
    </footer>
  );
};

export default Footer;
