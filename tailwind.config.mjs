/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#990000',
          stroke:  '#670000',
          box:     '#F4D7D7',
          parchment: '#F5EFE0',
        },
      },
      fontFamily: {
        serif: ['"Hoefler Text"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
