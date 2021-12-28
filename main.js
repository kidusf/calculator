function updateDisplay(){
    if(number[0]=="0" && number.length>1 && number[1]!="."){
        number=number.slice(1);
    }
    
    if(number.length>10 && number.indexOf(".")==-1){
        return;
    }

    if(number.length>10 && number.indexOf(".")!=-1){
        if(number.indexOf("e")==-1){
            number=number.slice(0, 10);
        }
        else{
            number=0;
        }
    }
    if(number.length==10 && number[number.length-1]=="."){
        number=number.slice(0, -1);
    }
    if(number.length==10 && number.indexOf(".")==-1){
        return;
    }
    display.innerHTML=number;
}

function printExpression(){
    let str="";
    for(let i=0; i<operation.length; i++){
        str+=operation[i];
    }
    console.log(str);
    console.log("size of "+ operation.length);
}

function operate(){
    let b=operation.pop();
    let sign=operation.pop();
    let a=operation.pop();
    b=parseFloat(b);
     a=parseFloat(a);
    let result=0;
    if(sign=="+"){
        result=a+b;
    }
    if(sign=="-"){
        result=a-b;
    }
    if(sign=="x"){
        result=a*b;
        if(Math.floor(result/parseInt(Math.pow(10, 9)))!=0){
            result=Infinity;
        }
    }
    if(sign=="/"){
        if(b!=0){
            result=a/b;
        }
        else{
            result="Undefined";
        }
    }
    console.log(result);
    clearNumber();
    number+=result;
    console.log(number);
    for(let i=operation.length; i>=0; i--){
        operation.pop();
    }
}

function clearNumber(){
   number=0;
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
var decimal=document.getElementById("decimal");
var equals=document.getElementById("equals");

var number="0";
const operation=[];
updateDisplay();
one.addEventListener("click", () => {
    number+="1";
    updateDisplay();
    });
two.addEventListener("click",() => {
    number+="2";
    updateDisplay();
    });
three.addEventListener("click",() => {
    number+="3";
    updateDisplay();
    });
four.addEventListener("click", () => {
    number+="4";
    updateDisplay();
    });
five.addEventListener("click", () => {
    number+="5";
    updateDisplay();
    });
six.addEventListener("click", () => {
    number+="6";
    updateDisplay();
    });
seven.addEventListener("click", () => {
    number+="7";
    updateDisplay();
    });
eight.addEventListener("click",() => {
    number+="8";
    updateDisplay();
    });
nine.addEventListener("click", () => {
    number+="9";
    updateDisplay();
    });
zero.addEventListener("click", () => {
    number+="0";
    updateDisplay();
    });
add.addEventListener("click", ()=>{
    operation.push(display.innerHTML);
    if(operation.length==3){
        operate();
        updateDisplay();
        operation.push(display.innerHTML);
    }
    clearNumber();
    operation.push("+");
    printExpression();
});
multiply.addEventListener("click", ()=>{
    operation.push(display.innerHTML);
    if(operation.length==3){
        operate();
        updateDisplay();
        operation.push(display.innerHTML);
    }
    clearNumber();
    operation.push("x");
    printExpression();
});
subtract.addEventListener("click", ()=>{
    operation.push(display.innerHTML);
    if(operation.length==3){
        operate();
        updateDisplay();
        operation.push(display.innerHTML);
    }
    clearNumber();
    operation.push("-");
    printExpression();
});
divide.addEventListener("click", ()=>{
    operation.push(display.innerHTML);
    if(operation.length==3){
        operate();
        updateDisplay();
        operation.push(display.innerHTML);
    }
    clearNumber();
   operation.push("/");
    printExpression();
});

equals.addEventListener("click", () =>{
    operation.push(display.innerHTML);
    if(operation.length==3){
        operate();
        updateDisplay();
    }
    printExpression();
})
del.addEventListener("click", () =>{
    if(number=="Undefined"){
        display.innerHTML=0;
        return;
    }
    number=number.slice(0, -1);
    if(number[number.length-1]=="."){
        number=number.slice(0, -1);
    }
    if(number.length==0){
       num=display.innerHTML;
       console.log(num);
       num=num.slice(0,-1);
       if(num[num.length-1]=="."){
        num=num.slice(0,-1);
       }
       if(num.length==0){
        display.innerHTML=0;
       }
       else{
        display.innerHTML=num;
       }
       return;
        
    }
    updateDisplay();
});

clear.addEventListener("click", () =>{
    clearNumber();
    updateDisplay();
    for(let i=operation.length; i>=0; i--){
        operation.pop();
    }
});

decimal.addEventListener("click", () =>{
    if(number.indexOf(".")==-1){
        number+="."
    }
    updateDisplay();
})