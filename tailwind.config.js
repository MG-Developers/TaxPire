// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tp-sky-blue": "#00abe4",
        "tp-blue": "#2373ff",
        "tp-navy-blue": "#1e375a",
        "tp-blue-2": "rgba(30, 55, 90, 0.7)",
        "tp-light-gray": "#F9FAFB",
        "tp-lg-2": "#ECEFF2",
        "tp-black": "#191F23",
        "tp-gray": "#51636F",
        "tp-yellow": "#E8F7EE",
        "tp-orange": "#F86F03",
        "tp-lg": "#E8F7EE",
        "tp-lb": "#DFF8FF",
        "tp-lo": "#FFEEDF",
        "tp-lp": "#E3E6FB",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
