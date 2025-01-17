/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark_navy": "#1A2A33",
        "semi_navy": "#1F3641",
        "sliver": "#A8BFC9",
        "sliver_hover": "#DBE8ED",
        "light_blue": "#31C3BD",
        "light_blue_hover": "#65E9E4",
        "light_yellow": "#F2B137",
        "light_yellow_hover": "#FFC860"
      },
      screens: {
        "mb": { min: "0", max: "767px" }
      }
    },
  },
  plugins: [],
}

