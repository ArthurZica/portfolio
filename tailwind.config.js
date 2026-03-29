/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#0a0f0a',
          secondary: '#0f1a0f',
        },
        accent: {
          DEFAULT: '#4ade80',
          light:   '#86efac',
          bright:  '#86efac',
        },
        terminal: {
          text:   '#4ade80',
          muted:  '#166534',
          cursor: '#4ade80',
        },
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
