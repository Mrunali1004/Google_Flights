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
      indigo: {
        700: "#4f46e5",
      },
      gray: {
        100: "#f7f7f7",
        300: "#d1d5db",
        700: "#4a5568",
        600: "#4b5563",
        500: "#6b7280",
      },
      bblue: {
        500: "#1e40af",
        600: "#1e40af",
        200: "#4fa3d1",
      },
      teal: {
        800: "#1c4e47",
        300: "#64D8A3",
        900: "#006d5b",
      },
      yellow: {
        200: "#fef08a",
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
      scale: {
        105: "1.05",
        110: "1.10",
      },
    },
  },
  plugins: [],
};
