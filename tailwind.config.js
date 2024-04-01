/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/App.vue", "./src/{views,components}/*.vue"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    prefix: false,
    logs: false,
  },
}
