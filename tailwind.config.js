module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wedding: {
          'red': '#eacece',
          'green': '#d5eace',
          'blue': '#ced9ea',
          'yellow': '#eae7ce',
          'purple': '#d5ceea',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
