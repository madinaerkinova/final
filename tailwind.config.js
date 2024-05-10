/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f1d2b",
        secondary: " #252836",
        "total-eclipse": "#2d303e",
        "mountain-fig": " #393c49",
        lava: " #ea7c69",
        white: "#ffffff",
        "city-lights": "#e0e6e9",
        "hazy-skies": " #abbbc2",
      },
      container: {
        center: true,
        screens: {
          lg: "100%",
        },
      },
      boxShadow: {
        shadowBtn: "0px 8px 24px 0px rgba(234, 124, 105, 0.3)",
      },
    },
  },
  plugins: [],
};
