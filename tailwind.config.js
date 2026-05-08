/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        racing: {
          red: '#ff1e1e',
          blue: '#00a8ff',
          gold: '#ffb400',
          black: '#05070d',
          navy: '#091120',
          ice: '#f5f7fa',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        rajdhani: ['Rajdhani', 'Arial Narrow', 'sans-serif'],
        orbitron: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        redGlow: '0 0 18px rgba(255, 30, 30, .65), 0 0 48px rgba(255, 30, 30, .28)',
        blueGlow: '0 0 18px rgba(0, 168, 255, .42), 0 0 44px rgba(0, 168, 255, .18)',
        goldGlow: '0 0 24px rgba(255, 180, 0, .62), 0 0 70px rgba(255, 180, 0, .22)',
      },
    },
  },
  plugins: [],
};
