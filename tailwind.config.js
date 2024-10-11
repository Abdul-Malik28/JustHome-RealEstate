/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        softYellow: 'hsl(44, 70.7%, 67.8%)',
        softGreen: 'hsl(167, 40%, 21%)',
        softButter: 'hsl(13, 100.0%, 698.2%)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: () => ({
        city: "url(../Images/nav-background.jpg)",
      }),
    },
  },
  plugins: [],
}

