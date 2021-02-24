const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        default: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      }
    },
    
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active','group-hover'],
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px darkgrey"
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px darkgrey"
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px darkgrey"
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px darkgrey"
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px darkgrey"
        },
        ".text-shadow-none": {
          textShadow: "none"
        }
      };

      addUtilities(newUtilities);
    }
  ],
}
