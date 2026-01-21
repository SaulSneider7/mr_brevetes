
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group">
      <div className="absolute -top-12 md:-top-14 right-0 bg-blue-900 text-white px-4 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest invisible group-hover:visible animate-bounce whitespace-nowrap border border-white/10 shadow-blue-900/40">
        ¿Te ayudamos? 👋
      </div>
      <a 
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 md:w-20 md:h-20 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(34,197,94,0.4)] transition-all transform hover:scale-110 active:scale-95 group"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
        <i className="fa-brands fa-whatsapp text-2xl md:text-4xl relative z-10"></i>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
