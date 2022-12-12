/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 5s infinite",
        drop: "drop 4s 1s both",
        drop2: "drop2 4s 0s both"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.0)",
          },
          "66%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          }
        },
        drop: {
          "from": {
            transform: 'translateX(100px)',
            opacity: 0
          },
          "to": {
            transform: 'translateX(0px)',
            opacity: 1
          }    
         },
         drop2: {
          "from": {
            transform: 'translateX(-100px)',
            opacity: 0
          },
          "to": {
            transform: 'translateX(0px)',
            opacity: 1
          }    
         }   
      },
      fontFamily: {
        sf: 'San Francisco',
        sfr: 'SF Compact Rounded'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0, 0, 0, 0)',
         'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [
    require('tailwindcss-easing'),
  ],
}