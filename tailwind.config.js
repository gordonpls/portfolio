/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require("tailwindcss-animate"),
    require('@tailwindcss/aspect-ratio')
  ],
  daisyui: {
    themes: ['corporate', "black"]
  },
}

