/** Local config so Vite does not inherit parent-folder PostCSS (e.g. Tailwind). */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;