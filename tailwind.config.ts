import { type Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
    },
  },
  plugins: [],
} satisfies Config
