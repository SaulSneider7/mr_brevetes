import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Autoscroll suave (opcional)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % TESTIMONIALS.length;
      slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: 'smooth'
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Opiniones reales
          </h2>
          <p className="text-slate-600 mt-2">
            Lo que nuestros alumnos dicen de nosotros
          </p>
        </div>

        {/* Mobile Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory
            scroll-smooth
            -mx-4 px-4
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible
          "
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="
                snap-center
                min-w-[85%] sm:min-w-[70%]
                md:min-w-0
                bg-white rounded-3xl p-6 md:p-8
                border border-slate-200
                shadow-sm
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 leading-tight">
                    {t.name}
                  </p>
                  <span className="text-[10px] uppercase tracking-widest bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full font-black">
                    Brevete {t.category}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-xs" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="mt-4 text-xs text-slate-400 md:hidden">
          Desliza para ver más opiniones →
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
