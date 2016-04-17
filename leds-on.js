var five = require('johnny-five')
var board = new five.Board

board.on('ready', () => {
  var ledRed = new board.Led(5)
  var ledYellow = new board.Led(6)
})
