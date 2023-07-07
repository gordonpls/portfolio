/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require("tailwindcss-animate"),
    require('@tailwindcss/aspect-ratio')
  ],
  daisyui: {
    themes: ['corporate',  "black"]
  },
}

