// function body

function sayHi(fname , sname){
    console.log(fname +" and " + sname + " says Hiii !!!");
    return 10;
}



// function call
// sayHi();

// let val = sayHi();
// console.log(val);


// sayHi("Steve" , "tony");

// we can pass a function into a function

function bigFun(fun){
    console.log("I am a big functioin");
    fun();
    return 10;
}


function smallFun(){
    console.log("I am a small fun !!!");
}


let val = bigFun(smallFun);
console.log(val);



// high order functions => function which accept functions as a parameter are knowns as high order functions.
// callback functions => functions which are passed in a function are known as callback functions











