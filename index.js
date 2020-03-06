
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const persistence = require('aedes-persistence')()
const aedes = require('aedes')()

const port = process.env.PORT || 8080;

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})