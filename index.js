// Moduce Package Code

// setTimeout(function () {
//     console.log('ishga tushdi');
// }, 5000);

// let number = 0;

// setInterval(() => {

//     console.log('number:' , number);
//     number++;
    
// }, 5000);



// const fs = require('fs');


// const data = fs.readFileSync('./input.txt', 'utf8' );
// console.log(data);
// console.log('*********************');



// fs.writeFileSync('./input.txt', `${data} \n\t\t By Gayratjon`);


 
// const new_data = fs.readFileSync('./input.txt', 'utf8' );
// console.log(new_data);



// Moduce Package EXTERNAL

// moment package
// const moment = require('moment');
// // console.log(time);

// setInterval(() => {
//     const time = moment().format();

//     console.log(`hozirgi teal time: ${time}`);
    
// }, 5000);




//==================

// inquirer

// const inquirer = require('inquirer');
// import inquirer from "inquirer";

// inquirer
// .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting! " }])
// .then((answer) => {
//     console.log("man kiritgan raqam qiymati: ", answer.raqam);
// })
// .catch((err) => console.log(err));


// =====================
// validator
// const validator = require("validator");
// import validator from "validator";

// const test = validator.isEmail('foo@bar.com');
// const test = validator.isInt('423');
// const test = validator.isIP('118.235.84.234');

// console.log(test);




// ===============================================================

// UUID
import { v4 as uuidv4 } from 'uuid';
import chalk from "chalk";

const random = uuidv4();

console.log(random);


const log = console.log;

log(chalk.red(random) );






// Moduce Package FILE