/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        lg: ["48px"],
      },
      screens: {
        'vsm': '300px' },
      fontFamily: {
        // Raleway: ['Raleway', 'sans-serif'],
        // raleway: ['Raleway'],
        // 'Raleway': ["Raleway", 'sans-serif'],
        // 'jakrata': ['Plus Jakarta Sans'],
        // 'open': ["Open Sans, sans-serif"],
      },
      fontWeight: {
        semibold: "600",
      },
      colors: {
        "default-blue": "#114B9F",
        "light-blue": "#E9F2FF",
        "blue": "#0062D7",
        "project-blue": "#114B9F",
      },
      spacing: {
        12: "10px",
        22: "20px",
      },
    },
  },
  plugins: [
    // function({ addUtilities }) {
    //   addUtilities({
    //     '.heading': {
    //       '@apply font-semibold leading-[57.6px] ': {},
    //     },
    //   }, ['responsive', 'hover']);
    // },
  ],
};
