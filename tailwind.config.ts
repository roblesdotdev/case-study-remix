import { type Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '90ch',
      },
    },
    extend: {
      colors: {
        canvas: 'hsl(var(--canvas))',
        panel: 'hsl(var(--panel))',
        primary: 'hsl(var(--primary))',
        'on-primary': 'hsl(var(--on-primary))',
        fg: {
          DEFAULT: 'hsl(var(--fg-default))',
          muted: 'hsl(var(--fg-muted))',
          error: 'hsl(var(--fg-error))',
        },
        border: 'hsl(var(--border))',
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
} satisfies Config
