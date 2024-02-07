/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heropattern': "url('assets/images/webp/herobg.png')",
        'joinbtn': "url('assets/images/png/joinbtnbg.png')",
      },
      backgroundSize: {
        'full': '100% 100%',
      },
    },
  },
  plugins: [],
}

