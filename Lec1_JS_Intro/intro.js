// top to down
// left to right

// main function X , import X
// console.log("hello world !!!");

// int , double , float

// data types => Number , String , undefined , boolean , object , null

// int a = 12;
// double a = 23.89;
// boolean flag = true;


// ES6 Syntax => EcmaScript => let ya const variable declaration

// let => block scoped variable

let a = 15;

if(true){
    let a = 10;
    // console.log(a);
}

// console.log(a);

let b = "hello";
let c = 'world';
let d = true;
let e = 12.35;
let f;

// console.log(f);



// const => block scoped variable // 
const pi = 3.14;
// pi = 50; resassignment to a constant variable is not allowed
// console.log(pi);


// arrays => 1d , 2d
let names = [15 , true , false , "Hello world" , 12.56 ,  [ 1 , 2 , 3 , 6, 7, 8 ]  , true  ,1 , 2, 3  ];

// console.log(names[5][3]);
// pop , push , shift , unshift


// objects =>
// key values => keys => unique and values need not to be unique
let obj = {
    name:"Steve",
    place:"Queens",
    movies:["THE First AVenger" , "Winter Soldier"] ,
    skills:["MArtial Arts" , "Taekwondo"],
    "best friend":"BUcky Barnes"
}

// values acces

// dot notation

// console.log(obj.place);


let key = "name";

// console.log(obj.key);

// bracket notation
console.log(   obj[key]  );
console.log(  obj["best friend"]  );
console.log(obj.skills[1]);