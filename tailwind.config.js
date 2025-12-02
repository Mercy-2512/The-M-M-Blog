/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ["DMSans", "sans-serif"],
        cagody: ["Cagody", "sans-serif"],
        gravinced:["Gravinced","sans-serif"],
        montilla: ["Montilla","sans-serif"],
        gilda:["GildaDisplay-Regular","sans-serif"]
        // Add more custom font families as needed
      }
    },
  },
  plugins: [],
}