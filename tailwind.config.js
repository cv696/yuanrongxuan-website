/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zen: {
          bg: '#1a1a1a',
          gold: '#d4af37',
        },
      },
      fontFamily: {
        display: ['"Noto Serif SC"', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
      boxShadow: {
        'zen-card': '0 18px 45px rgba(0,0,0,0.65)',
      },
    },
  },
  plugins: [],
}

