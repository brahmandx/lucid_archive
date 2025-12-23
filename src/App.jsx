import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Atom, 
  Lightbulb, 
  Menu, 
  X, 
  Youtube, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  ArrowRight, 
  Mail,
  Play,
  BrainCircuit,
  Sparkles,
  Terminal
} from 'lucide-react';

/* THE LUCID ARCHIVE - OFFICIAL WEBSITE 
  Theme: Dark Academia x Futurism
  Palette: Void Blue (#0B132B), Gold (#C5A059), Teal (#5CDBD3), Starlight (#F0F4F8)
*/

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  
  // --- GEMINI AI STATE ---
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMode, setAiMode] = useState("neutral"); // 'logic' or 'dream'

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  // --- GEMINI INTEGRATION ---
  const callGemini = async (mode) => {
    if (!aiQuery.trim()) return;
    
    setAiLoading(true);
    setAiMode(mode);
    setAiResponse("");

    const apiKey = ""; // API Key provided by environment
    const systemPrompt = mode === 'logic' 
      ? "You are the Head Researcher of The Lucid Archive. Explain the user's topic using scientific research, history, and logic. Your tone is intellectual, curious, and objective. Keep the response concise (under 80 words)."
      : "You are the Dream Weaver of The Lucid Archive. Create a short, surreal, abstract thought experiment or poetic scenario inspired by the user's topic. Your tone is mysterious, artistic, and philosophical. Keep the response concise (under 80 words).";

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: aiQuery }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          }),
        }
      );

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "The Archive is silent on this matter.";
      setAiResponse(text);
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setAiResponse("Connection to the Neural Link severed. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F0F4F8] font-sans selection:bg-[#5CDBD3] selection:text-[#0B132B] overflow-x-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1C2541] to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#5CDBD3] rounded-full filter blur-[150px] opacity-5"></div>
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#C5A059] rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-[#0B132B]/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO SECTION UPDATED */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <img 
              src="http://googleusercontent.com/image_generation_content/0" 
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

      {/* --- HERO SECTION --- */}
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

      {/* --- GEMINI NEURAL LINK SECTION --- */}
      <section id="neural-link" className="py-20 px-6 bg-[#0E1629] border-y border-[#5CDBD3]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-[#5CDBD3] mb-4">
               <BrainCircuit size={24} />
               <span className="text-xs font-mono tracking-[0.3em] uppercase">The Neural Link</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F0F4F8]">Consult the AI Archive</h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm">
              Input a topic, thought, or dream. Choose "Deconstruct" for a logical analysis (The Lab), or "Dream" for a creative expansion (The Dreamscape).
            </p>
          </div>

          <div className="bg-[#0B132B] border border-[#5CDBD3]/30 p-1 rounded-lg shadow-[0_0_50px_rgba(92,219,211,0.1)] max-w-2xl mx-auto">
            <div className="relative">
              <Terminal className="absolute left-4 top-4 text-gray-500" size={20} />
              <textarea
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="Enter a subject (e.g., 'Time Travel', 'Silence', 'The Void')..."
                className="w-full bg-[#1C2541] text-[#F0F4F8] pl-12 pr-4 py-4 rounded-md border-none focus:ring-1 focus:ring-[#5CDBD3] outline-none min-h-[80px] font-mono text-sm resize-none"
              />
            </div>
            
            <div className="flex gap-2 p-2 mt-2">
              <button 
                onClick={() => callGemini('logic')}
                disabled={aiLoading}
                className="flex-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B132B] py-3 rounded text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
              >
                {aiLoading && aiMode === 'logic' ? 'Processing...' : <>Deconstruct <Atom size={14} /> ✨</>}
              </button>
              <button 
                onClick={() => callGemini('dream')}
                disabled={aiLoading}
                className="flex-1 bg-[#5CDBD3]/10 border border-[#5CDBD3]/30 text-[#5CDBD3] hover:bg-[#5CDBD3] hover:text-[#0B132B] py-3 rounded text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
              >
                {aiLoading && aiMode === 'dream' ? 'Dreaming...' : <>Dream <Sparkles size={14} /> ✨</>}
              </button>
            </div>
          </div>

          {/* AI Response Area */}
          {(aiResponse || aiLoading) && (
            <div className="mt-8 max-w-2xl mx-auto bg-black/50 border border-white/10 p-6 rounded-lg relative min-h-[100px]">
              <div className="absolute -top-3 left-6 px-2 bg-[#0E1629] text-xs font-mono text-gray-400 border border-white/10">
                {aiMode === 'logic' ? 'ANALYSIS_RESULT' : 'DREAM_SEQUENCE'}
              </div>
              
              {aiLoading ? (
                 <div className="flex items-center justify-center h-full gap-2">
                   <div className="w-2 h-2 bg-[#5CDBD3] rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-[#5CDBD3] rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-[#5CDBD3] rounded-full animate-bounce delay-200"></div>
                 </div>
              ) : (
                <p className={`font-mono text-sm leading-relaxed ${aiMode === 'logic' ? 'text-[#C5A059]' : 'text-[#5CDBD3]'}`}>
                  {aiResponse}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* --- THE PILLARS (CONTENT TYPES) --- */}
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

      {/* --- LATEST TRANSMISSION (VIDEO EMBED) --- */}
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

      {/* --- COMMUNITY & NEWSLETTER --- */}
      <section id="community" className="py-24 px-6 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: 'linear-gradient(#F0F4F8 1px, transparent 1px), linear-gradient(90deg, #F0F4F8 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
             <div className="w-16 h-16 border border-[#5CDBD3] rounded-full flex items-center justify-center">
               <MessageCircle className="text-[#5CDBD3]" />
             </div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Join the Society</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            The Archive is not just a channel; it is a collective. Join our weekly newsletter for exclusive research notes, book recommendations, and early access to videos.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative">
            <div className="flex items-center border-b border-[#C5A059] py-2">
              <Mail className="text-gray-500 mr-3" size={20} />
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="flex-shrink-0 bg-[#C5A059] hover:bg-[#b08d4b] text-[#0B132B] text-sm py-2 px-6 font-bold uppercase tracking-wider transition-colors"
              >
                Join
              </button>
            </div>
            {subscribed && (
              <p className="absolute -bottom-8 left-0 w-full text-center text-[#5CDBD3] text-sm animate-pulse">
                Welcome to the Archive. Confirmation sent.
              </p>
            )}
          </form>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <a href="https://t.me/TheLucidArchive" className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:border-[#5CDBD3] hover:text-[#5CDBD3] transition-all">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Telegram Channel
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:border-[#7289da] hover:text-[#7289da] transition-all">
              Discord Server
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:border-[#ff4500] hover:text-[#ff4500] transition-all">
              r/TheLucidArchive
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
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
    </div>
  );
};

export default App;