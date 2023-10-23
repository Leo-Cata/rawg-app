/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-background": "#070708",
        "custom-cards": "#252725",
      },
    },
  },
  plugins: [],
};
