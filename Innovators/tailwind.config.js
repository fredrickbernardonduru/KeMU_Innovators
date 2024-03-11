/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      fontFamily: {
        Poppins: "Poppins"
      },
      extend: {
        colors: {
          Teal: "#2F6C6D",
          HummingBird:"#D1F1EE",
          yellow:"#e4d63b",
          Solitude:"#e9e9ea",
          gray:"#4B4B4C"
        },
        animation: {
          slide: "slide 25s linear infinite"
        },
        keyframes: {
          slide: {
            "0%, 100%" : {transform: "translateX(5%)"},
            "50%" : {transform: "translateX(-125%)"}
          }
        }
      },
      screens: {
        xs: "480px",
        sm: "768",
        md: "1060px"
      },
    },
  
  plugins: [],
}