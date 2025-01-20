/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
      customDark: 'rgb(15, 23, 42)', // Using RGB
      customBlue: '#0F172A',         // Using HEX
    },

    backgroundImage: {
      '3-color-gradient': 'linear-gradient(to right, #c3c8ff, #f8c2d7, #fef3d6)', // Light Indigo → Pink → Beige
    },
  },
  },
  plugins: [],
}

