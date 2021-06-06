const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.{html,js}', 'src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      borderColor: {
        DEFAULT: 'white',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
