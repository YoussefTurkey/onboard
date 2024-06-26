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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        bgHover: 'var(--bgHover)',
        txtHover: 'rgb(var(--txtHover))',
        txtColor: 'var(--text-color)',
        bgColor: 'var(--bg-color)'
      },
      width:{
        1130: '1130px',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
