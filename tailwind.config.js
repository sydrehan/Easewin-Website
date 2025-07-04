// tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- FONT FAMILY (Already done, no changes) ---
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
         display: ['Oxanium', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },

      // --- COLORS: ADDING OUR VIBRANT ACCENT ---
      colors: {
        'brand-purple': '#6b46c1',
        'brand-purple-light': '#805ad5',
        'dark-bg': '#121212',
        'light-gray': '#a0aec0',
        'card-bg': '#1a1a1a',

        // ADD THESE NEW GAMING ACCENT COLORS
        'neon-cyan': '#2de2e6',
        'neon-cyan-dark': '#00a8a8', // For shadows and hovers
      },

      // --- BOX SHADOW: CREATING REUSABLE "GLOW" EFFECTS ---
      boxShadow: {
        'neon-purple-glow': '0 0 5px #805ad5, 0 0 10px #805ad5',
        'neon-cyan-glow': '0 0 5px #2de2e6, 0 0 10px #2de2e6',
      },

      // --- ANIMATION & KEYFRAMES ---
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'flicker-in': 'flicker-in 0.8s linear forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
           'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        },
        'flicker-in': {
          '0%': { opacity: '0', boxShadow: 'none' },
          '10%': { opacity: '0', boxShadow: 'none' },
          '10.1%': { opacity: '1', boxShadow: '0 0 5px #2de2e6, 0 0 10px #2de2e6' },
          '10.2%': { opacity: '0', boxShadow: 'none' },
          '20%': { opacity: '0', boxShadow: 'none' },
          '20.1%': { opacity: '1', boxShadow: '0 0 5px #2de2e6, 0 0 10px #2de2e6' },
          '20.6%': { opacity: '0', boxShadow: 'none' },
          '30%': { opacity: '0', boxShadow: 'none' },
          '30.1%': { opacity: '1', boxShadow: '0 0 5px #2de2e6, 0 0 10px #2de2e6' },
          '35.1%': { opacity: '1', boxShadow: '0 0 5px #2de2e6, 0 0 10px #2de2e6' },
          '35.6%': { opacity: '0', boxShadow: 'none' },
          '40%': { opacity: '0', boxShadow: 'none' },
          '40.1%': { opacity: '1', boxShadow: '0 0 5px #2de2e6, 0 0 10px #2de2e6' },
          '100%': { opacity: '1', boxShadow: '0 0 5px #2de2e6, 0 0 10px #2de2e6' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px #2de2e680' },
          '50%': { boxShadow: '0 0 30px #2de2e6' },
        },
      },
    },
  },
  plugins: [],
}