module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './projects/**/*.{html,ts}'
  ],
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
