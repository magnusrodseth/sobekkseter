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
        grass: {
          50: "#ebf9eb",
          100: "#dff3df",
          200: "#ceebcf",
          300: "#b7dfba",
          400: "#97cf9c",
          500: "#65ba75",
          600: "#46a758",
          700: "#3d9a50",
          800: "#297c3b",
          900: "#1b311e",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
