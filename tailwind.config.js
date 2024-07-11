/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #7D8ABC, #304463)', // Red-500 to Orange-500
      },
    },
    colors: {
      // baseColor:"#3e3e3e",
      // activeColor:"#ff6250",
      // highlightBg:"#090b23",
      // actionColor: "#fff",
      borderColor:"#333143",
      backgroundColor:"#181818",
      textColor:"#fff"
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
