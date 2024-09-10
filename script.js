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
console.log(operate(4,"+",5));
console.log(operate(4,"-",5));
console.log(operate(4,"*",5));
console.log(operate(20,"/",5));