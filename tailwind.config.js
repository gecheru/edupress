/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '900px',
      xl: '1200px',
    },
    fontFamily: {
      exo: 'Exo, sans-serif',
      jost: 'Jost, sans-serif',
      sans: ['Jost', 'sans-serif'],
    },
    container: {
      padding: '16px',
      center: true,
      screens: {
        xl: '1322px',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
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
    extend: {
      gridTemplateRows: {
        page: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        footer:
          'minmax(auto, var(--card-width)) minmax(190px, 1fr) minmax(190px, 1fr) minmax(auto, var(--card-width))',
      },
    },
  },
  plugins: [],
};
