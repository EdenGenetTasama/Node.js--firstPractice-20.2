

const EventEmitter= require('events');
const fs = require('fs');

class ArrayClass extends EventEmitter{
    constructor(){
        super()
        this.arrayOnFun();
    }

    arrayOnFun(){
        this.on('listenEvents' , (array)=>{
            for (let i = 0; i < array.length; i++) {              
                if (array[i] < 18) {
                  fs.writeFile("OnlyOver18.txt" , array[i] , ()=>{})   
                }
            }
        })
    }

    arrayEmitFun(array){
        this.emit("listenEvents" , parseInt(array))
    }
}

module.exports = new ArrayClass();