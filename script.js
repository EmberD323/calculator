function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}

let firstNumber;
let secondNumber;
let operator;
let displayElement = document.querySelector(".display");
let displayNumber = displayElement.textContent;
console.log(displayNumber);

function operate (firstNumber,operator,secondNumber){
    if (operator == "+") displayNumber = add(firstNumber,secondNumber); 
    if (operator == "-") displayNumber = subtract(firstNumber,secondNumber); 
    if (operator == "*") displayNumber = multiply(firstNumber,secondNumber); 
    if (operator == "/") displayNumber = divide(firstNumber,secondNumber); 
    console.log(displayNumber);
    return displayNumber;
}

//number button event listener
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (firstNumber == undefined){
            firstNumber = Number(button.textContent);
            console.log("first number is " + firstNumber);
            displayElement.textContent = firstNumber;
        }
        //if firstNumber defined but operator isnt, add clicked number to first number string
        else if(firstNumber !== undefined && operator == undefined){
            firstNumber = Number(firstNumber + button.textContent);
            console.log("first number is " + firstNumber);
            displayElement.textContent = firstNumber;
            
        }
        
        else if(secondNumber == undefined){
            secondNumber = Number(button.textContent);
            console.log("second number is " + secondNumber);
            displayElement.textContent = secondNumber;
        }
        //if firstNumber defined but operator isnt, add clicked number to first number string
        else{
            secondNumber = Number(secondNumber + button.textContent);
            console.log("second number is " + secondNumber);
            displayElement.textContent = secondNumber;
            
        }
    });
});

//operator button event listener
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
            operator = button.textContent;
            console.log("operator is " + operator);
    });
});

//equals button event listener
let equals = document.querySelector(".equals");
equals.addEventListener("click",()=>{
    if(operator != undefined && firstNumber != undefined && firstNumber != undefined){
        operate(firstNumber,operator,secondNumber);
        console.log("equals " + displayNumber);
        displayElement.textContent = displayNumber;
        
    }
});

//clear button event listener
let clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
    displayElement.textContent = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
});

//decimal button event listener
let decimal = document.querySelector("#decimal");
decimal.addEventListener("click",()=>{
    if(operator == undefined){//if operator undefined add to firstnumber
        //if theres already one decimal in the number
        if(firstNumber == undefined){
            firstNumber = "0" + decimal.textContent
            console.log("first number is " + firstNumber);
            displayElement.textContent = firstNumber;

        }
        else if(firstNumber % 1 != 0){
        }
        else{
            firstNumber =firstNumber + decimal.textContent;
            console.log("first number is " + firstNumber);
            displayElement.textContent = firstNumber;
        }
    }
    else{
        if(secondNumber == undefined){
            secondNumber = "0" + decimal.textContent
            console.log("second number is " + secondNumber);
            displayElement.textContent = secondNumber;

        }
        else if(secondNumber % 1 != 0){
        }
        else{
            secondNumber =secondNumber + decimal.textContent;
            console.log("second number is " + secondNumber);
            displayElement.textContent = secondNumber;
        }
    }
});
