let buffer = "0";
const screen = document.querySelector(".screen");
let runningTotal = 0;

init();

function init() {
    document
        .querySelector(".calc-buttons")
        .addEventListener("click",(event)=>{
            buttonClick(event.target.innerText);
    });
}

function buttonClick(value) {
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
}

function rerender() {
    screen.innerText = buffer;
}

function handleSymbol(value){
    switch(value) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0";
            }else{
                buffer = buffer.substring(0,buffer.length-1);
            }
            break;
        case "=":
            if(previousOperator === null){
                return ; //needs two numbers to do the maths
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = +runningTotal;
            runningTotal = 0;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value);
            break;
    }
}

function handleMath(value){
    if(buffer === "0"){
        return;//do nothing
    }
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = "0";
}

function flushOperation(intBuffer){
    if(previousOperator === "+"){
        runningTotal += intBuffer;
    }else if(previousOperator === "-"){
        runningTotal -= intBuffer;
    }else if(previousOperator === "×"){
        runningTotal *= intBuffer;
    }else {
        runningTotal /= intBuffer;
    }
}

