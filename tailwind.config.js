export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          animation: {
            'spell-glow': 'spellGlow 2s ease-in-out infinite',
            'float': 'float 3s ease-in-out infinite',
          },
          keyframes: {
            spellGlow: {
              '0%, 100%': { opacity: 0.3, transform: 'scale(0.9)' },
              '50%': { opacity: 1, transform: 'scale(1.1)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            },
          }
        }
      },
    plugins: [],
  };