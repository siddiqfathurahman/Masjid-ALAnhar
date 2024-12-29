/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        amiri: ["Amiri", "serif"],
      },
      colors: {
        hijau: "#06623B", 
        lemon: "#F6F578", 
      },
      animation: {
        dropDown: "dropDown 1s ease-out",
        fadeOut: "fadeOut 1s ease-in 4s forwards",
        marquee: "marquee 20s linear infinite",
        bounceDots: "bounceDots 0.4s infinite", 
      },
      keyframes: {
        dropDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        bounceDots: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }, 
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
  ],
};
