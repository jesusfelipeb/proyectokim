import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategoryFilter from '@/components/CategoryFilter';
import { getProducts, getCategories } from '@/lib/tiendanube';

export default async function TiendaPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <main className="pt-16">
      <Header />

      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-amber-600"></div>
              <span className="uppercase tracking-[0.25em] text-amber-700 text-xs font-medium">
                Tienda
              </span>
              <div className="w-12 h-[1px] bg-amber-600"></div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
              Herramientas para tu <span className="italic text-amber-800">práctica sagrada</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Cada producto ha sido cuidadosamente seleccionado para acompañar tu proceso de transformación personal.
            </p>
          </div>

          {/* Filtros + Grid (client component) */}
          <CategoryFilter products={products} categories={categories} />

          {/* Trust Badges */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 p-8 md:p-12 border border-slate-200">
              <h3 className="font-serif text-2xl text-center text-slate-900 mb-8 italic">
                Compra segura y confiable
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-slate-900 mb-1">Pago Seguro</h4>
                  <p className="text-xs text-slate-500">MercadoPago y tarjetas</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-slate-900 mb-1">Envío a Todo el País</h4>
                  <p className="text-xs text-slate-500">Embalaje cuidado y seguro</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-slate-900 mb-1">Soporte Directo</h4>
                  <p className="text-xs text-slate-500">Consultas por WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
