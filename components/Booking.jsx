'use client'; // MUY IMPORTANTE: Calendly necesita ejecutarse en el cliente

import React from 'react';
import { InlineWidget } from 'react-calendly';

const Booking = () => {
  return (
    <section id="reservar" className="bg-neutral border-b border-b-amber-200 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <span className="text-amber-600 text-sm font-medium">✨ Agenda tu cita</span>
          </div>
        {/* Título de la Sección */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4">
            Reserva <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">tu Sesión</span>
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona el día y horario que mejor te quede. La confirmación te llegará automáticamente a tu correo.
          </p>
        </div>

        {/* Widget de Calendly */}
        <div className="bg-gradient-to-br from-[#0F172A] to-purple-900/90 backdrop-blur-md border border-amber-300 text-white placeholder-gray-400 rounded-2xl shadow-xl overflow-hidden ">
          <InlineWidget 
            url="https://calendly.com/kimvzla420" // REEMPLAZA CON EL LINK DE KIM
            styles={{
              height: '700px',
              minWidth: '320px'
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'cca43b', // Aquí puedes poner el color dorado/secundario de tu paleta
              textColor: '1a1a1a'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;