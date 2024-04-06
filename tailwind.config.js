/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',
            './src/**/*.{html,js}'],
  theme: {
    extend: {
      height: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

