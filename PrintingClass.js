const EventsEmitter = require('events');

class PrintingClass extends EventsEmitter{
    constructor(){
        super()
        this.printingNames();
    }

    printingNames(){
        this.on('hello there as numbers' , (num)=>{
            for (let i = 0; i < num; i++) {
                console.log("Hey☺");
            }
        })
    }
    emitPrintingNames(onAction,num){
        this.emit(onAction , num)
    }
}

module.exports = new PrintingClass();