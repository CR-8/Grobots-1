/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F9F7',
          100: '#B3ECE7',
          200: '#80E0D6',
          300: '#4DD3C6',
          400: '#26C7B6',
          500: '#40E0D0',  // Main primary color
          600: '#00A99D',
          700: '#008F86',
          800: '#00756F',
          900: '#005B58',
        },
        dark: {
          50: '#F2F7FA',
          100: '#E6EFF5',
          200: '#B3CDE0',
          300: '#80ABCC',
          400: '#4D89B7',
          500: '#1A67A3',
          600: '#00456E',
          700: '#003454',
          800: '#00233A',
          900: '#001220',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}