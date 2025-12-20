"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      icon: "🔮",
      title: 'Lectura de Tarot Completa',
      description: 'Explora tu pasado, presente y futuro a través de la simbología del tarot. Obtén claridad profunda sobre tus desafíos y oportunidades.',
      duration: '60 minutos',
      price: '$45',
      features: [
        'Lectura personalizada de 10 cartas',
        'Interpretación detallada',
        'Guía para próximos pasos',
        'Audio de la sesión incluido'
      ],
      badge: 'Más Popular',
      featured: true,
      link: '/#reservar', // Redirige al widget de Calendly en la Home
    },
    {
      id: 2,
      icon: "🌟",
      title: 'Consulta Express',
      description: 'Respuesta rápida a una pregunta específica. Ideal para decisiones urgentes o cuando necesitas orientación inmediata.',
      duration: '30 minutos',
      price: '$25',
      features: [
        'Lectura de 3 cartas',
        'Respuesta directa y clara',
        'Recomendaciones prácticas',
        'Chat de seguimiento 24hs'
      ],
      badge: null,
      featured: false,
      link: '/#reservar',
    },
    {
      id: 3,
      icon: "✨",
      title: 'Sesión de Life Coaching',
      description: 'Trabaja en tus metas personales y profesionales. Te guío con herramientas prácticas para superar obstáculos y alcanzar tu potencial.',
      duration: '90 minutos',
      price: '$80',
      features: [
        'Plan de acción personalizado',
        'Ejercicios de autoconocimiento',
        'Seguimiento por 2 semanas',
        'Material digital exclusivo'
      ],
      badge: 'Recomendado',
      featured: false,
      link: '/#reservar',
    },
  ];

  return (
    <main className="pt-16">
      <Header />
      
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        {/* Elementos Decorativos de Fondo */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Encabezado de la Página */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="text-amber-600 text-sm font-medium">✨ Mis Servicios</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
              Encuentra el servicio{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                perfecto para ti
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-body">
              Cada sesión está diseñada para brindarte claridad, guía y herramientas 
              prácticas en tu camino de autoconocimiento.
            </p>
          </div>

          {/* Grid de Servicios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
                  service.featured
                    ? 'shadow-2xl ring-2 ring-amber-400 transform lg:scale-105 hover:scale-110'
                    : 'shadow-lg hover:shadow-2xl hover:scale-105'
                }`}
              >
                {/* Etiqueta (Badge) */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.featured
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icono con Gradiente */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.featured
                      ? 'bg-gradient-to-br from-amber-400 to-amber-600'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-body">
                    {service.description}
                  </p>

                  {/* Duración y Precio */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600 font-body">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900 font-heading">
                        {service.price}
                      </div>
                      <div className="text-xs text-gray-500 font-body">por sesión</div>
                    </div>
                  </div>

                  {/* Lista de Características */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg 
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            service.featured ? 'text-amber-500' : 'text-gray-400'
                          }`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600 font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón de Acción */}
                  <Link href={service.link}>
                    <button
                      className={`w-full font-semibold py-4 px-6 rounded-full transition-all duration-300 font-body ${
                        service.featured
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-amber-500/50 transform hover:scale-105'
                          : 'bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg'
                      }`}
                    >
                      Reservar ahora
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Testimonio Destacado */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 border border-amber-100 shadow-inner">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-2xl font-bold font-heading">
                  MG
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-3 italic font-body">
                  La lectura de tarot completa cambió mi perspectiva por completo. Kim tiene un don 
                  especial para conectar con las energías y ofrecer guía clara y práctica. ¡Totalmente recomendado!
                </p>
                <div className="text-gray-900 font-semibold font-heading">María García</div>
                <div className="text-gray-600 text-sm font-body">Cliente desde 2023</div>
              </div>
            </div>
          </div>

          {/* Soporte y Sellos de Confianza */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              ¿No estás seguro cuál elegir?
            </h3>
            <p className="text-gray-600 mb-6 font-body">
              Escríbeme y te ayudo a encontrar el servicio perfecto para tu situación actual.
            </p>
            <Link href="https://wa.me/TU_NUMERO" target="_blank">
              <button className="inline-flex items-center gap-2 border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 font-body">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contáctame por WhatsApp
              </button>
            </Link>
          </div>

          {/* Badges de Confianza */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-gray-200">
            {[
              { text: "Profesional Certificada", icon: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" },
              { text: "Sesiones Puntuales", icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" },
              { text: "Confidencialidad Total", icon: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={badge.icon} clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium font-body">{badge.text}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;