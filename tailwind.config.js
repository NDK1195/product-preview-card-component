/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      },
      backgroundImage: {
        desktop: 'url("../images/image-product-desktop.jpg")',
        mobile: 'url("../images/image-product-mobile.jpg")',
      },
    },
  },
  plugins: [],
};
