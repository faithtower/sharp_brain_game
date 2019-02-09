const   num1Field = document.querySelector("#num1"),
        num2Field = document.querySelector("#num2"),
        num3Field = document.querySelector("#num3"),
        num4Field = document.querySelector("#num4"),
        res1Field = document.querySelector("#res1"),
        res2Field = document.querySelector("#res2"),
        res3Field = document.querySelector("#res3"),
        res4Field = document.querySelector("#res4"),
        uiSign1 = document.querySelector("#sign1"),
        uiSign2 = document.querySelector("#sign2"),
        uiSign3 = document.querySelector("#sign3"),
        uiSign4 = document.querySelector("#sign4"),
        submitBtn = document.querySelector("#submitBtn"),
        shuffleBtn = document.querySelector("#shuffleBtn"),
        message = document.querySelector("#message");

//Array to store the numerical signs
const signs = ["+", "-", "*"];

//Generating four Random numbers
let num1, num2, num3, num4;
let alert = false;
//=========================================================

//initialized function
const init = () => {
    startAnimation();
    sharpBrain();
}

shuffleBtn.addEventListener('click', () => {
    document.location.reload();
});

//SUBMIT PROVIDED ANSWERS
submitBtn.addEventListener('click', ()=>{
    if(num1Field.value == num1 && num3Field.value == num3){
        alert = true;
        displayMessage();
        startAnimation();
        sharpBrain();
    }else{
        alert = false;
        displayMessage();
    }
});

const sharpBrain = () => {
    num1 = Math.floor(Math.random()*9);
    num2 = Math.floor(Math.random()*9);
    num3 = Math.floor(Math.random()*9);
    num4 = Math.floor(Math.random()*9);

    //generating a sign from signs array
    const sign1 = signs[Math.floor(Math.random()*signs.length)];
    const sign2 = signs[Math.floor(Math.random()*signs.length)];
    const sign3 = signs[Math.floor(Math.random()*signs.length)];
    const sign4 = signs[Math.floor(Math.random()*signs.length)];
    //=========================================================

    //populate field with generated numbers
    num1Field.value = '';
    num2Field.value = num2;
    num3Field.value = '';
    num4Field.value = num4;
    
    //Populate results fields
    res1Field.value = eval(num1 + sign1 + num2);
    res2Field.value = eval(num3 + sign2 + num4);
    res3Field.value = eval(num1 + sign3 + num3);
    res4Field.value = eval(num2 + sign4 + num4);

    //populate mathimaticals signs in fields
    uiSign1.textContent = sign1;
    uiSign2.textContent = sign2;
    uiSign3.textContent = sign3;
    uiSign4.textContent = sign4;

    if(alert){}else{
        message.removeAttribute('class'); 
        message.textContent = "";
    }   
}

const displayMessage = () =>{
    message.removeAttribute('class');
    message.classList.add("alert", "py-3", "m-3", "text-center");
    if(alert){
        //Add success alert
        message.classList.add("alert-success");
        message.textContent = "Good Job! You are a critical Thinker";
    }else{
        message.classList.add("alert-danger");
        message.textContent = "Sorry! Try agian";
    }
    
}

const startAnimation = () => {
    //Array to store Animation values
    const animation = [
        "bounce",	    "flash",	        "pulse",	        "rubberBand",
        "shake",	    "headShake",	    "swing",	        "tada",
        "wobble",	    "jello",	        "bounceIn",	        "bounceInDown",
        "bounceInLeft",	"bounceInRight",    "bounceInUp",	    "slideInDown",
        "slideInUp",    "slideInLeft",      "slideInRight",     "heartBeat",
        "fadeIn",	    "fadeInDown",	    "fadeInDownBig",    "fadeInLeft",
        "fadeInLeftBig","fadeInRight",	    "fadeInRightBig",   "fadeInUp",
        "fadeInUpBig",	"zoomInLeft",	    "zoomInRight",	    "zoomInUp",
        "rollIn",	    "flipInX",	        "flipInY"
    ];

    let changeAnimation1 = animation[Math.floor(Math.random()*animation.length)];
    let changeAnimation2 = animation[Math.floor(Math.random()*animation.length)];
    let changeAnimation3 = animation[Math.floor(Math.random()*animation.length)];
    let changeAnimation4 = animation[Math.floor(Math.random()*animation.length)];   

    //Adding Animations to Fields
    num1Field.classList.add("animated", changeAnimation1);
    num2Field.classList.add("animated", changeAnimation2);
    num3Field.classList.add("animated", changeAnimation3);
    num4Field.classList.add("animated", changeAnimation4);
    res1Field.classList.add("animated", changeAnimation1);
    res2Field.classList.add("animated", changeAnimation2);
    res3Field.classList.add("animated", changeAnimation3);
    res4Field.classList.add("animated", changeAnimation4);
}

init();
