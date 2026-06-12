/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ← نضيف دي لتفعيل الوضع الليلي
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
