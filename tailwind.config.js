/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      firasans:['fira-sans','sans-serif']
    },
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        Yellow:{
          143:'#FFE333',
          144:'#D6B800'
        },
        Mine:{
          143:'#0f172a'
        }
      },
        gridTemplateColumns: {
          // Custom 3-column layout
          'custom-3': '500px 500px',
          // Custom 4-column layout with equal columns
          'custom-4': 'repeat(4, 1fr)',
          // Custom 5-column layout with specific sizes
          'custom-5': '150px 1fr 2fr 1fr 150px',
        },
        backgroundImage: {
          'hero-pattern': "url('/img/hero-pattern.svg')",
          'footer-texture': "url('/img/footer-texture.png')",

        },


      },
    },
    darkMode: 'class',
    plugins: [],
  }

