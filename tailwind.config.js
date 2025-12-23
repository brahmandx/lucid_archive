/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      colors: {
        voidBlue: '#0B132B',
        starlight: '#F0F4F8',
        gold: '#C5A059',
        teal: '#5CDBD3',
      }
    },
  },
  plugins: [],
}