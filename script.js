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

function operate (firstNumber,operator,secondNumber){
    if (operator == "+") return add(firstNumber,secondNumber); 
    if (operator == "-") return subtract(firstNumber,secondNumber); 
    if (operator == "*") return multiply(firstNumber,secondNumber); 
    if (operator == "/") return divide(firstNumber,secondNumber); 
}

//number button event listener
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (firstNumber == undefined){
            firstNumber = button.textContent;
            console.log("first number is " + firstNumber);
        }
        else if(secondNumber == undefined){
            secondNumber = button.textContent;
            console.log("second number is " + secondNumber);
        }
    });
});

//operator button event listener
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (operator == undefined){
            operator = button.textContent;
            console.log("operator is " + operator);
        }
    });
});
