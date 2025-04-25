let Mc = document.querySelector("#mc");
let mp = document.querySelector("#mp");
let mm = document.querySelector("#mm");
let mr = document.querySelector("#mr");
let c = document.querySelector("#c");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let remove = document.querySelector("#delete");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let mines = document.querySelector("#mines");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let plus = document.querySelector("#plus");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let equal = document.querySelector("#equal");
let percent = document.querySelector("#percent");
let zero = document.querySelector("#zero");
let point = document.querySelector("#point");

let operation = document.querySelector("#ww");
let result = document.querySelector("#nn");


function more(value){
    operation.textContent += value;    
}

function deleted() {
    operation.textContent = operation.textContent.slice(0, -1);
}

c.onclick = function(){
    result.textContent = "";
    operation.textContent = "";
}

let memory = 0;

mp.onclick = () => {
    memory += result.textContent;
};

mm.onclick = () => {
    memory -= result.textContent; 
};

mr.onclick = () => {
    result.textContent = memory;
};

Mc.onclick = () => {
    memory = 0;
    result.textContent = memory;
};
zero.onclick = () => more("0");
one.onclick = () => more("1");
two.onclick = () => more("2");
three.onclick = () => more("3");
four.onclick = () => more("4");
five.onclick = () => more("5");
six.onclick = () => more("6");
seven.onclick = () => more("7");
eight.onclick = () => more("8");
nine.onclick = () => more("9");
plus.onclick = () => more("+");
multiply.onclick = () => more("x"); 
divide.onclick = () => more("/");
mines.onclick = () => more("-");
point.onclick = () => more(".");
percent.onclick = () => more("/100");
remove.onclick = () => deleted();

equal.onclick = () => {
    try {
        let expression = operation.textContent;
        let res = eval(expression.replace("x", "*"));
        result.textContent = res.toFixed(2);
    } catch (e) {
        result.textContent = "erreur!";
    }
};
let details = document.querySelector("#details");

let contents = document.querySelector(".contents");
let list = document.querySelector(".contents ul");
let listel = document.querySelectorAll(".contents ul li");
details.onclick = function(){
    if(window.innerWidth <= 852){
        if(contents.style.display !== "flex"){
            contents.style.display = "flex";
        }
        else{
            contents.style.display = "none";

        }
    }
}