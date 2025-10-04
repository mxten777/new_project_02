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
        sans: [
          'Inter',
          'Pretendard',
          'Rubik',
          'Noto Sans KR',
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          'sans-serif',
        ],
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

