/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "400px",
        "xs-lg": {min: "300px", max: "650px"},
      }
    },
  },
  plugins: [],
}

