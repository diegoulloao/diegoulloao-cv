const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {}
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
};

module.exports = config;
