
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const CampaignBanner: React.FC = () => {
  return (
    <div className="relative z-20 -mt-10 px-4">
      <div className="max-w-5xl mx-auto bg-yellow-500 rounded-3xl shadow-xl p-1">
        <div className="bg-blue-900 rounded-[1.4rem] px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="bg-yellow-500 text-blue-900 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg">
              <i className="fa-solid fa-bullhorn animate-pulse"></i>
            </div>
            <div>
              <h4 className="font-black text-xl text-white uppercase tracking-tight leading-none mb-1">Campaña de Promoción</h4>
              <p className="text-blue-100 font-medium text-sm opacity-90">
                ¡Aprovecha un <span className="text-yellow-400 font-bold text-base">10% OFF</span> en recategorizaciones este mes!
              </p>
            </div>
          </div>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-white text-blue-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Solicitar Descuento
          </a>
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
