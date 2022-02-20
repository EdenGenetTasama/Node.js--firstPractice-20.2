const EventsEmitter = require("events");
const fs = require("fs");

class EventsTwo extends EventsEmitter {
  constructor() {
    super();
    this.PrintToFileOn();
  }

  PrintToFileOn() {
    this.on("print to file", (fileName) => {
      fs.writeFile(`${fileName}`, "on Listennnn", () => {});
    });
  }

  PrintToFileEmit(fileName) {
      this.emit("print to file" , fileName)
  }
}

module.exports = new EventsTwo();
