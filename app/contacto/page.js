"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Header />

      <section className="relative bg-white py-20 md:py-32 overflow-hidden">
        {/* Decoración de fondo similar a Servicios */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* COLUMNA IZQUIERDA: Info de contacto */}
            <div className="lg:w-1/3">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark mb-6">
                Estemos en <span className="text-secondary">contacto</span>
              </h1>
              <p className="font-body text-lg text-gray-600 mb-10">
                ¿Tienes una duda específica? ¿Quieres consultar por sesiones personalizadas o eventos? Estoy aquí para escucharte.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral rounded-xl flex items-center justify-center text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Email</h4>
                    <p className="text-gray-600">hola@kimcedeno.com</p>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral rounded-xl flex items-center justify-center text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Redes Sociales</h4>
                    <p className="text-gray-600">@kimcedeno_tarot</p>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral rounded-xl flex items-center justify-center text-secondary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">Horario de Atención</h4>
                    <p className="text-gray-600">Lun - Vie: 10:00 - 19:00 (GMT-3)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: Formulario */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-300">
                <form name="contacto" method="POST" data-netlify="true" className="grid md:grid-cols-2 gap-6">
                  <input type="hidden" name="form-name" value="contacto" />
                  <div className="flex flex-col">
                    <label htmlFor="nombre" className="text-sm font-bold text-dark mb-2 ml-1">Nombre completo</label>
                    <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" className="bg-neutral/50 border-2 border-gray-500 rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-bold text-dark mb-2 ml-1">Correo electrónico</label>
                    <input type="email" id="email" name="email" required placeholder="tu@email.com" className="bg-neutral/50 border-2 border-gray-500 rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none" />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="asunto" className="text-sm font-bold text-dark mb-2 ml-1">Asunto</label>
                    <select id="asunto" name="asunto" className="bg-neutral/50 border-2 border-gray-500 rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none appearance-none">
                      <option>Consulta General</option>
                      <option>Sesión de Tarot</option>
                      <option>Life Coaching</option>
                      <option>Productos / Tienda</option>
                      <option>Problemas con mi reserva</option>
                    </select>
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="mensaje" className="text-sm font-bold text-dark mb-2 ml-1">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" required rows="5" placeholder="Cuéntame cómo puedo ayudarte..." className="bg-neutral/50 border-2 border-gray-500 rounded-xl p-4 focus:ring-2 focus:ring-secondary transition-all outline-none resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-dark hover:bg-gray-800 hover:text-white border-2 text-dark font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}