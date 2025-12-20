import Image from 'next/image';

export default function Hero() {
  return (
    <section className=" relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Elementos decorativos de lujo */}
      {/* Background con overlay optimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tarot.jpg"
          alt="Fondo místico de tarot"
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover"
        />
        {/* Degradado más sutil para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-gray-200/80 to-gray-100/80"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border border-amber-600 rounded-full"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] border border-amber-600 rounded-full"></div>
      </div>

      {/* Gradiente sutil de overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-transparent to-slate-50/40 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 py-18 z-10 mt-18">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Columna izquierda: Contenido */}
          <div className="text-left lg:pr-12">
            {/* Badge de exclusividad */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-amber-600"></div>
              <span className="uppercase tracking-[0.25em] text-amber-700 text-xs font-medium">
                Consultoría Exclusiva
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-slate-900 mb-6 leading-[1.1]">
              Transforma tu vida <br />
              con <span className="italic text-amber-800">claridad estratégica</span>
            </h1>
            
            <p className="text-slate-900 text-lg md:text-xl mb-8 leading-relaxed font-light max-w-xl">
              Coaching de élite que combina intuición ancestral con metodologías pragmáticas. Para ejecutivos y emprendedores que buscan resultados extraordinarios.
            </p>

            {/* Prueba social */}
            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-slate-200">
              <div>
                <div className="text-3xl font-serif text-slate-900 mb-1">500+</div>
                <div className="text-xs uppercase tracking-wider text-slate-50">Clientes Elite</div>
              </div>
              <div className="w-[1px] h-12 bg-slate-200"></div>
              <div>
                <div className="text-3xl font-serif text-slate-900 mb-1">15+</div>
                <div className="text-xs uppercase tracking-wider text-slate-50">Años Experiencia</div>
              </div>
              <div className="w-[1px] h-12 bg-slate-200"></div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-500" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-50">Valoración 5.0</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-slate-900 text-white px-8 py-5 overflow-hidden transition-all duration-300 hover:bg-amber-700">
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs font-medium">
                  Agendar Sesión Estratégica
                </span>
                <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button className="group flex items-center gap-3 text-slate-900 px-6 py-5 border border-slate-300 hover:border-amber-600 transition-all duration-300">
                <span className="uppercase tracking-[0.2em] text-xs font-medium group-hover:text-amber-700 transition-colors">
                  Ver Metodología
                </span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            
          </div>

          {/* Columna derecha: Imagen */}
          <div className="relative lg:block mt-12">
            {/* Frame decorativo */}
            <div className="absolute -inset-4 border border-amber-600/20 z-0"></div>
            <div className="absolute -inset-8 border border-amber-600/10 z-0"></div>
            
            {/* Contenedor de imagen - AUTORRETRATO */}
            <div className="relative aspect-[3/4] bg-slate-200 overflow-hidden shadow-2xl">
              {/* Next.js Image optimizada */}
              <Image
                src="/kim.png"
                alt="Coach profesional de tarot y life coaching de élite"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
                quality={90}
                priority
              />

              {/* Overlay sutil de elegancia */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Badge flotante de credibilidad */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-slate-100 z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">Certificado Internacional</div>
                  <div className="text-xs text-slate-500">ICF & Tarot Profesional</div>
                </div>
              </div>
            </div> */}
          </div>

        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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