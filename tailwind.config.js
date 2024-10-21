/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpurple: "#F5EFFF",
        peach: "#fce8e8",
        cream: "#fcf4eb",
        green: "#D8EFD3",
        lightweight: "#EDDFE0",
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require('daisyui')],
};
