/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script.js',
    './sw.js'
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

