"use client";

import React from 'react';

const Accreditations = () => {
  const accreditationsData = [
    {
      id: 1,
      title: 'Professional Life Coach Certification',
      issuer: 'International Coaching Federation (ICF)',
      year: '2022',
      description: 'Estándar global en coaching transformacional, enfocado en ética y excelencia en el servicio.',
    },
    {
      id: 2,
      title: 'Maestría en Simbología Universal',
      issuer: 'Academia de Altos Estudios Esotéricos',
      year: '2020',
      description: 'Especialización en arquetipos junguianos y decodificación de patrones simbólicos complejos.',
    },
    {
      id: 3,
      title: 'Coaching Ontológico Avanzado',
      issuer: 'Instituto de Liderazgo y Transformación',
      year: '2021',
      description: 'Facilitación de cambios profundos en la estructura del ser para la toma de decisiones críticas.',
    },
  ];

  const stats = [
    { number: '650+', label: 'Horas de Especialización' },
    { number: '03', label: 'Títulos Internacionales' },
    { number: '05', label: 'Años de Investigación' },
  ];

  return (
    <section className="relative bg-white py-24 md:py-40 overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-amber-600 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-amber-600 rounded-full translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-600"></div>
            <span className="uppercase tracking-[0.25em] text-amber-700 text-xs font-medium">
              Respaldo y Rigor Profesional
            </span>
            <div className="w-12 h-[1px] bg-amber-600"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
            Acreditaciones <span className="italic text-amber-800">Académicas</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            La práctica ética y la formación continua en organismos internacionales garantizan un acompañamiento de la más alta calidad.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-y border-slate-200 py-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="font-serif text-5xl md:text-6xl text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-amber-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certificaciones Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-24 max-w-6xl mx-auto">
          {accreditationsData.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-gradient-to-b from-slate-50 to-white p-8 border border-slate-200 hover:border-amber-600/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Year badge */}
              <div className="absolute -top-4 left-8 bg-white px-4 py-1 border border-slate-200 group-hover:border-amber-600 transition-colors duration-300">
                <span className="font-serif text-lg text-amber-700 italic">
                  {item.year}
                </span>
              </div>

              <div className="mt-6">
                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-slate-900 mb-4 leading-tight group-hover:text-amber-800 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-amber-600 mb-6"></div>

                {/* Issuer */}
                <p className="text-xs uppercase tracking-wider text-slate-900 font-medium mb-4">
                  {item.issuer}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-amber-600/0 group-hover:border-amber-600/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Compromiso Block */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative bg-gradient-to-br from-slate-50 to-amber-50/30 p-12 md:p-16 border border-slate-200 overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl  mb-8 italic leading-tight text-stone-900">
                Un compromiso con la verdad y la confidencialidad
              </h3>
              
              <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Bajo los estándares de la ICF, cada sesión es tratada como un espacio de absoluta privacidad, integridad y respeto por tu proceso individual.
              </p>

              {/* Pillars */}
              <div className="flex flex-wrap justify-center gap-12 md:gap-16 pt-8">
                <div className="text-center group">
                  <div className="w-1 h-12 bg-amber-600 mx-auto mb-4 group-hover:h-16 transition-all duration-300"></div>
                  <span className="text-xs uppercase tracking-[0.25em] text-stone-900 font-medium">
                    Privacidad Total
                  </span>
                </div>
                
                <div className="text-center group">
                  <div className="w-1 h-12 bg-amber-600 mx-auto mb-4 group-hover:h-16 transition-all duration-300"></div>
                  <span className="text-xs uppercase tracking-[0.25em] text-stone-900 font-medium">
                    Ética de Élite
                  </span>
                </div>
                
                <div className="text-center group">
                  <div className="w-1 h-12 bg-amber-600 mx-auto mb-4 group-hover:h-16 transition-all duration-300"></div>
                  <span className="text-xs uppercase tracking-[0.25em] text-stone-900 font-medium">
                    Método Probado
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corners on outer container */}
          <div className="absolute -inset-2 border border-amber-600/10 pointer-events-none"></div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 border border-slate-200">
            <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs uppercase tracking-wider text-slate-600">
              Documentación disponible bajo solicitud formal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;