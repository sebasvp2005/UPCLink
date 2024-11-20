/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#d50000",
        primary : "#ffffff",
      }
    },
  },
  plugins: [],
}

