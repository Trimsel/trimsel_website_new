/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2px, -1px)' },
          '20%': { transform: 'translate(2px, 1px)' },
          '30%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '50%': { transform: 'translate(-1px, 2px)' },
          '60%': { transform: 'translate(1px, -2px)' },
        },
        slowspin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        spinReverse: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        shake: 'shake 2s ease-in-out infinite',
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spinReverse 25s linear infinite",
      },
    },
  },
  plugins: [],
}