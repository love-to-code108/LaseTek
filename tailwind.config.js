/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{

      'xl':'1500px',
      '2xl':'1600px',
      '3xl':'1700px'
    },
    extend: {},
  },
  plugins: [],
}