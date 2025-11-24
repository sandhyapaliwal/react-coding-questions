// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",  
  //Tailwind applies dark styles only when you add the "dark" class in your code.
  // through class can manually add/remove dark class.
  //mainly use when toggle with button
  theme: {
    extend: {},
  },
  plugins: [],
};
