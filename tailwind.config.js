/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#B51533',
        secondary: '#666666',
        bgHover: '#eee',
        txtHover: 'rgb(181 21 51 / 23%)',
        darkPrimary: '#111',
        darkSecondary: '#2D9CDB',
        darkBgHover: '#2B2A2A',
        darkTxtHover: 'rgb(45 156 219 / 32%)' 
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
