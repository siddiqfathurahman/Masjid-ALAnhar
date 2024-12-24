/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      dropDown: 'dropDown 1s ease-out',
      fadeOut: 'fadeOut 1s ease-in 4s forwards', 
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        amiri: ['amiri', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      colors: {
        hijau: "#06623B", 
        lemon: "#F6F578",
        },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

    },
  },
  plugins: [],
};
