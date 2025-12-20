/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A5759',    // Verde Bosque
        secondary: '#DAA813',  // Amarillo Suave
        neutral: '#DCCCA3',    // Marrón Tierra
        dark: '#2A2F32',       // Marrón Oscuro
        accent: '#C8D7C8',     // Acento Verde Claro
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'], // O 'Inter', 'sans-serif'
      }
    },
  },
  plugins: [],
}