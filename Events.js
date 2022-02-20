
const EventEmitter = require('events');

class Events extends EventEmitter{
    constructor(){
        super()
        this.listenOn();
    }

    listenOn(){
        this.on('listenToEvent' , ()=>{
            console.log("On listen....");
        })
    }
    listenEmit(){
        this.emit('listenToEvent')
    }
}

module.exports = new Events();