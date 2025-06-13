// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
      },


      colors: {
        highly: {
          glow: '#00F0D9',
          accent: '#00D6CB',
          accent2: '#001318',
          border: '#00F79B'
        }
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        slide: 'slide 20s linear infinite',
      }
    }
  },
  plugins: []
}
