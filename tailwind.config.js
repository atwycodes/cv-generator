/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "1/1.414": "1 / 1.414",
      },
      height: {
        "29.7cm": "29.7cm",
      },
      width: {
        "21cm": "21cm",
      },
    },
  },
  plugins: [],
};
