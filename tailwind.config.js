/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'page-height': '296.85mm', // 1121.57px
        'page-width': '210mm', // 793.7px
      }
    },
  },
  plugins: [],
}
