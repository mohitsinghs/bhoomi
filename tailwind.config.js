const typography = require('@tailwindcss/typography')
const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,md}', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [typography, aspectRatio],
}
