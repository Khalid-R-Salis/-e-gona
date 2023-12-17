/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white_smoke: "#F5F5F5",
        dark_pastel_green: "#49BD44",
        pakistan_green: "#113A10",
        footer_color: '#113A10',
        input_color: '#F5F5F5',
        


      },

      borderColor: {
        black: '#000',
      },
      width: {
        919 : "919px",
        700: "700px",
        1200: "1200px",
      },

      height: {
        700: "700px",
        500: "500px",
      },

      padding:
      {
        
      }
    }, // Existing Tailwind utilities
  },
  plugins: [],
};
