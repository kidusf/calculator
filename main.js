function updateDisplay(){
    let num="";
    if(number[0]=="0" && number.length>1){
        number.shift();
    }
    for(let i=0; i<number.length; i++){
        num+=number[i];
    }
    if(num.length>9){
        return;
    }
    display.innerHTML=num;
    for(let j=number.length; j>=0; j--){
        number.pop();
    }
    number.push(num);
    operation.push(num);
}


var nine=document.getElementById("nine");
var eight=document.getElementById("eight");
var seven=document.getElementById("seven");
var six=document.getElementById("six");
var five=document.getElementById("five");
var four=document.getElementById("four");
var three=document.getElementById("three");
var two=document.getElementById("two");
var one=document.getElementById("one");
var zero=document.getElementById("zero");
var display=document.getElementById("answer");
var add=document.getElementById("add");
var subtract=document.getElementById("subtract");
var multiply=document.getElementById("multiply");
var divide=document.getElementById("divide");
var del=document.getElementById("delete");
var clear=document.getElementById("clear");
const number=[];
const operation=[];
one.addEventListener("click", () => {
    number.push("1");
    updateDisplay();
    });
two.addEventListener("click",() => {
    number.push("2");
    updateDisplay();
    });
three.addEventListener("click",() => {
    number.push("3");
    updateDisplay();
    });
four.addEventListener("click", () => {
    number.push("4");
    updateDisplay();
    });
five.addEventListener("click", () => {
    number.push("5");
    updateDisplay();
    });
six.addEventListener("click", () => {
    number.push("6");
    updateDisplay();
    });
seven.addEventListener("click", () => {
    number.push("7");
    updateDisplay();
    });
eight.addEventListener("click",() => {
    number.push("8");
    updateDisplay();
    });
nine.addEventListener("click", () => {
    number.push("9");
    updateDisplay();
    });
zero.addEventListener("click", () => {
    number.push("0");
    updateDisplay();
    });
add.addEventListener("click", ()=>{
    operation.push("+");
});
multiply.addEventListener("click", ()=>{
    operation.push("x");
});
subtract.addEventListener("click", ()=>{
    operation.push("-");
});
divide.addEventListener("click", ()=>{
    operation.push("/");
});

del.addEventListener("click", () =>{
    number[0]=Math.floor(number[0]/10);
    updateDisplay();
});

clear.addEventListener("click", () =>{
    for(let j=number.length; j>=0; j--){
        number.pop();
    }
    updateDisplay();
});