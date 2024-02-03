/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Yekan"],
    },
    spacing: {
      0:"0px",
      1: "1px",
      2: "2px",
      3:"0.75rem",
      4: "1rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      30:"7.5rem",
      36: "9rem",
      38: "9.5rem",
      40: "10rem",
      60: "15rem",
      80 : "20rem",
      120:"30rem",
      },
      boxShadow:{
        "right": "50px 50px 40px -15px rgba(0,0,0,0.3) " ,
      },
    extend: {
    },
  },
  plugins: [],
};
