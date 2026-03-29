"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con overlay optimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tarot.webp"
          alt="Fondo místico de tarot"
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover"
        />
        {/* Overlay adaptativo - más opaco en mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/95 via-gray-200/90 to-gray-100/90 sm:from-gray-50/90 sm:via-gray-200/85 sm:to-gray-100/85"></div>
      </div>

      {/* Elementos decorativos - reducidos en mobile */}
      <div className="absolute inset-0 opacity-[0.01] sm:opacity-[0.02] pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] border border-amber-600 rounded-full"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] border border-amber-600 rounded-full"></div>
      </div>

      {/* Gradiente sutil de overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-slate-50/30 sm:from-amber-50/60 sm:to-slate-50/40 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 z-10 mt-16 sm:mt-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Columna izquierda: Contenido - Mobile First */}
          <motion.div
            className="text-center lg:text-left lg:pr-12 order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          >
            {/* Badge de exclusividad - Responsive */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-[1px] bg-amber-600"></div>
              <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-amber-700 text-[10px] sm:text-xs font-medium">
                Consultoría Exclusiva
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-amber-600 lg:hidden"></div>
            </motion.div>

            {/* Título - Mobile First Typography */}
            <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1]">
              Transforma tu vida <br className="hidden sm:block" />
              con <span className="italic text-amber-800">claridad estratégica</span>
            </motion.h1>

            {/* Subtítulo - Optimizado para lectura móvil */}
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="text-slate-900 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Coaching de élite que combina intuición ancestral con metodologías pragmáticas. Para ejecutivos y emprendedores que buscan resultados extraordinarios.
            </motion.p>

            {/* Prueba social - Stack en mobile, horizontal en tablet+ */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-slate-200 max-w-md mx-auto lg:max-w-none">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif text-slate-900 mb-1">500+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-600">Clientes Elite</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif text-slate-900 mb-1">15+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-600">Años Experiencia</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-slate-200"></div>
              <div className="text-center">
                <div className="flex gap-1 mb-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-500" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-600">Valoración 5.0</div>
              </div>
            </div>

            {/* CTAs - Stack vertical en mobile, horizontal en sm+ */}
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none">
              <button className="group relative bg-slate-900 text-white px-6 sm:px-8 py-4 sm:py-5 overflow-hidden transition-all duration-300 hover:bg-amber-700 w-full sm:w-auto">
                <span className="relative z-10 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-medium">
                  Agendar Sesión Estratégica
                </span>
                <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button className="group flex items-center justify-center gap-2 sm:gap-3 text-slate-900 px-5 sm:px-6 py-4 sm:py-5 border border-slate-300 hover:border-amber-600 transition-all duration-300 w-full sm:w-auto">
                <span className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-medium group-hover:text-amber-700 transition-colors">
                  Ver Metodología
                </span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Columna derecha: Imagen - Optimizada para mobile */}
          <div className="relative order-1 lg:order-2 max-w-md mx-auto lg:max-w-none w-full">
            {/* Frame decorativo - más sutil en mobile */}
            <div className="absolute -inset-2 sm:-inset-4 border border-amber-600/10 sm:border-amber-600/20 z-0"></div>
            <div className="absolute -inset-4 sm:-inset-8 border border-amber-600/5 sm:border-amber-600/10 z-0"></div>
            
            {/* Contenedor de imagen */}
            <div className="relative aspect-[3/4] bg-slate-200 overflow-hidden shadow-xl sm:shadow-2xl">
              {/* Next.js Image optimizada */}
              <Image
                src="/kim.webp"
                alt="Coach profesional de tarot y life coaching de élite"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
                quality={90}
                priority
              />

              {/* Overlay sutil de elegancia */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicador de scroll - Solo desktop */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}