/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],

        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit,minmax(200px,1fr))'
      },
      spacing: {
        'section-height' : '500px'
      },
      
    },
  },
  plugins: [],
 
}
