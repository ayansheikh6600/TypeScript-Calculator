#!/usr/bin/env node
import inquirer from "inquirer"


let answer = await inquirer.prompt([{
    message: "Please Enter First Number",
    name :"firstNumber",
    type:"number"
},
{
    message: "Please Enter Second Number",
    name :"secondNumber",
    type:"number" 
},{
    message : "Please Choose Operator",
    name :"operator",
    type:"list",
    choices : ["Addition", "Subtraction" , "Division", "Multiplication"]
}])

// console.log(answer);

if(answer.operator === "Addition"){
    console.log(`Your Answer is: ${answer.firstNumber + answer.secondNumber}`)
}else if(answer.operator === "Subtraction"){
    console.log(`Your Answer is: ${answer.firstNumber - answer.secondNumber}`)
}else if(answer.operator === "Division"){
    console.log(`Your Answer is: ${answer.firstNumber / answer.secondNumber}`)
}else if(answer.operator === "Multiplication"){
    console.log(`Your Answer is: ${answer.firstNumber * answer.secondNumber}`)
}
