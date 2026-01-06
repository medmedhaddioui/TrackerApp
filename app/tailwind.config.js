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
          50: '#e6f7f5',
          100: '#b3e8e1',
          200: '#80d9cd',
          300: '#4dcab9',
          400: '#1abba5',
          500: '#00B8A9', // Main teal
          600: '#009688',
          700: '#00796b',
          800: '#005c4f',
          900: '#003f33',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffddb3',
          200: '#ffc780',
          300: '#ffb14d',
          400: '#ff9b1a',
          500: '#FF8C42', // Main orange
          600: '#e67c38',
          700: '#cc6b2f',
          800: '#b35a26',
          900: '#99491d',
        },
        dark: {
          50: '#d9e6e6',
          100: '#a6c2c2',
          200: '#739d9d',
          300: '#407979',
          400: '#0d5454',
          500: '#1A4D4D', // Main dark teal
          600: '#164141',
          700: '#133535',
          800: '#0f2929',
          900: '#0A2A2A', // Darkest
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      backdropBlur: {
        'glass': '10px',
      }
    },
  },
  plugins: [],
}

