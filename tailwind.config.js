/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171723",
        background: "#013A4C",
        highlights: "#007A6C",
        dark: "#02FFA0",
        border: "white"
      }
    },
  },
  plugins: [],
};
