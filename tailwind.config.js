/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter"],
      },
      colors: {
        "text-primary": "rgb(245, 245, 245)",
        "text-secondary": "#b3b3b3",
        "bg-primary": "#2c2c2c",
        "bg-secondary": "rgb(60, 60, 60)",
        "border-color": "#b3b3b3",
        "bg-gradient-start": "#464cf6",
        "bg-gradient-end": "#77ccf4",
        "bg-modal": "rgba(0, 0, 0, 0.8)",
      },
    },
    
  },
  plugins: [],
};
