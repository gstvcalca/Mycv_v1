/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter"],
      },
      backgroundImage: {
      stripes:
        "repeating-linear-gradient(-45deg, var(--bg-secondary), var(--bg-secondary) 2px, var(--bg-primary) 2px, var(--bg-primary) 5px)",
    },
      
    },
    
  },
  plugins: [],
};
