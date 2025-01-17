/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      // primary: '#7fe1fe',
      primary: '#21aeff',
      second: '#1094e0', //nút phụ,...
      accent: '#009fdc', //nút chính,...
      main: '#1094e0', //chữ chính,,,
      sup: '#21aeff', //chữ phụ...
      blur: '#ffffff18',
      white: '#fff',
      black: '#000',
      green: '#00d552',
      red: '#d50000',
      base: '#f7ffff',
      darkBase: '#2D2D2D',
      darkMain: '#E0E0E0',
      darkPrimary: '#4C3BCF',
      darkSecond: '#4B70F5',
    },
    keyframes: {
      'bounce-up-shot': {
        '0%, 100%': {
          transform: 'translateY(2px)', // Vị trí ban đầu
        },
        '50%': {
          transform: 'translateY(-2px)', // Nhảy thấp (giảm khoảng cách)
        },
      },

      dots: {
        '0%': {
          content: '""',
        },
        '25%': {
          content: '"."',
        },
        '50%': {
          content: '".."',
        },
        '75%': {
          content: '"..."',
        },
        '100%': {
          content: '""',
        },
      },

      shake: {
        '0%': {
          rotate: '0deg',
        },
        '5%': {
          rotate: '-20deg',
        },
        '10%': {
          rotate: '0deg',
        },
        '15%': {
          rotate: '20deg',
        },
        '20%': {
          rotate: '0deg',
        },
        '25%': {
          rotate: '-20deg',
        },
        '30%': {
          rotate: '0deg',
        },
        '35%': {
          rotate: '20deg',
        },
        '40%': {
          rotate: '0deg',
        },
      },

      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'bounce-up-shot': 'bounce-up-shot 0.5s ease-in-out infinite',
      dots: 'dots 2s linear infinite',
      shake: 'shake 1s ease-in-out infinite',
      spin: 'spin 1s linear infinite',
    },
  },
  plugins: [],
};
