/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#181818',
        accent: '#ecc94b',
        text: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}