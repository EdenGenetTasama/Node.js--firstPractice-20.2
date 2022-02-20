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
Printing1Util14Numbers();

//read from file:

fs.readFile("NumberUntil14.txt" , (error , result)=>{
if(error) throw error;
console.log(result.toString());
})
