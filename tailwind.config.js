export default {
  content: ["./src/**/*.{html,js,jsx}"],
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
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-5px)' },
          '40%': { transform: 'translateX(5px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
        },
        flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        staticShow: 'staticShow 16s linear infinite',
        slideRight: 'slideRight 16s linear infinite',
        marquee: "marquee 15s linear infinite",
        shake: 'shake 0.5s ease',
          flash: 'flash 1s ease-in-out infinite',
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



