
import React from 'react';
import type { Service } from '../types';
import { SOCIAL_LINKS } from '../constants';

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="relative bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group hover:-translate-y-2 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500"></div>
      
      <div className="p-8 flex-1 relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shadow-lg ${
          service.popular 
            ? 'bg-yellow-500 text-blue-900 shadow-yellow-500/20' 
            : 'bg-blue-900 text-white shadow-blue-900/20'
        }`}>
          <i className={`fa-solid ${service.icon} text-3xl`}></i>
        </div>
        
        {service.popular && (
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-600 text-[10px] font-black uppercase tracking-widest">Favorito de clientes</span>
          </div>
        )}
        
        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
          {service.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-end gap-1 mb-2">
            <span className="text-slate-400 font-bold mb-1">S/</span>
            <span className="text-5xl font-black text-slate-900 tracking-tighter">
              {service.price}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Único pago - 100% legal</p>
        </div>
      </div>
      
      <a 
        href={`${SOCIAL_LINKS.whatsapp}?text=Hola MR Brevetes, deseo información personalizada sobre: ${service.title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 w-full py-5 rounded-[1.5rem] text-center font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 active:scale-95 ${
          service.popular 
            ? 'bg-yellow-500 hover:bg-yellow-400 text-blue-950 shadow-lg shadow-yellow-500/20' 
            : 'bg-blue-950 hover:bg-blue-900 text-white shadow-lg shadow-blue-900/20'
        }`}
      >
        <span>Solicitar Ahora</span>
        <i className="fa-brands fa-whatsapp text-lg"></i>
      </a>
    </div>
  );
};

export default ServiceCard;
