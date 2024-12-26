module.exports = {
  content: [
    "./index.html", // Include your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
