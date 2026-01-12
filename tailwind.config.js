/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPink: "#ff3ea5",
        brandBlack: "#0b0b0f",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};