/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        neutral: "#fef9ef",
        primary: "#ffcb77",
        accent: "#fe6d73",
      },
    },
  },
  plugins: [],
};
