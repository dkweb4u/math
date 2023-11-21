// level
let levels = document.querySelectorAll(".form input");
let currentLevel = "easy";

// sums
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let mul = document.querySelector(".mul");
let div = document.querySelector(".div");
let square = document.querySelector(".square");

let sum = document.querySelector(".sum");
let SubmitValue = document.querySelector(".SubmitValue");


let value1,value2,value3,currentType,squarenum1,squarenum2;

// values
let v1 = document.querySelector(".v1");
let v2 = document.querySelector(".v2");
let sign = document.querySelector(".sign");



// submition
let submit = document.querySelector(".submit");
let newgame = document.querySelector(".newgame");


// scores

let high = document.querySelector(".high");
let your = document.querySelector(".your");

let highscore,yourscore,titleMain;

let title = document.querySelector(".title");

let closebtn = document.querySelector(".close");
let correctAns = document.querySelector(".correctAns");
let wrongresult = document.querySelector(".wrongresult");



closebtn.onclick = ()=>{
    wrongresult.classList.toggle("hide");
    togglehide();

}


// ============================================ levels =============================================

levels.forEach(level => {
    level.onclick = ()=>{
        if(level.checked){
            currentLevel = level.value;
        }
    }   
});

// ============================================ levels =============================================

function getlevel(){
    switch (currentLevel) {
        case "mid":
            value1 = 500;
            value2 = 20;
            value3 = 10;
            break;
    
        case "hard":
            value1 = 2000;
            value2 = 100;
            value3 = 15;
            break;
    
        default:
            value1 = 100;
            value2 = 10;
            value3 = 4;
            break;
    }
}

// store value

function storage(ccty){

    if(localStorage.getItem(ccty+"high")){
        high.innerText = localStorage.getItem(ccty+"high");
        highscore = localStorage.getItem(ccty+"high");
    }
    else{
        high.innerText = 0;
        highscore = 0;
    }
    
    if(localStorage.getItem(ccty+"your") > 0){
        your.innerText = localStorage.getItem(ccty+"your");
        yourscore = localStorage.getItem(ccty+"your");
    
    }
    else{
        your.innerText = 0;
        yourscore = 0;
    
    }

}



// addition
add.onclick = ()=>{
    togglehide();
    sign.innerText = "+";
    currentType = "add";
    title.innerText = "Addition";
    next(currentType);
    storage(currentType)
}

// Subtraction

sub.onclick = ()=>{
    togglehide();
    sign.innerText = "-";
    currentType = "sub";
    title.innerText = "Subtraction";
    next(currentType);
    storage(currentType)
}

// Multiplication
mul.onclick = ()=>{
    togglehide();
    sign.innerText = "*";
    currentType = "mul";
    title.innerText = "Multiplication";
    next(currentType);
    storage(currentType)
}
// Division
div.onclick = ()=>{
    togglehide();
    sign.innerText = "/";
    currentType = "div";
    title.innerText = "Division";
    next(currentType);
    storage(currentType)
}
// Square root
square.onclick = ()=>{
    togglehide();
    sign.innerText = "";
    currentType = "square";
    title.innerText = "Square root";
    next(currentType);
    storage(currentType)
}

function next(data){
    getlevel();

    switch (data) {
        case "mul":
            v1.innerText = Math.floor(Math.random()*value1);
            v2.innerText = Math.floor(Math.random()*value2);
            break;
        case "div":
            v1.innerText = Math.floor(Math.random()*value1);
            v2.innerText = Math.floor(Math.random()*value2 + 1);
            break;

        case "square":
           
             squarenum1  = Math.floor(Math.random()*value2);
             squarenum2= Math.floor(Math.random()*value3);
             v1.innerHTML = squarenum1+"<sup>"+squarenum2+"</sup>";
             v2.innerText = "";
            break;
    
        default:
            v1.innerText = Math.floor(Math.random()*value1);
            v2.innerText = Math.floor(Math.random()*value1);
            break;
    }



}


function setscore(){
    yourscore++ ;
    your.innerText = yourscore;
    localStorage.setItem(currentType+"your",your.innerText);
}

function removescore(){

    if(localStorage.getItem(currentType+"high") < your.innerText){
        localStorage.setItem(currentType+"high",your.innerText);       
    }

    localStorage.setItem(currentType+"your",0);
 
}

submit.onclick = ()=>{

    if(currentType == "square"){
        if(SubmitValue.value.replaceAll(' ','') == Math.pow(squarenum1,squarenum2)){
            setscore();
            next(currentType);
        }
    
        else{
            removescore();
            correctAns.innerText =  Math.pow(squarenum1,squarenum2);
            wrongresult.classList.toggle("hide");
        }

    }
  
    else{
        if(SubmitValue.value.replaceAll(' ','') == eval(sum.innerText)){
            setscore();
            next(currentType);
        }
    
        else{
            removescore()
            correctAns.innerText = eval(sum.innerText);
            wrongresult.classList.toggle("hide");
        }
    }  
    
    SubmitValue.value ="";
}

// ===================================================================================

let levelbox = document.querySelector(".levels");
let gamebox = document.querySelector(".gameboard");
let mainmenu = document.querySelector(".mainmenu");



mainmenu.onclick = ()=>{
togglehide();
};

function togglehide(){

    levelbox.classList.toggle("hide");
    gamebox.classList.toggle("hide");
   
}

// =====================================================================================================

let levelheightfix = document.querySelector(".levelheightfix");
let gameheightfix = document.querySelector(".gameheightfix");

window.onload = ()=>{
    levelbox.style.height = levelheightfix.offsetHeight + 50+ "px";
    gamebox.style.height = gameheightfix.offsetHeight + 50+  "px";
}
