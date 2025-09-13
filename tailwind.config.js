/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 1. Colors matching your design
      colors: {
        primary: '#F5F5F5',
      },

      // 2. Font family
      fontFamily: {
        literata: ['Literata', 'serif']
      },
    },
  },
  plugins: [],
}