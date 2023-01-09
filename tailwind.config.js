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
      },
      screens: {
        'xxs': '375px',
        // => @media (min-width: 375x) { ... }
  
        'xs':'425px',
        // => @media (min-width: 478px) { ... }
  
        'xsm':'575px',
        // => @media (min-width: 478px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'base': '968px',
        // => @media (min-width: 968px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1920px',
  
        'horizontal': '16/9',
  
      },
    },
  },
  plugins: [],
}
