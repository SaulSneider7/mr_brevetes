
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BranchesSection from './components/BranchesSection';
import SocialSection from './components/SocialSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProcessSection from './components/ProcessSection';
import { SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-yellow-200 selection:text-blue-900 bg-slate-50">
      <Navbar />
      
      <main>
        {/* Hero Header */}
        <Hero />

        {/* New Educational/Process Section - Replaces Campaign Banner */}
        <ProcessSection />

        {/* Who We Are & Why Choose Us Section */}
        <AboutSection />

        {/* Services Section */}
        <section id="servicios" className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Tarifas 2024</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Nuestros Servicios</h2>
            <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mb-12"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Testimonial Carousel */}
        <TestimonialsSection />

        {/* Physical Branches Grid */}
        <BranchesSection />

        {/* Social Media Links Section */}
        <SocialSection />
      </main>

      {/* Footer developed by tu-sitioweb.com */}
      <Footer />
      
      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
