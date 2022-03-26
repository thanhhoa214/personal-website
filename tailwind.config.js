module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: '"Ubuntu Mono"',
      },
      height: {
        main: 'calc(100vh - 70px)'
      },
      colors: {
        navy: {
          50: "#3c4b61",
          100: "#324157",
          200: "#28374d",
          300: "#1e2d43",
          400: "#142339",
          500: "#0a192f",
          600: "#000f25",
          700: "#00051b",
          800: "#000011",
          900: "#000007",
        },
        neon: {
          50: "#96ffff",
          100: "#8cffff",
          200: "#82fff8",
          300: "#78ffee",
          400: "#6effe4",
          500: "#64ffda",
          600: "#5af5d0",
          700: "#50ebc6",
          800: "#46e1bc",
          900: "#3cd7b2",
        },
      },
    },
  },
  plugins: [],
};
