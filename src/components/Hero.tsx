import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
          alt="Conduciendo hacia el éxito" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white pt-20">
        <div className="inline-block px-4 py-1.5 mb-6 bg-yellow-500/20 border border-yellow-500/30 rounded-full backdrop-blur-sm">
          <span className="text-yellow-400 font-semibold text-xs md:text-sm uppercase tracking-wider">Asesoría 100% Personalizada</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
          Obtén tu Brevete <br />
          <span className="text-yellow-500">Rápido, Seguro y Legal</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-10 text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
          Somos el grupo de asesores líderes en Lima. Te acompañamos en todo el proceso para que conduzcas sin preocupaciones.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#servicios" 
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
          >
            Ver Catálogo de Precios
          </a>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Hablar con un Asesor <i className="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-90 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-yellow-500">10k+</span>
            <span className="text-[10px] md:text-xs text-slate-300 uppercase font-bold tracking-widest">Gestiones Exitosas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-yellow-500">24h</span>
            <span className="text-[10px] md:text-xs text-slate-300 uppercase font-bold tracking-widest">Respuesta Rápida</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-yellow-500">100%</span>
            <span className="text-[10px] md:text-xs text-slate-300 uppercase font-bold tracking-widest">Legal y Seguro</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-black text-yellow-500">4.9/5</span>
            <span className="text-[10px] md:text-xs text-slate-300 uppercase font-bold tracking-widest">Calificación</span>
          </div>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-50">
        <i className="fa-solid fa-chevron-down text-white text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;