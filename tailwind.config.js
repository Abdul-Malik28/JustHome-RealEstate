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
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: () => ({
        city: "url(../Images/nav-background.jpg)",
        box1: "url(../Images/box-1-image.jpg)",
        box2: "url(../Images/box-2-image.jpg)",
        box3: "url(../Images/box-3-image.jpg)",
        box4: "url(../Images/box-4-image.jpg)",
        box5: "url(../Images/box-5-image.jpg)",
        box6: "url(../Images/box-6-image.jpg)",
      }),
    },
  },
  plugins: [],
}

