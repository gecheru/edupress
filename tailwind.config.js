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
    extend: {},
  },
  plugins: [],
};
