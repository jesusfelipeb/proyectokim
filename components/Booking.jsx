'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

const Booking = () => {
  return (
    <section id="reservar" className="relative bg-gradient-to-b from-white to-slate-50 py-24 md:py-32 overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] border border-amber-600 rounded-full"></div>
        <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] border border-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Cabecera de Reserva */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-600"></div>
            <span className="uppercase tracking-[0.25em] text-amber-700 text-xs font-medium">
              Disponibilidad Exclusiva
            </span>
            <div className="w-12 h-[1px] bg-amber-600"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
            Asegura tu <span className="italic text-amber-800">espacio sagrado</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Gestiona tu consulta de manera privada. Selecciona el momento que mejor se alinee con tu ritmo de vida actual.
          </p>
        </div>

        {/* Contenedor del Widget */}
        <div className="max-w-5xl mx-auto">
          {/* Info badges antes del calendario */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-slate-600">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Sesiones de 60-90 min</span>
            </div>
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <div className="flex items-center gap-3 text-slate-600">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">Confirmación inmediata</span>
            </div>
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <div className="flex items-center gap-3 text-slate-600">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">100% confidencial</span>
            </div>
          </div>

          {/* Widget de Calendly con diseño premium */}
          <div className="relative bg-white shadow-2xl border border-slate-200 overflow-hidden">
            {/* Decoración de esquinas elegantes */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-600/20 pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-600/20 pointer-events-none z-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-600/20 pointer-events-none z-10"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-600/20 pointer-events-none z-10"></div>

            {/* Contenedor interno con padding */}
            <div className="p-4 md:p-8">
              <InlineWidget 
                url="https://calendly.com/kimvzla420" 
                styles={{
                  height: '700px',
                  minWidth: '320px'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: true,
                  primaryColor: 'd97706', // amber-600 para consistencia
                  textColor: '0f172a' // slate-900
                }}
              />
            </div>
          </div>
          
          {/* Información adicional post-calendario */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-slate-900 mb-2">Sesiones Globales</h4>
              <p className="text-xs text-slate-600">Zoom o presencial bajo solicitud previa</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-slate-900 mb-2">Pago Seguro</h4>
              <p className="text-xs text-slate-600">Transacciones encriptadas y protegidas</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-slate-900 mb-2">Reagendamiento Flexible</h4>
              <p className="text-xs text-slate-600">Modifica tu cita con 24h de anticipación</p>
            </div>
          </div>

          {/* Nota final */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 border border-amber-200 text-slate-700">
              <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs uppercase tracking-wider">
                ¿Necesitas ayuda para elegir? <a href="mailto:info@kimcedeno.com" className="underline font-medium hover:text-amber-800 transition-colors">Contáctanos</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;