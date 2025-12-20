"use client";

import React from 'react';

const Accreditations = () => {
  const accreditationsData = [
    {
      id: 1,
      title: 'Certificación Profesional de Life Coach',
      issuer: 'International Coaching Federation (ICF)',
      year: '2022',
      hours: '200+ horas',
      description: 'Formación avanzada en técnicas de coaching transformacional y desarrollo personal.',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Maestría en Tarot y Simbología',
      issuer: 'Academia Esotérica de Buenos Aires',
      year: '2020',
      hours: '300+ horas',
      description: 'Estudio profundo de arquetipos, simbología universal y técnicas avanzadas de lectura.',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Especialización en Coaching Ontológico',
      issuer: 'Instituto de Coaching Avanzado',
      year: '2021',
      hours: '150+ horas',
      description: 'Herramientas para facilitar cambios profundos en la forma de ser y relacionarse.',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const stats = [
    { number: '650+', label: 'Horas de formación' },
    { number: '3', label: 'Certificaciones internacionales' },
    { number: '5+', label: 'Años de práctica' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <span className="text-amber-600 text-sm font-medium">🎓 Formación Profesional</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Acreditaciones y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
              Certificaciones
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Mi formación continua garantiza que recibas un servicio profesional, 
            ético y basado en las mejores prácticas internacionales.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline de Certificaciones */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Línea vertical - solo visible en desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-400 via-purple-400 to-blue-400"></div>
            
            <div className="space-y-12">
              {accreditationsData.map((accreditation, index) => (
                <div 
                  key={accreditation.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-5/12">
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                      {/* Header con año */}
                      <div className={`bg-gradient-to-r ${accreditation.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            {accreditation.icon}
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{accreditation.year}</div>
                            <div className="text-sm opacity-90">{accreditation.hours}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold leading-tight">
                          {accreditation.title}
                        </h3>
                      </div>
                      
                      {/* Body */}
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">
                              {accreditation.issuer}
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {accreditation.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Badge - solo visible en desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-100 shadow-lg items-center justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${accreditation.color}`}></div>
                  </div>

                  {/* Spacer para mantener alineación */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Compromiso con la Excelencia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Me mantengo en constante formación para ofrecerte las herramientas más efectivas 
              y actualizadas. Tu crecimiento personal es mi prioridad, respaldado por años de 
              estudio y práctica profesional.
            </p>

            {/* Mini Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-amber-400 text-3xl mb-2">🔒</div>
                <div className="text-white font-semibold mb-1">Confidencialidad</div>
                <div className="text-gray-400 text-sm">Total privacidad garantizada</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 text-3xl mb-2">✨</div>
                <div className="text-white font-semibold mb-1">Ética Profesional</div>
                <div className="text-gray-400 text-sm">Código de conducta ICF</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 text-3xl mb-2">📚</div>
                <div className="text-white font-semibold mb-1">Formación Continua</div>
                <div className="text-gray-400 text-sm">Actualización permanente</div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Note */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Todas las certificaciones pueden ser verificadas con los organismos emisores
          </p>
        </div>

      </div>
    </section>
  );
};

export default Accreditations;