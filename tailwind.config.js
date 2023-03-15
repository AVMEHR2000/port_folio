/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#FFFF17",
        lightText: "#3E067A",
        boxBg: "linear-gradient(90deg, rgba(255,253,255,1) 18%, rgba(254,255,100,1) 100%)",
        designColor: "#E7534A",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #CFDFFE, -10px -10px 19px #67ff64",
      },
    },
  },
  plugins: [],
};
