/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#6D9773",
        secondary: "#0C3B2E",
        text: "#484848"
      },
      fontFamily:{
        InterRegular:["Inter-Regular", "san-serif"],
      }
    },
  },
  plugins: [],
}

