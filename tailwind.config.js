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
          primary:   '#050a05',
          secondary: '#0c130c',
        },
        accent: {
          DEFAULT: '#39d353',
          light:   '#74d988',
          bright:  '#57e470',
        },
        terminal: {
          text:  '#c8f5da',
          muted: '#3d7a56',
        },
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
