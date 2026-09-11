/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#063B2E',
          deep: '#04281F',
          green: '#0B5D46',
          medium: '#127A5D',
          emerald: '#1A9371',
          lime: '#CFF58A',
          limeHover: '#BDF16A',
          limeLight: '#F2FCE2',
          bg: '#F7FAF8',
          card: '#FFFFFF',
          text: '#10231D',
          muted: '#4B6358',
          border: '#E2ECE7',
          gold: '#E5A93C'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 59, 46, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(6, 59, 46, 0.14)',
        'luxury': '0 20px 50px -12px rgba(6, 59, 46, 0.12)',
        'luxury-lg': '0 30px 60px -15px rgba(6, 59, 46, 0.20)',
        'card': '0 4px 20px -2px rgba(6, 59, 46, 0.05), 0 2px 6px -1px rgba(6, 59, 46, 0.04)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
