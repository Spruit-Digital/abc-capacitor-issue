/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "abc-green": "#4bd434",
        "abc-blue": "#30B2FE",
        "abc-grey": "#B5C4C6",
      },
      fontFamily: {
        suisse: ["SuisseIntl"], // The custom font family
      },
      fontWeight: {
        thin: 100,
        light: 200,
        book: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 900,
      },
    },
  },
  plugins: [],
};
