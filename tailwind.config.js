/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add Tailwind UI components
    "./node_modules/@tailwindcss/ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

