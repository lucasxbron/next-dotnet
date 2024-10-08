/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        neutral: {
          800: "#1F1F1F",
        },
        "add-grey": "#292929",
      },
      screens: {
        // md: "820px",
        // 'md-custom': '820px',
        '3xl': '1820px',
        '4xl': '1920px',
      },
      fontFamily: {
        'sans': ['OpenSans', 'sans-serif'],
        'grotesk': ['SpaceGrotesk', 'serif'],
    },
    },
  },
  plugins: [require('flowbite/plugin')],
};
