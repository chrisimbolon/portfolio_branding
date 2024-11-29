/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-blue-1': '#9ACEEB',
        'brand-blue-2': '#BAE6FA',
        'brand-blue-3': '#264F79 ',
      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
      },
    },
  },
  plugins: [],
}
