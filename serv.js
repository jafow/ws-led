const http = require('http').Server()
const fs = require('fs')
const wss = require('websocket-stream')
const five = require('johnny-five')
const path = require('path')

wss.createServer({server: http.createServer((req, res) => {
    if (req.status === 200) console.log('good')
  }).listen(3000, () => { console.log('listening') }) 
}, handle)

function handle (stream) {
  fs.createReadStream('index.html').pipe(res)
}

const board = new five.Board
board.on('ready', () => {
  console.log('board is on')
})

