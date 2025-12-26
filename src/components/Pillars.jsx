import React from 'react';
import { 
  BookOpen, 
  Atom, 
  Lightbulb, 
  ArrowRight
} from 'lucide-react';

const Pillars = () => {
  return (
    <section className="py-20 px-6 bg-[#0B132B] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl text-[#F0F4F8] mb-2">The Pillars</h2>
            <div className="h-1 w-20 bg-[#C5A059]"></div>
          </div>
          <div className="hidden md:block text-gray-500 text-sm font-mono">
            // CATEGORIZED_DATA
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: The Lab */}
          <div className="group p-8 border border-white/5 bg-white/5 hover:border-[#C5A059]/50 hover:bg-[#C5A059]/5 transition-all duration-500 rounded-sm">
            <div className="w-12 h-12 mb-6 text-[#C5A059] group-hover:scale-110 transition-transform">
              <Atom size={48} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-[#C5A059]">The Laboratory</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Deep dives into psychology, history, and science. We dissect complex reality to understand the mechanics of the world.
            </p>
            <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase text-white hover:text-[#C5A059] transition-colors">
              Access Files <ArrowRight size={14} className="ml-2" />
            </a>
          </div>

          {/* Pillar 2: The Dreamscape */}
          <div className="group p-8 border border-white/5 bg-white/5 hover:border-[#5CDBD3]/50 hover:bg-[#5CDBD3]/5 transition-all duration-500 rounded-sm">
            <div className="w-12 h-12 mb-6 text-[#5CDBD3] group-hover:scale-110 transition-transform">
              <BookOpen size={48} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-[#5CDBD3]">The Dreamscape</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Abstract thought experiments and "what if" scenarios. We explore the boundless potential of the human imagination.
            </p>
            <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase text-white hover:text-[#5CDBD3] transition-colors">
              Enter Dream <ArrowRight size={14} className="ml-2" />
            </a>
          </div>

          {/* Pillar 3: The Spark */}
          <div className="group p-8 border border-white/5 bg-white/5 hover:border-white/30 hover:bg-white/5 transition-all duration-500 rounded-sm">
            <div className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform">
              <Lightbulb size={48} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-xl mb-3 text-white">The Spark</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Curated wisdom, timeless quotes, and quick jolts of inspiration to start your day with clarity.
            </p>
            <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase text-white hover:text-gray-300 transition-colors">
              View Sparks <ArrowRight size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
