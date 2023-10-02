/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/assets/*",
    "./src/pages/routers/**/**/*",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("preline/plugin"),
  ],
};

// ℸ ̣ ⍑╎ᓭ code ╎ᓭ absolute ᓭ⍑╎ℸ ̣ ! i ∴ᔑリリᔑ kms
