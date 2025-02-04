/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#f8d0d0",
          200: "#f1a1a2",
          300: "#eb7273",
          400: "#e44345",
          500: "#dd1416",
          600: "#b11012",
          700: "#850c0d",
          800: "#580809",
          900: "#2c0404",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555",
        boxShadow: {
          custom: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        },
        borderRadius: {
          custom: "23px",
        },
        colors: {
          shadow: "#000",
        },
        spacing: {
          "shadow-offset-x": "0px",
          "shadow-offset-y": "2px",
        },
        opacity: {
          shadow: "0.1",
        },
      },
    },
  },
  plugins: [],
};
