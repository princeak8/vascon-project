/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#49B142',
        'green2': '#C4FFC0',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray2': '#9D9D9D',
        'gray3': '#21252B',
        'form-bg' : '#F5F5F5',
        'form-placeholder' : '#CFCFCF',
        'body' : '#F1F1F1',
        'gray-light': '#d3dce6',
      }
    },
  },
  plugins: [],
}
