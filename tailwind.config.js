/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0761E2',
        'secundary-blue': '#06B8EF',
        'dark': '#232323',
        'dark-text': '#909090',
        'white-icon': '#F5F5F5',
        'social-icon-border': '#151515',
        'toolzz-svg': '#0761E2',
        'toolzz-svg-blue': '#0E0E0E'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

