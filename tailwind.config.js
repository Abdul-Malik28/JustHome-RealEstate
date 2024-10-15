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
        softButter: 'hsl(7, 100.0%, 98.4%)',
        softGray: 'hsl(0, 0.0%, 96.9%)',
        softBlack: 'hsl(0, 0%, 10%)',
        borderGreen: '#2f5850',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      height: {
        90: '22rem',
      },
      backgroundImage: () => ({
        city: "url(../Images/nav-background.jpg)",
      }),
    },
  },
  plugins: [],
}

