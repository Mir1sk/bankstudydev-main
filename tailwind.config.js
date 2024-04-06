/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
      },
      spacing: {
        0.5: '0.12rem',
      },
      colors: {
        white: '#FFF',
        black: '#000',

        green60: '#CAFF33',
        green65: '#D1FF4C',
        green70: '#D8FF66',
        green80: '#ESFF99',

        green90: '#F2FFCC',
        green95: '#F8FFE5',
        green97: '#FBFFF0',
        green99: '#FEFFFA',

        white90: '#E4E4E7',
        white95: '#F1F1F3',
        white97: '#F7F7F8',
        white99: '#FCFCFD',

        gray10: '#191919',
        gray11: '#1C1C1C',
        gray15: '#262626',
        gray20: '#333333',
        gray30: '#4C4C4D',

        gray35: '#59595A',
        gray40: '#656567',
        gray60: '#98989A',
        gray70: '#B3B3B3',
        gray75: '#BFBFBF',
      },
      height: {
        128: '28rem',
        123: '23rem',
        119: '19rem',
      },
      width: {
        119: '19rem',
      },
      screens: {
        'desktbig': '1920px',
        'desktop': '1366px',
        'laptop': '1028px',
        'ipad': '768px',
      },
    },
  },
  plugins: [],
}

