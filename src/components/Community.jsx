import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail
} from 'lucide-react';

const Community = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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

  return (
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
  );
};

export default Community;
