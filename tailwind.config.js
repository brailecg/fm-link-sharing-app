/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "main-sans": ["var(--font-instrument-sans)"],
      },
      colors: {
        "main-purple": "#633CFF",
        "main-purple-hover": "#BEADFF",
        "main-purple-light": "#EFEBFF",
        "main-grey-dark": "#333333",
        "main-grey": "#737373",
        "main-grey-border": "#D9D9D9",
        "main-grey-light": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
