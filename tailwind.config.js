/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
      colors: {
        "main-blue": "#0079ff",
        "light-gray": "#697C9A",
        "gray-blue": "#4B6A9B",
        "dark-gray": "#2B3442",
        "gray-white": "#F6F8FF",
        "dark-black": "#141D2F",
        "dark-gray-blue": "#1E2A47",
        "slight-white": "#fefefe",
      },
    },
  },
  plugins: [],
};
