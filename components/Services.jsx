"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Lectura de Tarot Completa',
      description: 'Un análisis profundo de tu mapa energético actual. Ideal para momentos de transición donde se requiere una visión macroscópica.',
      duration: '60 minutos',
      price: '$45',
      features: ['Análisis de 10 arcanos', 'Enfoque evolutivo', 'Grabación de alta fidelidad'],
      badge: 'La Preferida',
      featured: true,
      link: '/services',
    },
    {
      id: 2,
      title: 'Consulta Estratégica',
      description: 'Orientación concisa sobre una decisión o área específica. Precisión y claridad para quienes valoran el tiempo y la efectividad.',
      duration: '30 minutos',
      price: '$25',
      features: ['Pregunta puntual', 'Resolución de bloqueos', 'Plan de acción inmediato'],
      badge: null,
      featured: false,
      link: '/services',
    },
    {
      id: 3,
      title: 'Life Coaching Ejecutivo',
      description: 'Acompañamiento de alto impacto para alinear tus valores personales con tus ambiciones profesionales y de vida.',
      duration: '90 minutos',
      price: '$80',
      features: ['Estrategia personalizada', 'Herramientas de liderazgo', 'Seguimiento prioritario'],
      badge: 'Premium',
      featured: false,
      link: '/services',
    },
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 right-0 w-96 h-96 border border-amber-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-amber-600/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-600"></div>
            <span className="uppercase tracking-[0.25em] text-amber-700 text-xs font-medium">
              Propuestas Exclusivas
            </span>
            <div className="w-12 h-[1px] bg-amber-600"></div>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
            Inversión en tu <span className="italic text-amber-800">evolución personal</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Sesiones privadas diseñadas bajo estrictos estándares de confidencialidad y excelencia.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className={`group relative bg-white transition-all duration-500 ${
                service.featured 
                  ? 'border-2 border-amber-600/30 shadow-2xl md:scale-105 z-10' 
                  : 'border border-slate-200 hover:border-amber-600/30 hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 font-medium">
                  {service.badge}
                </div>
              )}

              <div className="p-10">
                {/* Header */}
                <div className="text-center mb-8 pb-8 border-b border-slate-100">
                  <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-6 group-hover:text-amber-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <div className="flex justify-center items-baseline gap-2 mb-2">
                    <span className="font-serif text-4xl text-slate-900">{service.price}</span>
                    <span className="text-xs uppercase text-slate-400 tracking-widest">USD</span>
                  </div>
                  
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    {service.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-8 min-h-[80px] font-light">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-slate-600 uppercase tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={service.link}>
                  <button className={`w-full py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                    service.featured 
                      ? 'bg-slate-900 text-white hover:bg-amber-700' 
                      : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                  }`}>
                    Reservar Sesión
                  </button>
                </Link>
              </div>

              {/* Hover effect decorativo */}
              <div className="absolute -inset-0.5 border border-amber-600/0 group-hover:border-amber-600/20 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-50 to-amber-50/30 p-12 md:p-16 border border-slate-200">
            {/* Quote decoration */}
            <div className="absolute top-8 left-8 text-amber-600/10">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-amber-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-slate-900 italic leading-relaxed mb-8 text-center">
                "La precisión de Kim no reside solo en lo que ve, sino en cómo logra traducir esa sabiduría en pasos tangibles para mi crecimiento profesional."
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="text-sm font-medium text-slate-900 mb-1">M. García</div>
                <div className="text-xs uppercase tracking-widest text-amber-700">Inversora</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action adicional */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm mb-6">
            ¿No estás seguro cuál es la mejor opción para ti?
          </p>
          <Link href="/contacto">
            <button className="group inline-flex items-center gap-3 text-slate-900 px-6 py-3 border border-slate-300 hover:border-amber-600 transition-all duration-300">
              <span className="uppercase tracking-[0.2em] text-xs font-medium group-hover:text-amber-700 transition-colors">
                Solicitar Orientación
              </span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;