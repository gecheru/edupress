/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      exo: 'Exo, sans-serif',
      jost: 'Jost, sans-serif',
      sans: ['Jost', 'sans-serif'],
    },
    container: {
      padding: '15px',
      center: true,
      screens: {
        xl: '1290px',
      },
    },
    colors: {
      primary: {
        DEFAULT: '#FF782D',
        hover: '#FFAB2D',
        pressed: '#F8620E',
      },
      gray: {
        DEFAULT: '#9D9D9D',
        dark: '#555555',
        light: '#EAEAEA',
        white: '#F5F5F5',
      },
    },
    extend: {},
  },
  plugins: [],
};
