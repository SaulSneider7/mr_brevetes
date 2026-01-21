
import React from 'react';
import { BRANCHES } from '../constants';

const BranchesSection: React.FC = () => {
  return (
    <section id="sedes" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Presencia Local</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">Nuestras Sedes en Lima</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
            Contamos con oficinas modernas y estratégicamente ubicadas para que realices tus trámites con total comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRANCHES.map(branch => (
            <div key={branch.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={branch.imageUrl} 
                  alt={branch.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-60"></div>
                
                {/* District Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-yellow-500 text-blue-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {branch.district}
                  </span>
                </div>

                {/* Number ID Indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-black border border-white/30 text-xs">
                  #{branch.id}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-900 transition-colors">
                  {branch.name}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-map-location-dot"></i>
                    </div>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-info-circle"></i>
                    </div>
                    <p className="text-slate-500 text-xs italic">
                      {branch.reference}
                    </p>
                  </div>
                </div>

                {/* Map Link Button */}
                <div className="mt-auto">
                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-blue-900 text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10 active:scale-95"
                  >
                    <span>Abrir Google Maps</span>
                    <i className="fa-solid fa-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
