/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#077df1',
        primaryLight: '#409fff',
        btnRose: '#ff6e6e',
        btnRoseLight: '#ffa9a9',
        btnOrange: '#ff9d00',
        btnOrangeLight: '#ffc13c',
      },
      fontFamily: {
        heading: ['Passion One', 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
