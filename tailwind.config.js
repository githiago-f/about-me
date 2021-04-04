const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        javascript: colors.yellow[400],
        java: colors.yellow[500],
        scala: colors.red[400],
        typescript: colors.blue[500],
        nolang: colors.gray[400]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
