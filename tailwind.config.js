const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      slate: colors.slate,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      yellow: colors.yellow,
      orange: colors.orange,
      tan: "#F9F6F1",
    },
    extend: {},
  },
  plugins: [],
};
