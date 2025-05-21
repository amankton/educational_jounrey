/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        navy: '#003260',
        'navy-dark': '#0A2B4C',
        blue: '#0071bc',
        'blue-medium': '#005EA2',
        'gray-light': '#f0f0f0',
        'gray-medium': '#6c757d',
        'gray-dark': '#343a40',
        teal: '#00A69C',
        maroon: '#7A003C',
        yellow: '#F6C100',
        petrol: '#005F81',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
