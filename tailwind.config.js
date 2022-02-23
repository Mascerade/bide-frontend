// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,ts,vue}'],
  content: ['./src/**/*.{vue, ts}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        poppins: ['Poppins'],
        quicksand: ['Quicksand']
      }
    },
    colors: {
      'bg-primary': colors.white,
      'text-primary': colors.gray,

      'bg-primary-cp': colors.gray,
      'text-primary-cp': colors.white,

      'bg-secondary': colors.green,
      'text-secondary': colors.green,

      'bg-tertiary': colors.teal,
      'text-tertiary': colors.teal,

      'text-error': colors.red
    }
  }
}
