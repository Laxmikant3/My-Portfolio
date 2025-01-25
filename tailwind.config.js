/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./app/**/*.{js,jsx,ts,tsx}",  // Include all JavaScript and TypeScript files in the `app` directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include files in the `components` directory if it exists
    "./pages/**/*.{js,jsx,ts,tsx}", // For projects using the `pages` directory
    "./public/**/*.html" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

