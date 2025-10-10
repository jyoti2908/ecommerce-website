export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        staticShow: {
          '0%': { opacity: '1' },
          '25%': { opacity: '1' },
          '26%': { opacity: '0' }, // fade out
          '100%': { opacity: '0' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '10%': { transform: 'translateX(0%)', opacity: '1' },
          '25%': { transform: 'translateX(0%)', opacity: '1' },
          '35%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        }
      },
      animation: {
        staticShow: 'staticShow 16s linear infinite',
        slideRight: 'slideRight 16s linear infinite',
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      // add 'xl' or '2xl' if you want those too
    },
  },
  plugins: [],
};



