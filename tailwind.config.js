/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontSize:
      {
        geant : ["16rem",{LineHeight:"1"}],
      },
      colors:
      {
        primary:'#FF6363',
      },
      fontFamily: {
        madimi: ['Madimi One'],
        
      },
    },
  },
  plugins: [],
 
}

