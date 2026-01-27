/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0099ff',
        dark: '#191919',
        'dark-light': '#5a5a5a',
        secondary: '#999999',
        'green-accent': 'rgb(23, 141, 0)',
      },
      fontFamily: {
        sans: ['Switzer', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'custom': '14px',
      },
      maxWidth: {
        'hero': '510px',
      },
    },
  },
  plugins: [],
}
