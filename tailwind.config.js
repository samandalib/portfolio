/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  safelist: [
    'bg-accent',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-bodoni)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#f7f7f7',
          dark: '#262626',
        },
        foreground: {
          light: '#222222',
          dark: '#ffffff',
        },
        accent: {
          light: '#16A34A',
          dark: '#16A34A',
        },
      },
    },
  },
  plugins: [],
}

