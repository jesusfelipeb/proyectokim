/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores para público de élite
        'obsidian': '#1A1A1A',   // Negro profundo para textos y elegancia
        'gold-heritage': '#9F8052', // Dorado apagado, sofisticado
        'linen': '#F4F1EA',      // Fondo cálido, no cansa la vista
        'slate-soft': '#4A4A4A', // Textos secundarios
      },
      fontFamily: {
        // Necesitaremos importar Cormorant Garamond en el Layout
        serif: ['var(--font-cormorant)', 'serif'], 
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};