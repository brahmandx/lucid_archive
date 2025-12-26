import React, { useState } from 'react';
import { 
  BrainCircuit,
  Sparkles,
  Atom,
  Terminal
} from 'lucide-react';

const NeuralLink = () => {
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMode, setAiMode] = useState("neutral"); // 'logic' or 'dream'

  // --- GEMINI INTEGRATION ---
  const callGemini = async (mode) => {
    if (!aiQuery.trim()) return;
    
    setAiLoading(true);
    setAiMode(mode);
    setAiResponse("");

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
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
  );
};

export default NeuralLink;
