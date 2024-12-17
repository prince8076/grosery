/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "custom-poppins": "Poppins",
      },

      backdropBlur: ["hover", "focus"],
      boxShadow: {
        "custom-shadow": "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        "word-1": "0.25rem",
        "word-2": "0.5rem",
        "word-3": "0.75rem",
        "word-4": "1 rem",
        "word-5": "1.25rem",
      },

      colors: {
        "custom-purple": "#8E0F5D",
        "custom-pink": "#FFDEEF",
        "custom-purple-200": "#6D28D9",

        primary: {
          light: "#FFDEEF",
          dark: "#8E0F5D",
        },
        input: {
          border: "#EEEEEE",
          color: "#F8F8F8",
        },
        account: {
          aside_shadow: "rgba(0, 0, 0, 0.11)",
          full_shadow: "rgba(0, 0, 0, 0.05)",
        },
        delete: {
          bg: "rgba(147, 0, 0, 1)",
        },
      },

      height: {
        "navbar-height-1": "92px",
        "navbar-height-2": "123px",
        "custom-57": "50px",
        "custom-69": "69px",
        "carousal-xl": "538px",
        "door-height": "522px",
        centralvegies: "460px",
        "person-height": "440px",
      },

      width: {
        "logo-top-width": "157px",
        "door-width": "438px",
        "person-width": "500px",
      },

      transform: {
        "flip-horizontal": "scaleX(-1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
