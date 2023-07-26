/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '-sm': {'min': '200px', 'max': '430px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
   
    // colors: {
    //   'chiffon': '#F8F3E6',
    //   'vanilla': '#f3c182',
    //   'buttercup': '#EFAA52',
    //   'rust': '#AB3E16',
    //   'mahogany': '#48120E',
    //   'white': '#FFFFFF',
    //   'red': '	#FF0000'
    // },
    // fontSize: {
    //   '5xl': ['9.375rem', '7rem'],
    //   'logo': ['1.25rem', '0rem']
    // }
  },
  plugins: [],
}

