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
  plugins: [],
};
