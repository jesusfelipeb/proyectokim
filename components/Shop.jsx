import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts, formatPrice } from '@/lib/tiendanube';
import ShopGrid from '@/components/ShopGrid';

export default async function Shop() {
  const products = await getFeaturedProducts();

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 md:py-32 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] border border-amber-600 rounded-full"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] border border-amber-600 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-amber-600"></div>
            <span className="uppercase tracking-[0.25em] text-amber-700 text-xs font-medium">
              Productos Exclusivos
            </span>
            <div className="w-12 h-[1px] bg-amber-600"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
            Herramientas para tu <span className="italic text-amber-800">transformación</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Elementos cuidadosamente seleccionados para acompañar tu práctica espiritual y potenciar tu energía.
          </p>
        </div>

        {/* Products Grid (client component para animaciones) */}
        <ShopGrid products={products} />

        {/* CTA */}
        <div className="text-center">
          <Link href="/tienda">
            <button className="group relative overflow-hidden bg-obsidian text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500">
              <span className="relative z-10">Ver Tienda Completa</span>
              <div className="absolute inset-0 bg-amber-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
