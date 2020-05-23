const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge:[
    './components/**/*.js',
    './pages/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "3px": "3px",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        "130": "30rem",
        "142": "33rem",
        "154": "36rem",
        "166": "39rem",
        "178": "42rem",
        "190": "45rem",
        "202": "48rem"
      },
      minHeight: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        "130": "30rem",
        "142": "33rem",
        "154": "36rem",
        "166": "39rem",
        "178": "42rem",
        "190": "45rem",
        "202": "48rem"
      },
      gridTemplateColumns: {
       '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'odd'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    })
  ]
}