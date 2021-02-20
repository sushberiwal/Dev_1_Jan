// in  a normal function call this points to global object / window object
// in a method call this points to the calling object

//"use strict"; // global object is disabled !!

// name="Steve";

// let obj = {
//     name: "Steve",
//     sayHi : function(){
//         console.log(this);
//         console.log("Inside say Hiii !!!");
//         function callMe(){
//             console.log("Inside call me");
//             console.log(this);
//         }
//         // callMe(); // function call

//         let newCallMe = callMe.bind(obj);
//         newCallMe();
//     }
// }
// obj.sayHi(); // method call

let obj = {
  name: "Steve",
  sayHi: function () {
    console.log(this);
    console.log("Inside say Hiii !!!");
    callMe = () => {
      console.log("Inside call me");
      console.log(this);
    };
    callMe();
  },
};
// obj.sayHi();

// function fun(){
//     console.log(this);
//     console.log("Inside Fun !!!");
// }


fun = ()=>{
    console.log(this);
}
fun();