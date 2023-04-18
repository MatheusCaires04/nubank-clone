/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "rgb(130, 10, 209)",
        textNAv: "rgb(17, 17, 17)",
        bgSection: "rgb(245, 245, 245)",
        bgBtnDisable: "rgba(17, 17, 17, 0.1)",
        textBtnDisable: "rgba(17, 17, 17, 0.2)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bgWrapper: "url('/assets/wrapperHome.webp')",
        bgSectionMobile1: "url('/assets/image6-mobile.webp')",
        bgSectionMobile2: "url('/assets/image5-mobile.webp')",
        bgSectionMobile3: "url('/assets/image7-mobile.webp')",
        bgSectionDesktop1: "url('/assets/image6-desktop.webp')",
        bgSectionDesktop2: "url('/assets/image5-desktop.webp')",
        bgSectionDesktop3: "url('/assets/image7-desktop.webp')",
        "gradient-radial": "radial-gradient(rgb(130, 10, 209) 35%, black 50%)",
      },
    },
  },
  plugins: [],
};
