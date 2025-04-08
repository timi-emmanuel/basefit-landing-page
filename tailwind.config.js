/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Custom screen size for extra small devices
        '3xl': '1920px', // Custom screen size for very large screens
      },
      colors:{
        Lightgreen: '#BBD531'
      },
      fontFamily: {
        basefit: ['Basefit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

