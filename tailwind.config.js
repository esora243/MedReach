/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1a346e',
        'secondary-blue': '#2c5282',
        'accent-teal': '#0d9488',
        'medium-gray': '#e0e7ff',
        'dark-gray-text': '#1f2937',
        'medium-gray-text': '#4b5563'
      },
      fontFamily: {
        'sans': ['Inter', 'Noto Sans JP', 'sans-serif']
      }
    }
  },
  plugins: []
}