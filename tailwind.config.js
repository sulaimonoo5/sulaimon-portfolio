/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './pages/*.html'],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        fontDotGohtic: ['DotGothic16', 'sans-serif'],
        Manrope:['DotGohtic16', 'Manrope']
      },
      animation: {
        'blink': 'blink 800ms ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


