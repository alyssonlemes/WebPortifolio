/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: [
    "./src/index.html",
    "./src/app/**/*.component.html",
    "./src/app/**/*.component.ts",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        mainPurple: "#682BD7",
        secondaryPurple: "#8d54f7",
        dark: "#181a1b",
        cards: "#2d3133",
        // cards: "#292c2e",
        "light-cards": "#bcbcbc",
      },
      screens: {
        desktop: "1280px",
        phoneL: "550px",
        phone: "375px",
        phoneXS: "200px",
        tablet: "970px",
      },
      width: {
        124: "31rem",
        152: "38rem",
        140: "35rem",
      },
      height: {
        124: "31rem",
        152: "38rem",
        140: "35rem",
      },
    },
    fontSize: {
      xxxxs: "11px",
      xxxs: "12px",
      xxs: "13px",
      xs: "1.25rem",
      s: "18px",
      h1: "28px",
      h2: "24px",
    },
  },
  plugins: [],
};
