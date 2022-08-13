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
        '13'  : '3.25rem',    // 52px
        '15'  : '3.75rem',    // 60px
        '18'  : '4.5rem',     // 72px
        '22'  : '5.5rem',     // 88px
        '25'  : '6.25rem',    // 100px
        '26'  : '6.5rem',     // 104px
        '30'  : '7.5rem',     // 120px
      }
    },
  },
  plugins: [],
}
