"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  const stats = [
    { number: "5+", label: "Años de experiencia" },
    { number: "500+", label: "Sesiones realizadas" },
    { number: "98%", label: "Clientes satisfechos" },
  ];

  const specialties = [
    { icon: "🔮", title: "Tarot Intuitivo", description: "Lecturas profundas y personalizadas" },
    { icon: "🌙", title: "Guía Espiritual", description: "Acompañamiento en tu camino" },
    { icon: "✨", title: "Autoconocimiento", description: "Reconexión con tu esencia" },
  ];

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <span className="text-amber-600 text-sm font-medium">✨ Sobre mí</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hola, soy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
              Kim Cedeño
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Guía espiritual y lectora de tarot dedicada a ayudarte a encontrar 
            claridad y propósito en tu camino de vida.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/perfilkim.jpg"
                  alt="Kim Cedeño - Tarotista profesional"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>

              {/* Floating Card - Experiencia */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5+ años</p>
                    <p className="text-sm text-gray-600">de experiencia</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-amber-400 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Quote destacada */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8">
              <svg className="w-8 h-8 text-amber-500 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                Mi misión es crear un espacio seguro donde puedas explorar tu interior 
                y reconectar con tu sabiduría más profunda.
              </p>
            </div>

            {/* Story paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Mi viaje comenzó con la búsqueda de respuestas propias. A través del tarot 
                y el desarrollo de mi intuición, descubrí poderosas herramientas para guiar 
                a otros a encontrar su propia luz y propósito.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Con años de experiencia y un enfoque profundo en la empatía y el autoconocimiento, 
                te acompaño en cada paso de tu camino. Juntos, descifraremos los mensajes del 
                universo y construiremos una vida llena de claridad y dirección.
              </p>
            </div>

            {/* Specialties */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-200"
                >
                  <div className="text-3xl mb-2">{specialty.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {specialty.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {specialty.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link href="/servicios">
                <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300">
                  Conoce mis servicios
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mini testimonial */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-300 text-center max-w-2xl mx-auto italic">
              "Kim tiene un don especial para conectar con las energías. Su lectura me ayudó 
              a encontrar claridad en un momento de mucha confusión. ¡Altamente recomendada!"
            </p>
            <p className="text-amber-400 text-center mt-3 text-sm">
              — María G., Cliente desde 2023
            </p>
          </div>
        </div>

        {/* Journey Timeline - Opcional */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Mi Camino hacia el Tarot
          </h3>
          
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { year: "2018", title: "Despertar Espiritual", description: "Inicio mi búsqueda personal y descubrimiento del tarot" },
                { year: "2020", title: "Formación Profesional", description: "Certificación en lectura de tarot y desarrollo intuitivo" },
                { year: "2023", title: "Práctica Establecida", description: "Más de 500 sesiones y una comunidad creciente" },
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;