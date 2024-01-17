/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'nav_link_color': '#3A3740',
        'border_color':'#217EEC',
        'FAQ_color':'#28262C'
      },
    },
  },
  plugins: [],
}

