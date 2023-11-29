/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-primary": "#512B81",
        "custom-secondary": "#7d2b81",
        "custom-hover": "#512b814d",
      },
      fontFamily: {
        hyperlegible: ['"Atkinson Hyperlegible"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
