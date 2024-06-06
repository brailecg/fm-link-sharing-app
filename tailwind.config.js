/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        input: "0 0 2px #633CFF",
      },
      fontSize: {
        "base-s": [
          "0.75rem",
          {
            lineHeight: "150%",
            letterSpacing: "0",
            leading: "0",
          },
        ],
      },
      fontFamily: {
        "main-sans": ["var(--font-instrument-sans)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
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
