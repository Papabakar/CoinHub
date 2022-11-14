/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors:{
        "primaryBg": "#0A0B16",
        "listBg": "#353447",
        "up": "#22C36B",
        "down": "#FF7A00"
      }
    },
  },
  plugins: [],
}
