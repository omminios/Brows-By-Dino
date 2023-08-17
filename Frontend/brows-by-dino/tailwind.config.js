/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'alex-brush': ['Alex Brush', 'cursive'],
        'grenze': ['Grenze', 'sans-serif']
      },
    
    },
  },
  plugins: [],
}



