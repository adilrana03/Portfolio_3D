/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08090c",
        paper: "#f3f0e8",
        mute: "#9c988f",
        lime: "#c6f54e",
        panel: "#12141a",
      },
      fontFamily: {
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 40px 80px -48px rgba(198, 245, 78, 0.55)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
