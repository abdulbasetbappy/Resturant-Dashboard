/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body: ['Poppins', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
      mono: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}