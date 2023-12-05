/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      // Add any other font families you need here
    },
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#201E1E',
        'tertiary': '#D9D9D9',
        'blued': '#1D267D',
      }
    },
  },
  plugins: [],
});