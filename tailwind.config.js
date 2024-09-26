/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-transparent": "#343a4089",
        "dark-blue": "#343a40",
        "blue-background": "#455165",
        "copper": "#E8A382",
        "custom-gradient":
          "linear-gradient(90deg, #E8A382 0%, #FEE2D6 52%, #E8A382 100%)",
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(90deg, #E8A382 0%, #FEE2D6 52%, #E8A382 100%)",
      },
    },
  },
  plugins: [],
});

