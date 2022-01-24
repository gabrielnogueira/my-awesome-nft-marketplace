module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-background': "url('/assets/images/background.png')",
        'redeem-background': "url('/assets/images/redeem.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'full': '100%',
      },
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        right: 'right',
        top: 'top',
        negative:'top 10% right',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
      },

      fontFamily: {
        hunter: 'Hunter'
      }
    },
  },
  plugins: [],
};
