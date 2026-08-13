/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        // Premium warm palette
        ivory: '#FAF8F3',
        cream: '#F3EEE4',
        champagne: '#E7D7B8',
        gold: {
          50: '#FAF7F2',
          100: '#F5EFE5',
          200: '#EFE5D4',
          300: '#E7D7B8',
          400: '#D4C5A0',
          500: '#B88A44',
          600: '#9A6A32',
          700: '#8A5A28',
          800: '#6B4620',
          900: '#4A2E14',
        },
        bronze: {
          50: '#FDF8F4',
          100: '#F9EFE8',
          200: '#F3DFD0',
          300: '#E7D7B8',
          400: '#D4B896',
          500: '#B88A44',
          600: '#9A6A32',
          700: '#8A5A28',
          800: '#6B4620',
          900: '#4A2E14',
        },
        warm: {
          50: '#FAF8F3',
          100: '#F5F1E8',
          200: '#F0E8DD',
          300: '#E7DFD0',
          400: '#D9CDB8',
          500: '#CCBAA0',
          600: '#8A8175',
          700: '#6B6560',
          800: '#423D38',
          900: '#292621',
        },
        charcoal: '#292621',
        espresso: '#342A20',
        taupe: '#8A8175',
      },
      backgroundColor: {
        DEFAULT: '#FAF8F3',
      },
      textColor: {
        DEFAULT: '#292621',
      },
    },
  },
  plugins: [],
}
