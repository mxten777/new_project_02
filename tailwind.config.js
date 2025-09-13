/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index-modular.html',
    './script.js',
    './sw.js',
    './components/**/*.js',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        primary: '#ff6b6b',
        secondary: '#667eea',
        accent: '#ffd93d',
        background: '#f8f9fa',
      },
    },
  },
  plugins: [],
}

