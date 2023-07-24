/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login-image': "url('https://i.ibb.co/c8SKJZV/Education.jpg')",
      })
    },
  },
  plugins: [require("daisyui")],
}

