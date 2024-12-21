/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #1e293b, #0f172a)",
      },
    },
  },
  plugins: [],
};
