/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      blue: "#3b82f6",
      darkblue: "#1d4ed8",
      slate: {
        300: "#d1d5db",
        100: "#f1f5f9",
        50: "#f8fafc",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      fontFamily: {
        display: "Google Sans",
        display1: "Roboto",
        display2: "Arial",
        display3: "sans-serif",
      },
      boxShadow: {
        "custom-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
