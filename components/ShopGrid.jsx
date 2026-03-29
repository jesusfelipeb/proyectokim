"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/tiendanube';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function ProductCard({ product, showCategory }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-white border border-slate-200 hover:border-amber-600/30 hover:shadow-xl transition-all duration-500"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-amber-700 text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1 font-medium">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square bg-slate-100 overflow-hidden">
        {product.image && product.image !== '#' ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-slate-300">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Imagen del producto</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {showCategory && product.categoryLabel && (
          <div className="mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-medium">
              {product.categoryLabel}
            </span>
          </div>
        )}

        <h3 className="font-serif text-lg text-slate-900 mb-2 group-hover:text-amber-800 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 font-light leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            {product.promoPrice ? (
              <>
                <span className="font-serif text-sm text-slate-400 line-through mr-2">
                  {formatPrice(product.price)}
                </span>
                <span className="font-serif text-2xl text-amber-800">
                  {formatPrice(product.promoPrice)}
                </span>
              </>
            ) : (
              <span className="font-serif text-2xl text-slate-900">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <a
            href={product.tiendanubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white text-[10px] uppercase tracking-[0.15em] font-medium px-5 py-2.5 hover:bg-amber-700 transition-colors duration-300"
          >
            Comprar
          </a>
        </div>
      </div>

      {/* Hover decorativo */}
      <div className="absolute -inset-0.5 border border-amber-600/0 group-hover:border-amber-600/20 transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
}

export default function ShopGrid({ products, columns = 4, showCategory = false }) {
  const gridCols = {
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <motion.div
      className={`grid ${gridCols[columns] || gridCols[4]} gap-8 mb-16 max-w-7xl mx-auto`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showCategory={showCategory} />
      ))}
    </motion.div>
  );
}
