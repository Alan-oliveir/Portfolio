/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bg:       '#0D0F14',
        surface:  '#141720',
        surface2: '#1A1F2E',
        border:   '#1E2330',
        border2:  '#252B3B',
        fg:       '#E8EAF0',
        muted:    '#7A8099',
        accent:   '#3B82F6',
        'accent-dim': '#1D4ED8',
        'accent-glow': 'rgba(59,130,246,0.12)',
        green:    '#10B981',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
      keyframes: {
        blink:  { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        pulse2: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
      },
    },
  },
  plugins: [],
}
