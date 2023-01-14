const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//escucha cuando sucede un evento
customEmitter.on('response', (data,data2) => {
    console.log(data);
    console.log(data2);
})

//ejecuta determinado evento
customEmitter.emit('response', '150k',['a','b','c'])
