function add (a,b){
    return ((a*10)+(b*10))/10;
}
function subtract (a,b){
    return ((a*10)-(b*10))/10;
}
function multiply (a,b){
    return (((a*10)*(b*10))/100);
}
function divide (a,b){
    if(b==0){
        return "Error, can't divide numbers by 0. Clear and start again."
    }
    else{
        return ((a*10)/(b*10))/10;
    }
    
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
            if(button.textContent == "0"){//when number is zero dont convert to num
                firstNumber = firstNumber + button.textContent;
            }
            else{
                firstNumber = Number(firstNumber + button.textContent);
            }
            console.log("first number is " + firstNumber);
            displayElement.textContent = firstNumber;
            
        }
        else if(secondNumber == undefined){
            secondNumber = Number(button.textContent);
            console.log("second number is " + secondNumber);
            displayElement.textContent = secondNumber;
            displayElement.textContent = firstNumber + " " + operator + " " + secondNumber;
        }
        //if secondNumber defined and operator defined, add clicked number to second number string
        else{
            if(button.textContent == "0"){//when number is zero dont convert to num
                secondNumber = secondNumber + button.textContent;
            }
            else{
                secondNumber = Number(secondNumber + button.textContent);
            }
            console.log("second number is " + secondNumber);
            displayElement.textContent = firstNumber + " " + operator + " " + secondNumber;
        }
    });
});

//operator button event listener
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
            operator = button.textContent;
            console.log("operator is " + operator);
            displayElement.textContent = firstNumber + " " + operator;
    });
});

//equals button event listener
let equals = document.querySelector(".equals");
equals.addEventListener("click",()=>{
    if(displayNumber == "Error, can't divide numbers by 0. Clear and start again."){
        displayElement.textContent = displayNumber;
    }
    if(operator != undefined && firstNumber != undefined && firstNumber != undefined){
        //makes sure numbers are not strings (eg if equals pressed after zero)
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        //complete operation
        operate(firstNumber,operator,secondNumber);
        console.log("equals " + displayNumber);
        displayElement.textContent = displayNumber;
    }
    //reset calculator with answer being new first number
    firstNumber = displayNumber;
    secondNumber = undefined;
    operator = undefined;
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
            displayElement.textContent = firstNumber + " " + operator + "" + secondNumber;

        }
        else if(secondNumber % 1 != 0){
        }
        else{
            secondNumber =secondNumber + decimal.textContent;
            console.log("second number is " + secondNumber);
            displayElement.textContent = firstNumber + " " + operator + "" + secondNumber;
        }
    }
});

//backspace button event listener
let back = document.querySelector("#back");
back.addEventListener("click",()=>{
    //if operator undefined, take firstNumber
    if(operator == undefined){
        firstNumber = String(firstNumber);
        if(firstNumber == undefined){}
        else if (firstNumber.length === 1){//if its single digit then undefined and display 0
            firstNumber = undefined;
            displayElement.textContent = 0;
        }
        else{
            //take away last character using slice
            firstNumber = firstNumber.slice(0,firstNumber.length - 1)
            console.log("first number is " + firstNumber);
            displayElement.textContent = firstNumber;
        }

    }
    //else if operator defined but second number not
    else if(operator !== undefined && secondNumber == undefined){
        operator = undefined;
        displayElement.textContent = firstNumber;
    }
    //else secondNumber
    else{
        secondNumber = String(secondNumber);
        if (secondNumber.length === 1){//if its single digit then undefined and display 0
            secondNumber = undefined;
            displayElement.textContent = firstNumber + " " + operator;
        }
        else{
            //take away last character using slice
            secondNumber = secondNumber.slice(0,secondNumber.length - 1)
            console.log("second number is " + secondNumber);
            displayElement.textContent = firstNumber + " " + operator + " " + secondNumber;
        }

    }

});
