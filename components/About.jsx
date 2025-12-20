"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  const stats = [
    { number: "05", label: "Años de Trayectoria" },
    { number: "500+", label: "Consultas de Élite" },
    { number: "98%", label: "Índice de Retención" },
  ];

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden border-b border-gold-heritage/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Columna de Imagen - Estilo Galería de Arte */}
          
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/perfilkim.jpg" // Asegúrate de que la foto sea sobria y profesional
                    alt="Kim Cedeño"
                    fill
                    className="object-cover transition-all duration-1000 ease-in-out"
                  />
                </div>
                {/* Marco flotante minimalista */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold-heritage/20 -z-10 hidden md:block"></div>
              </div>
              
              {/* Experiencia Flotante - Lujo Silencioso */}
              <div className="absolute top-12 -right-6 md:-right-12 bg-obsidian text-white p-8 hidden md:block shadow-2xl">
                <p className="font-serif text-4xl mb-1">05</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-heritage">
                  Años de Maestría
                </p>
              </div>
            </div>
          

          {/* Columna de Texto - Narrativa de Autoridad */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-gold-heritage mb-6 block font-bold">
                La Visión detrás de la Guía
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-obsidian mb-8 leading-[1.1]">
                Kim <span className="italic">Cedeño</span>
              </h2>
              <div className="w-20 h-[1px] bg-gold-heritage mb-10 opacity-50"></div>
            </div>

            <div className="space-y-6 font-sans text-slate-soft font-light leading-relaxed text-lg">
              <p>
                Estratega de vida y experta en simbología ancestral. Mi enfoque no reside en la predicción vacía, sino en la <span className="text-obsidian font-normal italic">revelación estratégica</span> de los patrones que rigen tu destino.
              </p>
              <p>
                He dedicado los últimos años a perfeccionar un método donde la intuición se encuentra con la pragmática, ofreciendo a una audiencia selecta la claridad necesaria para tomar decisiones trascendentales en su vida personal y profesional.
              </p>
            </div>

            {/* Stats Minimalistas */}
            <div className="grid grid-cols-3 gap-8 py-10 border-t border-b border-gray-100">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="font-serif text-3xl text-obsidian mb-2">{stat.number}</p>
                  <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold-heritage font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/servicios">
                <button className="group relative overflow-hidden bg-obsidian text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500">
                  <span className="relative z-10">Explorar Metodología</span>
                  <div className="absolute inset-0 bg-gold-heritage translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Timeline - Estilo Curator */}
        <div className="mt-40 max-w-5xl mx-auto">
          <h3 className="font-serif text-3xl text-center text-obsidian mb-20 italic">
            Hitos de Excelencia
          </h3>
          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Línea horizontal sutil */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gold-heritage/20 hidden md:block"></div>
            
            {[
              { year: "2018", title: "Iniciación", desc: "Comienzo del estudio profundo de la psique humana y herramientas ancestrales." },
              { year: "2020", title: "Consolidación", desc: "Desarrollo del método propio 'Intuición Estratégica' para líderes." },
              { year: "2023", title: "Expansión Élite", desc: "Apertura de consultoría privada para clientes internacionales de alto nivel." },
            ].map((item, i) => (
              <div key={i} className="pt-8">
                <span className="font-serif text-2xl text-gold-heritage mb-4 block italic">{item.year}</span>
                <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-obsidian mb-4">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-slate-soft font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;