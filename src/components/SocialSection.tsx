
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialSection: React.FC = () => {
  const socials = [
    { name: 'WhatsApp', icon: 'fa-whatsapp', color: 'bg-green-500', link: SOCIAL_LINKS.whatsapp },
    { name: 'Facebook', icon: 'fa-facebook-f', color: 'bg-blue-600', link: SOCIAL_LINKS.facebook },
    { name: 'Instagram', icon: 'fa-instagram', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', link: SOCIAL_LINKS.instagram },
    { name: 'TikTok', icon: 'fa-tiktok', color: 'bg-black', link: SOCIAL_LINKS.tiktok }
  ];

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Síguenos en Redes Sociales</h2>
        <p className="text-slate-500 mb-12 text-lg">Mantente al día con nuestras promociones y nuevas normativas.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.link} 
              target="_blank" 
              className={`group ${social.color} text-white p-8 rounded-3xl flex flex-col items-center gap-4 hover:scale-105 transition-all shadow-lg hover:-translate-y-1 active:scale-95`}
            >
              <i className={`fa-brands ${social.icon} text-4xl transition-transform group-hover:rotate-12`}></i>
              <span className="font-black text-xs uppercase tracking-widest">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
