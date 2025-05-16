/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#ea2e2e",
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.45)',
        md: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [// custom plugin to generate text-shadow utilities
    function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow');
      const utilities = Object.entries(textShadow).map(([name, value]) => ({
        [`.text-shadow${name === 'DEFAULT' ? '' : `-${name}`}`]: {
          textShadow: value,
        },
      }));
      addUtilities(utilities);
    }],
}