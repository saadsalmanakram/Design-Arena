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
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite",
      },
      backdropBlur: {
        '10': '10px',  
      },
    },
  },
  plugins: [],
};
