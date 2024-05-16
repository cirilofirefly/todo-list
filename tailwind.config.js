/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#06413D',
        'primary-100': '#0E6660',
        'primary-200': '#188D85'
      }
    },
  },
  plugins: [],
}

