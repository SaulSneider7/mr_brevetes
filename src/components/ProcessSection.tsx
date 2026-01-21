
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Asesoría Gratuita',
      description: 'Escríbenos por WhatsApp. Un asesor experto evaluará tu caso sin costo alguno.',
      icon: 'fa-comments-dollar',
      color: 'bg-blue-500'
    },
    {
      number: '02',
      title: 'Cita y Evaluación',
      description: 'Programamos tu examen médico y cursos en nuestras sedes autorizadas.',
      icon: 'fa-calendar-check',
      color: 'bg-yellow-500'
    },
    {
      number: '03',
      title: '¡Brevete en Mano!',
      description: 'Finalizamos el proceso ante el MTC de forma segura y garantizada.',
      icon: 'fa-id-card-clip',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="proceso" className="py-12 md:py-24 bg-white relative px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-slate-100 shadow-sm">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-2 block">Eficiencia Garantizada</span>
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">Tu camino al volante en 3 pasos</h2>
            <div className="w-12 md:w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200/50 -z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`w-20 h-20 md:w-24 md:h-24 ${step.color} text-white rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-3xl md:text-4xl shadow-2xl shadow-blue-900/10 group-hover:scale-105 transition-all duration-500 mb-6 md:mb-8 relative`}>
                  <i className={`fa-solid ${step.icon}`}></i>
                  <div className="absolute -top-2 -right-2 bg-white text-slate-900 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-black text-xs md:text-sm shadow-lg border border-slate-50">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-[240px] md:max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-slate-200/60 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">¿Listo para empezar tu trámite hoy?</p>
            <div className="flex justify-center">
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                target="_blank" 
                className="inline-flex items-center gap-3 bg-blue-900 hover:bg-slate-800 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all shadow-xl active:scale-95 group"
              >
                Hablar con un asesor
                <i className="fa-brands fa-whatsapp text-lg md:text-xl group-hover:rotate-12 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
