/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        'xs': '475px',
       

        'sm': '576px',
       
  
        'md': '960px',
       
  
        'lg': '1440px',
       
      },


      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },

      fontFamily: {
        
      voga: ["Voga-medium", "sans-serif"],
      luxia: ["Luxia-Regular", "sans-serif"],
      oswald:["Oswald-Medium","sans-serif"]
      },

      colors: {
        "primary-orange": "#FF5722",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
    },
  },
  plugins: [],
};
