const events = require('events')

const eventEmitter = new events.EventEmitter()

function listener(){
  console.log('Event Happened! Hurray!')
}

eventEmitter.on('change', listener)

console.log('Event is going to be emitted')
eventEmitter.emit('change')
