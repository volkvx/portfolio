import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#444',
      },
      keyframes: {
        marquee: {
          '0%': { borderColor: '#fff' },
          '25%': { borderColor: '#ccc' },
          '50%': { borderColor: '#999' },
          '75%': { borderColor: '#ccc' },
          '100%': { borderColor: '#fff' },
        },
      },
      animation: {
        marquee: 'marquee 2s linear infinite',
      },
      fontFamily: {
        condensed: ['"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
