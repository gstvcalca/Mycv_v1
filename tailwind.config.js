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
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "border-color": "var(--border-color)",
        "bg-gradient-start": "var(--bg-gradient-start)",
        "bg-gradient-end": "var(--bg-gradient-end)",
        "bg-modal": "var(--bg-modal)",
      },
      backgroundImage: {
        "diagonal-stripes": "repeating-linear-gradient(-45deg, var(--bg-secondary), var(--bg-secondary) 2px, var(--bg-primary) 2px, var(--bg-primary) 5px)",
        "grid": "url('./bg.png')"
      },
      keyframes: {
        typing: {
          from: {width: '0'},
          to: {width: '100%'}
        },
        blink: {
          '0%, 100%': {borderColor: 'currentColor'},
          '50%': {borderColor: 'transparent'}
        }
      },
      animation: {
        typing: 'typing 4s steps(27) forwards',
        blink: 'blink .3s step-end infinite',
        'typing-blink': 'typing 1.5s steps(27) forwards, blink 1.5s step-end infinite',
      },
    },
    
  },
  plugins: [],
};
