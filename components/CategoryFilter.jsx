"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShopGrid from '@/components/ShopGrid';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function CategoryFilter({ products, categories }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const allCategories = [{ id: 'todos', label: 'Todos' }, ...categories];

  const filtered = activeCategory === 'todos'
    ? products
    : products.filter((p) =>
        p.categoryIds?.includes(activeCategory) || p.category === activeCategory
      );

  // Enriquecer productos con label de categoría para mostrar en las cards
  const enriched = filtered.map((p) => {
    const cat = categories.find((c) =>
      p.categoryIds?.includes(c.id) || p.category === c.id || p.category === c.handle
    );
    return { ...p, categoryLabel: cat?.label || '' };
  });

  return (
    <>
      {/* Filtros de categoría */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {allCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-slate-900 text-white'
                : 'border border-slate-300 text-slate-600 hover:border-amber-600 hover:text-amber-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Grid de productos */}
      <ShopGrid
        key={activeCategory}
        products={enriched}
        columns={4}
        showCategory
      />
    </>
  );
}
