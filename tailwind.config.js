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
        'brand-blue-2': '#31669B',
        'brand-blue-3': '#264F79 ',
        'brand-white-1': '#F1F6F8',
        'brand-accent-1': '#FF582B',
        'brand-silver-1': '#DCDDDE',
        'brand-platinum-1': '#E9EAEA',

      },
      boxShadow: {
        blue: '0 0 3px 3px #4285f4',
      },
      screens: {
        'custom-lg': '1200px', // Add a custom breakpoint
      },
    },
  },
  plugins: [],
}
