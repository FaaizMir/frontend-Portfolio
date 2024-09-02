/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3182CE',
        secondary: '#F59E0B',
        accent: '#F7FAFC',
      },
    },
  },
  plugins: [],
}