
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 group px-4 md:px-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-blue-600 rounded-[2rem] md:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop" 
                alt="Asesores MR Brevetes" 
                className="relative rounded-[2rem] md:rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-yellow-500 rounded-2xl z-0 hidden sm:block"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-32 md:h-32 border-4 border-blue-900 rounded-2xl z-0 hidden sm:block"></div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 block">Sobre MR Brevetes</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
              ¿Quiénes somos y <span className="text-blue-600">Por qué elegirnos?</span>
            </h2>
            
            <p className="text-slate-600 text-sm md:text-lg mb-8 leading-relaxed font-medium">
              Somos un grupo de asesores dedicados a que obtengas tu licencia de manera <strong>rápida, segura y 100% legal</strong>. Nuestra atención es personalizada, acompañándote en cada paso ante el MTC para evitarte complicaciones.
            </p>

            <div className="space-y-6 text-left">
              {[
                { icon: 'fa-bolt', title: 'Atención Inmediata', desc: 'Sin colas ni esperas eternas. Agilizamos tus trámites médicos.' },
                { icon: 'fa-shield-halved', title: 'Respaldo Legal', desc: 'Todo bajo normativa del MTC en centros autorizados.' },
                { icon: 'fa-user-tie', title: 'Asesoría VIP', desc: 'Un experto asignado para ti vía WhatsApp las 24 horas.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg md:text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg group active:scale-95">
                Hablar con un Asesor
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
