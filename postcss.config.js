module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'last 5 versions',
        '>0.1%',
        'IE 6-9'
      ]
    })
  ]
}