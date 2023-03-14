/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      //theme 1 colors
      main_red: '#b20c06',
      main_white: '#FDFFFF',
      main_black: '#101010',
      main_gray: '#738589',

      //theme 2 colors
    },
    extend: {},
  },
  plugins: [],
}
