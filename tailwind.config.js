/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors:{
        "card-bg": "#181B23",
        "primaryBg": "#0A0B16",
        "orangeBg": "hsl(38, 94%, 15%)",
        "listBg": "#353447",
        "up": "#22C36B",
        "down": "#FF7A00",
        "primaryTxt": "#FFFFFF",
        "secondaryTxt": "#84858A",
        "lightBorder": "#5e5e5e",
      }
    },
  },
  plugins: [],
}
