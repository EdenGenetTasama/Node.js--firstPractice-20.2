// import fs from 'fs';

const fs = require("fs");

// 1 :

const arrayOfNumbers = [];

const Printing1Util14Numbers = () => {
  for (let i = 1; i <= 14; i++) {
    arrayOfNumbers.push(i);
  }
  fs.writeFile("NumberUntil14.txt", `${arrayOfNumbers}`, () => {});
};

// Printing1Util14Numbers();

//2:

const arrayOfNames = ["Eden", "Daniel", "Avi", "Motti", "Chen"];

const PrintingNames = (array) => {
  array.map((name) => {
    console.log(name);
  });
};

// PrintingNames(arrayOfNames);

//3:

const RandomNumbers = [];

const PushRandom = () => {
  for (let i = 0; i < 36; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 2 == 0) {
      RandomNumbers.push(randomNum);
    }
  }
  console.log(RandomNumbers);
};

// PushRandom();

//////////////////////////////////////////////////////////////////////////////////////////////

//write into file;
// Printing1Util14Numbers();

//read from file:

// fs.readFile("NumberUntil14.txt" , (error , result)=>{
// if(error) throw error;
// console.log(result.toString());
// })

//4 :

const Print=()=>{
    const arrayOfNames2 = ["Eden", "Daniel", "Avi", "Motti"];
    fs.writeFile("ArrayNames.txt", arrayOfNames2.toString(), (error) => {
        if (error) throw error;
    });
    fs.readFile("ArrayNames.txt", (error, result) => {
        if (error) throw error;
        const getResult = result.toString().split(',');
        // console.log(getResult);
        getResult.forEach(name =>{
            if(name[0].toLocaleUpperCase() == "A") console.log(name);
        }) 
    }
);
};
// Print();

const RandomArray=[];

const  DivisionInArray=()=>{
    for (let i = 0; RandomArray.length < 12; i++) {
        const randomNumber = Math.floor(Math.random()*100);
        if (randomNumber % 3 ==0) {
            RandomArray.push(randomNumber);
        }
    }

    fs.writeFile('ArrayOfRandomNumbers' ,RandomArray.toString() , (error , result)=>{
        if(error) throw error;
    })
    fs.readFile('ArrayOfRandomNumbers' , (error , result)=>{
        if(error) throw error;
        let arrayNumbers = result.toString().split(',');
        arrayNumbers.forEach(item=>{
            if(parseInt(item) > 50) console.log(item);
        })
    })
}

// DivisionInArray();


//////////////// Events //////////////////////

const myEvent = require('./HelloClass');
/*6-8*/

myEvent.emitPrintHelloFun();
myEvent.emitPrintWithName();

myEvent.doNowEmit();
myEvent.doNowEmit();
myEvent.doNowEmit();

/*9*/

const printingHey = require('./PrintingClass');

printingHey.emitPrintingNames('hello there as numbers' , 6);

//10

const listenToEvent = require('./Events');

//11:
const EventsTwo = require('./EventsTwo');

// EventsTwo.PrintToFileEmit("Eden");

//14:

const EventArray= require('./EventsThree');
const arrayOne = [15,20,30,80,50,44,55,96,99];
EventArray.arrayEmitFun(arrayOne);
