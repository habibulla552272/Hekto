/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "10px",
    },
    extend: {
      fontFamily: {
        lato: ["Lato"],
        josefin: ["Josefin Sans"],
      },
      backgroundColor: {
        "hero-bg": "rgba(242,240,255,1)",
        "herotow-bg": "rgba(245,245,255,1)",
        "heder-bg": "rgba(126,51,224,1)",

        "buttom-bg": "rgba(251,46,134,1)",
        "footer-bg": "rgba(238,239,251,1)",
        "top_Categories-bg": "rgba(255, 246, 251, 1)",
        "top_categories-bg": "rgba(238, 239, 251, 1)",
        engFooter: "rgba(231,228,248,1)",
      },
      colors: {
        search: "rbga(251,46,134,1)",
      },
    },
  },
  plugins: [],
};
