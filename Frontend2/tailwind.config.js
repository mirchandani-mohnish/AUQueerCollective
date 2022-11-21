module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-greys": "#30444E",
        "light-white": "rgba(255,255,255,0.17)",
        "dark-greys":"#22343C",
        "greeny":"#3DD598",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
