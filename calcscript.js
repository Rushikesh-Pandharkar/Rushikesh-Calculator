let buffer = "0";
const screen = document.querySelector(".screen");

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
    
}