/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        codec: ["CODEC", "Helvetica Neue"],
        roobert: ["ROOBERT", "Helvetica Neue"]
      },
    },
  },
  plugins: [],
};
