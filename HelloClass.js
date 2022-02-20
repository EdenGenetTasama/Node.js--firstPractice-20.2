const EventEmiter = require("events");

class HelloClass extends EventEmiter {
  constructor() {
    super();
    this.onPrintHelloFun();
    this.onPrintWithName();
    this.doNow();
  }

  onPrintHelloFun() {
    this.on("printingHello", () => {
      console.log("Hello there");
    });
  }

  emitPrintHelloFun() {
      this.emit("printingHello")
  }

  onPrintWithName(){
      this.on('print With Name' , (name)=>{
          console.log(`Hello user name: ${name}`);
      })
  }
  emitPrintWithName(){
      this.emit('print With Name', "eden")
  }

  doNow(){
      this.on("get Name" , ()=>{
          console.log("Eden Genet");
      })
  }
  doNowEmit(){
      this.emit("get Name")
  }
}

module.exports = new HelloClass();

