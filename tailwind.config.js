/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 0.75s infinite 0.2s',
        bounce400: 'bounce 0.75s infinite 0.4s',
      },
    },
  },
};


