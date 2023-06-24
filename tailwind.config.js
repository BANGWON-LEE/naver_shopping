/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { max: '639px' }, // 모바일 화면
      base: '1280px',
    },
  },
  plugins: [],
};
