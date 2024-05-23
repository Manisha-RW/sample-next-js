/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        lg: ["48px"],
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      fontWeight: {
        semibold: "600",
      },
      colors: {
        "default-blue": "#114B9F",
      },
      spacing: {
        12: "10px",
        22: "20px",
      },
    },
  },
  plugins: [],
};
