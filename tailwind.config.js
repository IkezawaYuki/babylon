module.exports = {
  purge: ['index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false,
  content: [],
  variants: {
    position: ['after'],
    transform: ['after'],
    translate: ['after'],
    inset: ['after'],
    backgroundImage: ['after'],
    gradientColorStops: ['after']
  },
  plugins: [],
}
