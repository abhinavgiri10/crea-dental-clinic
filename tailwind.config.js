/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0E95B8',
        'primary-dark': '#0d7a95',
        'accent': '#FF8C42',
        'accent-dark': '#e67e3a',
        'light-bg': '#f8f9fa',
        'text-dark': '#2c3e50',
        'text-light': '#7f8c8d',
        'border-color': '#e0e0e0',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
