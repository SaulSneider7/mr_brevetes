
import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group relative z-[110]">
            <div className="bg-yellow-500 text-blue-900 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-md shadow-yellow-500/20">
              <i className="fa-solid fa-id-card text-xl"></i>
            </div>
            <span className={`text-xl font-black tracking-tighter uppercase transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-blue-900' : 'text-white'
            }`}>
              MR <span className="text-yellow-500">BREVETES</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`font-bold text-sm uppercase tracking-widest transition-all relative group ${
                  isScrolled ? 'text-slate-600 hover:text-blue-900' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/30"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Asesoría VIP
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-[110] p-2 rounded-xl transition-all duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-blue-900 bg-slate-100' : 'text-white bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <div className={`fixed inset-0 z-[90] transition-all duration-500 ${
        isMobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}>
        {/* Backdrop overlay */}
        <div 
          className={`absolute inset-0 bg-blue-950/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer content */}
        <div className={`absolute top-0 right-0 w-full max-w-[300px] h-full bg-white shadow-2xl transition-transform duration-500 ease-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col p-8 pt-24`}>
          <div className="flex flex-col gap-6">
            <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Menú de Navegación</span>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black text-slate-900 uppercase tracking-tighter hover:text-yellow-500 transition-colors flex items-center justify-between group"
              >
                {link.name}
                <i className="fa-solid fa-chevron-right text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-yellow-500"></i>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-slate-100">
            <p className="text-slate-500 text-xs font-medium mb-6 leading-relaxed">
              Obtén tu licencia hoy con el respaldo del equipo #1 de asesores en Lima.
            </p>
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-yellow-500 text-blue-900 w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Contactar Asesor
            </a>
            
            <div className="flex justify-center gap-6 mt-8">
              <a href={SOCIAL_LINKS.facebook} target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors text-xl">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" className="text-slate-400 hover:text-pink-600 transition-colors text-xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" className="text-slate-400 hover:text-black transition-colors text-xl">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
