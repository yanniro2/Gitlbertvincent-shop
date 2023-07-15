/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#141414",
        orange: "#ff6b01",
        white: "#ffffff",
        gray: "#5e5e5e",
        "milk-white": "#f0f0f0", // Replace '#FF0000' with your desired color hex value
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        s: 100,
        m: 300,
        mt: 400,
        md: 500,
        b: 700,
      },
    },
  },
  plugins: [],
};
