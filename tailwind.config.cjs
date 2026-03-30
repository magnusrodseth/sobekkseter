/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        fjord: {
          50: "#eef5f9",
          100: "#d6e6f0",
          200: "#aecde1",
          300: "#7dafc9",
          400: "#5793b0",
          500: "#3b6b8a",
          600: "#305873",
          700: "#27475c",
          800: "#1f3849",
          900: "#162a38",
        },
        pine: {
          50: "#edf6f2",
          100: "#d3eadf",
          200: "#a8d5c0",
          300: "#7cbb9e",
          400: "#539e7c",
          500: "#2d5f4a",
          600: "#264f3e",
          700: "#1f4033",
          800: "#183228",
          900: "#11241d",
        },
        amber: {
          50: "#fdf6ec",
          100: "#faebd0",
          200: "#f3d5a1",
          300: "#ebbc6f",
          400: "#e0a349",
          500: "#d4a053",
          600: "#b88437",
          700: "#96692c",
          800: "#745022",
          900: "#553b19",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
