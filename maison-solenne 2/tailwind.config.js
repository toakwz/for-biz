/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(30, 6%, 8%)",
        foreground: "hsl(38, 30%, 90%)",
        primary: "hsl(38, 42%, 66%)",
        "primary-foreground": "hsl(30, 6%, 8%)",
        muted: "hsl(34, 10%, 58%)",
        line: "hsl(36, 12%, 20%)",
        light: "hsl(38, 32%, 94%)",
      },
      fontFamily: {
        display: ["Italiana", "serif"],
        serif: ["Cormorant", "serif"],
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
