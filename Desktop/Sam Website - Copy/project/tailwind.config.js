/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        red: {
          DEFAULT: '#FF0000',
          600: '#FF0000',  // Primary red
          700: '#CC0000',
          800: '#8B0000',  // Dark red
        },
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#808080',  // Medium gray
          800: '#323232',
          900: '#121212',  // Dark gray/almost black
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};