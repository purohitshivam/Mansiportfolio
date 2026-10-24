/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F4EFE6',
          300: '#EAE2D2',
          400: '#D5C9B3',
        },
        ink: {
          900: '#151311',
          800: '#2A2622',
          700: '#3D3833',
          500: '#686057',
          400: '#8A8277',
        },
        studio: {
          yellow: '#FFDE38',
          yellowBorder: '#151311',
          tape: '#F2E8CF',
          terracotta: '#D96B43',
          forest: '#2C4A3E',
          crimson: '#9E1B26',
          sage: '#8A9B85',
          gold: '#C9A354',
          ochre: '#D8973C',
        }
      },
      fontFamily: {
        condensed: ['"Bebas Neue"', '"Barlow Condensed"', 'sans-serif'],
        handwriting: ['"Caveat"', '"Kalam"', 'cursive'],
        script: ['"Yellowtail"', '"Playfair Display"', 'cursive'],
        editorial: ['"Instrument Serif"', '"Source Serif 4"', 'serif'],
        sans: ['"Geist"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'paper-sm': '0 2px 5px rgba(25, 20, 15, 0.08), 0 1px 2px rgba(25, 20, 15, 0.04)',
        'paper': '0 10px 25px -5px rgba(25, 20, 15, 0.12), 0 8px 10px -6px rgba(25, 20, 15, 0.08)',
        'paper-lg': '0 20px 40px -10px rgba(25, 20, 15, 0.18), 0 12px 20px -8px rgba(25, 20, 15, 0.12)',
        'paper-hover': '0 30px 60px -12px rgba(25, 20, 15, 0.28), 0 18px 26px -8px rgba(25, 20, 15, 0.18)',
      }
    },
  },
  plugins: [],
}
