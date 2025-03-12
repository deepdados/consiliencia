/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar estilos personalizados ou temas de cores
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
