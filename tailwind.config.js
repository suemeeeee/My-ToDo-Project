/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-red": "#FF0000",
        "main-color-pink": "#FFF5F5",
        "main-color-deepPink": "#FF9D9D",
      },
    },
  },
  plugins: [],
};
