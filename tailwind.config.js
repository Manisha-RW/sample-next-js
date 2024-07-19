/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        lg: ["48px"],
      },
      screens: {
        'vsm': '300px' },
<<<<<<< HEAD
=======
      fontFamily: {
        // Raleway: ['Raleway', 'sans-serif'],
        // raleway: ['Raleway'],
        // 'Raleway': ["Raleway", 'sans-serif'],
        // 'jakrata': ['Plus Jakarta Sans'],
        // 'open': ["Open Sans, sans-serif"],
      },
>>>>>>> 38647a988eccfd6c887cebf32713f0cf3770b6d8
      fontWeight: {
        semibold: "600",
      },
      boxShadow: {
        'kg': 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
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
