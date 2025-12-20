import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image'; // Asumiendo que usaremos Next Image

export default function AboutPage() {
  return (
    <main className="pt-16">
      <Header />

      {/* --- SECCIÓN 1: INTRODUCCIÓN / HERO --- */}
      <section className="bg-neutral py-20 px-6 md:px-12">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-dark mb-6">
            Más que una guía, <br /> soy tu compañera de camino
          </h1>
          <p className="font-body text-xl text-gray-700 leading-relaxed">
            Mi nombre es Kim Cedeño. Mi propósito es unir el mundo tangible del coaching con la sabiduría intuitiva del tarot para ayudarte a encontrar tu propia verdad.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN 2: MI HISTORIA (Texto e Imagen) --- */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imagen (Placeholder) */}
          <div className="w-full md:w-1/2 h-96 relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            {/* Aquí iría una foto de Kim diferente a la del Home */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Foto Personal / Lifestyle]
             </div>
             {/* Descomentar cuando tengas la imagen real:
             <Image src="/images/kim-about.jpg" alt="Kim Cedeño" layout="fill" objectFit="cover" /> 
             */}
          </div>

          {/* Texto de la Historia */}
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl font-bold text-dark mb-6">Mi Historia</h2>
            <div className="font-body text-gray-600 space-y-4">
              <p>
                Todo comenzó cuando me di cuenta de que las herramientas tradicionales no eran suficientes para explicar lo que sentía. Siempre tuve una curiosidad innata por lo místico, pero también una necesidad de estructura y resultados tangibles.
              </p>
              <p>
                Durante años me formé en economía y finanzas, buscando seguridad en los números. Sin embargo, el Tarot llegó a mi vida no como una herramienta de adivinación, sino como un espejo del alma.
              </p>
              <p>
                Al combinarlo con el Life Coaching, descubrí que podía ofrecer algo único: una estrategia práctica para la vida, guiada por la intuición profunda. Hoy, dedico mi vida a empoderar a otros a través de esta fusión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: MIS PILARES / VALORES --- */}
      <section className="bg-neutral/50 py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-dark text-center mb-12">
            Mi Filosofía de Trabajo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Pilar 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-heading text-xl font-bold mb-3">Autenticidad</h3>
              <p className="text-gray-600 text-sm">
                Creo en ser real. Sin máscaras ni juicios. En mis sesiones, tienes un espacio seguro para ser tú mismo/a.
              </p>
            </div>
            {/* Pilar 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-heading text-xl font-bold mb-3">Crecimiento</h3>
              <p className="text-gray-600 text-sm">
                No se trata de predecir el futuro, sino de crearlo. Nos enfocamos en tu evolución y en tomar acción.
              </p>
            </div>
            {/* Pilar 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-heading text-xl font-bold mb-3">Equilibrio</h3>
              <p className="text-gray-600 text-sm">
                Unimos la lógica con la intuición. Pies en la tierra, mirada en el cielo. Ese es el balance real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: CTA FINAL --- */}
      <section className="bg-dark text-white py-16 px-6 text-center">
        <h2 className="font-heading text-3xl font-bold mb-6">
          ¿Listo/a para comenzar tu transformación?
        </h2>
        <p className="mb-8 font-body text-gray-300 max-w-2xl mx-auto">
          Si resuenas con mi energía y mi forma de ver el mundo, me encantaría acompañarte en tu proceso.
        </p>
        <Link href="/#reservar"> {/* Enlace al componente Booking del Home */}
          <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300">
            Agenda tu Sesión Ahora
          </button>
        </Link>
      </section>

      <Footer />
    </main>
  );
}