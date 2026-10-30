const c = (n) => `rgb(var(--${n}) / <alpha-value>)`
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('bg'), bg2: c('bg2'), surface: c('surface'), ink: c('ink'),
        muted: c('muted'), line: c('line'), brand1: c('b1'), brand2: c('b2'), brand3: c('b3'),
        accent: '#ffb020', ok: '#16a37a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        grad: 'linear-gradient(135deg,#4527b8 0%,#7c3aed 62%,#a24ff5 100%)',
        'grid-lines':
          'linear-gradient(rgb(var(--line)) 1px,transparent 1px),linear-gradient(90deg,rgb(var(--line)) 1px,transparent 1px)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14,26,53,.04),0 10px 30px -12px rgba(45,88,184,.18)',
        glow: '0 20px 50px -15px rgba(76,60,190,.38)',
      },
      keyframes: {
        float: { '50%': { transform: 'translate(30px,40px) scale(1.08)' } },
        bob: { '50%': { transform: 'translateY(-10px)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        shine: { '0%': { transform: 'translateX(-120%)' }, '60%,100%': { transform: 'translateX(220%)' } },
        ping2: { '70%': { boxShadow: '0 0 0 8px transparent' }, '100%': { boxShadow: '0 0 0 0 transparent' } },
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
        bob: 'bob 6s ease-in-out infinite',
        marquee: 'marquee 34s linear infinite',
        dot: 'ping2 2s infinite',
        orbit: 'spin 46s linear infinite',
        'orbit-rev': 'spin 46s linear infinite reverse',
        shine: 'shine 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
