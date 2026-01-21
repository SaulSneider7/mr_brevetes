
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-yellow-500 text-white p-2 rounded-lg">
                <i className="fa-solid fa-id-card text-xl"></i>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                MR <span className="text-yellow-500">BREVETES</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Líderes en asesoría personalizada para la obtención de licencias de conducir. Gestión rápida, segura y 100% legal.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black transition-colors">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios Populares</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#servicios" className="hover:text-yellow-500 transition-colors">Examen Médico Todas las Categorías</a></li>
              <li><a href="#servicios" className="hover:text-yellow-500 transition-colors">Recategorización A3C</a></li>
              <li><a href="#servicios" className="hover:text-yellow-500 transition-colors">Licencia Mototaxi BII-C</a></li>
              <li><a href="#servicios" className="hover:text-yellow-500 transition-colors">Reducción de Puntos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#inicio" className="hover:text-yellow-500 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-yellow-500 transition-colors">Servicios</a></li>
              <li><a href="#precios" className="hover:text-yellow-500 transition-colors">Promociones</a></li>
              <li><a href={SOCIAL_LINKS.whatsapp} className="hover:text-yellow-500 transition-colors">Cita de Asesoría</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contacto Directo</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-yellow-500"></i>
                <span>Lima, Perú (Atención a nivel nacional)</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-yellow-500"></i>
                <span>+51 900 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-yellow-500"></i>
                <span>contacto@mrbrevetes.com</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-clock text-yellow-500"></i>
                <span>Lun - Sáb: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 MR Brevetes. Todos los derechos reservados.</p>
          <p>Desarrollado por <a href="https://tu-sitioweb.com" target="_blank" className="text-yellow-500 hover:underline font-bold">tu-sitioweb.com</a></p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
