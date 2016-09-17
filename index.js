#!/usr/bin/env node
var getGravatar = require('get-gravatar')
var temp = require('temp')
var fs = require('fs')
var ascii = require('ascii-images')
var size = require('window-size')
var chalk = require('chalk')

getGravatar('rahatarmanahmed@gmail.com', {size: size.width/2})
.then(img => {
  var path = temp.path({suffix: '.png'})
  fs.writeFileSync(path, img)
  ascii(path, function (asciiImg) {
    console.log(asciiImg)
    console.log()
    console.log(chalk.bold('Rahat Ahmed ') + chalk.grey('<rahatarmanahmed@gmail.com>'))
    console.log(chalk.blue.underline('http://rahatah.me/d'))
  })
})
.catch(err => console.error(err.stack))
